<script>
	import '$lib/onLoad';
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
