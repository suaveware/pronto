<script>
	import { XIcon } from 'svelte-feather-icons';

	export let type = 'text';
	export let label = '';
	export let placeholder = '';
	export let autofocus = false;
	export let value = '';
	export let scrollOnFocus = false;
	export let clearButton = false;
	export let inputElement = null;

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

<div class="w-full text-base-content {$$props.class}">
	{#if label}
		<label class="label" for="grid-username">
			<span class="label-text">{label}</span>
		</label>
	{/if}
	<div class="relative">
		<input
			class="input w-full"
			id="grid-username"
			on:focus={handleOnFocus}
			on:change
			on:focus
			on:blur
			on:keyup
			class:clearButton
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
				class="absolute right-1 top-1/2 transform -translate-y-1/2"
			>
				<XIcon size={small ? '20' : '24'} />
			</button>
		{/if}
	</div>
</div>

<style>
	.small {
		@apply input-sm;
	}

	.regular {
		@apply input-md;
	}

	.large {
		@apply input-lg;
	}

	.clearButton {
		@apply pr-6;
	}
</style>
