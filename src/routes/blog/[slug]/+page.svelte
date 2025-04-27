<script lang="ts">
	import PostPage from '$lib/components/markdown/PostPage.svelte';

	let { data } = $props();
</script>

<PostPage component={data.component} {...data.metadata} />
