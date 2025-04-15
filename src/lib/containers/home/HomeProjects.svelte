<script lang="ts">
	import { highlightedProjects } from '$lib/utils/projects';
	import * as m from '$paraglide/messages';
	import { Button } from '$lib/components/ui/button';
	import { IconArrowRight } from '@tabler/icons-svelte';
	import ProjectCard from '$lib/containers/projects/ProjectCard.svelte';
	import { route } from '$lib/ROUTES';
	import { localizeHref } from '$paraglide/runtime';
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
		<div class="mt-12 space-y-4 text-center">
			<AnimatedBadge class="animate-appear">
				<span class="flex items-center gap-2">
					💻
					<hr class="bg-muted-foreground h-4 w-[1px] shrink-0" />
					{m['home.projects.above_title']()}
				</span>
			</AnimatedBadge>
			<h2
				class="from-foreground to-muted-foreground animate-appear bg-gradient-to-br bg-clip-text text-4xl font-bold text-transparent sm:text-5xl"
			>
				{m['home.projects.title']()}
			</h2>
			<p class="text-muted-foreground animate-appear mx-auto max-w-[45ch] text-lg">
				{m['home.projects.description']()}
			</p>
		</div>

		<!-- Projects showcase -->
		<div class="flex flex-col gap-24">
			{#each showedProjects as project, i (project.id)}
				<div class="group animate-appear relative" class:md:flex-row-reverse={i % 2 === 1}>
					<ProjectCard {project} index={i} type="highlighted" />
				</div>
			{/each}
		</div>

		<!-- View all projects button -->
		<div class="animate-appear flex justify-center">
			<Button class="group gap-2" href={localizeHref(route('/projets'))}>
				{m['projects.view_all']()}
				<IconArrowRight class="h-4 w-4 transition-transform group-hover:translate-x-1" />
			</Button>
		</div>
	</div>
</section>
