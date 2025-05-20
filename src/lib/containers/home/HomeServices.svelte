<script lang="ts">
	import * as m from '$paraglide/messages';
	import { Button } from '$lib/components/ui/button';
	import { Card } from '$lib/components/ui/card';
	import { Badge } from '$lib/components/ui/badge';
	import * as Accordion from '$lib/components/ui/accordion';
	import { route } from '$lib/ROUTES';
	import { localizeHref } from '$paraglide/runtime';
	import { Tween } from 'svelte/motion';
	import AnimatedBadge from '$lib/components/animated/AnimatedBadge.svelte';
	import useInView from '$lib/actions/inView';
	import { cn } from '$lib/utils/ui';
	import {
		IconBulb,
		IconLayoutDashboard,
		IconPalette,
		IconCode,
		IconRocket,
		IconTool,
		IconArrowRight,
		IconTargetArrow,
		IconChevronDown
	} from '@tabler/icons-svelte';
	import { SvelteSet } from 'svelte/reactivity';
	import { IsMobile } from '$lib/hooks/is-mobile.svelte';
	import { tick } from 'svelte';

	/**
	 * Service step definition
	 */
	interface ServiceStep {
		id: string;
		step: number;
		icon: typeof IconBulb;
		features?: number;
		tools?: string[];
	}

	/**
	 * Define the services as a step-by-step process
	 */
	const serviceSteps = [
		{
			id: 'discovery',
			step: 1,
			icon: IconBulb,
			features: 4
		},
		{
			id: 'content',
			step: 2,
			icon: IconLayoutDashboard,
			features: 4,
			tools: ['Figma', 'Miro', 'Notion']
		},
		{
			id: 'design',
			step: 3,
			icon: IconPalette,
			features: 4,
			tools: ['Figma', 'Adobe XD', 'Photoshop']
		},
		{
			id: 'development',
			step: 4,
			icon: IconCode,
			features: 4,
			tools: ['React/Vue/Svelte', 'Next.js/Nuxt/SvelteKit', 'TypeScript', 'Tailwind CSS']
		},
		{
			id: 'deployment',
			step: 5,
			icon: IconRocket,
			features: 4,
			tools: ['Vercel', 'Netlify', 'AWS', 'Docker']
		},
		{
			id: 'maintenance',
			step: 6,
			icon: IconTool,
			features: 4
		}
	] as const satisfies ServiceStep[];

	type ServiceStepId = (typeof serviceSteps)[number]['id'];

	// Store which steps are visible in the viewport
	let visibleSteps = new SvelteSet<string>();

	// Calculate progress percentage for timeline animation
	let timelineProgress = new Tween(0, {});

	// Handler for when a step becomes visible
	function handleStepVisible(stepId: string, entry: IntersectionObserverEntry) {
		// if element is entering from the top, don't update progress
		if (entry && entry.boundingClientRect.top < window.innerHeight / 3) {
			return;
		}

		visibleSteps.add(stepId);

		// Calculate progress based on visible steps
		const lastVisibleIndex = serviceSteps.findIndex((step) => step.id === stepId);

		const progressPercent = Math.min(
			100,
			lastVisibleIndex >= 0 ? ((lastVisibleIndex + 1) / serviceSteps.length) * 100 : 0
		);
		timelineProgress.set(progressPercent);
	}

	// Handler for when a step exits the viewport
	function handleStepExit(stepId: string, entry?: IntersectionObserverEntry) {
		// if element is exiting from the top, don't update progress
		// we can know this if the boundingClientRect.top is less than half of the viewport height
		if (entry && entry.boundingClientRect.top < window.innerHeight / 3) {
			return;
		}

		visibleSteps.delete(stepId);

		const lastVisibleIndex = serviceSteps.findIndex((step) => step.id === stepId);

		const progressPercent = Math.min(
			100,
			lastVisibleIndex >= 0 ? (lastVisibleIndex / serviceSteps.length) * 100 : 0
		);
		timelineProgress.set(progressPercent);
	}

	let currentlyOpenStep = $state<ServiceStepId>(serviceSteps[0].id);

	const handleStepOpen = (stepId: ServiceStepId) => {
		// if mobile AND if the opened step is after the currently visible step, scroll up to the opened step
		const openedStepIndex = serviceSteps.findIndex((step) => step.id === stepId);
		const currentlyVisibleIndex = serviceSteps.findIndex((step) => step.id === currentlyOpenStep);

		currentlyOpenStep = stepId;

		if (isMobile.current && openedStepIndex > currentlyVisibleIndex) {
			tick().then(() => {
				setTimeout(() => {
					const element = document.getElementById(stepId);
					if (element) {
						window.scrollTo({
							top: element.getBoundingClientRect().top + window.scrollY - 180,
							behavior: 'smooth'
						});
					}
				}, 300);
			});
		}
	};

	const isMobile = new IsMobile();
</script>

<section class="section relative overflow-hidden py-24">
	<div class="kcontainer relative flex w-full flex-col gap-16 px-4">
		<!-- Section header -->
		<div class="space-y-4 text-center">
			<AnimatedBadge class="animate-appear">
				<span class="flex items-center gap-2">
					⏳
					<hr class="bg-muted-foreground h-4 w-[1px] shrink-0" />
					{m['home.services.above_title']()}
				</span>
			</AnimatedBadge>
			<h2
				class="from-foreground to-muted-foreground animate-appear bg-gradient-to-br bg-clip-text text-transparent"
			>
				{m['home.services.title']()}
			</h2>
			<p class="text-muted-foreground animate-appear mx-auto max-w-[50ch] text-lg">
				{m['home.services.subtitle']()}
			</p>
		</div>

		<!-- Timeline with collapsible sections -->
		<div class="relative">
			<!-- Vertical timeline line (hidden on mobile) -->
			<div
				class="bg-primary/10 absolute top-8 left-[22px] hidden w-0.5 md:block"
				style="height: calc(100% - 2rem);"
			>
				<!-- Animated progress overlay -->
				<div
					class="from-primary/90 to-primary/80 absolute top-0 left-0 w-full bg-gradient-to-b transition-all duration-1000 ease-out"
					style="height: {timelineProgress.current}%;"
				></div>
			</div>

			<div class="space-y-12 md:space-y-16">
				{#each serviceSteps as step, i (step.id)}
					<div
						class="group animate-appear flex flex-col gap-4 md:grid md:grid-cols-[48px_1fr] md:gap-8"
						use:useInView={{
							threshold: 0,
							rootMargin: isMobile.current ? '0px 0px -60% 0px' : '0px 0px -45% 0px',
							onEnter: (entry) => handleStepVisible(step.id, entry),
							onExit: (entry) => handleStepExit(step.id, entry)
						}}
					>
						<!-- Step number - adjusted to align with content -->
						<div class="relative md:self-start md:pt-[2rem]">
							<div
								class={cn(
									'z-10 flex h-12 w-12 items-center justify-center rounded-full text-lg font-semibold shadow-md transition-all duration-500',
									visibleSteps.has(step.id)
										? 'bg-primary text-primary-foreground scale-110'
										: 'bg-muted text-muted-foreground'
								)}
							>
								{step.step}
							</div>
							<!-- Connector line (mobile only) -->
							<div
								class={cn(
									'absolute top-12 left-6 h-[calc(100%+1rem)] w-0.5 bg-gradient-to-b transition-all duration-700 md:hidden',
									visibleSteps.has(step.id)
										? 'from-primary/40 to-primary/5'
										: 'from-muted/30 to-muted/10',
									i === serviceSteps.length - 1 && 'hidden'
								)}
							></div>
						</div>

						<!-- Step content card with accordion -->
						<Card
							class={cn(
								'border-border/50 bg-card/80 group w-full overflow-hidden rounded-2xl p-0 shadow transition-all duration-500',
								visibleSteps.has(step.id)
									? 'translate-x-0 opacity-100'
									: 'opacity-50 md:translate-x-4'
							)}
						>
							<Accordion.Root
								type="single"
								value={currentlyOpenStep === step.id ? step.id : ''}
								onValueChange={(v) => handleStepOpen(v as ServiceStepId)}
								id={step.id}
							>
								<Accordion.Item class="rounded-2xl border-none" value={step.id}>
									<Accordion.Trigger
										class="group/trigger data-[state=open]:bg-card/90 flex w-full cursor-pointer items-start gap-6 p-6 transition-all duration-200"
									>
										<div
											class="bg-primary/10 text-primary float-left flex h-16 w-16 shrink-0 items-center justify-center rounded-lg shadow-sm transition-transform duration-300 group-hover/trigger:shadow-md group-data-[state=open]/trigger:scale-110"
										>
											<step.icon class="size-7" stroke={1.5} />
										</div>

										<div class="flex flex-1 flex-col space-y-3 text-left">
											<Badge variant="outline" class="bg-primary/5 border-primary/20 w-fit">
												{m['home.services.step_x_of_y']({
													step: step.step,
													total: serviceSteps.length
												})}
											</Badge>
											<h3 class="h4 tracking-tight">
												{m[`home.services.steps.${step.id}.title`]()}
											</h3>

											<p class="text-muted-foreground">
												{m[`home.services.steps.${step.id}.description`]()}
											</p>
										</div>
									</Accordion.Trigger>

									<Accordion.Content>
										<div class="border-t px-6 pt-6 pb-4">
											<!-- Detailed description -->
											<p class="text-muted-foreground">
												{m[`home.services.steps.${step.id}.detailed_description`]()}
											</p>

											<!-- Features list -->
											{#if step.features}
												<div class="mt-6">
													<h4 class="mb-2 text-sm font-medium">
														{m['home.services.key_activities']()}
													</h4>
													<ul class="grid gap-2 md:grid-cols-2">
														{#each { length: step.features } as _, i (i)}
															<li class="flex items-start gap-2">
																<IconChevronDown
																	class="text-primary mt-1 size-4 shrink-0 -rotate-90"
																/>
																<span class="text-sm">
																	{m[`home.services.steps.${step.id}.feature_${i + 1}`]()}
																</span>
															</li>
														{/each}
													</ul>
												</div>
											{/if}

											<!-- Tools used -->
											{#if 'tools' in step}
												<div class="mt-6">
													<h4 class="mb-2 text-sm font-medium">
														{m['home.services.tools']()}
													</h4>
													<div class="flex flex-wrap gap-2">
														{#each step.tools as tool (tool)}
															<Badge variant="secondary" class="text-xs">{tool}</Badge>
														{/each}
													</div>
												</div>
											{/if}

											<!-- Outcome -->
											<div class="bg-primary/5 border-primary/10 mt-6 rounded-lg border p-3">
												<div class="flex items-start gap-2">
													<IconTargetArrow
														class="text-primary mt-0.5 size-5 shrink-0"
														stroke={1.5}
													/>
													<p class="text-muted-foreground text-sm">
														<span class="font-semibold">
															{m['home.services.outcome']()}
														</span>
														{m[`home.services.steps.${step.id}.outcome`]()}
													</p>
												</div>
											</div>
										</div>
									</Accordion.Content>
								</Accordion.Item>
							</Accordion.Root>
						</Card>
					</div>
				{/each}
			</div>
		</div>

		<!-- CTA -->
		<div class="animate-appear flex justify-center pt-8">
			<Button class="group gap-2" size="lg" href={localizeHref(route('/contact'))}>
				Start your journey today
				<IconArrowRight class="h-4 w-4 transition-transform group-hover:translate-x-1" />
			</Button>
		</div>
	</div>
</section>
