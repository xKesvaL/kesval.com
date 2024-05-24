<script lang="ts">
	import { page } from '$app/stores';
	import Markdown from '$lib/components/markdown/Markdown.svelte';
	import { posts } from '$lib/data/posts';
	import { languageTag } from '$paraglide/runtime';

	const post = posts[languageTag()].items.find((post) => post.slug === $page.params.slug);
</script>

<div>
	{#if post}
		<Markdown content={post.content} />
	{/if}
</div>
