<script lang="ts">
	import Button from '$lib/components/ui/button/button.svelte';
	import { route } from '$lib/ROUTES';
	import { translate } from '$lib/utils/i18n';
	import { highlightedProjects } from '$lib/utils/projects';
	import { cn } from '$lib/utils/ui';
	import * as m from '$paraglide/messages';
	import { localizeHref } from '$paraglide/runtime';
	import { IconArrowRight, IconCalendar, IconExternalLink } from '@tabler/icons-svelte';
	import { scrollY, innerHeight } from 'svelte/reactivity/window';
	import HomeProjectsContent from './HomeProjectsContent.svelte';

	// References for timeline elements
	let timelineSection = $state<HTMLElement>();

	// progress follows center of screen when timeline is in view
	let progress = $derived.by(() => {
		if (!timelineSection) return 0;

		scrollY.current;

		const timelineRect = timelineSection.getBoundingClientRect();
		const timelineHeight = timelineRect.height;
		const timelineTop = timelineRect.top;
		const windowHeight = innerHeight.current || 0;

		if (timelineTop < windowHeight && timelineTop + timelineHeight > 0) {
			const progressValue = Math.min(
				1,
				Math.max(0, (windowHeight - timelineTop) / (windowHeight + timelineHeight))
			);
			return Math.min(100, progressValue * 105);
		}

		return 0;
	});
</script>

<section class="kcontainer section flex flex-col gap-8 px-4">
	<div class="flex flex-col gap-2">
		<span class="suptitle">
			{translate('home.projects.above_title')}
		</span>
		<h2>
			{translate('home.projects.title')}
		</h2>
	</div>

	{#if highlightedProjects.length}
		<div class="relative mt-8">
			<!-- Timeline container - wider now -->
			<div class="absolute left-4 h-full w-1 -translate-x-1/2" bind:this={timelineSection}>
				<!-- Background timeline line -->
				<div class="bg-primary/10 absolute left-0 h-full w-full rounded-full"></div>
				<!-- Active progress line that grows with scroll -->
				<div
					class="bg-primary absolute top-0 left-0 w-full rounded-full"
					style="height: {progress}%"
				></div>
			</div>
			<!-- Projects - always stacked -->
			<div class="flex flex-col space-y-16">
				{#each highlightedProjects as project, index (project.id)}
					<div class="relative pt-5 pl-16">
						<!-- Timeline dot -->
						<div
							class={cn(
								'bg-primary/10 absolute top-6 left-4 z-10 flex h-6 w-6 -translate-x-1/2 transform items-center justify-center rounded-lg shadow-md backdrop-blur-2xl transition',
								progress > 33 * 1.1 * index && 'bg-primary/100'
							)}
						>
							<div class="bg-background h-4 w-4 rounded"></div>
						</div>

						<!-- Timeline date indicator -->
						<div
							class="bg-background absolute -top-[8.25px] left-0 z-10 flex h-8 items-center text-sm font-medium"
						>
							{project.startedAt ? project.startedAt.getFullYear() : new Date().getFullYear()}
						</div>

						<!-- Project content -->
						<HomeProjectsContent {project} {index} />
					</div>
				{/each}
			</div>
		</div>

		<div class="mt-8 flex justify-center">
			<Button href={localizeHref(route('/projets'))}>
				{m.see_all()}
				<IconArrowRight class="size-4" />
			</Button>
		</div>
	{/if}
</section>
