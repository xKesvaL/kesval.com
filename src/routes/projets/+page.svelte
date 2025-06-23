<script lang="ts">
	import ProjectsHero from '$lib/containers/projects/ProjectsHero.svelte';

	let { data } = $props();
</script>

<ProjectsHero projects={data.projects} />
