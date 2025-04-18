<script lang="ts">
	import { brand } from '$lib/utils/config';
	import * as m from '$paraglide/messages';
	import AnimatedBadge from '$lib/components/animated/AnimatedBadge.svelte';
	import Button from '$lib/components/ui/button/button.svelte';
	import { route } from '$lib/ROUTES';
	import { localizeHref } from '$paraglide/runtime';
	import {
		IconBrandFigma,
		IconCode,
		IconMessageCirclePlus,
		IconRocket
	} from '@tabler/icons-svelte';
</script>

<section class="section-hero min-h-screen items-center justify-center">
	<div class="absolute inset-0 isolate opacity-3 blur-2xl contain-strict">
		<div
			class="absolute top-0 left-1/2 h-320 w-140 -translate-x-140 -translate-y-80 -rotate-45 rounded-full bg-[radial-gradient(68.54%_68.72%_at_55.02%_31.46%,var(--color-primary)_0,var(--color-primary)_50%,var(--color-primary)]"
		></div>
		<div
			class="absolute top-0 left-1/2 h-320 w-120 [translate:-35rem_-50%] -rotate-45 rounded-full bg-[radial-gradient(50%_50%_at_50%_50%,var(--color-primary)_0,var(--color-primary)_80%,transparent_100%)]"
		></div>
		<div
			class="absolute top-0 left-1/2 h-320 w-120 -translate-x-140 -translate-y-80 -rotate-45 bg-[radial-gradient(50%_50%_at_50%_50%,var(--color-primary)_0,var(--color-primary)_80%,transparent_100%)]"
		></div>
	</div>
	<div class="kcontainer relative flex flex-col items-center justify-center gap-6 px-4 text-center">
		<div class="animate-appear">
			<AnimatedBadge>
				<span class="flex items-center gap-2">
					✨
					<hr class="bg-muted-foreground h-4 w-[1px] shrink-0" />
					{m.years_of_experience({ years: brand.yearsOfExperience })}
				</span>
			</AnimatedBadge>
		</div>
		<h1
			class="animate-appear from-foreground to-muted-foreground bg-gradient-to-br bg-clip-text text-4xl leading-tight font-bold text-transparent sm:text-5xl md:text-6xl lg:text-7xl"
		>
			{m['home.hero.title']()}
		</h1>
		<p class="text-muted-foreground animate-appear mx-auto max-w-[45ch] text-lg md:text-xl">
			{m['home.hero.subtitle']({ brand: m['brand.name']() })}
		</p>

		<div class="mt-6 flex flex-wrap items-center justify-center gap-4">
			<Button class="animate-appear" href={localizeHref(route('/contact'))}>
				<IconMessageCirclePlus />
				{m.start_now()}
			</Button>
			<Button class="animate-appear" variant="outline" href={localizeHref(route('/projets'))}>
				<IconRocket />
				{m.see_all()}
			</Button>
		</div>

		<div class="animate-appear mt-6 flex flex-wrap items-center justify-center gap-4">
			<div class="bg-card flex items-center gap-4 rounded-full border px-6 py-3 transition">
				<IconCode class="text-primary size-5" />
				<span class="text-sm font-medium">{m['home.hero.full_stack_development']()}</span>
			</div>
			<div class="bg-card flex items-center gap-4 rounded-full border px-6 py-3 transition">
				<IconBrandFigma class="text-primary size-5" />
				<span class="text-sm font-medium">{m['home.hero.ui_ux_design']()}</span>
			</div>
		</div>
	</div>
</section>
