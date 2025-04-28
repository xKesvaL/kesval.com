<script lang="ts">
	import { route } from '$lib/ROUTES';
	import { Card, CardHeader, CardContent, CardFooter } from '$lib/components/ui/card';
	import { Badge } from '$lib/components/ui/badge';
	import { Button } from '$lib/components/ui/button';
	import { IconClock, IconTags } from '@tabler/icons-svelte';
	import type { Post } from '$content/index';

	type Props = {
		post: Post;
	};

	let { post }: Props = $props();

	const slug = $derived(post.slugClean);
</script>

<Card
	class="group overflow-hidden rounded-lg border transition-all duration-300 ease-in-out hover:shadow-md"
>
	<CardHeader class="p-0">
		<div class="overflow-hidden">
			<img
				src={post.cover.src.replace('/static', '/blog')}
				alt={post.title}
				class="h-48 w-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
			/>
		</div>
	</CardHeader>
	<CardContent class="p-4">
		<h3 class="mb-2 text-xl leading-tight font-semibold">{post.title}</h3>
		<div class="text-muted-foreground mb-3 flex flex-wrap items-center gap-x-4 gap-y-1 text-sm">
			<div class="flex items-center gap-1.5">
				<IconClock class="h-4 w-4" />
				<span>{post.metadata.readingTime} min read</span>
			</div>
			{#if post.tags && post.tags.length > 0}
				<div class="flex items-center gap-1.5">
					<IconTags class="h-4 w-4" />
					<div class="flex flex-wrap gap-1">
						{#each post.tags as tag}
							<Badge variant="secondary" class="text-xs">{tag}</Badge>
						{/each}
					</div>
				</div>
			{/if}
		</div>
		<p class="text-muted-foreground mb-4 line-clamp-3 text-sm">{post.excerpt}</p>
	</CardContent>
	<CardFooter class="p-4 pt-0">
		{#if slug}
			<Button
				variant="link"
				size="sm"
				href={route('/blog/[slug]', { slug })}
				class="p-0 font-medium">Read more &rarr;</Button
			>
		{/if}
	</CardFooter>
</Card>
