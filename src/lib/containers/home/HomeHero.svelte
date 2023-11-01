<script>
	import Image from '$lib/components/base/Image.svelte';
	import Socials from '$lib/components/base/Socials.svelte';
	import Sparkles from '$lib/components/base/Sparkles.svelte';
	import { Button } from '$lib/components/ui/button';
	import { bot } from '$lib/stores/bot';
	import { t } from 'svelte-i18n';
</script>

<section
	class="section container-wide container grid min-h-[80vh] grid-cols-[0.5fr,3fr] items-center justify-items-center gap-4 lg:grid-cols-[max-content,2fr,1fr]"
>
	<div class="">
		<Socials vertical={true} />
	</div>
	<div class="image max-w-sm overflow-hidden border-4 border-primary shadow-2xl shadow-primary/40">
		<Image src="/images/me/hero.jpg" alt={$t('common.photoOfMe')} />
	</div>
	<div
		class="col-span-full flex flex-col gap-4 lg:col-start-2 lg:col-end-3 lg:row-start-1 lg:row-end-2"
	>
		<Sparkles>
			<h1 class="text-6xl">
				{$t('home.hero.title')}
			</h1>
		</Sparkles>
		<p class="max-w-[45ch] text-lg">
			{$t('home.hero.description')}
		</p>
		<div class="flex gap-4">
			<Button>
				{$t('home.hero.workWithMe')}
			</Button>
			<Button variant="secondary" on:click={bot.toggle}>
				{$t('home.hero.contactMe')}
			</Button>
		</div>
	</div>
</section>

<style lang="scss">
	.image {
		border-radius: 63% 37% 37% 63%/43% 37% 63% 57%;
	}
</style>
