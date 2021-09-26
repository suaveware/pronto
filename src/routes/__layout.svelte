<script>
	import '$lib/checkRecurrentActions';
	import { overrideItemIdKeyNameBeforeInitialisingDndZones } from 'svelte-dnd-action';

	overrideItemIdKeyNameBeforeInitialisingDndZones('_id');
</script>

<main class="w-full h-full m-0 bg-white">
	<slot />
</main>

<style>
	@tailwind base;
	@tailwind components;
	@tailwind utilities;
</style>
