<script>
	export let type = 'text';
	export let label = '';
	export let placeholder = '';
	export let autofocus = false;
	export let value = '';

	export let small = false;
	export let large = false;
</script>

<div class='w-full {$$props.class}'>
	{#if label}
		<label
			class='block uppercase text-blueGray-600 text-xs font-bold mb-2'
			for='grid-username'
		>
			{label}
		</label>
	{/if}
	<input
		id='grid-username'
		on:focus={event => {
			event.target.type = type
		}}
		on:change
		on:focus
		on:blur
		on:keyup
		class:regular={!(small || large)}
		class:small={small}
		class:large={large}
		bind:value={value}
		{placeholder}
		{autofocus}
	/>
</div>

<style>
    .small {
        @apply border-0 px-2 py-1 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow w-full ease-linear transition-all duration-150;
    }

    .small:focus {
        @apply outline-none ring;
    }

    .regular {
        @apply border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow w-full ease-linear transition-all duration-150;
    }

    .regular:focus {
        @apply outline-none ring;
    }

    .large {
        @apply border-0 px-3 py-4 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow w-full ease-linear transition-all duration-150;
    }

    .large:focus {
        @apply outline-none ring;
    }
</style>
