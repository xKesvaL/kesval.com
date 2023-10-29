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
			<Button size="sm" on:click={() => settings.reset()}>
				{$t('common.reset')}
			</Button>
		</div>
		<Separator />
		<SettingsThemeSwitcher />
		<Separator class="mt-2" />
		{#key $settings.readingSize}
			<SettingsFontSize />
		{/key}
		<Separator class="mt-2" />
		{#key $settings.readingLength}
			<SettingsFontMaxWidth />
		{/key}
		<Separator class="mt-2" />
		{#key $settings.readingHeight}
			<SettingsFontLineHeight />
		{/key}
		<Separator class="mt-2" />
	</PopoverContent>
</Popover>
