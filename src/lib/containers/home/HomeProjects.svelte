<script lang="ts">
	import { route } from '$lib/ROUTES';
	import { projects } from '$lib/utils/projects';
	import * as m from '$paraglide/messages';
	import { localizeHref } from '$paraglide/runtime';
	import type { Action } from 'svelte/action';

	const PROJECTS_COUNT = 6;

	const projectsToShow = projects
		.slice(projects.length - PROJECTS_COUNT, projects.length)
		.reverse();

	const hoverProject: Action<HTMLUListElement> = (list) => {
		const items = list.querySelectorAll('li');
		const setIndex = (event: FocusEvent) => {
			const closest = (event.target as HTMLUListElement).closest('li');
			if (closest) {
				const index = [...items].indexOf(closest);
				const cols = new Array(list.children.length)
					.fill(0)
					.map((_, i) => {
						items[i].dataset.active = (index === i).toString();
						return index === i ? '10fr' : '1fr';
					})
					.join(' ');
				list.style.setProperty('--disclosure-cols', cols);
			}
		};

		list.addEventListener('focus', setIndex, true);
		list.addEventListener('click', setIndex);
		list.addEventListener('pointermove', setIndex);
	};
</script>

<section class="kcontainer flex flex-col gap-8 px-4 py-8 md:py-24">
	<div class="flex flex-col gap-2">
		<span class="text-primary text-xs tracking-widest uppercase">
			{m.home_projects_above_title()}
		</span>
		<h2 class="text-3xl font-medium">
			{m.home_projects_title()}
		</h2>
	</div>
	{#if projectsToShow.length}
		<ul class="vertical-disclosures" use:hoverProject>
			{#each projectsToShow as project, i (project.name)}
				<li
					class="px-4 py-2 data-[active=true]:py-4 md:p-6 data-[active=true]:md:py-6"
					data-active={i === 0}
				>
					<a
						href={localizeHref(route('/projets'))}
						class="flex h-full items-center md:flex-col md:items-start md:justify-end"
					>
						<img src={project.image} alt={project.name} class="" />
						<h3
							class="absolute top-4 left-[37px] w-max origin-[0_50%] rotate-90 text-xl font-medium tracking-wide uppercase"
						>
							{project.name}
						</h3>
						<div class="flex w-full flex-col gap-4 md:gap-6">
							<p class="absolute bottom-[4.5rem] w-max">{project.description}</p>
							<div class="flex items-center gap-4 md:gap-6">
								<project.icon class="size-6 shrink-0" />
								<div class="bg-border h-[1px] grow"></div>
							</div>
						</div>
					</a>
				</li>
			{/each}
		</ul>
	{/if}
</section>
