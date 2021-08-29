<script>
	import { ChevronDownIcon } from 'svelte-feather-icons';
	import { clickOutside } from '$lib/custom-actions/clickOutside';

	export let value = '';
	export let open = false;
	export let label;
	export let options = [];
</script>

<div class='inline-flex flex-col w-full {$$props.class}'>
	{#if label}
		<label
			class='block uppercase text-blueGray-600 text-xs font-bold mb-2'
			for='form-select'
		>
			{label}
		</label>
	{/if}
	<div
		id='form-select'
		class='relative rounded bg-white inline-flex gap-4 items-center justify-between shadow px-3 py-2 border text-blueGray-600 cursor-pointer box-border'
		use:clickOutside
		on:clickedOutside={() => {
				open = false
			}}
		on:click={() => {
		open = !open
	}}
	>
		<div>
			{options.find(option => option.value === value)?.label || ''}
		</div>
		<ChevronDownIcon size='24' class='text-blueGray-600' />
		<div
			class='absolute box-border bg-white top-full rounded translate-y-2 left-0 w-full shadow z-30 transition-all duration-75 {open ? "opacity-100" : "hidden opacity-0" }'
		>
			{#each options as option (option.value)}
				<div
					class='p-2 box-border hover:text-white pointer-events-auto hover:bg-teal-500 {value === option.value ? "bg-teal-500 text-white" : "bg-white" }'
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