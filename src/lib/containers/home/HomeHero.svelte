<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import { route } from '$lib/ROUTES';
	import * as m from '$paraglide/messages';
	import { localizeHref } from '$paraglide/runtime';
	import { IconBrandGithub, IconMessageCirclePlus, IconPhotoOff } from '@tabler/icons-svelte';
</script>

<section
	class="kcontainer min-h-screen-wo-nav flex flex-col-reverse items-center justify-between p-4 lg:flex-row"
>
	<div class="flex grow flex-col gap-4">
		<h1 class="max-w-[30ch] text-3xl leading-snug font-bold md:text-4xl lg:text-5xl">
			{m.home_hero_title()}
		</h1>
		<p class="text-muted-foreground max-w-prose text-lg">
			{m.home_hero_subtitle({ brand: m.brand_name() })}
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
	<div class="">
		<div
			class="bg-muted shadow-cool relative flex min-h-80 min-w-80 items-center justify-center rounded-lg border p-4 transition hover:scale-110"
		>
			<IconPhotoOff class="size-16" stroke={1} />
			<div class="absolute bottom-0 translate-y-1/2">
				<Button size="icon" variant="secondary">
					<IconBrandGithub />
				</Button>
			</div>
		</div>
	</div>
</section>
