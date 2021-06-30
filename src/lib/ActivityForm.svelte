<script>
	import { RECURRENCE_TYPE } from '$lib/constants';
	import { TrashIcon } from 'svelte-feather-icons';
	import {
		removeActivity,
		saveActivity
	} from '$lib/state';
	import { Info } from 'luxon';

	export let activity;

	let form = activity.toJS();

	const handleTrashPressed = () => {
		removeActivity(activity);

		activity = null;
	};

	const handleCancelPressed = () => {
		activity = null;
	};

	// TODO: use the saveActivity here instead of weirdly sending it up
	const handleConfirmPressed = () => {
		saveActivity(activity.merge(form));

		activity = null;
	};
</script>

<div
	class='fixed z-50 right-0 left-0 bottom-0 top-0 p-4 inline-flex justify-end flex-col gap-2 bg-white'
>
	{#if activity?._id}
		<button
			on:click={handleTrashPressed}
			class='fixed top-4 right-4'
		>
			<TrashIcon size='24' />
		</button>
	{/if}

	<input
		bind:value={form.title}
		class='w-full p-1 form-input'
		type='text'
		placeholder='Title'
		autofocus
	/>
	<textarea
		class='w-full h-40 p-1 form-input font-mono'
		placeholder='Description text'
		bind:value={form.description}
	></textarea>

	<div class=' w-full inline-flex gap-2 flex-wrap'>
		<select bind:value={form.recurrence.type} class='form-input'>

			{#each Object.values(RECURRENCE_TYPE) as type}
				<option>{type}</option>
			{/each}
		</select>
		{#if form.recurrence.type === RECURRENCE_TYPE.ONCE}
			<input class='form-input' type='date' />
			<input class='form-input' type='time' />
		{:else if form.recurrence.type === RECURRENCE_TYPE.EVERY_WEEK_DAYS}
			<div class='inline-flex flex-wrap gap-2'>
				{#each Info.weekdays("long", { locale: "en" }) as weekDay, index}
					<label>
						<input
							type='checkbox'
							bind:group={form.recurrence.weekdays}
							value={index + 1}
						>
						{weekDay}
					</label>
				{/each}
			</div>
		{:else if form.recurrence.type === RECURRENCE_TYPE.EVERY_MONTH_DAYS}
			<div class='inline-flex flex-wrap gap-2'>
				{#each new Array(31).fill(0).map((v, index) => index + 1) as monthDay}
					<label>
						<input
							type='checkbox'
							bind:group={form.recurrence.monthDays}
							value={monthDay}
						>
						{monthDay}
					</label>
				{/each}
			</div>
		{/if}
	</div>

	<div
		class='box-border w-full bottom-2 inline-flex justify-evenly mb-4 mt-4'
	>
		<button class='form-button' on:click={handleCancelPressed}>
			Cancel
		</button>
		<button
			class='form-button'
			on:click={handleConfirmPressed}
		>
			{ activity._id ? 'Save' : 'Add' }
		</button>
	</div>
</div>

<style>
    .form-button {
        @apply box-border border w-24 p-2 rounded shadow-sm;
    }

    .form-input {
        @apply border-2 rounded;
    }
</style>