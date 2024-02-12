<script lang="ts">
	import CardGlass from '$lib/components/cards/CardGlass.svelte';
	import { Button } from '$lib/components/ui/button';
	import { FEATURED_PROJECTS, PROJECTS } from '$lib/data/work';
	import HomeWorkIcons from './HomeWorkIcons.svelte';
	import { route } from '$lib/ROUTES';

	import * as m from '$paraglide/messages';
	import { getI18n } from '$lib/utils/functions';
	import { languageTag } from '$paraglide/runtime';

	let expandedIndex = '1';

	const projects = [...PROJECTS].filter((p) => FEATURED_PROJECTS.includes(p.name));

	const onProjectClick = (e: MouseEvent | KeyboardEvent) => {
		const target = (e.target as HTMLElement)?.closest('.project');
		if (!target) return;
		expandedIndex = target.id.replace('project-', '');
	};
</script>

<section class="section container flex flex-col">
	<h2 class="text-center text-4xl lg:text-5xl">
		{m.home_work_title()}
	</h2>
	<!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
	<div
		class="projects flex flex-col justify-center gap-4 lg:h-80 lg:flex-row"
		role="region"
		on:click={onProjectClick}
		on:keypress={onProjectClick}
	>
		{#each projects as project, i (project.id)}
			<div
				class="project relative isolate cursor-pointer overflow-hidden transition-all duration-300"
				id="project-{i + 1}"
				data-expanded={i + 1 === parseInt(expandedIndex)}
			>
				<CardGlass
					styleBg="padding: var(--panel-padding); padding-right: var(--panel-padding-right);"
					scale={1}
				>
					<h3 class="project-heading" id="project-{i + 1}-heading">
						<button
							class="project-trigger flex flex-row-reverse items-center justify-end"
							aria-controls="project-{i + 1}-content"
							aria-expanded={i + 1 === parseInt(expandedIndex)}
						>
							<span class="project-title relative isolate grid items-center text-2xl lg:text-3xl">
								{getI18n(`projects_${project.name}_name`)}
							</span>
							<img
								class="project-icon"
								src={project.imageUrl}
								alt={getI18n(`projects_${project.name}_name`)}
							/>
							<!-- <svg class="project-icon">
								<use
									href="#{project.languages[0]}-logo"
									xlink:href="#{project.languages[0]}-logo"
								/>
							</svg> -->
						</button>
					</h3>
					<div
						class="project-content"
						id="project-{i + 1}-content"
						aria-labelledby="project-{i + 1}-heading"
						aria-hidden={i + 1 === parseInt(expandedIndex)}
						role="region"
					>
						<div class="project-more mx-4 mt-4 translate-y-8 opacity-0">
							{getI18n(`projects_${project.name}_description`)}
						</div>
					</div>
					<div
						class="project-button pointer-events-none absolute bottom-4 right-4 z-10 translate-x-8 opacity-0 lg:bottom-8 lg:right-8"
					>
						<Button href={project.href} variant="secondary">
							{m.home_work_discoverProject({ project: getI18n(`projects_${project.name}_name`) })}
						</Button>
					</div>
				</CardGlass>
			</div>
		{/each}
	</div>
	<Button class="mx-auto" href={route('/work')}>
		{m.home_work_discoverMore()}
	</Button>
</section>

<HomeWorkIcons />

<style lang="scss">
	section {
		--ct-max-width: 72rem;

		.projects {
			--button-size: 3.5rem;
			--panel-padding: 0.5rem;
			--panel-gap: 0.5rem;
			--panel-padding-right: 0;

			/* @include mq(lg) {
				--panel-gap: 1rem;
				--panel-padding: 0.75rem;
			} */

			.project {
				flex-basis: calc(var(--button-size) + (var(--panel-padding) * 2));
				background: linear-grad-primary(135deg, 0.025), linear-grad-primary(315deg, 0.025);

				will-change: flex-basis, flex-grow;

				&[data-expanded='true'] {
					flex-basis: clamp(20rem, 30vh, 27.5rem);
					flex-grow: 1;

					/* @include mq(md) {
						--panel-padding-right: calc(
							var(--panel-padding) + var(--button-size) + var(--panel-gap)
						);
					} */

					& .project-content .project-more {
						transform: translateY(0);
						opacity: 1;
						transition:
							transform 0.3s 0.3s,
							opacity 0.3s 0.3s;
					}

					& .project-button {
						opacity: 1;
						transform: translateX(0);
						transition:
							transform 0.3s 0.3s,
							opacity 0.3s 0.3s;
						pointer-events: all;
					}
				}

				&-more {
					/* @include mq(xs) {
						font-size: 1.15rem;
					}

					@include mq(md) {
						margin-left: calc(var(--button-size) + var(--panel-gap));
					} */
				}

				&-heading {
					min-width: calc(var(--button-size) + (var(--panel-padding) * 2));
				}

				&-trigger {
					width: 1000%;
					gap: var(--panel-gap);
				}

				&-icon {
					backdrop-filter: blur(0.5rem) saturate(5);
					width: var(--button-size);

					aspect-ratio: 1/1;
					border-radius: 50%;
					padding: 0.5rem;

					/* @include mq(md) {
						background: radial-gradient(
								hsl(var(--secondary-500) / 0.15),
								hsl(var(--base-200) / 0.5)
							),
							radial-gradient(hsl(var(--base-200) / 0.2), hsl(var(--base-200) / 0.2));
					} */
				}
			}
		}
	}
</style>
