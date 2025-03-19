<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import { route } from '$lib/ROUTES';
	import { brand } from '$lib/utils/config';
	import * as m from '$paraglide/messages';
	import { localizeHref } from '$paraglide/runtime';
	import {
		IconBrandGithub,
		IconBrandInstagram,
		IconBrandLinkedin,
		IconBrandTwitter,
		IconMessageCirclePlus,
		IconPhotoOff
	} from '@tabler/icons-svelte';
</script>

<section
	class="kcontainer section-hero flex flex-col-reverse items-center justify-between p-4 lg:flex-row"
>
	<div class="flex grow flex-col gap-4">
		<h1 class="max-w-[30ch]">
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
	<div
		class="bg-muted shadow-cool relative flex min-h-80 w-full min-w-80 items-center justify-center rounded-lg border p-4 transition hover:scale-105 md:w-auto"
	>
		<IconPhotoOff class="size-16" stroke={1} />
		<div class="absolute bottom-0 flex translate-y-1/2 gap-4">
			<Button
				size="icon"
				variant="outline"
				class="size-12 rotate-3 [&_svg]:size-6"
				href={brand.github}
			>
				<IconBrandGithub />
			</Button>
			<Button
				size="icon"
				variant="outline"
				class="size-12 -rotate-3 [&_svg]:size-6"
				href={brand.instagram}
			>
				<IconBrandInstagram />
			</Button>
			<Button
				size="icon"
				variant="outline"
				class="size-12 rotate-3 [&_svg]:size-6"
				href={brand.linkedin}
			>
				<IconBrandLinkedin />
			</Button>
		</div>
	</div>
</section>
