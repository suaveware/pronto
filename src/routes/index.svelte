<script>
	import { goto } from '$app/navigation';
	import { dndzone, TRIGGERS } from 'svelte-dnd-action';
	import { flip } from 'svelte/animate';
	import { reorderActivities, saveConfig, state } from '$lib/state';
	import ActivityForm from '$lib/components/ActivityForm.svelte';
	import ActivityCard from '$lib/components/ActivityCard.svelte';
	import Fab from '$lib/components/atoms/Fab.svelte';
	import { orderableChildren } from '$lib/custom-actions/orderableChildren';
	import {
		PlusIcon,
		MaximizeIcon,
		XIcon,
		MenuIcon,
		InfoIcon,
		ChevronRightIcon,
		ChevronDownIcon,
	} from 'svelte-feather-icons';
	import { base } from '$app/paths';
	import { ACTIVITIES_STATE } from '$lib/constants';
	import { DateTime } from 'luxon';
	import { List } from 'immutable';
	import Separator from '$lib/components/atoms/Separator.svelte';
	import { fade } from 'svelte/transition';
	import { Activity } from '$lib/recordTypes';
	import FabContainer from '$lib/components/atoms/FabContainer.svelte';

	const flipDurationMs = 100;
	const openSettingsDuration = 500;

	let scrollContainer;
	let isSettingsOpen = false;
	let editingActivity = null;
	let readyActivities;
	let waitingActivities;
	let doneActivities;

	$: {
		const activitiesByState = $state.activities.groupBy(activity => activity.state);

		readyActivities = activitiesByState
			.get(ACTIVITIES_STATE.READY.key, List())
			.sort((a, b) => a.order - b.order)
			.toArray();
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

	const handleOnDragStart = ({ itemNodeCopy }) => {
		itemNodeCopy.style['box-shadow'] = '0px 4px 6px -2px rgba(0,0,0,0.8)';
		itemNodeCopy.style.transform = `${itemNodeCopy.style.transform} scale(1.01, 1.01)`;
		scrollContainer.style.overflow = 'hidden';
	};

	const handleOnDragMove = ({ itemNodeCopy }) => {
		itemNodeCopy.style.transform = `${itemNodeCopy.style.transform} scale(1.01, 1.01)`;
	};

	const handleOnDragEnd = ({ itemNodes }) => {
		scrollContainer.style.overflow = 'scroll';
		const newOrder = itemNodes.map(node => ({ _id: node.getAttribute('activityId') }));
		reorderActivities(newOrder);
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
				<MenuIcon size="24" />
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
				<button on:click={handleAboutClicked} class="inline-flex rounded w-full items-center gap-3">
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
		{#if readyActivities?.length}
			<div
				class="w-full mb-10 flex-col inline-flex gap-2"
				use:orderableChildren={{
					onStart: handleOnDragStart,
					onMove: handleOnDragMove,
					onEnd: handleOnDragEnd,
				}}
			>
				{#each readyActivities as activity, index (activity._id)}
					<span
						class="rounded"
						animate:flip={{ duration: flipDurationMs }}
						activityId={activity._id}
					>
						<ActivityCard on:click={handleItemPressed(activity._id)} {activity} />
					</span>
				{/each}
			</div>
		{:else}
			<span class="text-blueGray-800">Nenhuma atividade, clique no botão de + para adicionar.</span>
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
	<FabContainer>
		<Fab on:click={handlePlusPressed} small={!!$state.activities.size} icon={PlusIcon} />
		{#if $state.activities.size}
			<Fab on:click={handleMaximizePressed} icon={MaximizeIcon} />
		{/if}
	</FabContainer>
{/if}

<style>
	.hide {
		@apply max-h-0 opacity-0;
	}

	.overflowhidden {
		@apply overflow-hidden;
	}
</style>
