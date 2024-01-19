<script>
	import Socials from '$lib/components/base/Socials.svelte';
	import Sparkles from '$lib/components/base/Sparkles.svelte';
	import { Button } from '$lib/components/ui/button';
	import { bot } from '$lib/stores/bot';

	import * as m from '$paraglide/messages';
</script>

<section
	class="container grid grid-cols-[0.5fr,3fr] items-center justify-items-center gap-4 lg:grid-cols-[max-content,2fr,1fr]"
>
	<div class="">
		<Socials vertical={true} />
	</div>
	<div class="image max-w-sm overflow-hidden border-4 border-primary shadow-2xl shadow-primary/40">
		<enhanced:img src="$assets/me/hero.jpg" alt={m.common_profile_picture()} />
	</div>
	<div
		class="col-span-full flex flex-col gap-4 lg:col-start-2 lg:col-end-3 lg:row-start-1 lg:row-end-2"
	>
		<Sparkles>
			<h1 class="text-6xl">
				{m.home_hero_title()}
			</h1>
		</Sparkles>
		<p class="max-w-[45ch] text-lg">
			{m.home_hero_description()}
		</p>
		<div class="flex gap-4">
			<Button>
				{m.home_hero_workWithMe()}
			</Button>
			<Button variant="secondary" on:click={bot.toggle}>
				{m.home_hero_contactMe()}
			</Button>
		</div>
	</div>
</section>

<style lang="scss">
	section.container {
		min-height: calc(100vh - 8rem);
		.image {
			border-radius: 63% 37% 37% 63%/43% 37% 63% 57%;
		}
	}
</style>
