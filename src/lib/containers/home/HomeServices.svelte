<script lang="ts">
	import * as m from '$paraglide/messages';
	import { Button } from '$lib/components/ui/button';
	import { Card } from '$lib/components/ui/card';
	import { Badge } from '$lib/components/ui/badge';
	import * as Accordion from '$lib/components/ui/accordion';
	import { Separator } from '$lib/components/ui/separator';
	import { route } from '$lib/ROUTES';
	import { localizeHref } from '$paraglide/runtime';
	import { fly } from 'svelte/transition';
	import AnimatedBadge from '$lib/components/animated/AnimatedBadge.svelte';
	import {
		IconBulb,
		IconLayoutDashboard,
		IconPalette,
		IconCode,
		IconRocket,
		IconTool,
		IconArrowRight,
		IconBrandFigma,
		IconDeviceMobile,
		IconCloud,
		IconBrandGit,
		IconGauge,
		IconTargetArrow,
		IconChevronDown
	} from '@tabler/icons-svelte';

	/**
	 * Service step definition
	 */
	interface ServiceStep {
		id: string;
		step: number;
		title: string;
		description: string;
		icon: typeof IconBulb;
		detailedDescription?: string;
		features?: string[];
		tools?: string[];
		outcome?: string;
	}

	/**
	 * Define the services as a step-by-step process
	 */
	const serviceSteps: ServiceStep[] = [
		{
			id: 'discovery',
			step: 1,
			title: 'Discovery & Strategy',
			description:
				'Understanding your needs, target audience, and business goals to create a tailored strategy.',
			icon: IconBulb,
			detailedDescription:
				'The journey begins with a thorough understanding of your business, goals, and target audience. I collaborate with you to identify key objectives and create a strategic roadmap.',
			features: [
				'Comprehensive consultation to understand your business needs',
				'Audience analysis and user persona development',
				'Competitive analysis and market research',
				'Goal setting and success metrics definition'
			],
			outcome:
				'A clear project scope, timeline, and strategic roadmap aligned with your business objectives.'
		},
		{
			id: 'content',
			step: 2,
			title: 'Features & Content',
			description:
				'Defining the features, functionality, and content that will engage your audience.',
			icon: IconLayoutDashboard,
			detailedDescription:
				"Based on our discovery phase, we'll define the specific features and content your project needs to succeed, establishing the foundation for your project's functionality.",
			features: [
				'Content strategy and information architecture',
				'User flow mapping and interaction design',
				'Feature prioritization and technical requirements',
				'Content creation guidance and structure planning'
			],
			tools: ['Figma', 'Miro', 'Notion'],
			outcome:
				'A comprehensive project specification with clearly defined features and content structure.'
		},
		{
			id: 'design',
			step: 3,
			title: 'UI/UX Design',
			description:
				'Creating beautiful, intuitive designs that provide a seamless user experience across all devices.',
			icon: IconPalette,
			detailedDescription:
				'Transform concepts into visually stunning, user-friendly interfaces that not only look professional but also deliver an intuitive and engaging user experience.',
			features: [
				'Custom UI design tailored to your brand identity',
				'Responsive designs optimized for all screen sizes',
				'Interactive prototypes for user testing',
				'Comprehensive design system with component library'
			],
			tools: ['Figma', 'Adobe XD', 'Photoshop'],
			outcome:
				'Polished, user-tested design mockups and interactive prototypes ready for development.'
		},
		{
			id: 'development',
			step: 4,
			title: 'Development',
			description:
				'Building your project using modern technologies and best practices for performance and security.',
			icon: IconCode,
			detailedDescription:
				'Bringing designs to life with clean, efficient code using modern frameworks and development practices to ensure your project is fast, secure, and maintainable.',
			features: [
				'Clean, semantic code following industry best practices',
				'Cross-browser compatibility and responsive implementation',
				'Performance optimization for fast loading speeds',
				'Version control and collaborative development'
			],
			tools: ['React/Vue/Svelte', 'Next.js/Nuxt/SvelteKit', 'TypeScript', 'Tailwind CSS'],
			outcome: 'A fully functional, thoroughly tested application ready for deployment.'
		},
		{
			id: 'deployment',
			step: 5,
			title: 'Deployment',
			description:
				'Launching your project with comprehensive testing and optimization for a smooth user experience.',
			icon: IconRocket,
			detailedDescription:
				'Preparing your project for launch with thorough testing and optimization, handling all technical aspects to ensure a smooth transition to your live environment.',
			features: [
				'Server configuration and deployment setup',
				'Performance testing and optimization',
				'SEO implementation and verification',
				'Cross-device and cross-browser testing'
			],
			tools: ['Vercel', 'Netlify', 'AWS', 'Docker'],
			outcome: 'A successfully launched project with optimized performance and SEO readiness.'
		},
		{
			id: 'maintenance',
			step: 6,
			title: 'Support & Maintenance',
			description:
				'Providing ongoing support, updates, and enhancements to keep your digital presence performing at its best.',
			icon: IconTool,
			detailedDescription:
				'Your digital project is a long-term investment. I provide ongoing maintenance, updates, and support to ensure your project continues to perform optimally.',
			features: [
				'Regular updates and security patches',
				'Performance monitoring and optimization',
				'Continuous improvements and feature enhancements',
				'Compatibility updates for new browsers and devices'
			],
			outcome:
				'A continuously evolving digital presence that remains secure, up-to-date, and aligned with your business growth.'
		}
	];
</script>

<section class="section relative overflow-hidden py-24">
	<div class="kcontainer relative flex w-full flex-col gap-16 px-4">
		<!-- Section header -->
		<div class="space-y-4 text-center" in:fly={{ y: 20, duration: 800 }}>
			<AnimatedBadge>
				<span class="flex items-center gap-2">
					⏳
					<hr class="bg-muted-foreground h-4 w-[1px] shrink-0" />
					End-to-end process
				</span>
			</AnimatedBadge>
			<h2
				class="from-foreground to-muted-foreground bg-gradient-to-br bg-clip-text text-4xl font-bold text-transparent sm:text-5xl"
			>
				Your Project Journey
			</h2>
			<p class="text-muted-foreground mx-auto max-w-[50ch] text-lg">
				From initial concept to ongoing support, I accompany you through each stage of your digital
				project's lifecycle.
			</p>
		</div>

		<!-- Timeline with collapsible sections -->
		<div class="relative">
			<!-- Vertical timeline line (hidden on mobile) -->
			<div
				class="from-primary/40 to-primary/5 absolute top-8 left-[22px] hidden h-[calc(100%-3rem)] w-0.5 bg-gradient-to-b md:block"
			></div>

			<div class="space-y-12 md:space-y-16">
				{#each serviceSteps as step, i (step.id)}
					<div
						class="group flex flex-col gap-4 md:grid md:grid-cols-[48px_1fr] md:gap-8"
						in:fly={{ y: 20, duration: 600, delay: i * 100 }}
					>
						<!-- Step number -->
						<div class="relative flex h-12 w-12 shrink-0">
							<div
								class="bg-primary text-primary-foreground z-10 flex h-12 w-12 items-center justify-center rounded-full text-lg font-semibold shadow-md"
							>
								{step.step}
							</div>
							<!-- Connector line (mobile only) -->
							<div
								class="from-primary/40 to-primary/5 absolute top-12 left-6 h-[calc(100%+1rem)] w-0.5 bg-gradient-to-b md:hidden"
								class:hidden={i === serviceSteps.length - 1}
							></div>
						</div>

						<!-- Step content card with accordion -->
						<Card
							class="border-border/50 bg-card/80 shadow-cool w-full rounded-xl p-0 backdrop-blur-sm transition-all"
						>
							<Accordion.Root type="single" value={i === 0 ? step.id : ''}>
								<Accordion.Item class="border-none" value={step.id}>
									<Accordion.Trigger class="flex cursor-pointer items-start gap-4 p-6 pr-4">
										<div
											class="bg-primary/10 text-primary flex h-14 w-14 shrink-0 items-center justify-center rounded-lg shadow-sm"
										>
											<svelte:component this={step.icon} class="size-7" stroke={1.5} />
										</div>

										<div class="flex-1 space-y-2 text-left">
											<Badge variant="outline" class="bg-primary/5 border-primary/20">
												Step {step.step} of {serviceSteps.length}
											</Badge>
											<h3 class="text-xl font-semibold">{step.title}</h3>
											<p class="text-muted-foreground">{step.description}</p>
										</div>
									</Accordion.Trigger>

									<Accordion.Content>
										<div class="border-t px-6 pt-4 pb-6">
											<!-- Detailed description -->
											<p class="text-muted-foreground">{step.detailedDescription}</p>

											<!-- Features list -->
											{#if step.features}
												<div class="mt-6">
													<h4 class="mb-2 text-sm font-medium">Key activities:</h4>
													<ul class="grid gap-2 md:grid-cols-2">
														{#each step.features as feature}
															<li class="flex items-start gap-2">
																<IconChevronDown
																	class="text-primary mt-1 size-4 shrink-0 -rotate-90"
																/>
																<span class="text-sm">{feature}</span>
															</li>
														{/each}
													</ul>
												</div>
											{/if}

											<!-- Tools used -->
											{#if step.tools}
												<div class="mt-6">
													<h4 class="mb-2 text-sm font-medium">Tools:</h4>
													<div class="flex flex-wrap gap-2">
														{#each step.tools as tool}
															<Badge variant="secondary" class="text-xs">{tool}</Badge>
														{/each}
													</div>
												</div>
											{/if}

											<!-- Outcome -->
											{#if step.outcome}
												<div class="bg-primary/5 border-primary/10 mt-6 rounded-lg border p-3">
													<div class="flex items-start gap-2">
														<IconTargetArrow
															class="text-primary mt-0.5 size-5 shrink-0"
															stroke={1.5}
														/>
														<p class="text-muted-foreground text-sm">
															<span class="font-semibold">Outcome:</span>
															{step.outcome}
														</p>
													</div>
												</div>
											{/if}
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
		<div class="flex justify-center pt-8">
			<Button class="group gap-2" size="lg" href={localizeHref(route('/contact'))}>
				Start your journey today
				<IconArrowRight class="h-4 w-4 transition-transform group-hover:translate-x-1" />
			</Button>
		</div>
	</div>
</section>
