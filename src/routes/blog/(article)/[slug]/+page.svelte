<script lang="ts">
	import Markdown from '$lib/components/markdown/Markdown.svelte';

	export let data;

	$: console.log(data.post);
</script>

<div>
	{#if data.post}
		<Markdown content={data.post.content} />
	{/if}
</div>
