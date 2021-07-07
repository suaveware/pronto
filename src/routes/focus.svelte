<script>
	import { goto } from '$app/navigation';
	import { base } from '$app/paths';
	import {
		completeActivity,
		saveActivity,
		state
	} from '$lib/state';
	import {
		ChevronLeftIcon,
		CheckIcon,
		SquareIcon,
		CheckSquareIcon
	} from 'svelte-feather-icons';
	import { DateTime } from 'luxon';
	import { ACTIVITIES_STATE } from '$lib/constants';

	let activity;
	let descriptionNode;
	$: {
		activity = $state.activities.find(activity => activity.state === ACTIVITIES_STATE.READY);

		// Gambiarra that makes the description text work properly
		if (descriptionNode && activity?.description) {
			descriptionNode.innerText = activity.description;
		}
	}

	if (activity) {
		saveActivity(activity.set('startedAt', DateTime.utc().toISO()));
	}

	const handleBackPressed = () => {
		goto(`${base}/`);
	};

	const handleCheckPressed = () => {
		completeActivity(activity);
	};

	const handleDescriptionOnBlur = () => {
		const newDescription = descriptionNode.innerText.trim();

		// Gambiarra that makes the description text work properly
		// activity.set('description', newDescription);

		descriptionNode.contentEditable = false;
		saveActivity(activity.set('description', newDescription));

		if (!newDescription) {
			descriptionNode.innerText = '...';
		}
	};

	const handleDescriptionOnClick = () => {
		if (document.activeElement === descriptionNode) {
			return;
		}

		descriptionNode.contentEditable = true;
		descriptionNode.focus();

		if (!activity?.description) {
			descriptionNode.innerText = '';
		}
	};

	const handleCheckItemClicked = (index) => {
		saveActivity(activity.setIn(
			['checkList', index, 'checked'],
			!activity.checkList.get(index).checked
		));
	};
</script>

<svelte:head>
	<title>Focus</title>
</svelte:head>

<button
	on:click={handleBackPressed}
	class='fixed text-blueGray-600 top-4 left-4'
>
	<ChevronLeftIcon class='text-blueGray-600' size='24' />
</button>

<div
	class='w-full h-full inline-flex flex-col text-blueGray-600 gap-6 p-4 justify-center items-center'>
	<p
		class='text-bg font-bold text-xl'>{activity ? activity?.title : "You're done!"}</p>
	<p
		bind:this={descriptionNode}
		on:click={handleDescriptionOnClick}
		on:blur={handleDescriptionOnBlur}
		class='font-light text-sm font-mono text-base whitespace-pre-wrap'
	>
		{activity ? (activity.description || "...") : "There's nothing else to do."}
	</p>
	<div class='inline-flex flex-col gap-2 px-4 pt-4 w-full'>
		{#each activity?.checkList.toArray() || [] as item, index (item._id)}
			<div
				on:click={() => handleCheckItemClicked(index)}
				class='inline-flex gap-4 cursor-pointer'
			>
				<div>
					{#if (item.checked)}
						<CheckSquareIcon size='24' />
					{:else}
						<SquareIcon size='24' />
					{/if}
				</div>
				<div>{item.name}</div>
			</div>
		{/each}
	</div>
</div>

{#if activity}
	<div
		class='fixed bottom-4 right-4 gap-3 items-center inline-flex flex-col'
	>
		<button
			on:click={handleCheckPressed}
			class='p-5 bg-blueGray-400 text-white shadow bg-white rounded-full'
		>
			<CheckIcon size='28' />
		</button>
	</div>
{/if}
