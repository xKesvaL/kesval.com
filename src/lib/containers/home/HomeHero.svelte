<script lang="ts">
	import { brand } from '$lib/utils/config';
	import * as m from '$paraglide/messages';
	import AnimatedBadge from '$lib/components/animated/AnimatedBadge.svelte';
	import Button from '$lib/components/ui/button/button.svelte';
	import { route } from '$lib/ROUTES';
	import { localizeHref } from '$paraglide/runtime';
	import { IconBrandFigma, IconCode, IconPlus, IconRocket } from '@tabler/icons-svelte';
	import Sparkles from '$lib/components/base/Sparkles.svelte';
</script>

<section class="section-hero items-center justify-center">
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
		<h1 class="animate-appear leading-tight font-bold">
			{m['home.hero.title_before']()}<Sparkles color="special" highlight="primary">
				{m['home.hero.title_highlight']()}
			</Sparkles>{m['home.hero.title_after']()}
		</h1>
		<p class="text-muted-foreground animate-appear mx-auto max-w-[45ch] text-lg md:text-xl">
			{m['home.hero.subtitle']({ brand: brand.name })}
		</p>

		<div class="animate-appear mt-6 flex flex-wrap items-center justify-center gap-4">
			<Button
				class="h-auto gap-3 rounded-full !px-5 py-3 text-sm"
				variant="outline"
				href={localizeHref(route('/projets'))}
			>
				<IconPlus class="size-5!" />
				{m['common.see_our_projects']()}
			</Button>
			<Button
				class="h-auto gap-3 rounded-full !px-5 py-3 text-sm"
				href={localizeHref(route('/contact'))}
			>
				<IconRocket class="size-5!" />
				{m['common.cta_big']()}
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
