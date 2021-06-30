import { writable } from 'svelte/store';
import { isClient } from './helpers';
import { v4 as uuid } from '@lukeed/uuid';
import { DateTime } from 'luxon';
import { dexieDb } from '$lib/dexieDb';
import { List, Record } from 'immutable';

/**
 * Helper constant to access the possible values of a activity state
 * @type {{READY: ('ready'), DONE: ('done'), WAITING: ('waiting')}}
 */
export const ACTIVITIES_STATE = {
	READY: 'ready',
	DONE: 'done',
	WAITING: 'waiting',
};

/**
 * Helper constant to access the possible values of a recurrence type
 * @type {{
 *   EVERY_MONTH_DAYS: ('every_month_days'),
 *   NO_RECURRENCE: ('no_recurrence'),
 *   EVERY_WEEK_DAYS: ('every_week_days')
 * }}
 */

export const RECURRENCE_TYPE = {
	NO_RECURRENCE: 'no_recurrence',
	// ONCE: 'once',
	EVERY_WEEK_DAYS: 'every_week_days',
	EVERY_MONTH_DAYS: 'every_month_days',
	// FIXED_INTERVAL: 'fixed_interval',
};

/**
 * @type {Record.Factory} Recurrence
 * @param {{
 *   type: string,
 *   weekDays: List<Number>,
 *   monthDays: List<Number>,
 *   nextDate: string,
 * }} recurrence
 */
export const Recurrence = Record(
	{
		type: 'no_recurrence',
		weekDays: List(),
		monthDays: List(),
		nextDate: '',
	},
	'Recurrence'
);

export const Activity = Record(
	{
		_id: '',
		title: '',
		description: '',
		order: 0,
		state: ACTIVITIES_STATE.READY,
		recurrence: Recurrence(),
		createdAt: '',
		completedAt: '',
	},
	'Activity'
);

/**
 * @type {Record.Factory} State
 * @param {{ activities: List<Activity> }} state
 */
const State = Record(
	{
		activities: List(),
	},
	'State'
);

const refreshState = () =>
	dexieDb.activities
		.orderBy('order')
		.toArray()
		.then(dbActivities => {
			state.set(State({ activities: List(dbActivities.map(Activity)) }));
		});

/**
 * This is a store to represent the entire app state.
 * See https://svelte.dev/docs#writable.
 * @type {writable<State>}
 */
export const state = writable(State());
console.log('state', state);

/**
 * Receives a function and returns a function that expects the currentState and
 * other arguments and should return a new valid state.
 *
 * @param operationFunction
 * @returns {function(...[*]): void}
 */
const createOperation = operationFunction => (...payload) =>
	state.update(currentState => {
		const newState = operationFunction(currentState, ...payload);

		console.log('newState', newState);

		return newState;
	});

/**
 * OPERATIONS
 *
 * Operations are functions that takes the current state and return another
 * valid state. They also try to commit the new state to the database and
 * rollback in case of failure.
 */

/**
 * @param {State} currentState
 * @param {Object} activity
 */
export const saveActivity = createOperation((currentState, activity) => {
	console.log('Save activity called with ', { currentState, activity });

	const index = currentState.activities.findIndex(a => a._id === activity._id);
	const newActivity = activity._id
		? activity
		: activity.merge({
				_id: uuid(),
				createdAt: DateTime.utc().toISO(),
				order: currentState.activities.size,
		  });
	const newActivities =
		index < 0
			? currentState.activities.push(newActivity)
			: currentState.activities.set(index, newActivity);
	const newState = currentState.set('activities', newActivities);
	console.log('index', index);
	console.log('newActivities', newActivities);

	if (activity._id) {
		dexieDb.activities.update(newActivity._id, newActivity.toJS()).catch(error => {
			// TODO: Show error message
			console.error(error);
			state.set(currentState);
		});

		return newState;
	}

	dexieDb.activities.add(newActivity.toJS()).catch(error => {
		if (error) {
			// TODO: Show error message
			console.error(error);
			state.set(currentState);
		}
	});

	return newState;
});

/**
 * @param {State} currentState
 * @param {Object} activity
 */
export const removeActivity = createOperation((currentState, activity) => {
	const index = currentState.activities.findIndex(a => a._id === activity._id);
	const { _id } = currentState.activities.get(index);
	const newState = currentState.update('activities', activities => activities.delete(index));

	dexieDb.activities
		.where({ _id })
		.delete()
		.catch(error => {
			// TODO: show error message
			console.error(error);
			state.set(currentState);
		});

	return newState;
});

/**
 * @param {State} currentState
 * @param {Array<{_id: string}>} newOrder
 */
export const reorderActivities = createOperation((currentState, newOrder) => {
	const orderById = newOrder.reduce(
		(acc, { _id }, index) => ({
			...acc,
			[_id]: index,
		}),
		{}
	);
	const newActivities = currentState.activities
		.map(activity => activity.set('order', orderById[activity._id]))
		.sort((a, b) => a.order - b.order);

	console.log('new order', newActivities.map(a => a.title).toJS());

	const newState = currentState.set('activities', newActivities);

	dexieDb
		.transaction('rw', dexieDb.activities, async () =>
			newActivities.map(activity =>
				dexieDb.activities.update(activity._id, { order: activity.order })
			)
		)
		.catch(error => {
			console.error(error);
			state.set(currentState);
		});

	return newState;
});

if (isClient()) {
	window.appState = state;
	window.dexieDb = dexieDb;

	// Log current db content
	refreshState();
}
