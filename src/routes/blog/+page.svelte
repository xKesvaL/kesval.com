<script lang="ts">
	import BlogList from '$lib/containers/blog/BlogList.svelte';
	import { languageTag } from '$paraglide/runtime';
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<BlogList posts={data.posts[languageTag()]} />
