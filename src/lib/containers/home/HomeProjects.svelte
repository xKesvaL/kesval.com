<script lang="ts">
	import { route } from '$lib/ROUTES';
	import { projects } from '$lib/utils/projects';
	import * as m from '$paraglide/messages';
	import { localizeHref } from '$paraglide/runtime';
	import { IconArrowRight } from '@tabler/icons-svelte';
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

<section class="kcontainer section flex flex-col gap-8 px-4">
	<div class="flex flex-col gap-2">
		<span class="suptitle">
			{m.home_projects_above_title()}
		</span>
		<h2>
			{m.home_projects_title()}
		</h2>
	</div>
	{#if projectsToShow.length}
		<ul class="vertical-disclosures" use:hoverProject>
			{#each projectsToShow as project, i (project.name)}
				<li class="" data-active={i === 0}>
					<article class="flex h-full items-end md:flex-col md:items-start md:justify-end">
						<img src={project.image} alt={project.name} />
						<h3 class="text-xl font-medium tracking-wide uppercase">
							{project.name}
						</h3>
						<div class="flex w-full flex-col gap-4 md:gap-6">
							<p
								class="text-foreground/90 absolute top-14 right-6 left-6 md:top-auto md:bottom-[4.5rem] md:w-max"
							>
								{project.description}
							</p>
							<div
								class="relative z-10 flex flex-row-reverse items-center gap-4 md:h-auto md:flex-row md:gap-6"
							>
								<project.icon class="size-6 shrink-0" />
								<div class="bar bg-foreground/50 md:bg-border h-[1px]"></div>
								<a class="flex items-center gap-2 leading-0" href={localizeHref(route('/projets'))}>
									{m.see_more()}
									<IconArrowRight class="size-4" />
								</a>
							</div>
						</div>
					</article>
				</li>
			{/each}
		</ul>
	{/if}
</section>
