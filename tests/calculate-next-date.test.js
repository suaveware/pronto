import { Recurrence } from '../src/lib/state';
import { RECURRENCE_TYPE } from '../src/lib/constants';
import { calculateNextDate } from '../src/lib/helpers';
import { DateTime } from 'luxon';

describe('Test calculateNextDate', () => {
	test('No weekdays provided.', () => {
		const recurrence = Recurrence({
			type: RECURRENCE_TYPE.EVERY_WEEK_DAYS.key,
			weekdays: [],
		});

		const nextDate = calculateNextDate(recurrence);

		expect(nextDate).toBe('');
	});

	test('No monthDays provided.', () => {
		const recurrence = Recurrence({
			type: RECURRENCE_TYPE.EVERY_MONTH_DAYS.key,
			monthDays: [],
		});

		const nextDate = calculateNextDate(recurrence);

		expect(nextDate).toBe('');
	});

	test.each([
		[
			{
				recurrence: Recurrence({
					type: RECURRENCE_TYPE.EVERY_WEEK_DAYS.key,
					weekdays: [1, 2, 3, 4, 5, 6, 7],
					nextDate: DateTime.fromObject({ year: 2000, month: 1, day: 1 }),
				}),
				minimumDate: DateTime.fromObject({
					year: 2000,
					month: 1,
					day: 2,
				}),
				expectedDate: DateTime.fromObject({
					year: 2000,
					month: 1,
					day: 3,
				}),
			},
		],
		[
			{
				recurrence: Recurrence({
					type: RECURRENCE_TYPE.EVERY_MONTH_DAYS.key,
					monthDays: [1, 2, 3, 4, 5, 6, 7],
					nextDate: DateTime.fromObject({ year: 2000, month: 1, day: 1 }),
				}),
				minimumDate: DateTime.fromObject({
					year: 2000,
					month: 1,
					day: 2,
				}),
				expectedDate: DateTime.fromObject({
					year: 2000,
					month: 1,
					day: 3,
				}),
			},
		],
	])(
		'Returned date should always be after minimumDate - test case $#: %j',
		({ recurrence, minimumDate, expectedDate }) => {
			const nextDate = DateTime.fromISO(calculateNextDate(recurrence, minimumDate));

			expect(nextDate.isValid).toBe(true);
			expect(nextDate.toISO()).toBe(expectedDate.toISO());
		}
	);
});
