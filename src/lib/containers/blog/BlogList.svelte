<script lang="ts">
	import CardBlog from '$lib/components/cards/CardBlog.svelte';
	import type { BlogPost, PaginatedResponse } from '$lib/typings/blog';

	export let posts: PaginatedResponse<BlogPost>;

	const reversePosts = posts.items.slice().reverse();
</script>

<section class="container">
	<div class="grid gap-4 lg:grid-cols-6">
		{#each reversePosts as post, i (post.slug)}
			<CardBlog {post} isLazy={i > 6} />
		{/each}
	</div>
</section>

<style lang="scss">


	.grid {
		// Select every 6 elements, starting from position 1
		// And make it take up 6 columns
		> :global(:nth-child(6n + 1)) {
			grid-column: span 4;
		}

		// Select every 6 elements, starting from position 2
		// And make it take up 3 columns
		> :global(:nth-child(6n + 2)) {
			grid-column: span 2;
			grid-row: span 2;
		}

		// Select every 6 elements, starting from position 3
		// And make it take up 3 columns
		> :global(:nth-child(6n + 3)) {
			grid-column: span 4;
		}

		// Select every 6 elements, starting from position 4, 5 and 6
		// And make it take up 2 columns
		> :global(:nth-child(6n + 4)),
		:global(:nth-child(6n + 5)),
		:global(:nth-child(6n + 6)) {
			grid-column: span 2;
		}
	}
</style>
