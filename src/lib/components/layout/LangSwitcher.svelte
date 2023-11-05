<script lang="ts">
	import { getFlagEmoji } from '$lib/utils/functions';
	import { locale, locales, t } from 'svelte-i18n';

	import * as Select from '$lib/components/ui/select';
	import { langStore } from '$lib/stores/lang';
	import type { Locale } from '$lib/config';

	const transformLocaleToFlag = (locale: string) => {
		switch (locale.toLowerCase().split('-')[0]) {
			case 'en':
				return 'US';
			default:
				return locale;
		}
	};

	let selected = {
		value: $langStore,
		label: getFlagEmoji(transformLocaleToFlag($langStore)),
		disabled: false,
	};

	const onChange = (opt: any) => {
		langStore.set(opt.value as Locale);
	};
</script>

<div class="font-emoji">
	<Select.Root bind:selected onSelectedChange={onChange}>
		<Select.Trigger
			class="trigger flex aspect-square justify-center border-0 bg-muted p-2 text-lg"
			icon={false}
		>
			{getFlagEmoji(transformLocaleToFlag($langStore))}
			<div class="sr-only">
				{$t('common.changeLanguage')}
			</div>
		</Select.Trigger>
		<Select.Content class="!w-[4.5rem]">
			{#each $locales as lang}
				<Select.Item
					class="font-emoji text-lg"
					value={lang}
					label={getFlagEmoji(transformLocaleToFlag(lang))}
					disabled={false}
				>
					{getFlagEmoji(transformLocaleToFlag(lang))}
				</Select.Item>
			{/each}
		</Select.Content>
	</Select.Root>
</div>
