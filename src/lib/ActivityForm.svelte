<script>
	import { RECURRENCE_TYPE } from '$lib/constants';
	import { TrashIcon } from 'svelte-feather-icons';
	import {
		removeActivity,
		saveActivity
	} from '$lib/state';
	import { Info } from 'luxon';
	import Input from './components/form/Input.svelte';
	import Fieldset from './components/form/Fieldset.svelte';
	import TextArea from './components/form/TextArea.svelte';
	import Button from './components/form/Button.svelte';
	import Select from './components/form/Select.svelte';
	import ToggleButtons from './components/form/ToggleButtons.svelte';

	export let activity;

	let form = activity.toJS();
	$: console.log('form', form);

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
	class='fixed z-20 right-0 left-0 bottom-0 top-0 p-4 overflow-y-scroll inline-flex justify-start flex-col gap-2 bg-blueGray-100 h-full'
>
	{#if activity?._id}
		<button
			on:click={handleTrashPressed}
			class='fixed top-4 right-4'
		>
			<TrashIcon size='24' />
		</button>
	{/if}

	<Fieldset title='Activity'>
		<Input
			label='Title'
			bind:value={form.title}
			type='text'
			autofocus
		/>
		<TextArea
			label='Description'
			bind:value={form.description}
			rows={5}
		/>
		<Select
			label='Recurrence'
			options={Object.values(RECURRENCE_TYPE).map(({key, label}) => ({value:key, label}))}
			bind:value={form.recurrence.type}
		/>
		{#if form.recurrence.type === RECURRENCE_TYPE.EVERY_WEEK_DAYS.key}
			<ToggleButtons
				label='Weekdays'
				multi
				options={Info.weekdays("narrow").map((label, index) => ({label, value: index+1}))}
				bind:value={form.recurrence.weekdays}
			/>
		{:else if form.recurrence.type === RECURRENCE_TYPE.EVERY_MONTH_DAYS.key}
			<ToggleButtons
				label='Month days'
				multi
				options={new Array(31).fill(0).map((v, index) => ({label: index + 1, value: index + 1}))}
				bind:value={form.recurrence.monthDays}
			/>
		{/if}
	</Fieldset>

	<div
		class='box-border mt-auto w-full bottom-2 inline-flex justify-evenly mb-4 mt-auto'
	>
		<Button
			on:click={handleCancelPressed}
		>
			Cancel
		</Button>
		<Button
			class='!bg-teal-500'
			on:click={handleConfirmPressed}
		>
			{ activity._id ? 'Save' : 'Add' }
		</Button>
	</div>
</div>