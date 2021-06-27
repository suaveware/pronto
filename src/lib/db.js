import Dexie from 'dexie';
import { isClient } from '$lib/helpers';

export let db;

if (isClient()) {
	db = new Dexie('pronto');

	db.version(2).stores({
		actions: '_id,order',
	});

	window.prontoDb = db;
}
