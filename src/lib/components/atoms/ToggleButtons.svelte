<script>
	export let label = '';
	export let options = [];
	export let multi;
	export let value = multi ? [] : '';

	const valueArray = Array.isArray(value) ? value : [value];
	let pressedMap = Object.fromEntries(valueArray.map(v => [v, true]));
</script>

<div class="text-base-content inline-flex flex-col w-full">
	{#if label}
		<label class="label" for="form-toggle-button">
			<span class="label-text">{label}</span>
		</label>
	{/if}
	<div
		id="form-toggle-button"
		class="input !h-auto bg-base-100 box-border p-2 w-full gap-1 grid grid-cols-7 auto-cols-min"
	>
		{#each options as option}
			<button
				class="bg-base-100 border rounded-full border-base-content {pressedMap[option.value]
					? 'bg-base-content text-base-100'
					: ''}"
				toggle
				extrasmall
				outlined
				on:click={() => {
					pressedMap[option.value] = !pressedMap[option.value];
					console.log('clicked');
					console.log('option', option);
					value = multi
						? Object.entries(pressedMap)
								.filter(([, isPressed]) => isPressed)
								.map(([optionValue]) => optionValue)
						: option.value;

					if (!multi) {
						pressedMap = { [option.value]: true };
					}
				}}
			>
				{option.label}
			</button>
		{/each}
	</div>
</div>
