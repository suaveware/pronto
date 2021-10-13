<script>
	export let color = 'base-100';
</script>

<div class="w-full sticky top-0 z-20">
	<div
		class="flex justify-between items-center pb-6 px-8 pt-8 rounded-b w-full"
		class:bg100={color === 'base-100'}
		class:bg200={color === 'base-200'}
		class:bg300={color === 'base-300'}
	>
		<slot />
	</div>
	<div
		class="w-full h-12 bg-gradient-to-b"
		class:bggradient100={color === 'base-100'}
		class:bggradient200={color === 'base-200'}
		class:bggradient300={color === 'base-300'}
	/>
</div>

<style>
	.bg100 {
		@apply bg-base-100;
	}

	.bg200 {
		@apply bg-base-200;
	}

	.bg300 {
		@apply bg-base-300;
	}

	.bggradient100 {
		@apply from-base-100 to-transparent;
	}

	.bggradient200 {
		@apply from-base-200 to-transparent;
	}

	.bggradient300 {
		@apply from-base-300 to-transparent;
	}
</style>
