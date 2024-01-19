<script lang="ts">
	import { route } from '$lib/ROUTES';
	import type { BlogPost } from '$lib/typings/blog';
	import CardGlass from './CardGlass.svelte';

	export let post: BlogPost;
</script>

<CardGlass href={route('/blog/[slug]', { slug: post.slug })}>
	{post.title}
</CardGlass>
