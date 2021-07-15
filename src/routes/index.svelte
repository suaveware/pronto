<script>
	import { goto } from '$app/navigation';
	import { dndzone, TRIGGERS } from 'svelte-dnd-action';
	import { flip } from 'svelte/animate';
	import { Activity, reorderActivities, state } from '$lib/state';
	import ActivityForm from '$lib/ActivityForm.svelte';
	import ActivityCard from '$lib/ActivityCard.svelte';
	import { longpress } from '$lib/custom-actions/longpress';
	import { PlusIcon, MaximizeIcon, XIcon, InfoIcon, ChevronRightIcon } from 'svelte-feather-icons';
	import { base } from '$app/paths';
	import { ACTIVITIES_STATE } from '$lib/constants';
	import { DateTime } from 'luxon';
	import { List } from 'immutable';
	import Separator from '$lib/components/Separator.svelte';
	import { version } from '/package.json';
	import { fade } from 'svelte/transition';

	const flipDurationMs = 100;
	const openSettingsDuration = 500;

	let scrollContainer;
	let isSettingsOpen = false;
	let editingActivity = null;
	let activitiesByState;
	let dndActivities; // Svelte dnd needs mutable stuff
	let waitingActivities;

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
				class="text-white px-4 py-8 overflow-y-scroll inline-flex gap-2 text-xl flex-col items-stretch w-full"
				style="height: 76vh"
				transition:fade={{ duration: openSettingsDuration }}
			>
				{#if false}
					This is how the options will look like once we have use for them
					<button class="inline-flex rounded px-2 w-full w-full items-center gap-3">
						<span>
							<InfoIcon size="24" />
						</span>
						<span class="">Sobre</span>
						<span class="ml-auto">
							<ChevronRightIcon size="24" />
						</span>
					</button>
				{/if}

				<div class="inline-flex flex-col items-center pt-4 gap-2 w-full">
					<p>by Suaveware</p>
					<p class="text-base text-justify">
						Este aplicativo é de código livre sob a licença GPL-3 e seu código fonte está disponível
						neste
						<a class="underline" href="https://github.com/luizcarlos1405/pronto">
							repositório no Github
						</a>
						.
					</p>
					<p class="text-base text-justify">
						Distribuído como <i>progressive web app</i> (PWA) através do endereço:
					</p>
					<a class="underline text-base w-full" href="https://pronto.suaveware.dev">
						https://pronto.suaveware.dev
					</a>
					<Separator title="Contato" class="text-white mt-4" />
					<div class="inline-flex text-base w-full flex-col gap-2">
						<p>Email: luizcarlos1405@suaveware.dev</p>
						<p>Twitter: @semmilho</p>
						<p>YouTube: RSensato</p>
						<p>TikTok: @RSensato</p>
					</div>

					<Separator title="Versão" class="text-white mt-4" />
					<div class="text-sm">
						{version}
					</div>
				</div>
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

		{#if activitiesByState.get(ACTIVITIES_STATE.WAITING.key)?.size}
			<Separator title={ACTIVITIES_STATE.WAITING.label} class="mt-4" />
		{/if}
		{#each waitingActivities as activity, index (activity._id)}
			<ActivityCard on:click={handleItemPressed(activity._id)} {activity} />
		{/each}

		{#if activitiesByState.get(ACTIVITIES_STATE.DONE.key)?.size}
			<Separator title={ACTIVITIES_STATE.DONE.label} class="mt-4" />
		{/if}
		{#each activitiesByState
			.get(ACTIVITIES_STATE.DONE.key, List())
			.toArray() as activity, index (activity._id)}
			<ActivityCard on:click={handleItemPressed(activity._id)} {activity} />
		{/each}
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
