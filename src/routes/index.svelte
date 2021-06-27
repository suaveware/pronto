<script>
	import '$lib/tick';
	import '$lib/checkRecurrentActions';
	import { goto } from '$app/navigation';
	import { dndzone, TRIGGERS } from 'svelte-dnd-action';
	import { flip } from 'svelte/animate';
	import { actionsStore, actions } from '$lib/actionsStore';
	import ActionForm from '../lib/ActionForm.svelte';
	import ActionItem from '../lib/ActionItem.svelte';
	import { longpress } from '$lib/custom_actions/longpress';
	import { PlusIcon, MaximizeIcon } from 'svelte-feather-icons';
	import { base } from '$app/paths';
	import { onMount } from 'svelte';

	const flipDurationMs = 100;

	let main;
	let editingAction = null;

	const handleAdd = ({ detail }) => {
		editingAction = null;
		actions.save(detail);
	};

	const handleCancel = () => {
		editingAction = null;
	};

	const handleMaximizePressed = () => {
		goto(`${base}/focus`);
	};

	const handlePlusPressed = () => {
		editingAction = { title: '', description: '' };
	};

	const handleItemPressed = action => () => {
		editingAction = action;
	};

	function handleDnd({ detail }) {
		$actionsStore = detail.items;

		if (detail.info.trigger === TRIGGERS.DRAG_STARTED) {
			main.classList.add('overflow-hidden');
			main.classList.remove('overflow-y-scroll');
		}
		if (detail.info.trigger.includes('dropped')) {
			main.classList.add('overflow-y-scroll');
			main.classList.remove('overflow-hidden');
		}
		if (detail.info.trigger === TRIGGERS.DROPPED_INTO_ZONE) {
			actions.reorder(detail.items);
		}
	}

	onMount(() => {
		main = document.getElementsByTagName('main')[0];
	});
</script>

<div
	use:dndzone='{{
		items: $actionsStore,
	  flipDurationMs,
    customStartEvent: "longpress",
	}}'
	on:consider='{handleDnd}'
	on:finalize='{handleDnd}'
	class='p-4 flex-col inline-flex gap-2 w-full relative'
>
	{#each $actionsStore as action (action._id)}
		<span
			animate:flip='{{ duration: flipDurationMs }}'
			use:longpress
		>
			<ActionItem on:click={handleItemPressed(action)} action={action} />
		</span>
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
        font-family: Fira Sans, Roboto, -apple-system, BlinkMacSystemFont, Segoe UI, Oxygen,
        Ubuntu, Cantarell, Droid Sans, Helvetica Neue, sans-serif;
        font-size: 16px;
        line-height: 1em;
    }
</style>