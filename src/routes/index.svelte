<script>
	import { goto } from '$app/navigation';
	import { actionsStore, actions } from '$lib/actionsStore';
	import ActionForm from '../lib/ActionForm.svelte';
	import ActionItem from '../lib/ActionItem.svelte';
	import { PlusIcon, MaximizeIcon } from 'svelte-feather-icons';

	console.log('$actionsStore', $actionsStore);

	const handleAdd = ({ detail }) => {
		editingAction = null;
		actions.save(detail);
	};

	const handleCancel = () => {
		editingAction = null;
	};

	const handleMaximizePressed = () => {
		goto('/focus');
	};

	const handlePlusPressed = () => {
		editingAction = { title: '', description: '' };
	};

	const handleActionItemPressed = action => () => {
		editingAction = action;
	};

	let editingAction = null;

	$: {
		console.log('$actionsStore', $actionsStore);
	}

</script>

<svelte:head>
	<link rel='preconnect' href='https://fonts.googleapis.com'>
	<link rel='preconnect' href='https://fonts.gstatic.com' crossorigin>
	<link
		href='https://fonts.googleapis.com/css2?family=PT+Serif:ital,wght@0,400;0,700;1,400;1,700&display=swap'
		rel='stylesheet'>
</svelte:head>


<div class='p-4 flex-col inline-flex gap-2 w-full'>
	{#each $actionsStore as action}
		<ActionItem on:click={handleActionItemPressed(action)} action={action} />
	{/each}
</div>
{#if editingAction}
	<ActionForm
		action={editingAction}
		on:add={handleAdd}
		on:cancel={handleCancel}
	/>
{:else}
	<div
		class='fixed bottom-4 right-4 gap-3 items-center inline-flex flex-col'
	>
		<button
			on:click={handlePlusPressed}
			class='fab'
			class:small={!!$actionsStore.length}
		>
			<PlusIcon size={$actionsStore.length ? '16' : '24'} />
		</button>
		{#if $actionsStore.length}
			<button
				on:click={handleMaximizePressed}
				class='p-4 fab'
			>
				<MaximizeIcon size='24' />
			</button>
		{/if}
	</div>
{/if}

<style>
    .fab {
        @apply p-4 border shadow-md bg-white rounded-full;
    }

		.small {
				@apply p-2;
		}

    :global(html) {
        width: 100%;
        height: 100%;
    }

    :global(body) {
        width: 100%;
        height: 100%;

    }

    :global(main) {
        font-family: Roboto, -apple-system, BlinkMacSystemFont, Segoe UI, Oxygen,
        Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
        font-size: 16px;
        line-height: 1em;
    }
</style>