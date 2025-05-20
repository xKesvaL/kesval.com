<script lang="ts">
	import { route } from '$lib/ROUTES';
	import { Card, CardHeader, CardContent, CardFooter } from '$lib/components/ui/card';
	import { Badge } from '$lib/components/ui/badge';
	import { Button } from '$lib/components/ui/button';
	import { IconClock, IconTags } from '@tabler/icons-svelte';
	import type { Post } from '$content/index';
	import * as m from '$paraglide/messages';

	type Props = {
		post: Post;
	};

	let { post }: Props = $props();

	const slug = $derived(post.slugClean);
</script>

<Card
	class="group overflow-hidden rounded-xl border-2 transition-all duration-300 ease-in-out hover:shadow-md"
>
	<CardHeader class="border-b-2 p-0">
		<div
			class="relative h-72 w-full overflow-hidden bg-cover bg-center"
			style="background-image: url('{post.cover.blurDataURL}');"
		>
			<img
				src={post.cover.src.replace('/static', '/posts')}
				alt={post.title}
				class="absolute inset-0 h-full w-full object-cover opacity-0 transition duration-500 ease-in-out group-hover:scale-105"
				onload={(e) => {
					(e.target as HTMLImageElement).style.opacity = '1';
				}}
			/>
		</div>
	</CardHeader>
	<CardContent class="p-4">
		<h3 class="mb-2 text-xl leading-tight font-semibold">{post.title}</h3>
		<div class="text-muted-foreground mb-3 flex flex-wrap items-center gap-x-4 gap-y-1 text-sm">
			<div class="flex items-center gap-1.5">
				<IconClock class="h-4 w-4" />
				<span>{m['blog.x_min_read']({ readingTime: post.metadata.readingTime })}</span>
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
