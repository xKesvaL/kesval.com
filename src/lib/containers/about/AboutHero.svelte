<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import { route } from '$lib/ROUTES';
	import { localizeHref } from '$paraglide/runtime';
	import { IconMessageCirclePlus } from '@tabler/icons-svelte';
	import * as m from '$paraglide/messages';
</script>

<section
	class="min-h-screen-wo-nav kcontainer relative flex flex-col items-center justify-between px-4 py-8 md:flex-row md:py-20"
>
	<div class="flex grow flex-col gap-4">
		<span class="text-primary text-xs tracking-widest uppercase">
			{m.about_hero_about_me()}
		</span>
		<h1 class="max-w-[30ch] text-3xl leading-snug font-bold md:text-4xl lg:text-5xl">
			{m.about_hero_title()}
		</h1>
		<p class="text-muted-foreground max-w-prose text-lg">
			{m.about_hero_subtitle()}
		</p>
		<div class="mt-4 flex gap-2">
			<Button href={localizeHref(route('/contact'))}>
				<IconMessageCirclePlus />
				{m.contact_me()}
			</Button>
			<Button href={localizeHref(`${route('/a-propos')}#resume`)} variant="outline">
				{m.my_resume()}
			</Button>
		</div>
	</div>
	<div>img</div>
</section>
