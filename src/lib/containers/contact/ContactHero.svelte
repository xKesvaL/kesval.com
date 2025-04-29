<script lang="ts">
	import * as m from '$paraglide/messages';
	import AnimatedBadge from '$lib/components/animated/AnimatedBadge.svelte';
	import ShineBorder from '$lib/components/animated/ShineBorder.svelte';
	import { brand } from '$lib/utils/config';
	import { Button } from '$lib/components/ui/button';
	import { Badge } from '$lib/components/ui/badge';
	import { Card } from '$lib/components/ui/card';
	import { Separator } from '$lib/components/ui/separator';
	import { cn } from '$lib/utils/ui';
	import {
		IconMail,
		IconArrowRight,
		IconBrandGithub,
		IconBrandLinkedin,
		IconBrandInstagram,
		IconCalendarTime,
		IconMapPin,
		IconHeartHandshake,
		IconMessageCircle,
		IconUserCircle,
		IconClock
	} from '@tabler/icons-svelte';
	import { onMount } from 'svelte';
	import { hover } from 'motion';
</script>

<section class="section-hero relative">
	<div class="absolute inset-0 -z-10 opacity-20">
		<div class="bgc-dot h-full w-full"></div>
	</div>

	<div class="kcontainer flex w-full flex-col gap-12 px-4">
		<!-- Two column layout -->
		<div class="animate-appear grid gap-8 md:grid-cols-2 lg:gap-12">
			<!-- Contact info column -->
			<div class="flex flex-col gap-8">
				<!-- Looking for work section with enhanced styling -->
				<div class="bg-primary text-primary-foreground rounded-2xl p-6">
					<div class="mb-4 flex items-start gap-4">
						<div class="bg-primary-foreground/20 rounded-lg p-3 backdrop-blur-sm">
							<IconHeartHandshake class="text-primary-foreground size-6" stroke={1.5} />
						</div>
						<div class="flex-1">
							<h3 class="text-primary-foreground text-xl font-semibold tracking-tight">
								{m['contact.hero.looking_for_work.title']()}
							</h3>
							<p class="text-primary-foreground/80 mt-2">
								{m['contact.hero.looking_for_work.description']()}
							</p>
						</div>
					</div>

					<Button variant="secondary" class="mt-2 gap-2">
						{m['contact.hero.looking_for_work.cta']()}
						<IconArrowRight class="size-4 transition-all" />
					</Button>
				</div>

				<!-- Contact Card with Shine Border -->
				<ShineBorder>
					<div class="p-6">
						<div class="flex items-start gap-4">
							<div class="bg-primary text-primary-foreground rounded-lg p-3">
								<IconMessageCircle class="size-6" stroke={1.5} />
							</div>
							<div class="flex-1">
								<h3 class="text-xl font-semibold tracking-tight">
									{m['contact.hero.get_in_touch.title']()}
								</h3>
								<p class="text-muted-foreground mt-2">
									{m['contact.hero.get_in_touch.description']()}
								</p>
							</div>
						</div>
					</div>

					<div class="from-primary/5 via-primary/10 to-primary/5 bg-gradient-to-r p-6">
						<div class="grid gap-6 md:grid-cols-2">
							<div
								class="group hover:border-primary/20 flex items-center gap-3 rounded-lg border border-transparent bg-white/5 p-3 transition-all hover:bg-white/10"
							>
								<div
									class="bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground rounded-full p-2 transition-all"
								>
									<IconMail class="size-5" stroke={1.5} />
								</div>
								<div>
									<h4 class="group-hover:text-primary text-sm font-medium">{m['our_email']()}</h4>
									<a href={`mailto:${brand.email}`} class="text-primary hover:underline">
										{brand.email}
									</a>
								</div>
							</div>

							<div
								class="group hover:border-primary/20 flex items-center gap-3 rounded-lg border border-transparent bg-white/5 p-3 transition-all hover:bg-white/10"
							>
								<div
									class="bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground rounded-full p-2 transition-all"
								>
									<IconMapPin class="size-5" stroke={1.5} />
								</div>
								<div>
									<h4 class="group-hover:text-primary text-sm font-medium">Location</h4>
									<p class="text-muted-foreground text-sm">Mulhouse, France</p>
								</div>
							</div>
						</div>

						<div class="mt-4 flex flex-wrap gap-3">
							<Button
								variant="default"
								href={`mailto:${brand.email}`}
								class="gap-2 transition-transform duration-300 hover:-translate-y-1"
							>
								{m['contact.hero.email_button']()}
								<IconArrowRight class="animate-bounce-x size-4" />
							</Button>

							<Badge class="flex items-center gap-1.5 px-3 py-1.5 text-xs" variant="secondary">
								<IconCalendarTime class="size-3.5" />
								{m['contact.hero.availability']()}
							</Badge>
						</div>
					</div>

					<!-- Social links integrated into contact card -->
					<div class="border-t p-6">
						<div class="flex flex-col gap-4">
							<div class="flex items-center justify-between">
								<h4 class="text-sm font-medium">{m['brand.connect']()}</h4>
								<Badge variant="outline" class="bg-primary/5 text-xs">Follow us</Badge>
							</div>

							<div class="flex gap-3">
								<a
									href={brand.github}
									target="_blank"
									rel="noopener noreferrer"
									class="group hover:border-primary/20 hover:bg-primary/5 flex flex-1 items-center gap-2 rounded-lg border border-transparent bg-white/5 p-2 text-center transition-all"
									aria-label="GitHub"
								>
									<IconBrandGithub
										class="text-primary size-5 transition-all group-hover:scale-110"
									/>
									<span class="text-xs font-medium">GitHub</span>
								</a>

								<a
									href={brand.linkedin}
									target="_blank"
									rel="noopener noreferrer"
									class="group hover:border-primary/20 hover:bg-primary/5 flex flex-1 items-center gap-2 rounded-lg border border-transparent bg-white/5 p-2 text-center transition-all"
									aria-label="LinkedIn"
								>
									<IconBrandLinkedin
										class="text-primary size-5 transition-all group-hover:scale-110"
									/>
									<span class="text-xs font-medium">LinkedIn</span>
								</a>

								<a
									href={brand.instagram}
									target="_blank"
									rel="noopener noreferrer"
									class="group hover:border-primary/20 hover:bg-primary/5 flex flex-1 items-center gap-2 rounded-lg border border-transparent bg-white/5 p-2 text-center transition-all"
									aria-label="Instagram"
								>
									<IconBrandInstagram
										class="text-primary size-5 transition-all group-hover:scale-110"
									/>
									<span class="text-xs font-medium">Instagram</span>
								</a>
							</div>
						</div>
					</div>
				</ShineBorder>
			</div>

			<!-- Enhanced Calendly placeholder column -->
			<div class="flex h-full flex-col gap-6">
				<ShineBorder class="h-full">
					<div class="flex h-full flex-1 flex-col justify-between">
						<div class="border-b p-6">
							<div class="flex items-start gap-4">
								<div class="bg-primary text-primary-foreground rounded-lg p-3">
									<IconCalendarTime class="size-6" stroke={1.5} />
								</div>
								<div class="flex-1">
									<h3 class="text-xl font-semibold tracking-tight">
										{m['contact.hero.book_meeting_title']()}
									</h3>
									<p class="text-muted-foreground mt-2">
										{m['contact.hero.book_meeting_description']()}
									</p>
								</div>
							</div>
						</div>

						<!-- Calendly inline widget begin -->
						<div
							class="calendly-inline-widget h-full overflow-hidden rounded-b-[20px] px-[1px] pb-[1px]"
							data-url="https://calendly.com/kesvalstudio/30min?hide_event_type_details=1&hide_gdpr_banner=1&primary_color=4d01fd"
							style="min-width:320px;min-height:500px;"
						></div>
						<script
							type="text/javascript"
							src="https://assets.calendly.com/assets/external/widget.js"
							async
						></script>
						<!-- Calendly inline widget end -->
					</div>
				</ShineBorder>
			</div>
		</div>
	</div>
</section>
