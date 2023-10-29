<script lang="ts">
	import { t } from 'svelte-i18n';
	import { Slider } from '$lib/components/ui/slider';
	import { readingLengths, settings } from '$lib/stores/settings';

	let readingLengthLevel: number[] = [readingLengths.indexOf($settings.readingLength)];

	$: settings.update((s) => {
		s.readingLength = readingLengths[
			readingLengthLevel[0] as keyof typeof readingLengths
		] as (typeof readingLengths)[number];
		return s;
	});
</script>

<div class="flex flex-col gap-2">
	<div class="flex items-center justify-between font-bold text-muted-foreground">
		<h3 class="font-sans text-lg">
			{$t('settings.readingLength')}
		</h3>
		<p>
			{$settings.readingLength}ch
		</p>
	</div>
	<Slider min={0} step={1} max={4} bind:value={readingLengthLevel} class="mx-2 mt-2 w-auto" />
</div>
