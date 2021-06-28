<script>
	import { goto } from '$app/navigation';
	import { base } from '$app/paths';
	import { actionsStore, actions } from '$lib/actionsStore';
	import { ChevronLeftIcon, CheckIcon } from 'svelte-feather-icons';
	import { DateTime } from 'luxon';
	import { calculateNextDate } from '$lib/checkRecurrentActions';

	let action;
	let descriptionNode;
	$: {
		action = $actionsStore[0];

		// Gambiarra that makes the description text work properly
		if (descriptionNode && action.description) {
			descriptionNode.innerText = action.description;
		}
	}

	if (action) {
		actions.save({ ...action, startedAt: DateTime.now().toMillis() });
	}

	const handleBackPressed = () => {
		goto(`${base}/`);
	};

	const handleCheckPressed = () => {
		actions.save({
			...action,
			state: actions.STATE.DONE,
			completedAt: DateTime.now().toMillis(),
			'recurrence.nextDate': calculateNextDate(action.recurrence)
		});
	};
</script>

<svelte:head>
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
		class='text-bg font-bold text-xl'>{action ? action?.title : "You're done!"}</p>
	<p
		bind:this={descriptionNode}
		on:click={() => {
			if (document.activeElement === descriptionNode) {
				return;
			}

			descriptionNode.contentEditable = true;
			descriptionNode.focus();

			if (!action?.description) {
				descriptionNode.innerText = ""
			}
		}}
		on:blur={() => {
			const newDescription = descriptionNode.innerText.trim();

			// Gambiarra that makes the description text work properly
			action.description = newDescription;

			descriptionNode.contentEditable = false;
			actions.save({ ...action, description: newDescription });

			if (!newDescription) {
				descriptionNode.innerText = "..."
			}
		}}
		class='font-light text-sm font-mono text-base whitespace-pre-wrap'
	>
		{action ? (action.description || "...") : "There's nothing else to do."}
	</p>
</div>

{#if action}
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
