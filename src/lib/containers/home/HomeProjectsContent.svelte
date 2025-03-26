<script lang="ts">
	import type { CarouselAPI } from '$lib/components/ui/carousel/context';
	import * as Carousel from '$lib/components/ui/carousel';
	import type { Project } from '$lib/utils/projects';
	import {
		IconArrowRight,
		IconCalendar,
		IconChevronLeft,
		IconChevronRight,
		IconExternalLink
	} from '@tabler/icons-svelte';
	import * as m from '$paraglide/messages';
	import { localizeHref } from '$paraglide/runtime';
	import { route } from '$lib/ROUTES';
	import { Button } from '$lib/components/ui/button';
	import { translate } from '$lib/utils/i18n';
	import { WheelGesturesPlugin } from 'embla-carousel-wheel-gestures';
	import Autoplay from 'embla-carousel-autoplay';
	import { watch } from 'runed';

	type Props = {
		project: Project;
		index: number;
	};

	let { project, index }: Props = $props();

	let carouselApi = $state<CarouselAPI>();

	watch(
		() => carouselApi,
		() => {
			if (carouselApi) {
				const autoplayPlugin = carouselApi.plugins().autoplay;

				setTimeout(() => {
					autoplayPlugin.play();
				}, 1000 * index);
			}
		}
	);
</script>

<!-- Title and description grouped together -->
<div class="space-y-6">
	<div>
		<div class="mb-3 flex w-full flex-col items-start gap-2 md:flex-row md:items-center md:gap-4">
			<div class="flex items-center gap-4">
				<project.icon class="text-primary size-6" />
				<h3 class="text-2xl">{project.name}</h3>
			</div>
			{#if project.link}
				<a
					href={project.link}
					target="_blank"
					rel="noreferrer"
					class="text-primary inline-flex items-center gap-1 text-sm font-medium hover:underline md:ml-auto"
				>
					{m['common.visit_site']()}
					<IconExternalLink class="size-4" />
				</a>
			{/if}
		</div>

		<p class="text-muted-foreground max-w-3xl">
			{project.description}
		</p>
	</div>

	{#if project.images}
		<Carousel.Root
			class="-mr-4 lg:pr-4"
			setApi={(emblaApi) => (carouselApi = emblaApi)}
			opts={{ loop: true, align: 'start' }}
			plugins={[
				WheelGesturesPlugin(),
				Autoplay({
					delay: 5000,
					playOnInit: false
				})
			]}
		>
			<Carousel.Content>
				{#each project.images as image}
					<Carousel.Item class="basis-[80%] md:basis-[45%] lg:basis-[30%]">
						<div class="relative h-56 w-full overflow-hidden rounded-md border">
							{#if typeof image === 'string'}
								<img
									src={image}
									alt={project.name}
									class="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
								/>
							{:else if typeof image === 'object'}
								<enhanced:img
									src={image}
									alt={project.name}
									class="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
								/>
							{/if}
						</div>
					</Carousel.Item>
				{/each}
			</Carousel.Content>
		</Carousel.Root>
	{/if}

	<!-- Project links -->
	<div class="flex flex-col items-start gap-4 md:flex-row md:items-center md:gap-4">
		<div class="text-muted-foreground flex items-center gap-4 text-sm">
			<div class="flex items-center gap-2">
				<Button
					size="icon"
					variant="outline"
					class="size-8 cursor-pointer rounded-full"
					onclick={() => carouselApi?.scrollPrev()}
				>
					<IconChevronLeft class="size-4" />
				</Button>
				<Button
					size="icon"
					variant="outline"
					class="size-8 cursor-pointer rounded-full"
					onclick={() => carouselApi?.scrollNext()}
				>
					<IconChevronRight class="size-4" />
				</Button>
			</div>
			<div class="flex items-center gap-2">
				{#if project.startedAt}
					<IconCalendar class="size-4" />
					<span>{project.startedAt?.getFullYear()}</span>
					<IconArrowRight class="-mx-1 size-4" />
					{#if project.endedAt}
						<span>{project.endedAt?.getFullYear()}</span>
					{:else}
						<span>{m.present()}</span>
					{/if}
				{:else}
					<IconCalendar class="size-4" />
					<span>{m.soon_tm()}</span>
				{/if}
			</div>
		</div>

		<a
			href={localizeHref(route('/projets'))}
			class="text-primary hover:border-b-primary mt-[1px] inline-flex items-center gap-1 border-b border-b-transparent text-sm font-medium"
		>
			{m['common.view_case_study']()}
			<IconArrowRight class="size-4" />
		</a>

		<!-- <div class="ml-auto flex items-center gap-2">
			{#each { length: project.images?.length || 0 }, rank}
				<div
					class={cn(
						'bg-background size-5 rounded-full border-[3px] transition-all',
						rank === currentSlide && 'border-primary'
					)}
				></div>
			{/each}
		</div> -->
	</div>
</div>
