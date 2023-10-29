<script lang="ts">
	import { theme } from '$lib/stores/theme';
	import { t } from 'svelte-i18n';
	import * as Select from '$lib/components/ui/select';
	import { THEMES, type Theme } from '$lib/config';

	const setTheme = (newTheme: Theme) => {
		theme.set(newTheme);
	};

	let selected = {
		value: $theme,
		label: $t(`common.${$theme}`)
	};
</script>

<div class="flex flex-col gap-2">
	<h3 class="font-sans text-lg font-bold text-muted-foreground">
		{$t('settings.chooseATheme')}
	</h3>
	<Select.Root bind:selected>
		<Select.Trigger>
			<Select.Value placeholder="Select a theme" />
		</Select.Trigger>
		<Select.Content>
			<Select.Group>
				{#each THEMES as theme}
					<Select.Item on:click={() => setTheme(theme)} value={theme} label={$t(`common.${theme}`)}>
						{$t(`common.${theme}`)}
					</Select.Item>
				{/each}
			</Select.Group>
		</Select.Content>
	</Select.Root>
</div>
