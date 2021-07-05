<script>
	import { ACTIVITIES_STATE } from '$lib/constants';
	import { DateTime } from 'luxon';

	export let activity;
</script>

<div
	class='w-full p-2 inline-flex bg-white flex-col gap-2 shadow-md border rounded'
	on:click
>
	<div class='inline-flex justify-between items-center w-full'>
		<div>{activity.title}</div>
		<div>{activity.state}</div>
	</div>


	{#if activity.state === ACTIVITIES_STATE.WAITING}
		<p class='text-xs font-light'>
			Next date: {' '}
			{DateTime.fromISO(activity.recurrence.nextDate).toLocal().toLocaleString(DateTime.DATETIME_SHORT)}
		</p>
	{/if}
</div>