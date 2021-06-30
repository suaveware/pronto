/*
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
