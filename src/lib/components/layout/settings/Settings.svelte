<script lang="ts">
	import { Popover, PopoverTrigger, PopoverContent } from '$lib/components/ui/popover';
	import { Button } from '$lib/components/ui/button';
	import { t } from 'svelte-i18n';

	import IconSettings from '$lib/icons/IconSettings.svelte';
	import SettingsThemeSwitcher from './SettingsThemeSwitcher.svelte';
	import { Separator } from '../../ui/separator';
	import SettingsFontSize from './SettingsFontSize.svelte';
	import SettingsFontMaxWidth from './SettingsFontMaxWidth.svelte';
	import SettingsFontLineHeight from './SettingsFontLineHeight.svelte';
	import { settings } from '$lib/stores/settings';
	import SettingsFontDyslexia from './SettingsFontDyslexia.svelte';
	import { transition } from '$lib/utils/functions';

	const resetSettings = () => {
		transition(async () => {
			settings.reset();
		});
	};
</script>

<Popover>
	<PopoverTrigger>
		<Button variant="ghost" size="icon" class="hover:bg-muted hover:text-foreground">
			<div class="sr-only">
				{$t('common.settings')}
			</div>
			<div class="h-6 w-6 transition-colors duration-200">
				<IconSettings />
			</div>
		</Button>
	</PopoverTrigger>
	<PopoverContent class="flex flex-col gap-4">
		<div class="flex items-center justify-between">
			<h2 class="text-xl">{$t('settings.label')}</h2>
			<Button size="sm" on:click={resetSettings}>
				{$t('common.reset')}
			</Button>
		</div>
		{#key $settings.lastReset}
			<Separator />
			<SettingsThemeSwitcher />
			<Separator class="mt-2" />
			<SettingsFontSize />
			<Separator class="mt-2" />
			<SettingsFontMaxWidth />
			<Separator class="mt-2" />
			<SettingsFontLineHeight />
			<Separator class="mt-2" />
			<SettingsFontDyslexia />
		{/key}
	</PopoverContent>
</Popover>
