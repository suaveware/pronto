import Dexie from 'dexie';

export const db = new Dexie('pronto');

db.version(2).stores({
	actions: '_id,order',
});
