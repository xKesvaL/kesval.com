<script lang="ts">
	import SkillShowcase from '$lib/components/about/SkillShowcase.svelte';
	import { SKILLS } from '$lib/data/skills';
	import { t } from 'svelte-i18n';
</script>

<section class="container flex flex-col justify-center gap-8 py-8 lg:gap-20">
	<h1 class="text-center text-4xl lg:text-6xl">
		{$t('about.hero.title')}
	</h1>
	<div class="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-8">
		<SkillShowcase type="front-end" skills={SKILLS['front-end']} />
		<SkillShowcase type="back-end" skills={SKILLS['back-end']} />
		<SkillShowcase type="other" skills={SKILLS['other']} />
	</div>
</section>

<style>
	section.container {
		min-height: calc(100vh - 8rem);
	}
</style>
