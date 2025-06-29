<script lang="ts">
	import BlogHero from '$lib/containers/blog/BlogHero.svelte';

	let { data } = $props();
</script>

<BlogHero posts={data.posts} />
