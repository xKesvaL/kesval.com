<script lang="ts">
	import CardBlog from '$lib/components/cards/CardBlog.svelte';
	import type { BlogPost } from '$lib/typings/blog';

	export let posts: BlogPost[];

	$: console.log(posts);
</script>

{#each posts as post}
	<CardBlog {post} />
{/each}
