<script lang="ts">
	import { filterProjects, highlightedProjects } from '$lib/utils/projects';
	import * as m from '$paraglide/messages';
	import { Button } from '$lib/components/ui/button';
	import { IconExternalLink, IconArrowRight } from '@tabler/icons-svelte';
	import { fly, fade } from 'svelte/transition';
	import ProjectCard from '$lib/containers/projects/ProjectCard.svelte';
	import { route } from '$lib/ROUTES';
	import { localizeHref } from '$paraglide/runtime';
	import { onMount } from 'svelte';

	let showedProjects = $derived.by(() => highlightedProjects);
</script>

<section class="section relative min-h-[70vh] overflow-hidden py-24">
	<!-- Background pattern -->
	<div class="absolute inset-0 -z-10 opacity-20">
		<div
			class="absolute h-full w-full bg-[radial-gradient(circle_5000px_at_50%_200px,var(--color-background),transparent),linear-gradient(transparent_85%,var(--color-background))]"
		></div>
		<div
			class="grid h-full w-full grid-cols-4 gap-px opacity-100 md:grid-cols-6 xl:grid-cols-8 2xl:grid-cols-[repeat(auto-fit,minmax(10vw,1fr))]"
		>
			{#each Array(100) as _}
				<div class="border-foreground aspect-square border-t border-l"></div>
			{/each}
		</div>
	</div>

	<div class="kcontainer relative px-4">
		<div class="mb-16 space-y-4 text-center" in:fly={{ y: 20, duration: 800 }}>
			<div
				class="bg-primary/10 mx-auto mb-2 flex w-fit items-center justify-center rounded-full px-3 py-1"
			>
				<span class="text-primary text-xs font-medium tracking-wider"
					>{m['projects.label']?.() ?? 'SELECTED WORK'}</span
				>
			</div>
			<h2
				class="from-foreground to-muted-foreground bg-gradient-to-br bg-clip-text text-4xl font-bold text-transparent sm:text-5xl"
			>
				{m['projects.title']?.() ?? 'Our Projects'}
			</h2>
			<p class="text-muted-foreground mx-auto max-w-[45ch] text-lg">
				{m['projects.description']?.() ?? 'Discover our latest work and projects'}
			</p>
		</div>

		<!-- Projects showcase -->
		<div class="my-16 flex flex-col gap-24">
			{#each showedProjects as project, i (project.id)}
				<div
					class="group relative"
					class:md:flex-row-reverse={i % 2 === 1}
					in:fly={{ y: 40, duration: 800, delay: 200 + i * 150 }}
				>
					<ProjectCard {project} index={i} type="highlighted" />
				</div>
			{/each}
		</div>

		<!-- View all projects button -->
		<div class="mt-12 flex justify-center" in:fade={{ duration: 800, delay: 800 }}>
			<a href={localizeHref(route('/projets'))}>
				<Button variant="outline" size="lg" class="group gap-2">
					{m['projects.viewAll']?.() ?? 'View all projects'}
					<IconArrowRight class="h-4 w-4 transition-transform group-hover:translate-x-1" />
				</Button>
			</a>
		</div>
	</div>
</section>
