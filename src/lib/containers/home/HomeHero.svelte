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

<section class="section-hero items-center justify-center overflow-hidden">
	<!-- grid borders bg -->
	<div class="pointer-events-none absolute inset-0">
		<div class="kcontainer relative mb-12 h-full w-full px-3 sm:px-4" style="--ct-max-w: 1280px">
			<div class="h-full w-full border-x-2 border-dashed"></div>
		</div>
	</div>
	<div
		class="kcontainer relative mb-12 flex flex-col items-center justify-center gap-6 px-4 text-center md:mb-24"
	>
		<div
			class="pointer-events-none absolute h-[calc(100%+6rem)] w-screen border-y-2 border-dashed md:h-[calc(100%+12rem)]"
		></div>
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

		<div
			class="animate-appear mt-6 flex flex-col-reverse flex-wrap items-center justify-center gap-4 sm:flex-row"
		>
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
	</div>
</section>
