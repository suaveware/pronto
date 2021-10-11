<script>
	export let small = false;
	export let icon = null;
</script>

<button on:click|stopPropagation class="btn btn-lg btn-circle {$$props.class}" class:small>
	<svelte:component this={icon} size={small ? '20' : '28'} />
	<slot />
</button>

<style>
	.small {
		@apply btn-sm;
	}
</style>
