<script lang="ts">
	import { filterProjects, projects } from '$lib/utils/projects';
	import * as m from '$paraglide/messages';
	import ProjectCard from './ProjectCard.svelte';

	let showedProjects = $derived.by(() => filterProjects(projects));

	let limit = $state(18);
	let showMore = () => {
		limit += 12;
	};

	$inspect(showedProjects);
</script>

<section class="kcontainer section-hero px-4">
	<h1 class="max-w-[30ch]">Projets</h1>
	<div class="grid gap-4 md:grid-cols-2">
		{#each projects as project (project.id)}
			<ProjectCard {project} />
		{/each}
	</div>
</section>
