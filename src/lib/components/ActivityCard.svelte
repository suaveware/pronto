<script>
	import { ACTIVITIES_STATE } from '$lib/constants';
	import { DateTime } from 'luxon';
	import { completeActivity, setActivityState } from '$lib/state';

	export let activity;

	const handleCheckBoxClicked = () => {
		switch (activity.state) {
			case ACTIVITIES_STATE.READY.key:
				// Does a little bit more than just changing the activity state
				completeActivity(activity);
				break;

			case ACTIVITIES_STATE.DONE.key:
				setActivityState(activity, ACTIVITIES_STATE.READY.key);
				break;
		}
	};
</script>

<div
	class="card w-full px-4 py-3 flex bg-base-100 text-base-content border-primary flex-col space-y-2"
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
