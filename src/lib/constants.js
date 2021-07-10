/*
 * Helper constant to access the possible values of a activity state
 * @type {{READY: ('ready'), DONE: ('done'), WAITING: ('waiting')}}
 */
export const ACTIVITIES_STATE = {
	READY: {
		key: 'ready',
		label: 'Próximo',
	},
	DONE: {
		key: 'done',
		label: 'Finalizado',
	},
	WAITING: {
		key: 'waiting',
		label: 'Aguardando',
	},
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
	NO_RECURRENCE: {
		key: 'no_recurrence',
		label: 'Sem recorrência',
	},
	// ONCE: 'once',
	EVERY_WEEK_DAYS: {
		key: 'every_week_days',
		label: 'Por dias da semana',
	},
	EVERY_MONTH_DAYS: {
		key: 'every_month_days',
		label: 'Por dias do mês',
	},
	// FIXED_INTERVAL: 'fixed_interval',
};
