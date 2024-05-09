<script lang="ts">
	import CardGlass from '$lib/components/cards/CardGlass.svelte';
	import { Progress } from '$lib/components/ui/progress';
	import { PERSONAL } from '$lib/data/personal';

	import * as m from '$paraglide/messages';
</script>

<section class="container flex flex-col justify-center gap-8 py-12 lg:gap-12 lg:py-24">
	<div
		class="grid h-full flex-grow grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-12 lg:grid-rows-[1fr,1fr,1fr,1fr,1fr,1fr,1fr]"
	>
		<!-- Profile Photo -->
		<CardGlass
			fill="bento"
			class="row-span-3 lg:col-span-3"
			classBg="p-0 justify-center items-center"
		>
			<enhanced:img src="$assets/me/hero.jpg" alt={m.common_profile_picture()} />
		</CardGlass>
		<!-- Profile Name -->
		<CardGlass
			fill="full"
			color="primary"
			class="row-span-1 font-title text-4xl lg:col-span-3 lg:col-start-1 lg:col-end-4 xl:text-5xl"
			classBg="justify-center items-center flex-row gap-6 py-2 lg:py-4"
		>
			<enhanced:img
				src="$assets/logos/logo.png"
				alt={m.common_profile_picture()}
				class="aspect-square h-full max-h-[3.5rem] w-full max-w-[3.5rem] flex-shrink-0 rounded-full border-2 border-white"
			/>
			<span class="text-primary-foreground"> KesvaL </span>
		</CardGlass>
		<!-- Profile Infos -->
		<CardGlass class="row-span-3 lg:col-span-3 lg:col-start-1 lg:col-end-4" fill="bento">
			{m.lolfunxd()}
		</CardGlass>

		<CardGlass
			fill="bento"
			class="row-span-2 lg:col-span-5 lg:col-start-4 lg:row-start-1"
			classBg="w-full grid grid-cols-4 md:grid-cols-2 lg:grid-cols-4 gap-4 items-center justify-center justify-items-center"
		>
			<enhanced:img
				src="$assets/brands/tailwindcss.svg"
				alt="TailwindCSS"
				class="img aspect-square h-12 md:h-[4.5rem] lg:h-20"
				style:--img-ds-clr="rgba(57, 190, 248, 0.75)"
			/>
			<enhanced:img
				src="$assets/brands/react.svg"
				alt="React"
				class="img aspect-square h-12 md:h-[4.5rem] lg:h-20"
				style:--img-ds-clr="rgba(97, 218, 251, 0.75)"
			/>
			<enhanced:img
				src="$assets/brands/svelte.svg"
				alt="Svelte"
				class="img aspect-square h-12 md:h-[4.5rem] lg:h-20"
				style:--img-ds-clr="rgba(255, 62, 0, 0.75)"
			/>
			<enhanced:img
				src="$assets/brands/typescript.svg"
				alt="TypeScript"
				class="img aspect-square h-12 md:h-[4.5rem] lg:h-20"
				style:--img-ds-clr="rgba(49, 120, 198, 0.75)"
			/>
		</CardGlass>
		<CardGlass class="row-span-2 lg:col-span-4 lg:row-start-1" fill="bento">
			{m.lolfunxdreal()}
		</CardGlass>
		<CardGlass
			fill="bento"
			class="row-span-3 text-2xl font-bold lg:col-span-3 lg:col-start-4 lg:row-start-3 "
			classBg="gap-8 justify-center"
		>
			<div class="flex flex-col gap-2 text-foreground">
				<div class="relative flex items-center justify-between">
					<div class="flex items-center gap-2">
						<span class="relative mb-0.5 font-emoji text-3xl"> 🇫🇷 </span>
						<span
							class="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 scale-x-150 font-emoji text-[12rem] opacity-10 blur-3xl"
						>
							🇫🇷
						</span>
						<span class="relative text-xl font-normal"> {m.language_french()} </span>
					</div>
					<div class="relative">C2</div>
				</div>
				<Progress class="relative h-2 border-none" classChild="bg-primary" value={100} />
			</div>
			<div class="flex flex-col gap-2 text-foreground">
				<div class="relative flex items-center justify-between">
					<div class="flex items-center gap-2">
						<span class="mb-0.5 font-emoji text-3xl"> 🇺🇸 </span>
						<span
							class="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 scale-x-150 font-emoji text-[12rem] opacity-10 blur-3xl"
						>
							🇺🇸
						</span>
						<span class="text-xl font-normal"> {m.language_english()} </span>
					</div>
					<div>C1</div>
				</div>
				<Progress value={90} class="h-2 border-none" classChild="bg-primary" />
			</div>
			<div class="flex flex-col gap-2 text-foreground">
				<div class="relative flex items-center justify-between">
					<div class="flex items-center gap-2">
						<span class="mb-0.5 font-emoji text-3xl"> 🇩🇪 </span>
						<span
							class="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 scale-x-150 font-emoji text-[12rem] opacity-10 blur-3xl"
						>
							🇩🇪
						</span>
						<span class="text-xl font-normal"> {m.language_german()} </span>
					</div>
					<div>A2</div>
				</div>
				<Progress value={45} class="h-2 border-none" classChild="bg-primary" />
			</div>
		</CardGlass>
		<CardGlass
			fill="full"
			color="primary"
			class="row-span-2 lg:col-span-3 lg:col-start-7 lg:row-start-3"
			classBg="justify-center items-center text-primary-foreground text-center"
		>
			<span class="font-title text-9xl">
				{PERSONAL.age}
			</span>
			<span class="text-2xl font-bold"> {m.common_years_old_slf()} </span>
		</CardGlass>
		<CardGlass
			fill="bento"
			class="row-span-3 lg:col-span-3 lg:col-start-10 lg:row-start-3"
			classBg="w-full items-center justify-center justify-items-center gap-8 grid grid-cols-2 grid-rows-2"
		>
			<enhanced:img
				src="$assets/brands/figma.svg"
				alt="Figma"
				class="img aspect-square h-[4.5rem] lg:h-20"
				style:--img-ds-clr="rgba(26, 188, 254, 0.75)"
			/>
			<enhanced:img
				src="$assets/brands/photoshop.svg"
				alt="Photoshop"
				class="img aspect-square h-[4.5rem] lg:h-20"
				style:--img-ds-clr="rgba(49, 168, 255, 0.5)"
			/>
			<enhanced:img
				src="$assets/brands/premiere_pro.svg"
				alt="Premiere Pro"
				class="img aspect-square h-[4.5rem] lg:h-20"
				style:--img-ds-clr="rgba(153, 153, 255, 0.5)"
			/>
			<enhanced:img
				src="$assets/brands/after_effects.svg"
				alt="After Effects"
				class="img aspect-square h-[4.5rem] lg:h-20"
				style:--img-ds-clr="rgba(153, 153, 255, 0.5)"
			/>
		</CardGlass>
		<CardGlass
			fill="full"
			color="primary"
			class="row-span-2 lg:col-span-3 lg:col-start-4 lg:row-start-6"
			classBg="justify-center items-center text-primary-foreground text-center"
		>
			<span class="font-title text-9xl">
				{PERSONAL.yearsOfCoding}
			</span>
			<span class="text-2xl font-bold"> {m.common_years_of_coding_slf().toLowerCase()} </span>
		</CardGlass>
		<CardGlass
			fill="bento"
			class="row-span-3 lg:col-span-3 lg:col-start-7 lg:row-start-5"
			classBg="w-full items-center justify-center justify-items-center gap-8 grid grid-cols-2 grid-rows-2"
		>
			<enhanced:img
				src="$assets/brands/nodejs.svg"
				alt="NodeJS"
				class="img aspect-square h-[4.5rem] lg:h-20"
				style:--img-ds-clr="rgba(83, 158, 67, 0.75)"
			/>
			<enhanced:img
				src="$assets/brands/firebase.svg"
				alt="Firebase"
				class="img aspect-square h-[4.5rem] lg:h-20"
				style:--img-ds-clr="rgba(255, 202, 40, 0.75)"
			/>
			<enhanced:img
				src="$assets/brands/mariadb.svg"
				alt="MariaDB"
				class="img aspect-square h-[4.5rem] lg:h-20"
				style:--img-ds-clr="rgba(196, 154, 108, 0.75)"
			/>
			<enhanced:img
				src="$assets/brands/php.svg"
				alt="PHP"
				class="img aspect-square h-[4.5rem] lg:h-20"
				style:--img-ds-clr="rgba(119, 123, 179, 0.75)"
			/>
		</CardGlass>
		<CardGlass
			fill="full"
			color="primary"
			class="row-span-2 lg:col-span-3 lg:col-start-10 lg:row-start-6"
			classBg="justify-center items-center text-primary-foreground text-center"
		>
			<span class="font-title text-9xl">
				{PERSONAL.projects}
			</span>
			<span class="text-2xl font-bold"> {m.home_about_projectsDelivered().toLowerCase()} </span>
		</CardGlass>
	</div>
</section>

<style lang="scss">
	section.container {
		min-height: calc(100vh - 8rem);

		.grid {
			@media screen and (min-width: 1024px) {
				max-height: 720px;
			}
		}

		.img {
			filter: drop-shadow(0px 0px 4rem var(--img-ds-clr));
		}
	}
</style>
