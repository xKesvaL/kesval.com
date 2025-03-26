<script lang="ts">
	import { IconBarbell, IconDevices, IconPhotoOff, IconRocket } from '@tabler/icons-svelte';
	import * as m from '$paraglide/messages';
	import { translate } from '$lib/utils/i18n';
</script>

<section
	class="kcontainer section-hero relative grid gap-8 px-4 lg:grid-cols-12 lg:items-center lg:justify-between"
>
	<div class="flex grow flex-col gap-2 lg:col-span-7">
		<span class="suptitle">
			{translate('about.hero.about_me')}
		</span>
		<h1 class="max-w-[30ch]">
			{translate('about.hero.title')}
		</h1>
		<p class="text-muted-foreground max-w-prose text-lg">
			{translate('home.hero.subtitle', { brand: translate('brand.name') })}
		</p>
		<div class="mt-4 flex flex-wrap gap-8">
			<div class="flex items-center gap-2 text-sm">
				<IconRocket class="size-4" />
				{translate('about.hero.identity.entrepreneur')}
			</div>
			<div class="flex items-center gap-2 text-sm">
				<IconDevices class="size-4" />
				{translate('about.hero.identity.developer')}
			</div>
			<div class="flex items-center gap-2 text-sm">
				<IconBarbell class="size-4" />
				{translate('about.hero.identity.powerlifter')}
			</div>
		</div>
	</div>
	<div class="flex w-full justify-end gap-4 lg:col-span-5">
		<div class="grid w-full grid-cols-2 gap-x-6 gap-y-4">
			<div
				class="bg-muted shadow-cool col-span-full flex h-full min-h-20 items-center justify-center rounded-xl border p-4 transition hover:scale-105 lg:min-h-64"
			>
				<IconPhotoOff class="size-16" stroke={1} />
			</div>
			<div
				class="bg-muted shadow-cool flex h-full min-h-20 -rotate-2 items-center justify-center rounded-xl border p-4 transition hover:scale-105 lg:min-h-64"
			>
				<IconPhotoOff class="size-16" stroke={1} />
			</div>
			<div
				class="bg-muted shadow-cool flex h-full min-h-20 rotate-2 items-center justify-center rounded-xl border p-4 transition hover:scale-105 lg:min-h-64"
			>
				<IconPhotoOff class="size-16" stroke={1} />
			</div>
		</div>
	</div>
</section>
