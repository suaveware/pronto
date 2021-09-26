<script>
	import { SquareIcon, CheckSquareIcon } from 'svelte-feather-icons';

	export let checked = false;
	export let label = '';

	const handleClick = () => {
		checked = !checked;
	};
</script>

<div on:click={handleClick} class="inline-flex gap-4 cursor-pointer">
	<div>
		{#if checked}
			<CheckSquareIcon size="24" />
		{:else}
			<SquareIcon size="24" />
		{/if}
	</div>
	<div>{label}</div>
</div>
