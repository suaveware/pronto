import Dexie from 'dexie';
import { isClient } from '$lib/helpers';

export let dexieDb;

if (isClient()) {
  dexieDb = new Dexie('pronto');

  dexieDb.version(3).stores({
    activities: '_id,order',
  });

  console.log(dexieDb);
  window.dexieDb = dexieDb;
}
