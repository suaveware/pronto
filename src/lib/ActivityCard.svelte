<script>
	export let activity;
</script>

<div
	class='p-2 shadow-md border rounded'
	on:click
>
	<div class='inline-flex justify-between items-center w-full'>
		<div>{activity.title}</div>
		<div>{activity.state}</div>
	</div>
</div>