<script lang="ts">
	import { t } from 'svelte-i18n';
	import { Slider } from '$lib/components/ui/slider';
	import { readingHeights, settings } from '$lib/stores/settings';

	let readingHeightLevel: number[] = [readingHeights.indexOf($settings.readingHeight)];

	$: settings.update((s) => {
		s.readingHeight = readingHeights[
			readingHeightLevel[0] as keyof typeof readingHeights
		] as (typeof readingHeights)[number];
		return s;
	});
</script>

<div class="flex flex-col gap-2">
	<div class="flex items-center justify-between font-bold text-muted-foreground">
		<h3 class="font-sans text-lg">
			{$t('settings.readingHeight')}
		</h3>
		<p>
			{$settings.readingHeight * $settings.readingSize}px
		</p>
	</div>
	<Slider min={0} step={1} max={2} bind:value={readingHeightLevel} class="mx-2 mt-2 w-auto" />
</div>
