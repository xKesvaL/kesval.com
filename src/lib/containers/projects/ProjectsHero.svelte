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

<section class="section-hero relative">
	<!-- Background pattern -->
	<div class="absolute inset-0 -z-10 opacity-100">
		<div
			class="from-background absolute h-full w-full bg-gradient-to-b via-transparent via-30% to-transparent"
		></div>
		<div
			class="from-background absolute h-full w-full bg-gradient-to-t via-transparent via-10% to-transparent"
		></div>
		<div class="bgc-grid h-full w-full"></div>
	</div>

	<div class="kcontainer gapc-md md:gapc-lg lg:gapc-xl flex flex-col px-4">
		<h1 class="max-w-[30ch]">Projets</h1>
		<div class="grid gap-16 md:grid-cols-2">
			{#each showedProjects as project, index (project.id)}
				<ProjectCard {project} {index} />
			{/each}
		</div>
	</div>
</section>
