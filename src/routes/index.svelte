<script>
	import { goto } from '$app/navigation';
	import { dndzone, TRIGGERS } from 'svelte-dnd-action';
	import { flip } from 'svelte/animate';
	import { reorderActivities, saveConfig, state } from '$lib/state';
	import ActivityForm from '$lib/ActivityForm.svelte';
	import ActivityCard from '$lib/ActivityCard.svelte';
	import { longpress } from '$lib/custom-actions/longpress';
	import {
		PlusIcon,
		MaximizeIcon,
		XIcon,
		InfoIcon,
		ChevronRightIcon,
		ChevronDownIcon,
	} from 'svelte-feather-icons';
	import Checkbox from '$lib/components/atoms/Checkbox.svelte';
	import { base } from '$app/paths';
	import { ACTIVITIES_STATE } from '$lib/constants';
	import { DateTime } from 'luxon';
	import { List } from 'immutable';
	import Separator from '$lib/components/Separator.svelte';
	import { fade } from 'svelte/transition';
	import { Activity } from '$lib/recordTypes';

	const flipDurationMs = 100;
	const openSettingsDuration = 500;

	let scrollContainer;
	let isSettingsOpen = false;
	let editingActivity = null;
	let activitiesByState;
	let dndActivities; // Svelte dnd needs mutable stuff
	let waitingActivities;
	let doneActivities;

	console.log('$state.config.showDoneActivities', $state.config.showDoneActivities);

	$: {
		activitiesByState = $state.activities.groupBy(activity => activity.state);
		dndActivities = activitiesByState.get(ACTIVITIES_STATE.READY.key, List()).toJS();
		waitingActivities = activitiesByState
			.get(ACTIVITIES_STATE.WAITING.key, List())
			.sort(
				(a, b) =>
					DateTime.fromISO(a.recurrence.nextDate).toMillis() -
					DateTime.fromISO(b.recurrence.nextDate).toMillis()
			)
			.toArray();
		doneActivities = activitiesByState
			.get(ACTIVITIES_STATE.DONE.key, List())
			.sort(
				(a, b) =>
					DateTime.fromISO(b.completedAt).toMillis() - DateTime.fromISO(a.completedAt).toMillis()
			)
			.toArray();
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

	const handleAboutClicked = () => {
		goto(`${base}/menu/about`);
	};

	const handleDoneActivitiesHeaderClicked = () => {
		saveConfig($state.config.set('showDoneActivities', !$state.config.showDoneActivities));
	};

	const handleWaitingActivitiesHeaderClicked = () => {
		saveConfig($state.config.set('showWaitingActivities', !$state.config.showWaitingActivities));
	};
</script>

<svelte:head>
	<title>Pronto</title>
</svelte:head>

<div class="flex flex-col items-stretch bg-blueGray-600 h-full overflow-hidden">
	<div class="flex justify-between items-center pb-8 px-4 pt-4 text-white rounded-b w-full">
		<div class="text-2xl">Pronto</div>
		<div on:click={handleMenuClicked} class="cursor-pointer">
			{#if isSettingsOpen}
				<XIcon size="24" />
			{:else}
				<InfoIcon size="24" />
			{/if}
		</div>
	</div>

	<div
		class="transition-all ease-in-out duration-500 max-h-screen opacity-100"
		class:hide={!isSettingsOpen}
	>
		{#if isSettingsOpen}
			<div
				class="text-white px-6 py-8 overflow-y-scroll inline-flex gap-4 text-xl flex-col items-stretch w-full"
				style="height: 76vh"
				transition:fade|local={{ duration: openSettingsDuration }}
			>
				<button
					on:click={handleAboutClicked}
					class="inline-flex rounded w-full w-full items-center gap-3"
				>
					<span>
						<InfoIcon size="24" />
					</span>
					<span class="">Sobre</span>
				</button>
			</div>
		{/if}
	</div>

	<div
		class="p-4 pt-6 flex-grow transition-all duration-300 overflow-y-scroll flex-col bg-white shadow border-bluGray-400 inline-flex rounded-t-2xl gap-2"
		class:overflowhidden={isSettingsOpen}
		bind:this={scrollContainer}
	>
		{#if !$state.activities.size}
			<span class="text-blueGray-800">Nenhuma atividade, clique no botão de + para adicionar.</span>
		{/if}

		{#if dndActivities.length}
			<div
				class="w-full mb-10 flex-col inline-flex gap-2"
				use:dndzone={{
					items: dndActivities,
					dragDisabled: isSettingsOpen,
					flipDurationMs,
					customStartEvent: 'longpress',
				}}
				on:consider={handleDnd}
				on:finalize={handleDnd}
			>
				{#each dndActivities as activity, index (activity._id)}
					<span animate:flip={{ duration: flipDurationMs }} use:longpress>
						<ActivityCard on:click={handleItemPressed(activity._id)} {activity} />
					</span>
				{/each}
			</div>
		{/if}

		{#if waitingActivities?.length}
			<Separator
				on:click={handleWaitingActivitiesHeaderClicked}
				icon={$state.config.showWaitingActivities ? ChevronDownIcon : ChevronRightIcon}
				title={ACTIVITIES_STATE.WAITING.label}
				class="mt-4"
			/>
		{/if}

		{#if $state.config.showWaitingActivities}
			{#each waitingActivities as activity, index (activity._id)}
				<ActivityCard on:click={handleItemPressed(activity._id)} {activity} />
			{/each}
		{/if}

		{#if doneActivities?.length}
			<Separator
				on:click={handleDoneActivitiesHeaderClicked}
				icon={$state.config.showDoneActivities ? ChevronDownIcon : ChevronRightIcon}
				title={ACTIVITIES_STATE.DONE.label}
				class="mt-4"
			/>
			{#if $state.config.showDoneActivities}
				{#each doneActivities as activity, index (activity._id)}
					<ActivityCard on:click={handleItemPressed(activity._id)} {activity} />
				{/each}
			{/if}
		{/if}
	</div>
</div>

{#if editingActivity}
	<ActivityForm bind:activity={editingActivity} />
{:else if !isSettingsOpen}
	<div class="fixed bottom-4 text-blueGray-600 right-4 gap-3 items-center inline-flex flex-col">
		<button on:click={handlePlusPressed} class="fab" class:small={!!$state.activities.size}>
			<PlusIcon size={$state.activities.size ? '20' : '28'} />
		</button>
		{#if $state.activities.size}
			<button on:click={handleMaximizePressed} class="fab">
				<MaximizeIcon size="28" />
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

	.hide {
		@apply max-h-0 opacity-0;
	}

	.overflowhidden {
		@apply overflow-hidden;
	}
</style>
