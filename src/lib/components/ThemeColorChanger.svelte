<script>
	export let themeColoredNode = null;
	let metaNode = null;
	let themeColor = '';

	$: {
		if (themeColoredNode && metaNode) {
			themeColor = window.getComputedStyle(themeColoredNode).backgroundColor;
			metaNode.content = themeColor;
		}
	}
</script>

<svelte:head>
	<meta bind:this={metaNode} name="theme-color" content={themeColor} />
</svelte:head>
