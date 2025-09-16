<script lang="ts">
	import PostPage from '$lib/components/markdown/post/PostPage.svelte';

	let { data } = $props();
</script>

<PostPage component={data.component} metadata={data.metadata} />
