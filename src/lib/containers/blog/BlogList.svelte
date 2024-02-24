<script lang="ts">
	import CardBlog from '$lib/components/cards/CardBlog.svelte';
	import type { BlogPost, PaginatedResponse } from '$lib/typings/blog';

	export let posts: PaginatedResponse<BlogPost>;
</script>

{#each posts.items as post}
	<CardBlog {post} />
{/each}
