import { addFunction } from '$lib/tick';
import { db } from '$lib/db';
import { actions } from '$lib/actionsStore';
import { DateTime } from 'luxon';

export const calculateNextDate = ({ type, weekdays, monthDays, nextDate }) => {
	const now = DateTime.now();

	if (nextDate && DateTime.fromMillis(nextDate).diffNow().toMillis() > 0) {
		console.log('RETURNING SAME', {
			nextDate,
			diff: DateTime.fromMillis(nextDate).diffNow().toMillis(),
		});
		return nextDate;
	}

	const fromDate = nextDate ? DateTime.fromMillis(nextDate).startOf('day') : now.startOf('day');

	switch (type) {
		case actions.RECURRENCE_TYPE.EVERY_WEEK_DAYS: {
			const fromWeekday = fromDate.weekday;
			const nextWeekdays = [...weekdays.map(day => +day), ...weekdays.map(day => +day + 7)].sort(
				(a, b) => a - b
			);
			const nextweekday = nextWeekdays.find(day => day > fromWeekday);

			return fromDate.plus({ days: nextweekday - fromWeekday }).toMillis();
		}

		case actions.RECURRENCE_TYPE.EVERY_MONTH_DAYS: {
			const fromDay = fromDate.day;
			const nextDays = [
				...monthDays.map(day => +day),
				...monthDays.map(day => +day + fromDay.daysInMonth),
			].sort();
			const nextDay = nextDays.find(day => day > fromDay);

			return fromDate.plus({ days: nextDay - fromDay }).toMillis();
		}

		default:
			return nextDate;
	}
};

addFunction(() => {
	db.actions
		.orderBy('order')
		.filter(
			({ state, recurrence }) =>
				state === actions.STATE.DONE &&
				recurrence?.type &&
				recurrence.type !== actions.RECURRENCE_TYPE.DISABLED &&
				(recurrence.nextDate ? DateTime.fromMillis(recurrence.nextDate).diffNow() <= 0 : false)
		)
		.toArray()
		.then(dbActions => {
			dbActions.forEach(action => {
				actions
					.save({
						...action,
						state: actions.STATE.READY,
					})
					.then(result => {
						console.log(
							`Reactivating action, next date: ${action.recurrence.nextDate}. Result: `,
							result,
							action
						);
					});
			});
		});
});
