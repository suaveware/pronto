<script>
	export let small = false;
	export let icon = null;
	export let color = 'bg-blueGray-500';
</script>

<button on:click|stopPropagation class="fab {color} {$$props.class}" class:small>
	<svelte:component this={icon} size={small ? '20' : '28'} />
	<slot />
</button>

<style>
	.fab {
		@apply p-5 shadow text-white rounded-full;
	}

	.small {
		@apply p-2;
	}
</style>
