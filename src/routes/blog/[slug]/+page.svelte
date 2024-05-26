<script lang="ts">
	import Markdown from '$lib/components/markdown/Markdown.svelte';
	import type { PageData } from './$types';

	export let data: PageData;
	console.log('slug.page.svelte', data)
</script>

<div>
	{#if data.post}
		<Markdown content={data.post.content} />
	{/if}
</div>
