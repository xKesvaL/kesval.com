<script lang="ts">
	import SkillShowcase from '$lib/components/about/SkillShowcase.svelte';
	import CardGlass from '$lib/components/cards/CardGlass.svelte';
	import PERSONAL from '$lib/data/personal';
	import { SKILLS } from '$lib/data/skills';

	import * as m from '$paraglide/messages';
</script>

<section class="container flex flex-col justify-center gap-8 py-12 lg:py-24 lg:gap-12">
	<div
		class="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-12 lg:grid-rows-[1fr,1fr,1fr,1fr,1fr,1fr,1fr] h-full flex-grow"
	>
		<!-- Profile Photo -->
		<CardGlass
			fill="bento"
			class="lg:col-span-3 row-span-3"
			classBg="p-0 justify-center items-center"
		>
			<enhanced:img src="$assets/me/hero.jpg" alt="Profile Photo" />
		</CardGlass>
		<!-- Profile Name -->
		<CardGlass
			fill="full"
			color="primary"
			class="lg:col-span-3 row-span-1 lg:col-start-1 lg:col-end-4 text-4xl xl:text-5xl font-title"
			classBg="justify-center items-center flex-row gap-4 py-2 lg:py-4"
		>
			<enhanced:img
				src="$assets/logos/logo.png"
				alt="Profile Photo"
				class="flex-shrink-0 w-full h-full aspect-square max-w-[3.5rem] max-h-[3.5rem]"
			/>
			<span class="text-primary-foreground"> KesvaL </span>
		</CardGlass>
		<!-- Profile Infos -->
		<CardGlass fill="bento" class="lg:col-span-3 row-span-3 lg:col-start-1 lg:col-end-4">
			1
		</CardGlass>

		<CardGlass fill="bento" class="lg:col-span-5 row-span-2 lg:col-start-4 lg:row-start-1">
			2
		</CardGlass>
		<CardGlass fill="bento" class="lg:col-span-4 row-span-2 lg:row-start-1">3</CardGlass>
		<CardGlass fill="bento" class="lg:col-span-3 row-span-3 lg:col-start-4 lg:row-start-3"
			>4</CardGlass
		>
		<CardGlass
			fill="full"
			color="secondary"
			class="lg:col-span-3 row-span-2 lg:col-start-7 lg:row-start-3"
			classBg="justify-center items-center text-secondary-foreground text-center"
		>
			<span class="text-9xl font-title">
				{PERSONAL.age}
			</span>
			<span class="text-2xl font-bold"> years old </span>
		</CardGlass>
		<CardGlass fill="bento" class="lg:col-span-3 row-span-3 lg:col-start-10 lg:row-start-3"
			>6</CardGlass
		>
		<CardGlass
			fill="full"
			color="secondary"
			class="lg:col-span-3 row-span-2 lg:col-start-4 lg:row-start-6"
			classBg="justify-center items-center text-secondary-foreground text-center"
		>
			<span class="text-9xl font-title">
				{PERSONAL.yearsOfExperience}
			</span>
			<span class="text-2xl font-bold"> years of experience </span>
		</CardGlass>
		<CardGlass
			fill="full"
			color="primary"
			class="lg:col-span-3 row-span-3 lg:col-start-7 lg:row-start-5"
		></CardGlass>
		<CardGlass
			fill="full"
			color="secondary"
			class="lg:col-span-3 row-span-2 lg:col-start-10 lg:row-start-6"
			classBg="justify-center items-center text-secondary-foreground text-center"
		>
			<span class="text-9xl font-title">
				{PERSONAL.projects}
			</span>
			<span class="text-2xl font-bold"> projects completed </span>
		</CardGlass>
	</div>
</section>

<style lang="scss">
	section.container {
		--ct-max-width: 1280px;
		min-height: calc(100vh - 8rem);

		.grid {
			@media screen and (min-width: 1024px) {
				max-height: 720px;
			}
		}
	}
</style>
