<script lang="ts">
	import { theme } from '$lib/stores/theme';
	import * as Select from '$lib/components/ui/select';
	import { THEMES, type Theme } from '$lib/config';

	import * as m from '$paraglide/messages';
	import { getI18n } from '$lib/utils/functions';

	const setTheme = (newTheme: Theme) => {
		theme.set(newTheme);
	};

	let selected = {
		value: $theme,
		label: getI18n(`common_${$theme}`)
	};
</script>

<div class="flex flex-col gap-2">
	<h3 class="font-sans text-lg font-bold text-muted-foreground">
		{m.settings_chooseATheme()}
	</h3>
	<Select.Root bind:selected>
		<Select.Trigger>
			<Select.Value />
		</Select.Trigger>
		<Select.Content>
			<Select.Group>
				{#each THEMES as theme}
					<Select.Item
						on:click={() => setTheme(theme)}
						value={theme}
						label={getI18n(`common_${theme}`)}
					>
						{getI18n(`common_${theme}`)}
					</Select.Item>
				{/each}
			</Select.Group>
		</Select.Content>
	</Select.Root>
</div>
