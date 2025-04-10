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
	import AnimatedBadge from '$lib/components/animated/AnimatedBadge.svelte';

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

	<div class="kcontainer relative flex flex-col gap-24 px-4">
		<div class="mt-12 space-y-4 text-center" in:fly={{ y: 20, duration: 800 }}>
			<AnimatedBadge>
				<span class="flex items-center gap-2">
					💻
					<hr class="bg-muted-foreground h-4 w-[1px] shrink-0" />
					{m['home.projects.above_title']()}
				</span>
			</AnimatedBadge>
			<h2
				class="from-foreground to-muted-foreground bg-gradient-to-br bg-clip-text text-4xl font-bold text-transparent sm:text-5xl"
			>
				{m['home.projects.title']()}
			</h2>
			<p class="text-muted-foreground mx-auto max-w-[45ch] text-lg">
				{m['home.projects.description']()}
			</p>
		</div>

		<!-- Projects showcase -->
		<div class="flex flex-col gap-24">
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
		<div class="flex justify-center" in:fade={{ duration: 800, delay: 800 }}>
			<Button class="group gap-2" href={localizeHref(route('/projets'))}>
				{m['projects.view_all']()}
				<IconArrowRight class="h-4 w-4 transition-transform group-hover:translate-x-1" />
			</Button>
		</div>
	</div>
</section>
