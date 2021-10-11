<script>
	export let label = '';
	export let rows;
	export let value = '';
	export let placeholder = '';
</script>

<div class="text-base-content relative w-full {$$props.class}">
	{#if label}
		<label class="label" for="grid-about-me">
			<span class="label-text">{label}</span>
		</label>
	{/if}
	<textarea
		id="grid-about-me"
		class="textarea resize-none w-full ease-linear transition-all duration-150"
		{rows}
		{placeholder}
		bind:value
	/>
</div>
