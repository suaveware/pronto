import { DateTime } from 'luxon';
import { RECURRENCE_TYPE } from '$lib/constants';

export const isClient = () => typeof window !== 'undefined';

export const moveArrayItem = (array, fromIndex, toIndex) => {
	const newArray = [...array];
	const moveItem = newArray[fromIndex];

	// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/splice
	newArray.splice(fromIndex, 1);
	newArray.splice(toIndex, 0, moveItem);

	return newArray;
};

export const moveListItem = (list, fromIndex, toIndex) => {
	const moveItem = list.get(fromIndex);
	const listWithoutMoveItem = list.remove(fromIndex);

	// https://immutable-js.com/docs/v4.0.0/List/#splice()
	return listWithoutMoveItem.splice(toIndex, 0, moveItem);
};

export const calculateNextDate = ({ type, weekdays, monthDays }, minimumDate = DateTime.now()) => {
	switch (type) {
		case RECURRENCE_TYPE.NO_RECURRENCE.key: {
			return '';
		}

		case RECURRENCE_TYPE.EVERY_WEEK_DAYS.key: {
			if (!weekdays.size) {
				return '';
			}

			const fromDate = minimumDate.startOf('day');
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

			const fromDate = minimumDate.startOf('day');
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
