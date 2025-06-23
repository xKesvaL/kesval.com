<script lang="ts">
	import ProjectsHero from '$lib/containers/projects/ProjectsHero.svelte';
	import { animateAppear } from '$lib/utils/animation';

	let { data } = $props();
</script>

<div use:animateAppear>
	<ProjectsHero projects={data.projects} />
</div>
