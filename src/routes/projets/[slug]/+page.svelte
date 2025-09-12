<script lang="ts">
	import ProjectPage from '$lib/components/markdown/project/ProjectPage.svelte';

	let { data } = $props();
</script>

<ProjectPage component={data.component} metadata={data.metadata} />
