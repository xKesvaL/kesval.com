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

<Card class="group transition-shadow hover:shadow-lg">
	<CardHeader>
		<img
			src={post.cover.src.replace('/static', '/blog')}
			alt={post.title}
			class="h-48 w-full rounded-t-lg object-cover"
		/>
	</CardHeader>
	<CardContent>
		<h3 class="mb-2 text-lg font-semibold">{post.title}</h3>
		<div class="text-muted-foreground mb-2 flex items-center gap-2 text-sm">
			<IconClock class="h-4 w-4" />
			<span>{post.metadata.readingTime} min read</span>
			{#if post.tags}
				<IconTags class="ml-4 h-4 w-4" />
				{#each post.tags as tag}
					<Badge variant="outline" class="ml-1">{tag}</Badge>
				{/each}
			{/if}
		</div>
		<p class="text-muted-foreground line-clamp-3">{post.excerpt}</p>
	</CardContent>
	<CardFooter>
		{#if slug}
			<Button variant="ghost" size="sm" href={route('/blog/[slug]', { slug })}>Read more</Button>
		{/if}
	</CardFooter>
</Card>
