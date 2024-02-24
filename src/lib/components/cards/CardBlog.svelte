<script lang="ts">
	import { route } from '$lib/ROUTES';
	import type { BlogPost } from '$lib/typings/blog';
	import CardGlass from './CardGlass.svelte';

	export let post: BlogPost;
	export let isLazy = false;

	$: console.log(post);
</script>

<CardGlass class="@container/card" classBg="p-0" href={route('/blog/[slug]', { slug: post.slug })}>
	<div class="grid gap-4 @2xl/card:grid-cols-2">
		{#if post.coverImage}
			<div class="max-h-[22rem] min-h-64">
				<enhanced:img
					src={post.coverImage}
					alt={post.coverImageAlt}
					loading={isLazy ? 'lazy' : 'eager'}
				/>
			</div>
		{/if}
		<div class="flex flex-col p-4">
			<h3 class="font-title text-lg">
				{post.title}
			</h3>
			<span class="text-sm text-muted-foreground">
				{post.readingTime}
			</span>
			<p>
				{post.excerpt}
			</p>
		</div>
	</div>
</CardGlass>
