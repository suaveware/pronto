<script>
	import { goto } from '$app/navigation';
	import { actionsStore, actions } from '$lib/actionsStore';
	import { ChevronLeftIcon, CheckIcon } from 'svelte-feather-icons';

	let action;
	$: action = $actionsStore[0];
	console.log('action', action);

	const handleBackPressed = () => {
		goto('/');
	};

	const handleCheckPressed = () => {
		actions.save({ ...action, state: actions.STATE.DONE });
	};

	$: {
		console.log('$actionsStore', $actionsStore);
	}

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
	class='w-full h-full inline-flex flex-col gap-6 justify-center items-center'>
	<p class='text-bg'>{action?.title || "You're done!"}</p>
	<p
		class='font-light text-md'>{action?.description || "There's nothing else to do."}</p>
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
