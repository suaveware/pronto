<script>
	import { ChevronLeftIcon } from 'svelte-feather-icons';

	const handleBackClicked = () => {
		window.history.back();
	};
</script>

<div class="w-full h-full m-0 bg-blueGray-600">
	<button on:click={handleBackClicked} class="p-4">
		<ChevronLeftIcon class="text-white" size="24" />
	</button>
	<slot />
</div>
