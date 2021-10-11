<script>
	import '$lib/onLoad';
	import { state } from '$lib/state';

	console.log('$state.config.theme', $state.config.theme);
</script>

<main class="w-full h-full m-0 bg-white" data-theme={$state.config.theme}>
	<slot />
</main>

<style>
	@tailwind base;
	@tailwind components;
	@tailwind utilities;
</style>
