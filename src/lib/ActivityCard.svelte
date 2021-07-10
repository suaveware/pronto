<script>
	import { ACTIVITIES_STATE } from '$lib/constants';
	import { DateTime } from 'luxon';

	export let activity;
</script>

<div
	class='w-full p-2 inline-flex bg-white text-blueGray-800 border-l-4 border-blueGray-500 flex-col gap-2 shadow-md border rounded'
	on:click
>
	<div class='inline-flex justify-between gap-1 items-center w-full'>
		<div>{activity.title}</div>
	</div>


	{#if activity.state === ACTIVITIES_STATE.WAITING.key}
		<p class='text-xs font-light'>
			Próxima data: {' '}
			{DateTime.fromISO(activity.recurrence.nextDate).toLocal().toLocaleString(DateTime.DATETIME_SHORT)}
		</p>
	{/if}
</div>