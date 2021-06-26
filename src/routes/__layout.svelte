<script>
	import { overrideItemIdKeyNameBeforeInitialisingDndZones } from 'svelte-dnd-action';

	overrideItemIdKeyNameBeforeInitialisingDndZones('_id');
</script>


<main class='w-full h-full'>
	<slot />
</main>


<style>
    @tailwind base;
    @tailwind components;
    @tailwind utilities;
</style>
