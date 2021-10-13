<script>
	import TopBar from '$lib/components/atoms/TopBar.svelte';
	import { ChevronLeftIcon } from 'svelte-feather-icons';

	const handleBackClicked = () => {
		window.history.back();
	};
</script>

<div class="w-full h-full m-0 bg-base-300 text-base-content">
	<TopBar color="base-300">
		<button on:click={handleBackClicked}>
			<ChevronLeftIcon size="24" />
		</button>
	</TopBar>
	<slot />
</div>
