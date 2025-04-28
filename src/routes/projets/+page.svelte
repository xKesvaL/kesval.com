<script lang="ts">
	import ProjectsHero from '$lib/containers/projects/ProjectsHero.svelte';
	import { animateAppear } from '$lib/utils/animation';
</script>

<div use:animateAppear>
	<ProjectsHero />
</div>
