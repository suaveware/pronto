import { Activity, saveActivity } from '$lib/state';
import { DateTime } from 'luxon';
import { addFunction } from '$lib/tick';
import { dexieDb } from '$lib/dexieDb';
import { ACTIVITIES_STATE, RECURRENCE_TYPE } from '$lib/constants';

addFunction(() => {
	dexieDb.activities
		.filter(
			({ state, recurrence }) =>
				state === ACTIVITIES_STATE.WAITING &&
				recurrence?.type &&
				recurrence.type !== RECURRENCE_TYPE.NO_RECURRENCE &&
				(recurrence.nextDate
					? DateTime.fromISO(recurrence.nextDate).startOf('day').diffNow().toMillis() <= 0
					: false)
		)
		.toArray()
		.then(dbActivities => {
			dbActivities.forEach(activity => {
				console.log('Reactivating activity: ', activity);
				saveActivity(
					Activity({
						...activity,
						state: ACTIVITIES_STATE.READY,
					})
				);
			});
		});
});
