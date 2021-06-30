<script>
	import '$lib/tick';
	import '$lib/checkRecurrentActions';
	import { goto } from '$app/navigation';
	import { dndzone, TRIGGERS } from 'svelte-dnd-action';
	import { flip } from 'svelte/animate';
	import { Activity, reorderActivities, state } from '$lib/state';
	import ActivityForm from '$lib/ActivityForm.svelte';
	import ActivityCard from '../lib/ActivityCard.svelte';
	import { longpress } from '$lib/custom_actions/longpress';
	import { PlusIcon, MaximizeIcon } from 'svelte-feather-icons';
	import { base } from '$app/paths';
	import { onMount } from 'svelte';

	const flipDurationMs = 100;

	let main;
	let jsActivities;
	$: jsActivities = $state.activities.toJS();
	let editingActivity = null;

	const handleMaximizePressed = () => {
		goto(`${base}/focus`);
	};

	const handlePlusPressed = () => {
		editingActivity = Activity();
	};

	const handleItemPressed = index => () => {
		editingActivity = $state.activities.get(index);
	};

	function handleDnd({ detail }) {
		jsActivities = detail.items;

		// We need to add and remove these classes to prevent scrolling while
		// reordering the activities
		if (detail.info.trigger === TRIGGERS.DRAG_STARTED) {
			main.classList.add('overflow-hidden');
			main.classList.remove('overflow-y-scroll');
		}
		if (detail.info.trigger.includes('dropped')) {
			main.classList.add('overflow-y-scroll');
			main.classList.remove('overflow-hidden');
		}
		if (detail.info.trigger === TRIGGERS.DROPPED_INTO_ZONE) {
			reorderActivities(detail.items);
		}
	}

	onMount(() => {
		main = document.getElementsByTagName('main')[0];
	});
</script>

<div
	use:dndzone='{{
		items: jsActivities,
	  flipDurationMs,
    customStartEvent: "longpress",
	}}'
	on:consider='{handleDnd}'
	on:finalize='{handleDnd}'
	class='p-4 flex-col inline-flex gap-2 w-full relative'
>
	{#each jsActivities as activity, index (activity._id)}
		<span
			animate:flip='{{ duration: flipDurationMs }}'
			use:longpress
		>
			<ActivityCard
				on:click={handleItemPressed(index)}
				activity={activity}
			/>
		</span>
	{/each}
</div>

{#if editingActivity}
	<ActivityForm bind:activity={editingActivity} />
{:else}
	<div
		class='fixed bottom-4 right-4 gap-3 items-center inline-flex flex-col'
	>
		<button
			on:click={handlePlusPressed}
			class='fab'
			class:small={!!$state.activities.size}
		>
			<PlusIcon size={$state.activities.size ? '16' : '24'} />
		</button>
		{#if $state.activities.size}
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

</style>