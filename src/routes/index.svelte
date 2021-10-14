<script>
	import { goto } from '$app/navigation';
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
		LayoutIcon,
		FeatherIcon,
	} from 'svelte-feather-icons';
	import { base } from '$app/paths';
	import { ACTIVITIES_STATE } from '$lib/constants';
	import { DateTime } from 'luxon';
	import { List } from 'immutable';
	import Separator from '$lib/components/atoms/Separator.svelte';
	import { fade } from 'svelte/transition';
	import { Activity } from '$lib/recordTypes';
	import FabContainer from '$lib/components/atoms/FabContainer.svelte';
	import ThemeColorChanger from '$lib/components/ThemeColorChanger.svelte';
	import { moveArrayItem } from '$lib/helpers';
	import { hold } from '$lib/custom-actions/hold';
	import TopBar from '$lib/components/atoms/TopBar.svelte';

	const flipDurationMs = 100;
	const openSettingsDuration = 500;

	export let preview = false;

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
		if (preview) {
			return;
		}
		goto(`${base}/focus`);
	};

	const handlePlusPressed = () => {
		if (preview) {
			return;
		}
		editingActivity = Activity();
	};

	const handleItemPressed = _id => event => {
		if (preview) {
			return;
		}
		editingActivity = $state.activities.find(activity => activity._id === _id);
	};

	const handleMenuClicked = () => {
		isSettingsOpen = !isSettingsOpen;
	};

	const handleMenuItemClicked = itemName => {
		if (preview) {
			return;
		}
		goto(`${base}/menu/${itemName}`);
	};

	const handleDoneActivitiesHeaderClicked = () => {
		saveConfig($state.config.set('showDoneActivities', !$state.config.showDoneActivities));
	};

	const handleWaitingActivitiesHeaderClicked = () => {
		saveConfig($state.config.set('showWaitingActivities', !$state.config.showWaitingActivities));
	};

	const handleOnDragStart = ({ itemNodeCopy, itemNode }) => {
		itemNodeCopy.style['box-shadow'] = '0px 4px 6px -2px rgba(0,0,0,0.8)';
		itemNodeCopy.style.transform = `${itemNodeCopy.style.transform} scale(1.01, 1.01)`;
		itemNode.style.opacity = '0%';
		scrollContainer.style.overflowY = 'hidden';
	};

	const handleOnDragMove = ({ itemNodeCopy, fromIndex, toIndex }) => {
		itemNodeCopy.style.transform = `${itemNodeCopy.style.transform} scale(1.01, 1.01)`;
		reorderActivities(
			moveArrayItem(
				readyActivities.map(activity => activity.toJS()),
				fromIndex,
				toIndex
			)
		);
	};

	const handleOnDragEnd = ({ itemNode }) => {
		scrollContainer.style.overflowY = 'scroll';
		itemNode.style.opacity = '100%';
	};
</script>

<ThemeColorChanger themeColoredNode={scrollContainer} />

<div
	class="flex flex-col relative items-stretch bg-base-300 text-base-content w-full h-full overflow-y-scroll"
	bind:this={scrollContainer}
>
	<!-- TOP BAR -->
	<TopBar color="base-300">
		<div class="text-2xl">Pronto</div>
		<div on:click={handleMenuClicked} class="cursor-pointer">
			{#if isSettingsOpen}
				<XIcon size="24" />
			{:else}
				<MenuIcon size="24" />
			{/if}
		</div>
	</TopBar>

	<!-- SETTINGS -->
	<div
		class="transition-all ease-in-out duration-500 max-h-screen opacity-100"
		class:hide={!isSettingsOpen}
	>
		{#if isSettingsOpen}
			<div
				class="px-6 py-8 overflow-y-scroll inline-flex gap-4 text-xl flex-col items-stretch w-full"
				style="height: 76vh"
				transition:fade|local={{ duration: openSettingsDuration }}
			>
				<button
					on:click={() => handleMenuItemClicked('themes')}
					class="inline-flex rounded w-full items-center gap-3"
				>
					<span>
						<LayoutIcon size="24" />
					</span>
					<span>Temas</span>
				</button>
				<a
					href="https://docs.google.com/forms/d/e/1FAIpQLSdt5iCVOdCW6jP6HbdckHLx3_AduXTIn44PaUQakkJESkUM2g/viewform?usp=sf_link"
					class="inline-flex rounded w-full items-center gap-3"
				>
					<span>
						<FeatherIcon size="24" />
					</span>
					<span>Me diga sua opinião</span>
				</a>
				<button
					on:click={() => handleMenuItemClicked('about')}
					class="inline-flex rounded w-full items-center gap-3"
				>
					<span>
						<InfoIcon size="24" />
					</span>
					<span>Sobre</span>
				</button>
			</div>
		{/if}
	</div>

	<!-- ACTIVITIES -->
	<div
		class="text-base-content p-6 pt-0 flex-grow transition-all duration-300 flex-col inline-flex gap-2"
		class:overflowhidden={isSettingsOpen}
	>
		<!-- READY ACTIVITIES -->
		{#if readyActivities?.length}
			<div
				class="w-full mb-10 flex-col inline-flex gap-2"
				use:orderableChildren={{
					onStart: handleOnDragStart,
					onMove: handleOnDragMove,
					onEnd: handleOnDragEnd,
				}}
			>
				{#each readyActivities as activity (activity._id)}
					<span
						class="card overflow-visible border-none bg-transparent"
						animate:flip={{ duration: flipDurationMs }}
						use:hold
						let:isDragging
					>
						<ActivityCard on:click={!isDragging && handleItemPressed(activity._id)} {activity} />
					</span>
				{/each}
			</div>
		{:else}
			<span class="text-base-conent">Nenhuma atividade, clique no botão de + para adicionar.</span>
		{/if}

		<!-- WAITING ACTIVITIES -->
		{#if waitingActivities?.length}
			<Separator
				on:click={handleWaitingActivitiesHeaderClicked}
				icon={$state.config.showWaitingActivities ? ChevronDownIcon : ChevronRightIcon}
				title={ACTIVITIES_STATE.WAITING.label}
				class="mt-4 text-base-content"
			/>
		{/if}

		{#if $state.config.showWaitingActivities}
			{#each waitingActivities as activity (activity._id)}
				<span>
					<ActivityCard on:click={handleItemPressed(activity._id)} {activity} />
				</span>
			{/each}
		{/if}

		<!-- DONE ACTIVITIES -->
		{#if doneActivities?.length}
			<Separator
				on:click={handleDoneActivitiesHeaderClicked}
				icon={$state.config.showDoneActivities ? ChevronDownIcon : ChevronRightIcon}
				title={ACTIVITIES_STATE.DONE.label}
				class="mt-4 text-base-content"
			/>
		{/if}

		{#if $state.config.showDoneActivities}
			{#each doneActivities as activity (activity._id)}
				<span>
					<ActivityCard on:click={handleItemPressed(activity._id)} {activity} />
				</span>
			{/each}
		{/if}
	</div>
</div>

<!-- ACTIVITY FORM -->
{#if editingActivity}
	<ActivityForm bind:activity={editingActivity} />
{:else if !isSettingsOpen}
	<FabContainer>
		<Fab
			class="btn-primary"
			on:click={!preview && handlePlusPressed}
			small={!!$state.activities.size}
			icon={PlusIcon}
		/>
		{#if $state.activities.size}
			<Fab class="btn-primary" on:click={handleMaximizePressed} icon={MaximizeIcon} />
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
