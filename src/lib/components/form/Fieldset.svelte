<script>
	export let title;
</script>

{#if title}
	<h6 class='text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase'>
		{title}
	</h6>
{/if}
<div class='inline-flex flex-wrap px-4 gap-4 {$$props.class}'>
	<slot />
</div>
