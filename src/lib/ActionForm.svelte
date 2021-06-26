<script>
	import { TrashIcon } from 'svelte-feather-icons';
	import { actions } from '$lib/actionsStore';
	import { createEventDispatcher } from 'svelte';


	export let action;
	let title = action.title;
	let description = action.description;

	const dispatch = createEventDispatcher();

	const handleTrashPressed = () => {
		actions.remove(action);
		dispatch('cancel')
	};

	console.log('action', action);
</script>

<div
	class='fixed z-50 right-0 left-0 bottom-0 top-0 p-4 inline-flex justify-end flex-col gap-2 bg-white'
>
	{#if action?._id}
		<button
			on:click={handleTrashPressed}
			class='fixed top-4 right-4'
		>
			<TrashIcon size='24' />
		</button>
	{/if}

	<input
		bind:value={title}
		class='w-full border-2 p-1 rounded'
		type='text'
		placeholder='Title'
	/>
	<textarea
		class='w-full h-40 border-2 rounded'
		placeholder='Description text'
		bind:value={description}
	></textarea>

	<div
		class='box-border w-full bottom-2 inline-flex gap-20 justify-center mb-4 mt-4'>
		<button class='form-button' on:click={() => dispatch('cancel')}>
			Cancel
		</button>
		<button
			class='form-button'
			on:click={() => dispatch('add', {...action, title, description})}
		>
			{ action._id ? 'Save' : 'Add' }
		</button>
	</div>
</div>

<style>
    .form-button {
        @apply box-border border w-24 p-2 rounded shadow-sm;
    }
</style>