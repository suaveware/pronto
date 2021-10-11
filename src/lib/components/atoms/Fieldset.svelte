<script>
	export let title;
</script>

<div class="card overflow-visible shadow {$$props.class}">
	{#if title}
		<h6 class="text-base-content text-lg mt-2 mb-6 font-bold">
			{title}
		</h6>
	{/if}
	<div class="px-4 inline-flex w-full flex-col flex-wrap gap-4">
		<slot />
	</div>
</div>
