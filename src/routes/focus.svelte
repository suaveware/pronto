<script>
	import { completeActivity, saveActivity, state } from '$lib/state';
	import {
		ChevronLeftIcon,
		CheckIcon,
		SquareIcon,
		CheckSquareIcon,
		PauseCircleIcon,
	} from 'svelte-feather-icons';
	import { ACTIVITIES_STATE } from '$lib/constants';
	import { onMount, onDestroy } from 'svelte';
	import { fade } from 'svelte/transition';
	import Timer from '$lib/components/atoms/Timer.svelte';

	// WakeLock api currently available for chrome only https://web.dev/wake-lock/
	let wakeLockSentinel = null;
	let justBlurredDescription = false;
	let activity;
	let descriptionNode;
	let toggleTimerPause;
	let isTimerPaused;

	// Loads any changes in the store
	$: activity = $state.activities.find(activity => activity.state === ACTIVITIES_STATE.READY.key);

	$: {
		if (descriptionNode) {
			// We don't want to run this if descriptionNode is focused.
			if (document.activeElement !== descriptionNode) {
				if (activity) {
					descriptionNode.innerText = activity?.description || '...';
				} else {
					descriptionNode.innerText = 'Nenhuma outra atividade';
				}
			}
		}
	}

	onMount(() => {
		wakeLockSentinel = navigator.wakeLock?.request();
	});

	onDestroy(() => {
		wakeLockSentinel?.release();
	});

	const handleBackPressed = () => {
		window.history.back();
	};

	const handleCheckPressed = () => {
		completeActivity(activity);
	};

	const handleDescriptionOnBlur = () => {
		const newDescription = descriptionNode.innerText.trim();

		descriptionNode.contentEditable = false;
		activity = activity.set('description', newDescription);

		if (!newDescription) {
			descriptionNode.innerText = '...';
		}

		justBlurredDescription = true;
	};

	const handleDescriptionOnClick = () => {
		// Don't rerun this logic if the element is already focused
		if (!activity || document.activeElement === descriptionNode) {
			return;
		}

		descriptionNode.innerText = activity.description;
		descriptionNode.contentEditable = true;
		descriptionNode.focus();
	};

	const handlePageOnClick = () => {
		if (justBlurredDescription) {
			justBlurredDescription = false;
			return;
		}

		toggleTimerPause?.();
	};

	const handleCheckItemClicked = index => {
		saveActivity(
			activity.setIn(['checkList', index, 'checked'], !activity.checkList.get(index).checked)
		);
	};

	const handleTimerUpdate = newIntervals => {
		saveActivity(activity.set('workIntervals', newIntervals));
	};
</script>

<svelte:head>
	<title>Focus</title>
</svelte:head>

<!-- Topbar thingy -->
<div class="inline-flex items-center absolute top-0 left-0 right-0 p-4 text-blueGray-600">
	<button on:click={handleBackPressed}>
		<ChevronLeftIcon class="text-blueGray-600" size="24" />
	</button>

	<div class="fixed left-1/2 transform -translate-x-1/2">
		{#if activity}
			<Timer
				bind:togglePause={toggleTimerPause}
				bind:isPaused={isTimerPaused}
				intervals={activity.workIntervals}
				onUpdate={handleTimerUpdate}
			/>
		{/if}
		<!-- Timer state animated icon -->
		{#if isTimerPaused && activity}
			<div
				class="fixed top-8 text-blueGray-400 transform -translate-x-1/2 left-1/2"
				transition:fade={{ duration: 100 }}
			>
				<PauseCircleIcon size="48" />
			</div>
		{/if}
	</div>
</div>

<div
	on:click={handlePageOnClick}
	class="w-full h-full inline-flex flex-col text-blueGray-600 gap-6 p-4 justify-center items-center"
>
	<p class="text-bg font-bold text-xl">
		{activity?.title || 'Pronto!'}
	</p>
	<p
		bind:this={descriptionNode}
		on:click|stopPropagation={handleDescriptionOnClick}
		on:blur={handleDescriptionOnBlur}
		class="font-light text-sm font-mono text-base whitespace-pre-wrap"
	>
		{''}
	</p>
	<div class="inline-flex flex-col gap-2 px-4 pt-4 w-full">
		{#each activity?.checkList.toArray() || [] as item, index (item._id)}
			<div
				on:click|stopPropagation={() => handleCheckItemClicked(index)}
				class="inline-flex gap-4 cursor-pointer"
			>
				<div>
					{#if item.checked}
						<CheckSquareIcon size="24" />
					{:else}
						<SquareIcon size="24" />
					{/if}
				</div>
				<div>{item.name}</div>
			</div>
		{/each}
	</div>
</div>

{#if activity}
	<div class="fixed bottom-4 right-4 gap-3 items-center inline-flex flex-col">
		<button
			on:click={handleCheckPressed}
			class="p-5 bg-blueGray-400 text-white shadow bg-white rounded-full"
		>
			<CheckIcon size="28" />
		</button>
	</div>
{/if}
