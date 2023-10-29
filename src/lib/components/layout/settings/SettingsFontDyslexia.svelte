<script lang="ts">
	import { t } from 'svelte-i18n';
	import { settings } from '$lib/stores/settings';
	import { Switch } from '$lib/components/ui/switch';
</script>

<div class="flex items-center justify-between gap-2 font-bold text-muted-foreground">
	<h3 class="font-sans text-lg">
		{$t('settings.dyslexia')}
	</h3>
	<Switch bind:checked={$settings.dyslexia} />
</div>
