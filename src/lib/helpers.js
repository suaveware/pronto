import { DateTime } from 'luxon';
import { RECURRENCE_TYPE } from '$lib/constants';

export const isClient = () => typeof window !== 'undefined';

export const calculateNextDate = (
	{ type, weekdays, monthDays, nextDate },
	minimumDate = DateTime.now()
) => {
	switch (type) {
		case RECURRENCE_TYPE.EVERY_WEEK_DAYS.key: {
			if (!weekdays.size) {
				return '';
			}

			const localNextDate = nextDate && DateTime.fromISO(nextDate).toLocal().startOf('day');
			const fromDate = minimumDate.startOf('day');

			// If localNextDate is already after the minimum keep same date
			if (localNextDate && localNextDate > minimumDate) {
				return nextDate;
			}

			const fromWeekday = fromDate.weekday;
			const nextWeekdays = [...weekdays.map(day => +day), ...weekdays.map(day => +day + 7)].sort(
				(a, b) => a - b
			);
			const nextWeekday = nextWeekdays.find(day => day > fromWeekday);

			return fromDate
				.plus({ days: nextWeekday - fromWeekday })
				.toUTC()
				.toISO();
		}

		case RECURRENCE_TYPE.EVERY_MONTH_DAYS.key: {
			if (!monthDays.size) {
				return '';
			}

			const localNextDate = nextDate && DateTime.fromISO(nextDate).toLocal().startOf('day');
			const fromDate = minimumDate.startOf('day');

			// If localNextDate is already after the minimum keep same date
			if (localNextDate && localNextDate > minimumDate) {
				return nextDate;
			}

			const fromDay = fromDate.day;
			const nextDays = [
				...monthDays.map(day => +day),
				...monthDays.map(day => +day + fromDate.daysInMonth),
			].sort();
			const nextDay = nextDays.find(day => day > fromDay);

			return fromDate
				.plus({ days: nextDay - fromDay })
				.toUTC()
				.toISO();
		}

		default:
			console.error(`Returning empty next date. No match for recurrence type "${type}".`);
			return '';
	}
};
