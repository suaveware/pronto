import { addFunction } from '$lib/tick';
import { dexieDb } from '$lib/dexieDb';
import { ACTIVITIES_STATE, RECURRENCE_TYPE, saveActivity } from '$lib/state';
import { DateTime } from 'luxon';

export const calculateNextDate = ({ type, weekdays, monthDays, nextDate }) => {
	const now = DateTime.utc();

	if (nextDate && DateTime.fromISO(nextDate).diffNow().toMillis() > 0) {
		return nextDate;
	}

	const fromDate = nextDate ? DateTime.fromISO(nextDate).startOf('day') : now.startOf('day');

	switch (type) {
		case RECURRENCE_TYPE.EVERY_WEEK_DAYS: {
			const fromWeekday = fromDate.weekday;
			const nextWeekdays = [...weekdays.map(day => +day), ...weekdays.map(day => +day + 7)].sort(
				(a, b) => a - b
			);
			const nextweekday = nextWeekdays.find(day => day > fromWeekday);

			return fromDate.plus({ days: nextweekday - fromWeekday }).toISO();
		}

		case RECURRENCE_TYPE.EVERY_MONTH_DAYS: {
			const fromDay = fromDate.day;
			const nextDays = [
				...monthDays.map(day => +day),
				...monthDays.map(day => +day + fromDay.daysInMonth),
			].sort();
			const nextDay = nextDays.find(day => day > fromDay);

			return fromDate.plus({ days: nextDay - fromDay }).toISO();
		}

		default:
			return nextDate;
	}
};

addFunction(() => {
	dexieDb.activities
		.orderBy('order')
		.filter(
			({ state, recurrence }) =>
				state === ACTIVITIES_STATE.DONE &&
				recurrence?.type &&
				recurrence.type !== RECURRENCE_TYPE.NO_RECURRENCE &&
				(recurrence.nextDate
					? DateTime.fromISO(recurrence.nextDate).diffNow().toMillis() <= 0
					: false)
		)
		.toArray()
		.then(dbActions => {
			dbActions.forEach(activity => {
				saveActivity({
					...activity,
					state: ACTIVITIES_STATE.READY,
				});
			});
		});
});
