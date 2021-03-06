<script>
	import { RECURRENCE_TYPE } from '$lib/constants';
	import { Trash2Icon } from 'svelte-feather-icons';
	import { removeActivity, saveActivity } from '$lib/state';
	import { Activity, CheckItem, Recurrence } from '$lib/recordTypes';
	import { Info } from 'luxon';
	import Input from '$lib/components/atoms/Input.svelte';
	import Fieldset from '$lib/components/atoms/Fieldset.svelte';
	import TextArea from '$lib/components/atoms/TextArea.svelte';
	import Select from '$lib/components/atoms/Select.svelte';
	import ToggleButtons from '$lib/components/atoms/ToggleButtons.svelte';
	import ThemeColorChanger from '$lib/components/ThemeColorChanger.svelte';
	import { calculateNextDate } from '$lib/helpers';

	export let activity;

	// Weeks start on sunday...
	const weekdays = Info.weekdays('narrow').map((label, index) => ({
		label,
		value: index + 1,
	}));
	const sundayOption = weekdays.pop(); // May the immutable gods forgive me for I've sinned
	const weekdaysOptions = [sundayOption, ...weekdays];

	let themeColoredNode = null;
	let scrollContainer;
	let form = activity.toJS();

	// Make sure there's always an empty item at the end
	form.checkList = [...form.checkList, CheckItem().toJS()];

	const handleTrashPressed = () => {
		removeActivity(activity);

		activity = null;
	};

	const handleCancelPressed = () => {
		activity = null;
	};

	const handleConfirmPressed = () => {
		const nextDate = calculateNextDate(Recurrence(form.recurrence));

		saveActivity(
			Activity({
				...activity.toJS(),
				...form,
				recurrence: {
					...activity.recurrence.toJS(),
					...form.recurrence,
					nextDate,
				},
				checkList: form.checkList.filter(({ name }) => name),
				_id: activity._id,
			})
		);

		activity = null;
	};

	const handleTaskOnBlur = () => {
		const currentLastItem = form.checkList.pop();
		const lastItem = currentLastItem.name ? CheckItem().toJS() : currentLastItem;

		form.checkList = [...form.checkList.filter(({ name }) => name), lastItem];
	};

	const handleTaskOnFocus = item => {
		if (!item.name) {
			form.checkList = [...form.checkList, CheckItem().toJS()];
		}
	};

	const handleTaskKeyUp = event => {
		if (event.key === 'Enter') {
			const nextInputElement = event.target.parentElement?.nextElementSibling?.firstElementChild;

			// This is a quick and REALLY dirty solution. I just wanted to focus the
			// next input on "Enter". I'll have to refactor in the future.
			if (nextInputElement && nextInputElement.localName === 'input') {
				nextInputElement.focus();
				return;
			}

			console.error("Not an input element. You'll to fix this ugly workaround code.");
		}
	};
</script>

<ThemeColorChanger themeColoredNode={scrollContainer} />

<div
	class="absolute z-20 right-0 left-0 bottom-0 top-0 p-4 overflow-y-scroll inline-flex justify-start flex-col bg-base-100 text-base-content h-full"
	bind:this={scrollContainer}
>
	<Fieldset title="Atividade" class="bg-base-300 mb-6 p-4 relative">
		{#if activity?._id}
			<button on:click={handleTrashPressed} class="btn btn-square btn-ghost absolute top-3 right-3">
				<Trash2Icon size="24" strokeWidth="3" />
			</button>
		{/if}
		<Input label="Título" bind:value={form.title} type="text" autofocus />
		<TextArea label="Descrição" bind:value={form.description} rows={5} />
		<div class="inline-flex flex-col gap-2">
			{#each form.checkList as item, index (item._id)}
				<Input
					clearButton
					small
					label={!index ? 'Lista de tarefas' : ''}
					scrollOnFocus
					bind:value={form.checkList[index].name}
					on:blur={handleTaskOnBlur}
					on:focus={() => handleTaskOnFocus(item)}
					on:keyup={handleTaskKeyUp}
					placeholder={index < form.checkList.length - 1
						? 'Deixe vazio para remover'
						: 'Nova tarefa'}
				/>
			{/each}
		</div>
		<Select
			label="Recorrência"
			options={Object.values(RECURRENCE_TYPE).map(({ key, label }) => ({ value: key, label }))}
			bind:value={form.recurrence.type}
		/>
		{#if form.recurrence.type === RECURRENCE_TYPE.EVERY_WEEK_DAYS.key}
			<ToggleButtons
				label="Dias da semana"
				multi
				options={weekdaysOptions}
				bind:value={form.recurrence.weekdays}
			/>
		{:else if form.recurrence.type === RECURRENCE_TYPE.EVERY_MONTH_DAYS.key}
			<ToggleButtons
				label="Dias do mês"
				multi
				options={new Array(31).fill(0).map((v, index) => ({ label: index + 1, value: index + 1 }))}
				bind:value={form.recurrence.monthDays}
			/>
		{/if}
	</Fieldset>

	<div class="box-border mt-auto w-full bottom-2 inline-flex justify-evenly mb-4 mt-auto">
		<button class="btn btn-ghost btn-secondary" on:click={handleCancelPressed}> Cancelar </button>
		<button class="btn btn-primary" on:click={handleConfirmPressed}>
			{activity._id ? 'Salvar' : 'Adicionar'}
		</button>
	</div>
</div>
