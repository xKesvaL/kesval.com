<script lang="ts">
	import BlogList from '$lib/containers/blog/BlogList.svelte';
	import { posts } from '$lib/data/posts';
	import { languageTag } from '$paraglide/runtime';
	import type { PageData } from './$types';
</script>

<BlogList posts={posts[languageTag()]} />
