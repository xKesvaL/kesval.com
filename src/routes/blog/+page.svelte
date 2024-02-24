<script lang="ts">
	import BlogList from '$lib/containers/blog/BlogList.svelte';

	export let data;
</script>

<BlogList posts={data.posts} />
