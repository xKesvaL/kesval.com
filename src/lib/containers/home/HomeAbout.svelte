<script>
	import CardGlass from '$lib/components/cards/CardGlass.svelte';
	import PERSONAL from '$lib/data/personal';
	import { t } from 'svelte-i18n';
</script>

<section class="container-sm section container flex flex-col justify-center">
	<h2 class="text-center text-4xl lg:text-5xl">
		{$t('hero.about.title')}
	</h2>
	<div class="grid gap-8 lg:grid-cols-2">
		<div class="grid h-full grid-rows-2 gap-4">
			<div>
				<h3 class="font-sans text-4xl font-bold">Texte</h3>
				<p>Texte</p>
			</div>
			<div>
				<h3 class="font-sans text-4xl font-bold">Texte</h3>
				<p>Texte</p>
			</div>
		</div>
		<div class="grid grid-cols-2 grid-rows-2 gap-4">
			<CardGlass>
				<span class="font-title text-6xl"> {PERSONAL.yearsOfExperience} </span>
				<p class="lg:text-lg">
					{$t('common.yearsOfExperience')}
				</p>
			</CardGlass>
			<CardGlass delay={Math.random()}>
				<span class="font-title text-6xl"> 05 </span>
				<p class="lg:text-lg">
					{$t('home.about.projectsDelivered')}
				</p></CardGlass
			>
			<CardGlass delay={Math.random() * 2}>
				<span class="font-title text-6xl"> 02 </span>
				<p class="lg:text-lg">
					{$t('home.about.professionalExperiences')}
				</p></CardGlass
			>
			<CardGlass delay={Math.random() * 3}>
				<span class="font-title text-6xl"> 08 </span>
				<p class="lg:text-lg">
					{$t('home.about.openSourceContributions')}
				</p></CardGlass
			>
		</div>
	</div>
</section>

<style lang="scss">
</style>
