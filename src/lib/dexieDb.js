import Dexie from 'dexie';
import { isClient } from '$lib/helpers';

export let dexieDb;

if (isClient()) {
	dexieDb = new Dexie('pronto');

	dexieDb.version(4).stores({
		activities: '_id,order',
		config: '_id',
	});

	window.dexieDb = dexieDb;
}
