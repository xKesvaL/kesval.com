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
			classBg="justify-center items-center flex-row gap-6 py-2 lg:py-4"
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

		<CardGlass
			fill="bento"
			class="lg:col-span-5 row-span-2 lg:col-start-4 lg:row-start-1"
			classBg="w-full grid grid-cols-4 md:grid-cols-2 lg:grid-cols-4 gap-4 items-center justify-center justify-items-center"
		>
			<enhanced:img
				src="$assets/brands/css.svg"
				alt="Profile Photo"
				class="aspect-square img h-12 md:h-[4.5rem] lg:h-20"
			/>
			<enhanced:img
				src="$assets/brands/react.svg"
				alt="Profile Photo"
				class="aspect-square img h-12 md:h-[4.5rem] lg:h-20"
			/>
			<enhanced:img
				src="$assets/brands/svelte.svg"
				alt="Profile Photo"
				class="aspect-square img h-12 md:h-[4.5rem] lg:h-20"
			/>
			<enhanced:img
				src="$assets/brands/typescript.svg"
				alt="Profile Photo"
				class="aspect-square img h-12 md:h-[4.5rem] lg:h-20"
			/>
		</CardGlass>
		<CardGlass fill="bento" class="lg:col-span-4 row-span-2 lg:row-start-1">3</CardGlass>
		<CardGlass fill="bento" class="lg:col-span-3 row-span-3 lg:col-start-4 lg:row-start-3">
			langues
		</CardGlass>
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
		<CardGlass
			fill="bento"
			class="lg:col-span-3 row-span-3 lg:col-start-10 lg:row-start-3"
			classBg="w-full items-center justify-center justify-items-center gap-8 grid grid-cols-2 grid-rows-2"
		>
			<enhanced:img
				src="$assets/brands/figma.svg"
				alt="Profile Photo"
				class="aspect-square img h-[4.5rem] lg:h-20"
			/>
			<enhanced:img
				src="$assets/brands/photoshop.svg"
				alt="Profile Photo"
				class="aspect-square img h-[4.5rem] lg:h-20"
			/>
			<enhanced:img
				src="$assets/brands/premiere_pro.svg"
				alt="Profile Photo"
				class="aspect-square img h-[4.5rem] lg:h-20"
			/>
			<enhanced:img
				src="$assets/brands/after_effects.svg"
				alt="Profile Photo"
				class="aspect-square img h-[4.5rem] lg:h-20"
			/>
		</CardGlass>
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
			fill="bento"
			class="lg:col-span-3 row-span-3 lg:col-start-7 lg:row-start-5"
			classBg="w-full items-center justify-center justify-items-center gap-8 grid grid-cols-2 grid-rows-2"
		>
			<enhanced:img
				src="$assets/brands/nodejs.svg"
				alt="Profile Photo"
				class="aspect-square img h-[4.5rem] lg:h-20"
			/>
			<enhanced:img
				src="$assets/brands/firebase.svg"
				alt="Profile Photo"
				class="aspect-square img h-[4.5rem] lg:h-20"
			/>
			<enhanced:img
				src="$assets/brands/mariadb.svg"
				alt="Profile Photo"
				class="aspect-square img h-[4.5rem] lg:h-20"
			/>
			<enhanced:img
				src="$assets/brands/php.svg"
				alt="Profile Photo"
				class="aspect-square img h-[4.5rem] lg:h-20"
			/>
		</CardGlass>
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

		.img {
			filter: drop-shadow(0px 0px 12px rgba(255, 0, 0, 0.25));
		}
	}
</style>
