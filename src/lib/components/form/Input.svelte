<script>
	import { XIcon } from 'svelte-feather-icons';

	export let type = 'text';
	export let label = '';
	export let placeholder = '';
	export let autofocus = false;
	export let value = '';
	export let scrollOnFocus = false;
	export let clearButton = false;
	export let inputElement;

	export let small = false;
	export let large = false;

	const handleOnFocus = event => {
		// Dinamically set the input type
		event.target.type = type;

		if (scrollOnFocus) {
			event.target.scrollIntoView();
		}
	};

	const handleClearPressed = () => {
		inputElement.focus();
		value = '';
	};
</script>

<div class="w-full {$$props.class}">
	{#if label}
		<label class="block uppercase text-blueGray-600 text-xs font-bold mb-2" for="grid-username">
			{label}
		</label>
	{/if}
	<div class="relative">
		<input
			id="grid-username"
			on:focus={handleOnFocus}
			on:change
			on:focus
			on:blur
			on:keyup
			class:regular={!(small || large)}
			class:small
			class:large
			bind:this={inputElement}
			bind:value
			{placeholder}
			{autofocus}
		/>
		{#if clearButton && value}
			<button
				on:click={handleClearPressed}
				class="absolute text-blueGray-600 bg-white right-1 top-1/2 transform -translate-y-1/2"
			>
				<XIcon size={small ? '20' : '24'} />
			</button>
		{/if}
	</div>
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
