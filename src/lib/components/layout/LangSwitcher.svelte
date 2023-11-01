<script lang="ts">
	import { getFlagEmoji } from '$lib/utils/functions';
	import { locale, locales, t } from 'svelte-i18n';

	import * as Select from '$lib/components/ui/select';
	import { langStore } from '$lib/stores/lang';
	import type { Locale } from '$lib/config';
	import { goto } from '$app/navigation';

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
		label: getFlagEmoji(transformLocaleToFlag($langStore))
	};

	$: selected = {
		value: $langStore,
		label: getFlagEmoji(transformLocaleToFlag($langStore))
	};

	const switchToLocale = async (locale: string) => {
		const url = langStore.getUrlForLang(locale as Locale);
		langStore.set(locale as Locale);
		await goto(url);
	};
</script>

<div class="font-emoji">
	<Select.Root bind:selected>
		<Select.Trigger
			class="trigger flex aspect-square justify-center border-0 bg-muted p-2 text-lg"
			icon={false}
		>
			{getFlagEmoji(transformLocaleToFlag($locale || $langStore))}
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
					on:click={() => switchToLocale(lang)}
				>
					{getFlagEmoji(transformLocaleToFlag(lang))}
				</Select.Item>
			{/each}
		</Select.Content>
	</Select.Root>
</div>
