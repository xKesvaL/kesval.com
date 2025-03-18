<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import { route } from '$lib/ROUTES';
	import { localizeHref } from '$paraglide/runtime';
	import {
		IconBarbell,
		IconDevices,
		IconMessageCirclePlus,
		IconPhotoOff,
		IconRocket
	} from '@tabler/icons-svelte';
	import * as m from '$paraglide/messages';
</script>

<section
	class="kcontainer section-hero relative grid gap-8 px-4 lg:grid-cols-12 lg:items-center lg:justify-between"
>
	<div class="flex grow flex-col gap-2 lg:col-span-7">
		<span class="text-primary text-xs tracking-widest uppercase">
			{m.about_hero_about_me()}
		</span>
		<h1 class="max-w-[30ch] text-3xl leading-snug font-bold md:text-4xl lg:text-5xl">
			{m.about_hero_title()}
		</h1>
		<p class="text-muted-foreground max-w-prose text-lg">
			{m.about_hero_subtitle()}
		</p>
		<div class="mt-4 flex flex-wrap gap-8">
			<div class="flex items-center gap-2 text-sm">
				<IconRocket class="size-4" />
				{m.about_hero_identity_entrepreneur()}
			</div>
			<div class="flex items-center gap-2 text-sm">
				<IconDevices class="size-4" />
				{m.about_hero_identity_developer()}
			</div>
			<div class="flex items-center gap-2 text-sm">
				<IconBarbell class="size-4" />
				{m.about_hero_identity_powerlifter()}
			</div>
		</div>
	</div>
	<div class="flex w-full justify-end gap-4 lg:col-span-5">
		<div class="grid w-full grid-cols-2 gap-x-6 gap-y-4">
			<div
				class="bg-muted shadow-cool col-span-full flex h-full min-h-20 items-center justify-center rounded-lg border p-4 transition hover:scale-105 lg:min-h-64"
			>
				<IconPhotoOff class="size-16" stroke={1} />
			</div>
			<div
				class="bg-muted shadow-cool flex h-full min-h-20 -rotate-2 items-center justify-center rounded-lg border p-4 transition hover:scale-105 lg:min-h-64"
			>
				<IconPhotoOff class="size-16" stroke={1} />
			</div>
			<div
				class="bg-muted shadow-cool flex h-full min-h-20 rotate-2 items-center justify-center rounded-lg border p-4 transition hover:scale-105 lg:min-h-64"
			>
				<IconPhotoOff class="size-16" stroke={1} />
			</div>
		</div>
	</div>
</section>
