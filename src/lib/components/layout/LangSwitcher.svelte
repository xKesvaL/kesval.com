<script lang="ts">
	import { getFlagEmoji } from '$lib/utils/functions';

	import * as Select from '$lib/components/ui/select';
	import type { Locale } from '$lib/config';
	import { languageTag, setLanguageTag } from '$paraglide/runtime';

	const transformLocaleToFlag = (locale: string) => {
		switch (locale.toLowerCase().split('-')[0]) {
			case 'en':
				return 'US';
			default:
				return locale;
		}
	};

	let selected = {
		value: languageTag(),
		label: getFlagEmoji(transformLocaleToFlag(languageTag())),
		disabled: false,
	};

	const onChange = (opt: any) => {
		setLanguageTag(opt.value as Locale);
	};
</script>

<div class="font-emoji">
	<Select.Root bind:selected onSelectedChange={onChange}>
		<Select.Trigger
			class="trigger flex aspect-square justify-center border-0 bg-muted p-2 text-lg"
			icon={false}
			aria-label={$t('common.changeLanguage')}
		>
			{getFlagEmoji(transformLocaleToFlag(languageTag()))}
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
