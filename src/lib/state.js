import { writable } from 'svelte/store';
import { calculateNextDate, isClient } from './helpers';
import { v4 as uuid } from '@lukeed/uuid';
import { DateTime } from 'luxon';
import { dexieDb } from '$lib/dexieDb';
import { List, Record } from 'immutable';
import { ACTIVITIES_STATE } from '$lib/constants';

/**
 * @param {{
 *   type: string,
 *   weekdays: Array<Number>,
 *   monthDays: Array<Number>,
 *   nextDate: string,
 * }} properties
 */
export const Recurrence = (properties = {}) =>
	Record(
		{
			type: 'no_recurrence',
			weekdays: List(),
			monthDays: List(),
			nextDate: '',
			...properties,
		},
		'Recurrence'
	)({
		...properties,
		weekdays: List(properties.weekdays),
		monthDays: List(properties.monthDays),
	});

export const CheckItem = (properties = {}) =>
	Record({
		_id: '',
		name: '',
		checked: false,
	})({ ...properties, _id: uuid() });

export const Activity = (properties = {}) =>
	Record(
		{
			_id: '',
			title: '',
			description: '',
			order: 0,
			state: ACTIVITIES_STATE.READY,
			recurrence: Recurrence(),
			checkList: List(),
			createdAt: '',
			completedAt: '',
		},
		'Activity'
	)({
		...properties,
		recurrence: Recurrence(properties.recurrence),
		checkList: List(properties.checkList?.map?.(CheckItem) || []),
	});

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

/**
 * This is a store to represent the entire app state.
 * See https://svelte.dev/docs#writable.
 */
export const state = writable(State());

/**
 * Receives a function and returns a function that expects the currentState and
 * other arguments and should return a new valid state.
 *
 * @param operationFunction
 * @returns {function(...[*]): void}
 */
const createOperation = operationFunction => (...payload) =>
	state.update(currentState => operationFunction(currentState, ...payload));

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
	console.info('Save activity called with ', { currentState, activity });

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

	if (activity._id) {
		dexieDb.activities.update(newActivity._id, newActivity.toJS()).catch(error => {
			// TODO: Show error message
			console.error('Error on updating activity: ', { activity, error });
			state.set(currentState);
		});

		return newState;
	}

	dexieDb.activities.add(newActivity.toJS()).catch(error => {
		if (error) {
			// TODO: Show error message
			console.error('Error on adding activity: ', { activity, error });
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
			console.error('Error on deleting activity: ', { activity, error });
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
		.map(activity => activity.set('order', orderById[activity._id] ?? activity.order))
		.sort((a, b) => a.order - b.order);

	const newState = currentState.set('activities', newActivities);

	dexieDb
		.transaction('rw', dexieDb.activities, async () =>
			newActivities.map(activity =>
				dexieDb.activities.update(activity._id, { order: activity.order })
			)
		)
		.catch(error => {
			console.error('Error on reordering activities: ', {
				activities: currentState.activities,
				newActivities,
				error,
			});
			state.set(currentState);
		});

	return newState;
});

export const completeActivity = activity => {
	const nextDate = calculateNextDate(activity.recurrence);

	console.info(`Completing activity with next date: ${nextDate}`, activity);

	saveActivity(
		activity
			.set('state', nextDate ? ACTIVITIES_STATE.WAITING : ACTIVITIES_STATE.DONE)
			.set('completedAt', DateTime.utc().toISO())
			.setIn(['recurrence', 'nextDate'], nextDate)
			.updateIn(['checkList'], items =>
				items.map(item => ({
					...item,
					checked: false,
				}))
			)
	);
};

const fileParseTime = DateTime.now();
const refreshState = () => {
	const start = DateTime.now();
	return dexieDb.activities
		.orderBy('order')
		.toArray()
		.then(dbActivities => {
			state.set(
				State({
					activities: List(dbActivities.map(Activity)),
				})
			);
			const end = DateTime.now();
			console.log('{start, end}', { start: start.toISO(), end: end.toISO() });
			console.log('start.diffTo(end)', { interval: start.diff(end).toMillis() });
			console.log('fileParseTime.diffTo(end)', {
				sinceFileParse: fileParseTime.diff(end).toMillis(),
			});
		});
};

if (isClient()) {
	window.appState = state;
	window.dexieDb = dexieDb;
	window.DateTime = DateTime;

	refreshState();
}
