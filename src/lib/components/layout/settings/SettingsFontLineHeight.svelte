<script lang="ts">
	import { Slider } from '$lib/components/ui/slider';
	import { readingHeights, settings } from '$lib/stores/settings';
	import { DEFAULT_SETTINGS } from '$lib/config';

	import * as m from '$paraglide/messages';

	let readingHeight: number[] = [$settings.readingHeight];

	$: $settings.readingHeight = readingHeight[0] || DEFAULT_SETTINGS.readingHeight;
</script>

<div class="flex flex-col gap-2">
	<div class="flex items-center justify-between font-bold text-muted-foreground">
		<h3 class="font-sans text-lg">
			{m.settings_readingHeight()}
		</h3>
		<p>
			{$settings.readingHeight * $settings.readingSize}px
		</p>
	</div>
	<Slider
		min={readingHeights[0]}
		step={readingHeights[1] - readingHeights[0]}
		max={readingHeights.at(-1)}
		bind:value={readingHeight}
		class="mx-2 mt-2 w-auto"
	/>
</div>
