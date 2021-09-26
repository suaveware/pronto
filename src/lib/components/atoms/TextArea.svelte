<script>
	export let label = '';
	export let rows;
	export let value = '';
	export let placeholder = '';
</script>

<div class="relative w-full {$$props.class}">
	{#if label}
		<label class="block uppercase text-blueGray-600 text-xs font-bold mb-2" for="grid-about-me">
			{label}
		</label>
	{/if}
	<textarea
		id="grid-about-me"
		class="resize-none border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
		{rows}
		{placeholder}
		bind:value
	/>
</div>
