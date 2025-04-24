<script lang="ts">
	import * as m from '$paraglide/messages';
	import { Button } from '$lib/components/ui/button';
	import { Separator } from '$lib/components/ui/separator';
	import AnimatedBadge from '$lib/components/animated/AnimatedBadge.svelte';
	import {
		IconBrandGithub,
		IconBrandLinkedin,
		IconMail,
		IconCode,
		IconBrush,
		IconDatabase,
		IconChevronDown,
		IconBrandFigma,
		IconSubtask,
		IconServerBolt
	} from '@tabler/icons-svelte';
	import { cn } from '$lib/utils/ui';
	import { route } from '$lib/ROUTES';
	import { localizeHref } from '$paraglide/runtime';
	import { brand } from '$lib/utils/config';
	import type { Picture } from 'vite-imagetools';
	import ImageJordan from '$assets/team/jordan.jpg?enhanced';
	import ImageThibaud from '$assets/team/thibaud.jpg?enhanced';

	type TeamMember = {
		id: string;
		image: Picture;
		name: string;
		level: string;
		role: string;
		bio: string;
		skills: Array<{
			name: string;
			icon: typeof IconCode;
		}>;
		socials: Array<{
			icon: typeof IconBrandGithub;
			href: string;
			label: string;
		}>;
	};

	const teamMembers: TeamMember[] = [
		{
			id: 'jordan',
			image: ImageJordan,
			name: 'Jordan',
			level: m['about.team.members.jordan.level'](),
			role: m['about.team.members.jordan.role'](),
			bio: m['about.team.members.jordan.description'](),
			skills: [
				{ name: m['skills.front_end'](), icon: IconCode },
				{ name: m['skills.back_end'](), icon: IconDatabase },
				{ name: m['skills.devops'](), icon: IconServerBolt }
			],
			socials: [
				{
					icon: IconBrandGithub,
					href: brand.github,
					label: 'GitHub'
				},
				{
					icon: IconBrandLinkedin,
					href: 'https://linkedin.com/in/jordan-abeddou/',
					label: 'LinkedIn'
				},
				{
					icon: IconMail,
					href: `mailto:jordan@kesval.com`,
					label: 'Email'
				}
			]
		},
		{
			id: 'thibaud',
			image: ImageThibaud,
			name: 'Thibaud',
			level: m['about.team.members.thibaud.level'](),
			role: m['about.team.members.thibaud.role'](),
			bio: m['about.team.members.thibaud.description'](),
			skills: [
				{ name: m['skills.figma'](), icon: IconBrandFigma },
				{ name: m['skills.project_management'](), icon: IconSubtask },
				{ name: m['skills.ui_ux'](), icon: IconBrush }
			],
			socials: [
				{
					icon: IconBrandGithub,
					href: 'https://github.com/ThibaudRtz',
					label: 'GitHub'
				},
				{
					icon: IconBrandLinkedin,
					href: 'https://linkedin.com/in/thibaud-reitzer-278005265/',
					label: 'LinkedIn'
				},
				{
					icon: IconMail,
					href: 'mailto:thibaud@kesval.com',
					label: 'Email'
				}
			]
		}
	];

	// Utility for calculating orbital positions
	function getOrbitalPosition(index: number, total: number, radius: number = 60) {
		const angle = index * ((Math.PI * 2) / total) - Math.PI / 2; // Start from top
		return {
			top: 55 + Math.sin(angle) * radius,
			left: 50 + Math.cos(angle) * radius
		};
	}
</script>

<section class="section relative">
	<div class="kcontainer relative flex flex-col gap-20 px-4">
		<!-- Section header -->
		<div class="space-y-6 text-center">
			<AnimatedBadge class="animate-appear inline-flex">
				<span class="flex items-center gap-2">
					👥
					<hr class="bg-muted-foreground h-4 w-[1px] shrink-0" />
					{m['about.team.suptitle']()}
				</span>
			</AnimatedBadge>
			<h2
				class="from-foreground to-muted-foreground animate-appear bg-gradient-to-br bg-clip-text text-4xl font-bold tracking-tight text-transparent sm:text-5xl md:text-6xl"
			>
				{m['about.team.title']()}
			</h2>
			<p class="text-muted-foreground animate-appear mx-auto max-w-[50ch] text-lg leading-relaxed">
				{m['about.team.description']()}
			</p>
		</div>

		<!-- Creative team display section with enhanced professionalism -->
		<div class="relative flex flex-col gap-16 md:gap-24">
			{#each teamMembers as member, i (member.id)}
				<div class="group animate-appear relative">
					<!-- Member section with alternating layout -->
					<div
						class={cn(
							'relative grid gap-12 md:grid-cols-2 md:items-center',
							i % 2 === 1 ? 'md:grid-flow-dense' : ''
						)}
					>
						<div class="relative flex md:items-center md:justify-center md:py-6">
							<div class="relative gap-4 max-md:flex max-md:w-full">
								<div
									class="bg-background border-primary relative flex h-48 grow overflow-hidden rounded-2xl border-2 transition-all duration-500 ease-out md:h-56 md:w-56 md:rounded-full md:border-4"
								>
									<enhanced:img
										src={member.image}
										alt={member.name}
										class="parent-contents h-full w-full object-cover"
									/>
								</div>

								<div class="grow flex-col items-start justify-center gap-4 max-md:flex">
									<!-- Refined floating skill badges with professional interaction -->
									{#each member.skills as skill, skillIndex}
										{@const position = getOrbitalPosition(skillIndex, member.skills.length)}
										<div
											class="bg-card flex w-max items-center gap-2 rounded-full border px-4 py-2 md:absolute md:-translate-x-1/2 md:-translate-y-1/2"
											style="
											top: {position.top}%;
											left: {position.left}%;
											box-shadow: 0 4px 12px -2px rgba(0, 0, 0, 0.06);
										"
										>
											<skill.icon class="text-primary size-4 shrink-0" />
											<span class="text-xs leading-none font-medium">{skill.name}</span>
										</div>
									{/each}
								</div>
							</div>
						</div>

						<!-- Content column with refined typography and spacing -->
						<div class="space-y-6 md:max-w-md">
							<!-- Refined name and role presentation -->
							<div class="space-y-0.5">
								<h3
									class="from-foreground to-muted-foreground gap-2 bg-gradient-to-b bg-clip-text text-transparent"
								>
									{member.name}
								</h3>
								<p class="text-muted-foreground text-lg leading-relaxed tracking-wide">
									{member.level}, {member.role}
								</p>
								<div class="from-primary to-primary/80 mt-6 h-[1px] w-32 bg-gradient-to-r"></div>
							</div>

							<p class="text-muted-foreground leading-relaxed tracking-wide">
								{member.bio}
							</p>

							<!-- Enhanced social links with more refined transitions -->
							<div class="flex gap-4">
								{#each member.socials as social}
									<Button
										href={social.href}
										target="_blank"
										rel="noopener noreferrer"
										variant="ghost"
										class="bg-card flex size-11 items-center justify-center rounded-full border"
										aria-label={social.label}
									>
										<social.icon class="size-6" stroke={2} />
									</Button>
								{/each}
							</div>
						</div>
					</div>
				</div>
				<!-- Refined separator with more elegant treatment -->
				{#if i < teamMembers.length - 1}
					<Separator
						class="via-muted-foreground/15 h-px w-full bg-gradient-to-r from-transparent to-transparent"
					/>
				{/if}
			{/each}
		</div>

		<!-- CTA with refined styling -->
		<div class="animate-appear flex justify-center pt-8">
			<Button size="lg" href={localizeHref(route('/contact'))}>
				{m['contact_us']()}
				<IconMail class="animate-bounce-y h-4 w-4 " stroke={2} />
			</Button>
		</div>
	</div>

	<!-- Refined background pattern with better blending -->
	<div class="absolute inset-0 isolate -z-10">
		<div class="from-background absolute inset-0 z-10 bg-gradient-to-b to-transparent to-20%"></div>
		<div class="from-background absolute inset-0 z-10 bg-gradient-to-t to-transparent to-20%"></div>
		<div class="bgc-dot h-full w-full"></div>
	</div>
</section>
