<script lang="ts">
	import { Slider } from '$lib/components/ui/slider';
	import { readingSizes, settings } from '$lib/stores/settings';
	import { DEFAULT_SETTINGS } from '$lib/config';

	import * as m from '$paraglide/messages';

	let readingSize: number[] = [$settings.readingSize];

	$: $settings.readingSize = readingSize[0] || DEFAULT_SETTINGS.readingSize;
</script>

<div class="flex flex-col gap-2">
	<div class="flex items-center justify-between font-bold text-muted-foreground">
		<h3 class="font-sans text-lg">
			{m.settings_readingSize()}
		</h3>
		<p>
			{$settings.readingSize}px
		</p>
	</div>
	<Slider
		min={readingSizes[0]}
		step={readingSizes[1] - readingSizes[0]}
		max={readingSizes.at(-1)}
		bind:value={readingSize}
		class="mx-2 mt-2 w-auto"
	/>
</div>
