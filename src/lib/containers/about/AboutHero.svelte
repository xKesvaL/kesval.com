<script lang="ts">
	import SkillShowcase from '$lib/components/about/SkillShowcase.svelte';
	import CardGlass from '$lib/components/cards/CardGlass.svelte';
	import { SKILLS } from '$lib/data/skills';

	import * as m from '$paraglide/messages';
</script>

<section class="container flex flex-col justify-center gap-8 py-12 lg:py-24 lg:gap-12">
	<div
		class="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-12 lg:grid-rows-[1fr,1fr,1fr,1fr,1fr,1fr,1fr] h-full flex-grow"
	>
		<!-- Profile Photo -->
		<CardGlass fill="bento" class="lg:col-span-3 row-span-3" classBg="p-0 justify-center">
			<enhanced:img src="$assets/me/hero.jpg" alt="Profile Photo" />
		</CardGlass>
		<!-- Profile Name -->
		<CardGlass fill="full" class="lg:col-span-3 row-span-1 lg:col-start-1 lg:col-end-4">
			hi
		</CardGlass>
		<!-- Profile Infos -->
		<CardGlass fill="bento" class="lg:col-span-3 row-span-3 lg:col-start-1 lg:col-end-4"
			>hi</CardGlass
		>

		<CardGlass fill="bento" class="lg:col-span-5 row-span-2 lg:col-start-4 lg:row-start-1">
			hi
		</CardGlass>
		<CardGlass fill="bento" class="lg:col-span-4 row-span-2 lg:row-start-1">hi</CardGlass>
		<CardGlass fill="bento" class="lg:col-span-3 row-span-3 lg:col-start-4 lg:row-start-3"
			>hi</CardGlass
		>
		<CardGlass fill="bento" class="lg:col-span-3 row-span-2 lg:col-start-7 lg:row-start-3"
			>hi</CardGlass
		>
		<CardGlass fill="bento" class="lg:col-span-3 row-span-3 lg:col-start-10 lg:row-start-3"
			>hi</CardGlass
		>
		<CardGlass fill="bento" class="lg:col-span-3 row-span-2 lg:col-start-4 lg:row-start-6"
			>hi</CardGlass
		>
		<CardGlass fill="bento" class="lg:col-span-3 row-span-3 lg:col-start-7 lg:row-start-5"
			>hi</CardGlass
		>
		<CardGlass fill="bento" class="lg:col-span-3 row-span-2 lg:col-start-10 lg:row-start-6"
			>hi</CardGlass
		>
	</div>
</section>

<style lang="scss">
	section.container {
		--ct-max-width: 1280px;
		min-height: calc(100vh - 8rem);

		.grid {
			@media screen and (min-width: 1024px) {
				max-height: calc(100vh - 16rem);
			}
		}
	}
</style>
