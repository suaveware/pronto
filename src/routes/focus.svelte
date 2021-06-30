<script>
	import { goto } from '$app/navigation';
	import { base } from '$app/paths';
	import { ACTIVITIES_STATE, saveActivity, state } from '$lib/state';
	import { ChevronLeftIcon, CheckIcon } from 'svelte-feather-icons';
	import { DateTime } from 'luxon';
	import { calculateNextDate } from '$lib/checkRecurrentActions';

	let activity;
	let descriptionNode;
	$: {
		activity = $state.activities.get(0);

		// Gambiarra that makes the description text work properly
		if (descriptionNode && activity.description) {
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
		saveActivity(activity.merge({
			state: ACTIVITIES_STATE.DONE,
			completedAt: DateTime.utc().toISO(),
			recurrence: {
				nextDate: calculateNextDate(activity.recurrence)
			}
		}));
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
</script>

<svelte:head>
	<title>Focus</title>
</svelte:head>

<button
	on:click={handleBackPressed}
	class='fixed top-4 left-4'
>
	<ChevronLeftIcon size='24' />
</button>

<div
	class='w-full h-full inline-flex flex-col gap-6 p-4 justify-center items-center'>
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
</div>

{#if activity}
	<div
		class='fixed bottom-4 right-4 gap-3 items-center inline-flex flex-col'
	>
		<button
			on:click={handleCheckPressed}
			class='p-4 border shadow-md bg-white rounded-full'
		>
			<CheckIcon size='24' />
		</button>
	</div>
{/if}
