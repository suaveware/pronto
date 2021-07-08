<script>
	import { goto } from '$app/navigation';
	import { dndzone, TRIGGERS } from 'svelte-dnd-action';
	import { flip } from 'svelte/animate';
	import { Activity, reorderActivities, state } from '$lib/state';
	import ActivityForm from '$lib/ActivityForm.svelte';
	import ActivityCard from '$lib/ActivityCard.svelte';
	import { longpress } from '$lib/custom-actions/longpress';
	import {
		PlusIcon,
		MaximizeIcon,
		MenuIcon,
		XIcon,
		ToolIcon
	} from 'svelte-feather-icons';
	import { base } from '$app/paths';
	import { ACTIVITIES_STATE } from '$lib/constants';
	import { List } from 'immutable';
	import Separator from '$lib/components/Separator.svelte';

	const flipDurationMs = 100;

	let scrollContainer;
	let isSettingsOpen = false;
	let editingActivity = null;
	let activitiesByState;
	let dndActivities; // Svelte dnd needs mutable stuff

	$: {
		activitiesByState = $state.activities.groupBy(activity => activity.state);
		dndActivities = activitiesByState.get(ACTIVITIES_STATE.READY, List()).toJS();
	}

	const handleMaximizePressed = () => {
		goto(`${base}/focus`);
	};

	const handlePlusPressed = () => {
		editingActivity = Activity();
	};

	const handleItemPressed = _id => () => {
		editingActivity = $state.activities.find(activity => activity._id === _id);
	};

	const handleDnd = ({ detail }) => {
		dndActivities = detail.items;

		// We need to add and remove these classes to prevent scrolling while
		// reordering the activities
		if (detail.info.trigger === TRIGGERS.DRAG_STARTED) {
			scrollContainer.classList.add('overflow-hidden');
			scrollContainer.classList.remove('overflow-y-scroll');
		}
		if (detail.info.trigger.includes('dropped')) {
			scrollContainer.classList.add('overflow-y-scroll');
			scrollContainer.classList.remove('overflow-hidden');
		}
		if (detail.info.trigger === TRIGGERS.DROPPED_INTO_ZONE) {
			reorderActivities(detail.items);
		}
	};

	const handleMenuClicked = () => {
		isSettingsOpen = !isSettingsOpen;
	};
</script>


<svelte:head>
	<title>Pronto</title>
</svelte:head>


<div class='flex flex-col bg-blueGray-600 h-full overflow-hidden'>
	<div
		class='flex justify-between left-0 right-0 top-0 items-center pb-8 px-4 pt-4 text-white rounded-b w-full'>
		<div class='text-2xl'>Pronto</div>
		<div
			on:click={handleMenuClicked}
			class='cursor-pointer'
		>
			{#if isSettingsOpen}
				<XIcon size='24' />
			{:else}
				<MenuIcon size='24' />
			{/if}
		</div>
	</div>

	<div
		class='text-white box-border overflow-hidden transition-all ease-in-out max-h-0 duration-500'
		class:hfull={isSettingsOpen}
	>
		<div
			class='p-8 pt-12 inline-flex animate-pulse flex-col gap-4 w-full items-center'>
			<div class='text-2xl'>Under construction</div>
			<div class='flex justify-center'>
				<ToolIcon strokeWidth='0.5' size='150' />
			</div>
		</div>
	</div>

	<div
		class='p-4 pt-6 relative top-0 transition-all duration-300 overflow-y-scroll flex-col bg-white shadow h-full border-bluGray-400 inline-flex rounded-t-2xl gap-2 w-full relative'
		bind:this={scrollContainer}
	>
		{#if !$state.activities.size}
			<span class='text-blueGray-800'>No activities, click the "+" icon to add more.</span>
		{/if}

		{#if dndActivities.length}
			<div
				class='w-full mb-10 flex-col inline-flex gap-2'
				use:dndzone='{{
					items: dndActivities,
					dragDisabled: isSettingsOpen,
					flipDurationMs,
					customStartEvent: "longpress",
				}}'
				on:consider='{handleDnd}'
				on:finalize='{handleDnd}'
			>
				{#each dndActivities as activity, index (activity._id)}
			<span
				animate:flip='{{ duration: flipDurationMs }}'
				use:longpress
			>
				<ActivityCard
					on:click={handleItemPressed(activity._id)}
					activity={activity}
				/>
			</span>
				{/each}
			</div>
		{/if}

		{#if activitiesByState.get(ACTIVITIES_STATE.WAITING)?.size}
			<Separator title={ACTIVITIES_STATE.WAITING} class='mt-4' />
		{/if}
		{#each activitiesByState.get(ACTIVITIES_STATE.WAITING, List()).toArray() as activity, index (activity._id)}
			<ActivityCard
				on:click={handleItemPressed(activity._id)}
				activity={activity}
			/>
		{/each}

		{#if activitiesByState.get(ACTIVITIES_STATE.DONE)?.size}
			<Separator title={ACTIVITIES_STATE.DONE} class='mt-4' />
		{/if}
		{#each activitiesByState.get(ACTIVITIES_STATE.DONE, List()).toArray() as activity, index (activity._id)}
			<ActivityCard
				on:click={handleItemPressed(activity._id)}
				activity={activity}
			/>
		{/each}
	</div>
</div>

{#if editingActivity}
	<ActivityForm bind:activity={editingActivity} />
{:else}
	<div
		class='fixed bottom-4 text-blueGray-600 right-4 gap-3 items-center inline-flex flex-col'
	>
		<button
			on:click={handlePlusPressed}
			class='fab'
			class:small={!!$state.activities.size}
		>
			<PlusIcon size={$state.activities.size ? '20' : '28'} />
		</button>
		{#if $state.activities.size}
			<button
				on:click={handleMaximizePressed}
				class='fab'
			>
				<MaximizeIcon size='28' />
			</button>
		{/if}
	</div>
{/if}

<style>
    .fab {
        @apply p-5 shadow bg-blueGray-500 text-white rounded-full;
    }

    .small {
        @apply p-2;
    }

    .hfull {
        @apply max-h-screen;
    }

</style>