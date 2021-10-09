import { List, Record } from 'immutable';
import { v4 as uuid } from '@lukeed/uuid';
import { ACTIVITIES_STATE } from '$lib/constants';
import { isClient } from '$lib/helpers';

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
		},
		'Recurrence'
	)({
		...properties,
		weekdays: List(properties.weekdays),
		monthDays: List(properties.monthDays),
	});

/**
 * @param {{
 *   _id: string,
 *   name: string,
 *   checked: boolean,
 * }} properties
 */
export const CheckItem = (properties = {}) =>
	Record({
		_id: '',
		name: '',
		checked: false,
	})({ _id: uuid(), ...properties });

export const Activity = (properties = {}) =>
	Record(
		{
			_id: '',
			title: '',
			description: '',
			order: 0,
			state: ACTIVITIES_STATE.READY.key,
			recurrence: Recurrence(),
			checkList: List(),
			createdAt: '',
			completedAt: '',
			workIntervals: List(),
		},
		'Activity'
	)({
		// We have to be able to overwrite _id when needed
		_id: uuid(),
		...properties,
		recurrence: Recurrence(properties.recurrence),
		checkList: List(properties.checkList?.map?.(CheckItem) || []),
		workIntervals: List(properties.workIntervals || []),
	});

export const Config = (properties = {}) =>
	Record(
		{
			showDoneActivities: false,
			showWaitingActivities: true,
		},
		'Config'
	)({
		...properties,
	});

/**
 * @type {Record.Factory} State
 * @param {{ activities: List<Activity>, config: Config }} state
 */
export const State = Record(
	{
		activities: List(),
		config: Config(),
	},
	'State'
);

// Expose this stuff in case we need them to test
if (isClient()) {
	window.List = List;
	window.Record = Record;
	window.Config = Config;
}
