<script>
	export let title = '';
	export let icon = null;
</script>

<div on:click class="inline-flex items-center gap-2 w-full {$$props.class}">
	<svelte:component this={icon} size="20" />
	{title}
	<hr class="flex-1 w-full bg-base-content" />
</div>
