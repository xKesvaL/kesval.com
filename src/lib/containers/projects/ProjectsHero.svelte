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
	<div class="grid gap-16 md:grid-cols-2">
		{#each projects as project, index (project.id)}
			<ProjectCard {project} {index} />
		{/each}
	</div>
</section>

<style>
	:global(body) {
		/* DOTS */
		/* background-image: radial-gradient(
			color-mix(in oklab, var(--color-muted-foreground) 10%, transparent) 1px,
			transparent 1px
		); */

		/* GRID */
		background-image:
			linear-gradient(
				to bottom,
				var(--color-background) calc(var(--nav-height) + var(--nav-spacing)),
				transparent calc((var(--nav-height) + var(--nav-spacing)) * 10)
			),
			linear-gradient(
				to right,
				color-mix(in oklab, var(--color-muted-foreground) 5%, transparent) 1px,
				transparent 1px
			),
			linear-gradient(
				to bottom,
				color-mix(in oklab, var(--color-muted-foreground) 5%, transparent) 1px,
				transparent 1px
			);
		background-size:
			100% 100%,
			160px 160px,
			160px 160px;
	}
</style>
