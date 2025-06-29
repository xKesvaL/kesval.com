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

		return candidates.slice(0, 3);
	});
</script>

{#if relatedPosts.length > 0}
	<div class="mt-12">
		<h3 class="mb-6 text-2xl font-semibold tracking-tight">
			{m['blog.related_posts']()}
		</h3>
		<div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
			{#each relatedPosts as post (post.slug)}
				<Card class="overflow-hidden transition-shadow hover:shadow-lg">
					<a href={localizeHref(`/blog/${post.slugClean}`)} data-sveltekit-preload-data="hover">
						{#if post.cover}
							<img
								src={post.cover.src}
								alt={post.title}
								class="aspect-video w-full object-cover"
								width={post.cover.width}
								height={post.cover.height}
							/>
						{/if}
						<CardHeader>
							<CardTitle class="text-lg">{post.title}</CardTitle>
							{#if post.excerpt}
								<CardDescription class="mt-2 line-clamp-3 text-sm">
									{post.excerpt}
								</CardDescription>
							{/if}
						</CardHeader>
					</a>
					<CardContent>
						<p class="text-muted-foreground text-xs">
							{new Date(post.publishedAt).toLocaleDateString(metadata.locale, {
								year: 'numeric',
								month: 'long',
								day: 'numeric'
							})}
						</p>
					</CardContent>
				</Card>
			{/each}
		</div>
	</div>
{/if}
