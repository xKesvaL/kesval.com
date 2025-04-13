<script lang="ts">
	import { brand } from '$lib/utils/config';
	import * as m from '$paraglide/messages';
	import AnimatedBadge from '$lib/components/animated/AnimatedBadge.svelte';
	import AuroraBackground from '$lib/components/animated/AuroraBackground.svelte';
	import Button from '$lib/components/ui/button/button.svelte';
	import { route } from '$lib/ROUTES';
	import { localizeHref } from '$paraglide/runtime';
	import {
		IconBrandFigma,
		IconCode,
		IconMessageCirclePlus,
		IconRocket
	} from '@tabler/icons-svelte';
	import { fly } from 'svelte/transition';
</script>

<section class="section-hero min-h-screen items-center justify-center">
	<div class="absolute inset-0">
		<AuroraBackground />
	</div>
	<div class="kcontainer relative flex flex-col items-center justify-center px-4 text-center">
		<div class="relative">
			<div class="animate-appear mb-6">
				<AnimatedBadge>
					<span class="flex items-center gap-2">
						✨
						<hr class="bg-muted-foreground h-4 w-[1px] shrink-0" />
						{m.years_of_experience({ years: brand.yearsOfExperience })}
					</span>
				</AnimatedBadge>
			</div>
			<h1
				class="animate-appear from-foreground to-muted-foreground mb-6 bg-gradient-to-br bg-clip-text text-4xl leading-tight font-bold text-transparent sm:text-5xl md:text-6xl lg:text-7xl"
			>
				{m['home.hero.title']()}
			</h1>
			<p class="text-muted-foreground animate-appear mx-auto max-w-[45ch] text-lg md:text-xl">
				{m['home.hero.subtitle']({ brand: m['brand.name']() })}
			</p>

			<div class="animate-appear mt-12 flex flex-wrap items-center justify-center gap-4">
				<Button href={localizeHref(route('/contact'))}>
					<IconMessageCirclePlus />
					{m.contact_me()}
				</Button>
				<Button variant="outline" href={localizeHref(route('/projets'))}>
					<IconRocket />
					{m.see_all()}
				</Button>
			</div>
		</div>

		<div class="animate-appear mt-16 flex flex-wrap items-center justify-center gap-8">
			<div
				class="bg-card/40 hover:bg-card/60 flex items-center gap-4 rounded-full px-6 py-3 backdrop-blur-sm transition-colors"
			>
				<IconCode class="text-primary size-5" />
				<span class="text-sm font-medium">Full-Stack Development</span>
			</div>
			<div
				class="bg-card/40 hover:bg-card/60 flex items-center gap-4 rounded-full px-6 py-3 backdrop-blur-sm transition-colors"
			>
				<IconBrandFigma class="text-primary size-5" />
				<span class="text-sm font-medium">UI/UX Design</span>
			</div>
		</div>
	</div>
</section>
