<script>
	import CardGlass from '$lib/components/cards/CardGlass.svelte';
	import PERSONAL from '$lib/data/personal';
	import { t } from 'svelte-i18n';
</script>

<section class="container-sm section container flex flex-col justify-center">
	<h2 class="text-center text-4xl lg:text-5xl">
		{$t('hero.about.title')}
	</h2>
	<div class="grid gap-8 lg:grid-cols-2 lg:gap-16">
		<div class="flex h-full flex-col gap-4">
			<h3 class="mb-2 font-sans text-4xl font-bold">
				{$t('home.about.passionate')}
			</h3>
			<p>
				Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est quisquam pariatur
				reprehenderit error porro provident dolores laboriosam a. Quaerat, eum consequatur.
				Perferendis, labore? Eius omnis suscipit aspernatur.
			</p>
			<p>
				Interested in development since I was a child, I started with the creation of minecraft
				plugins then I moved on to discord bots. As of today, I'm a web developer as you can see!
			</p>
		</div>
		<div class="grid grid-cols-2 grid-rows-2 gap-4">
			<CardGlass>
				<span class="font-title text-6xl"> {PERSONAL.yearsOfExperience} </span>
				<p class="lg:text-xl">
					{$t('common.yearsOfExperience')}
				</p>
			</CardGlass>
			<CardGlass delay={Math.random()}>
				<span class="font-title text-6xl"> 05 </span>
				<p class="lg:text-xl">
					{$t('home.about.projectsDelivered')}
				</p></CardGlass
			>
			<CardGlass delay={Math.random() * 2}>
				<span class="font-title text-6xl"> 02 </span>
				<p class="lg:text-xl">
					{$t('home.about.professionalExperiences')}
				</p></CardGlass
			>
			<CardGlass delay={Math.random() * 3}>
				<span class="font-title text-6xl"> 08 </span>
				<p class="lg:text-xl">
					{$t('home.about.openSourceContributions')}
				</p></CardGlass
			>
		</div>
	</div>
</section>

<style lang="scss">
</style>
