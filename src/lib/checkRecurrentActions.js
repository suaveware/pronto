import { Activity, saveActivity } from '$lib/state';
import { DateTime } from 'luxon';
import { addFunction } from '$lib/tick';
import { dexieDb } from '$lib/dexieDb';
import { ACTIVITIES_STATE, RECURRENCE_TYPE } from '$lib/constants';

// This function is separated this way because I was planning to write some
// When there is any bugs in this logic I'll do it.
const shouldReactivate = ({ state, recurrence }) =>
	state === ACTIVITIES_STATE.WAITING.key &&
	recurrence?.type &&
	recurrence.type !== RECURRENCE_TYPE.NO_RECURRENCE.key &&
	(recurrence.nextDate ? DateTime.now() >= DateTime.fromISO(recurrence.nextDate) : false);

addFunction(() => {
	dexieDb.activities
		.filter(shouldReactivate)
		.toArray()
		.then(dbActivities => {
			dbActivities.forEach(activity => {
				console.info('Reactivating activity: ', activity);
				saveActivity(
					Activity({
						...activity,
						state: ACTIVITIES_STATE.READY.key,
					})
				);
			});
		});
});
