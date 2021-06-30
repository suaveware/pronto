import Dexie from 'dexie';
import { isClient } from '$lib/helpers';

export let dexieDb;

if (isClient()) {
	dexieDb = new Dexie('pronto');

	dexieDb.version(3).stores({
		actions: '_id,order',
		activities: '_id,order',
	});

	window.dexieDb = dexieDb;
}
