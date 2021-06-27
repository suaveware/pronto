<script>
	import { goto } from '$app/navigation';
	import { base } from '$app/paths';
	import { actionsStore, actions } from '$lib/actionsStore';
	import { ChevronLeftIcon, CheckIcon } from 'svelte-feather-icons';
	import { DateTime } from 'luxon';
	import { calculateNextDate } from '$lib/checkRecurrentActions';

	let action;
	$: action = $actionsStore[0];

	if (action) {
		actions.save({ ...action, startedAt: DateTime.now().toMillis() });
	}

	const handleBackPressed = () => {
		goto(`${base}/`);
	};

	const handleCheckPressed = () => {
		actions.save({
			...action,
			state: actions.STATE.DONE,
			completedAt: DateTime.now().toMillis(),
			'recurrence.nextDate': calculateNextDate(action.recurrence)
		});
	};
</script>

<svelte:head>
</svelte:head>

<button
	on:click={handleBackPressed}
	class='fixed top-4 left-4'
>
	<ChevronLeftIcon size='24' />
</button>

<div
	class='w-full h-full inline-flex flex-col gap-6 p-4 justify-center items-center'>
	<p class='text-bg'>{action ? action?.title : "You're done!"}</p>
	<p
		class='font-light text-md'>{action ? action?.description : "There's nothing else to do."}</p>
</div>

{#if action}
	<div
		class='fixed bottom-4 right-4 gap-3 items-center inline-flex flex-col'
	>
		<button
			on:click={handleCheckPressed}
			class='p-4 border shadow-md bg-white rounded-full'
		>
			<CheckIcon size='24' />
		</button>
	</div>
{/if}
