<script>
	import { completeActivity, reorderActivities, saveActivity, state } from '$lib/state';
	import {
		ChevronLeftIcon,
		ChevronsRightIcon,
		CheckIcon,
		SquareIcon,
		CheckSquareIcon,
	} from 'svelte-feather-icons';
	import { ACTIVITIES_STATE } from '$lib/constants';
	import { onMount, onDestroy } from 'svelte';
	import FabContainer from '$lib/components/atoms/FabContainer.svelte';
	import Fab from '$lib/components/atoms/Fab.svelte';
	import ThemeColorChanger from '$lib/components/ThemeColorChanger.svelte';

	// WakeLock api currently available for chrome only https://web.dev/wake-lock/
	let themeColoredNode = null;
	let wakeLockSentinel = null;
	let justBlurredDescription = false;
	let activity;
	let descriptionNode;

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

	onMount(async () => {
		wakeLockSentinel = await navigator.wakeLock?.request();
	});

	onDestroy(() => {
		console.log('wakeLockSentinel', wakeLockSentinel);
		wakeLockSentinel?.release();
	});

	const handleBackPressed = () => {
		window.history.back();
	};

	const handleCheckPressed = () => {
		completeActivity(activity);
	};

	const handleDoLaterPressed = () => {
		const jsReadyActivities = $state.activities
			.toJS()
			.filter(({ state }) => state === ACTIVITIES_STATE.READY.key);
		const jsOtherActivities = $state.activities
			.toJS()
			.filter(({ state }) => state !== ACTIVITIES_STATE.READY.key);

		if (jsReadyActivities.length > 1) {
			const [first, second, ...rest] = jsReadyActivities;
			const newOrder = [second, first, ...rest, ...jsOtherActivities];

			reorderActivities(newOrder);
		}
	};

	const handleDescriptionOnBlur = () => {
		const newDescription = descriptionNode.innerText.trim();

		descriptionNode.contentEditable = false;
		saveActivity(activity.set('description', newDescription));
		console.log('newDescription', newDescription);

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
	};

	const handleCheckItemClicked = index => {
		saveActivity(
			activity.setIn(['checkList', index, 'checked'], !activity.checkList.get(index).checked)
		);
	};
</script>

<ThemeColorChanger {themeColoredNode} />

<svelte:head>
	<title>Focus</title>
</svelte:head>

<div
	on:click={handlePageOnClick}
	bind:this={themeColoredNode}
	class="bg-base-100 text-base-content inline-flex flex-col h-full w-full"
>
	<div class="inline-flex relative items-center w-ful p-4">
		<!-- Topbar thingy -->
		<button on:click={handleBackPressed}>
			<ChevronLeftIcon size="24" />
		</button>
	</div>

	<!-- Activity Data -->
	<div
		class="text-accent w-full inline-flex my-auto box-border flex-col overflow-y-scroll gap-6 p-4 items-center"
	>
		<p class="text-bg font-bold text-xl">
			{activity?.title || 'Pronto!'}
		</p>
		<p
			class="font-light font-mono whitespace-pre-wrap"
			bind:this={descriptionNode}
			on:click|stopPropagation={handleDescriptionOnClick}
			on:blur={handleDescriptionOnBlur}
		>
			{''}
		</p>
		<div class="inline-flex flex-col gap-2 px-4 pt-4 w-full">
			{#each activity?.checkList.toArray() || [] as item, index (item._id)}
				<div
					on:click|stopPropagation={() => handleCheckItemClicked(index)}
					class="inline-flex items-center gap-4 cursor-pointer"
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

	<!-- FAB -->
	{#if activity}
		<FabContainer>
			<Fab on:click={handleDoLaterPressed} small icon={ChevronsRightIcon} />
			<Fab on:click={handleCheckPressed} icon={CheckIcon} />
		</FabContainer>
	{/if}
</div>
