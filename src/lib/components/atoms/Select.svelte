<script>
	import { ChevronDownIcon } from 'svelte-feather-icons';
	import { clickOutside } from '$lib/custom-actions/clickOutside';

	export let value = '';
	export let open = false;
	export let label;
	export let options = [];
</script>

<div class="inline-flex text-base-content flex-col w-full {$$props.class}">
	{#if label}
		<label class="label" for="form-select">
			<span class="label-text">{label}</span>
		</label>
	{/if}
	<div
		id="form-select"
		class="input flex flex-row justify-between relative bg-base-100 items-center border cursor-pointer box-border"
		use:clickOutside
		on:clickedOutside={() => {
			open = false;
		}}
		on:click={() => {
			open = !open;
		}}
	>
		<div>
			{options.find(option => option.value === value)?.label || ''}
		</div>
		<ChevronDownIcon size="24" />
		<div
			class="card absolute box-border overflow-y-scroll max-h-40 p-2 space-y-1 bg-base-100 top-full translate-y-2 left-0 w-full shadow-lg z-30 transition-all duration-75 {open
				? 'opacity-100'
				: 'hidden opacity-0'}"
		>
			{#each options as option (option.value)}
				<div
					class="px-2 box-border rounded text-base-content pointer-events-auto hover:bg-base-300 {value ===
					option.value
						? 'bg-base-300'
						: ''}"
					on:click={() => {
						value = option.value;
					}}
				>
					{option.label}
				</div>
			{/each}
		</div>
	</div>
</div>
