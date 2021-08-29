<script>
	export let title;
</script>

<div class='{$$props.class}'>
	{#if title}
		<h6 class='text-blueGray-600 text-sm mt-2 mb-6 font-bold uppercase'>
			{title}
		</h6>
	{/if}
	<div class='px-4 inline-flex w-full flex-col flex-wrap gap-4'>
		<slot />
	</div>
</div>
