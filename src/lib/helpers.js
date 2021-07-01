import { DateTime } from 'luxon';
import { RECURRENCE_TYPE } from '$lib/constants';

export const isClient = () => typeof window !== 'undefined';

export const calculateNextDate = ({ type, weekdays, monthDays, nextDate }) => {
	const localNow = DateTime.now();

	// console.log('nextDate', nextDate);
	// console.log('localNow', localNow.toISO());

	switch (type) {
		case RECURRENCE_TYPE.EVERY_WEEK_DAYS: {
			const localNextDate = nextDate && DateTime.fromISO(nextDate).toLocal().startOf('day');
			const fromDate = localNextDate ? localNextDate.startOf('day') : localNow.startOf('day');

			// console.log('fromDate.toISO()', fromDate.toISO());
			// console.log('localNextDate', localNextDate.toISO());

			// If localNextDate is in the future, keep same date
			if (localNextDate && localNextDate.diff(localNow).toMillis() > 0) {
				return nextDate;
			}

			const fromWeekday = fromDate.weekday;
			const nextWeekdays = [...weekdays.map(day => +day), ...weekdays.map(day => +day + 7)].sort(
				(a, b) => a - b
			);
			const nextweekday = nextWeekdays.find(day => day > fromWeekday);

			return fromDate
				.plus({ days: nextweekday - fromWeekday })
				.toUTC()
				.toISO();
		}

		case RECURRENCE_TYPE.EVERY_MONTH_DAYS: {
			const localNextDate = nextDate && DateTime.fromISO(nextDate).toLocal().startOf('day');
			const fromDate = localNextDate ? localNextDate.startOf('day') : localNow.startOf('day');

			// If localNextDate is in the future, keep same date
			if (localNextDate && localNextDate.diff(localNow).toMillis() > 0) {
				return nextDate;
			}

			const fromDay = fromDate.day;
			const nextDays = [
				...monthDays.map(day => +day),
				...monthDays.map(day => +day + fromDay.daysInMonth),
			].sort();
			const nextDay = nextDays.find(day => day > fromDay);

			return fromDate
				.plus({ days: nextDay - fromDay })
				.toUTC()
				.toISO();
		}

		default:
			return '';
	}
};
