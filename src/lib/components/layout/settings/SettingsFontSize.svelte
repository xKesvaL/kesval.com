<script lang="ts">
	import { t } from 'svelte-i18n';
	import { Slider } from '$lib/components/ui/slider';
	import { fontSizes, settings } from '$lib/stores/settings';

	let fontSizeLevel: number[] = [fontSizes.indexOf($settings.readingSize)];

	$: settings.update((s) => {
		s.readingSize = fontSizes[
			fontSizeLevel[0] as keyof typeof fontSizes
		] as (typeof fontSizes)[number];
		return s;
	});
</script>

<div class="flex flex-col gap-2">
	<div class="flex items-center justify-between font-bold text-muted-foreground">
		<h3 class="font-sans text-lg">
			{$t('settings.fontSize')}
		</h3>
		<p>
			{$settings.readingSize}px
		</p>
	</div>
	<Slider min={0} step={1} max={4} bind:value={fontSizeLevel} class="mx-2 mt-2 w-auto" />
</div>
