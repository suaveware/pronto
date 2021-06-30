import { DateTime } from 'luxon';
import { RECURRENCE_TYPE } from '$lib/constants';

export const isClient = () => typeof window !== 'undefined';

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
			return '';
	}
};
