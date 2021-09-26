import { writable } from 'svelte/store';
import { calculateNextDate, isClient } from './helpers';
import { DateTime, Interval } from 'luxon';
import { dexieDb } from '$lib/dexieDb';
import { List, Record } from 'immutable';
import { ACTIVITIES_STATE } from '$lib/constants';
import { Activity, Config, State } from '$lib/recordTypes';

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
const createOperation =
  operationFunction =>
    (...payload) =>
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
  const index = currentState.activities.findIndex(a => a._id === activity._id);
  const newActivity = activity._id
    ? activity
    : activity.merge({
      createdAt: DateTime.utc().toISO(),
      order: currentState.activities.size,
    });
  const newActivities =
    index < 0
      ? currentState.activities.push(newActivity)
      : currentState.activities.set(index, newActivity);
  const newState = currentState.set('activities', newActivities);

  dexieDb.activities.put(newActivity.toJS(), newActivity._id).catch(error => {
    // TODO: Show error message
    console.error('Error on updating activity: ', { activity, error });
    state.set(currentState);
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

export const saveConfig = createOperation((currentState, config) => {
  const newState = currentState.set('config', config);

  Object.keys(config.toJS()).forEach(key => {
    localStorage.setItem(key, config.get(key));
  });

  return newState;
});

export const completeActivity = activity => {
  const nextDate = calculateNextDate(activity.recurrence);

  console.info(`Completing activity with next date: ${nextDate}`, activity);

  saveActivity(
    activity
      .set('state', nextDate ? ACTIVITIES_STATE.WAITING.key : ACTIVITIES_STATE.DONE.key)
      .set('completedAt', DateTime.utc().toISO())
      .setIn(['recurrence', 'nextDate'], nextDate)
      .setIn(['workIntervals'], List())
      .updateIn(['checkList'], items => items.map(item => item.set('checked', false)))
  );
};

const refreshState = async () => {
  const dbActivities = await dexieDb.activities.orderBy('order').toArray();

  state.set(
    State({
      activities: List(dbActivities.map(Activity)),
      config: Config({
        showDoneActivities: localStorage.getItem('showDoneActivities'),
        showWaitingActivities: localStorage.getItem('showWaitingActivities'),
      }),
    })
  );
};

if (isClient()) {
  window.appState = state;
  window.dexieDb = dexieDb;
  window.DateTime = DateTime;
  window.Interval = Interval;
  window.List = List;
  window.Record = Record;
  window.Config = Config;
  window.refreshState = refreshState;

  refreshState();
}
