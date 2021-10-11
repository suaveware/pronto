<script>
	import { ChevronLeftIcon } from 'svelte-feather-icons';

	const handleBackClicked = () => {
		window.history.back();
	};
</script>

<div class="w-full h-full m-0 bg-base-300 text-base-content">
	<button on:click={handleBackClicked} class="p-4">
		<ChevronLeftIcon size="24" />
	</button>
	<slot />
</div>
