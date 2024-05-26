<script lang="ts">
	import type { PageData } from './$types';
	import Markdown from '$lib/markdown/Markdown.svelte';

	export let data: PageData;
</script>

<div>
	{#if data.post}
		<Markdown content={data.post.content} />
	{/if}
</div>
