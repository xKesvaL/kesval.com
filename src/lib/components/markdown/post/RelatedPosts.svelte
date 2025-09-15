<script lang="ts">
	import { posts, type Post } from '$content/index';
	import { localizeHref } from '$paraglide/runtime';
	import {
		Card,
		CardHeader,
		CardTitle,
		CardDescription,
		CardContent
	} from '$lib/components/ui/card';
	import * as m from '$paraglide/messages';
	import { route } from '$lib/ROUTES';
	import VeliteImage from '$lib/components/base/VeliteImage.svelte';
	import BlogCard from '$lib/containers/blog/BlogCard.svelte';

	type Props = {
		metadata: Post;
	};

	let { metadata }: Props = $props();

	const relatedPosts = $derived.by(() => {
		const currentPostPath = metadata.path;
		const currentPostLocale = metadata.locale;
		const currentPostTags = metadata.tags || [];

		const candidates = posts
			.filter((post) => {
				return post.path !== currentPostPath && post.locale === currentPostLocale;
			})
			.map((post) => {
				const commonTagsCount = post.tags
					? post.tags.filter((tag) => currentPostTags.includes(tag)).length
					: 0;
				let score = 0;
				if (commonTagsCount > 0) {
					score = 100 + commonTagsCount;
				}
				return { ...post, score };
			})
			.sort((a, b) => {
				if (b.score !== a.score) {
					return b.score - a.score;
				}
				// Sort by date if scores are equal or both are 0 (no common tags)
				return new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime();
			});

		return candidates.slice(0, 2);
	});
</script>

{#if relatedPosts.length > 0}
	<div class="not-prose mt-12">
		<h3 class="text-foreground mb-6 text-2xl font-semibold tracking-tight">
			{m['blog.related_posts']()}
		</h3>
		<div class="grid gap-6 md:grid-cols-2">
			{#each relatedPosts as post (post.slug)}
				<BlogCard {post} />
			{/each}
		</div>
	</div>
{/if}
