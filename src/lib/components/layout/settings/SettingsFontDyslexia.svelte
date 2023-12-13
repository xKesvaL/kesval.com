<script lang="ts">
	import { settings } from '$lib/stores/settings';
	import { Switch } from '$lib/components/ui/switch';

	import * as m from '$lib/paraglide/messages';
</script>

<div class="flex items-center justify-between gap-2 font-bold text-muted-foreground">
	<h3 class="font-sans text-lg">
		{m.settings_dyslexia()}
	</h3>
	<Switch bind:checked={$settings.dyslexia} />
</div>
