<script>
	import Button from './Button.svelte';

	export let label = '';
	export let options = [];
	export let multi;
	export let value = multi ? [] : '';

	const valueArray = Array.isArray(value) ? value : [value];
	let pressedMap = Object.fromEntries(valueArray.map(v => [v, true]));
</script>

<div class='inline-flex flex-col w-full'>
	{#if label}
		<label
			class='block uppercase text-blueGray-600 text-xs font-bold mb-2'
			for='form-toggle-button'
		>
			{label}
		</label>
	{/if}
	<div
		id='form-toggle-button'
		class='box-border shadow bg-white rounded p-2 w-full gap-1 grid grid-cols-7 auto-cols-min'>
		{#each options as option, index}
			<Button
				toggle
				extrasmall
				outlined
				bind:pressed={pressedMap[option.value]}
				on:click={() => {
				value = multi
					? Object.entries(pressedMap).filter(([, isPressed]) => isPressed).map(([optionValue]) => optionValue)
					: option.value;

				if (!multi) {
					pressedMap = { [option.value]: true };
				}
				console.log('pressedMap[option.value]', option.value, pressedMap[option.value]);
			}}
			>
				{option.label}
			</Button>
		{/each}
	</div>
</div>

