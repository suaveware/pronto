<script>
	import { ACTIVITIES_STATE } from '$lib/constants';
	import { DateTime } from 'luxon';
	import { SquareIcon } from 'svelte-feather-icons';
	import { completeActivity } from './state';
	import { Activity } from '$lib/recordTypes';

	export let activity;

	const handleCheckBoxClicked = () => {
		completeActivity(Activity(activity));
	};
</script>

<div
	class="w-full p-2 inline-flex bg-white text-blueGray-800 border-l-4 border-blueGray-500 flex-col gap-2 shadow-md border rounded"
	on:click
>
	<div class="inline-flex justify-start gap-2 items-center w-full">
		{#if activity.state === ACTIVITIES_STATE.READY.key}
			<span class="cursor-default" on:click|stopPropagation={handleCheckBoxClicked}>
				<SquareIcon size="24" /></span
			>
		{/if}
		<div>{activity.title}</div>
	</div>

	{#if activity.state === ACTIVITIES_STATE.WAITING.key}
		<p class="text-xs font-light">
			Próxima data: {' '}
			{DateTime.fromISO(activity.recurrence.nextDate)
				.toLocal()
				.toLocaleString(DateTime.DATETIME_SHORT)}
		</p>
	{/if}
</div>

