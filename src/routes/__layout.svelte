<script>
	import '$lib/onLoad';
	import { isClient } from '$lib/helpers';

	if (isClient()) {
		// Prevents the appearance of the contextmenu
		// https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/oncontextmenu
		window.oncontextmenu = event => {
			event.preventDefault();
		};
	}
</script>

<svelte:head>
	<title>Pronto</title>
</svelte:head>

<main class="w-full h-full m-0 bg-white">
	<slot />
</main>

<style>
	@tailwind base;
	@tailwind components;
	@tailwind utilities;
</style>
