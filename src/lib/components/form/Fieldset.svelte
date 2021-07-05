<script>
	export let title;
</script>

<div class='{$$props.class}'>
{#if title}
	<h6 class='text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase'>
		{title}
	</h6>
{/if}
	<div class='px-4 inline-flex flex-wrap gap-4'>
		<slot />
	</div>
</div>
