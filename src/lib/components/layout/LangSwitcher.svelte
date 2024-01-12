<script lang="ts">
	import { getFlagEmoji } from '$lib/utils/functions';
	import { browser } from '$app/environment';
	import * as Select from '$lib/components/ui/select';
	import type { Locale } from '$lib/config';
	import { availableLanguageTags, languageTag, setLanguageTag } from '$paraglide/runtime';
	import * as m from '$paraglide/messages';

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
		disabled: false
	};

	const onChange = (opt: any) => {
		setLanguageTag(opt.value as Locale);

		if (browser) {
			window.location.reload();
		}
	};
</script>

<div class="font-emoji">
	<Select.Root bind:selected onSelectedChange={onChange}>
		<Select.Trigger
			class="trigger flex aspect-square justify-center border-0 bg-popover p-2 text-lg transition-all rounded-full hover:bg-background"
			icon={false}
			aria-label={m.common_changeLanguage()}
		>
			{getFlagEmoji(transformLocaleToFlag(languageTag()))}
			<div class="sr-only">
				{m.common_changeLanguage()}
			</div>
		</Select.Trigger>
		<Select.Content class="!w-[4.5rem]">
			{#each availableLanguageTags as lang}
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
