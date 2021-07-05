<script>
	import '$lib/checkRecurrentActions';
	import { overrideItemIdKeyNameBeforeInitialisingDndZones } from 'svelte-dnd-action';

	overrideItemIdKeyNameBeforeInitialisingDndZones('_id');
</script>


<main class='w-full h-full bg-blueGray-100'>
	<slot />
</main>


<style>
    @tailwind base;
    @tailwind components;
    @tailwind utilities;
</style>
