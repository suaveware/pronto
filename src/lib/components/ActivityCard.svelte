<script>
	import { ACTIVITIES_STATE } from '$lib/constants';
	import { DateTime } from 'luxon';
	import { SquareIcon } from 'svelte-feather-icons';
	import { completeActivity } from '$lib/state';

	export let activity;

	const handleCheckBoxClicked = () => {
		console.log('checkboxclicked');
		console.log('activity', activity);
		completeActivity(activity);
	};
</script>

<div
	class="card w-full px-4 py-3 flex bg-base-100 border-l-4 text-base-content border-primary flex-col space-y-2"
	on:click
>
	<div class="flex space-x-2 items-center">
		{#if activity.state === ACTIVITIES_STATE.READY.key || activity.state === ACTIVITIES_STATE.DONE.key}
			<input
				type="checkbox"
				checked={activity.state === ACTIVITIES_STATE.DONE.key}
				class="checkbox border-2 checkbox-sm checkbox-primary"
				on:click|stopPropagation={handleCheckBoxClicked}
			/>
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
