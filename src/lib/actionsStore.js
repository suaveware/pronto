import { writable } from 'svelte/store';
import { isClient } from './helpers';
import { v4 as uuid } from '@lukeed/uuid';
import { DateTime } from 'luxon';
import { db } from '$lib/db';

const STATE = {
	READY: 'ready',
	DONE: 'done',
};
const RECURRENCE_TYPE = {
	NO_RECURRENCE: 'no_recurrence',
	// ONCE: 'once',
	EVERY_WEEK_DAYS: 'every_week_days',
	EVERY_MONTH_DAYS: 'every_month_days',
	// FIXED_INTERVAL: 'fixed_interval',
};
export const actionsStore = writable([]);

const refreshAction = () =>
	db.actions
		.orderBy('order')
		.filter(({ state }) => state === STATE.READY)
		.toArray()
		.then(dbActions => {
			console.log('dbActions', dbActions);
			actionsStore.set(dbActions);
		});

if (isClient()) {
	// Log current db content
	console.log('db', db);
	db.actions
		.toCollection()
		.toArray()
		.then(result => console.log('actions', result));

	refreshAction();
}

export const actions = isClient() && {
	save: async ({ _id, ...action }) => {
		const actionCount = await db.actions.count();

		return _id
			? db.actions.update(_id, action).then(refreshAction)
			: db.actions
					.add({
						_id: uuid(),
						order: actionCount,
						state: STATE.READY,
						createdAt: DateTime.now().toISO(),
						...action,
					})
					.then(refreshAction);
	},
	remove: ({ _id }) => db.actions.where({ _id }).delete().then(refreshAction),
	reorder: async orderedActions => {
		db.transaction('rw', db.actions, async () =>
			orderedActions.map(({ _id }, index) => db.actions.update(_id, { order: index }))
		).then(refreshAction);
	},
	refresh: refreshAction(),
	STATE,
	RECURRENCE_TYPE,
};
