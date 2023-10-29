<script lang="ts">
	import { t } from 'svelte-i18n';
	import { Slider } from '$lib/components/ui/slider';
	import { readingLengths, settings } from '$lib/stores/settings';
	import { DEFAULT_SETTINGS } from '$lib/config';

	let readingLength: number[] = [$settings.readingLength];

	$: $settings.readingLength = readingLength[0] || DEFAULT_SETTINGS.readingLength;
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
	<Slider
		min={readingLengths[0]}
		step={readingLengths[1] - readingLengths[0]}
		max={readingLengths.at(-1)}
		bind:value={readingLength}
		class="mx-2 mt-2 w-auto"
	/>
</div>
