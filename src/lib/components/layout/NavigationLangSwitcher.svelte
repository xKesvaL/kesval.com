<script lang="ts">
	import * as Select from '$lib/components/ui/select';
	import { getFlagEmoji } from '$lib/utils/functions';
	import { getLocale, locales, setLocale, type Locale } from '$paraglide/runtime';
	import * as m from '$paraglide/messages';

	const transformLocaleToFlag = (locale?: Locale) => {
		if (!locale) return 'US';

		switch (locale.toLowerCase().split('-')[0]) {
			case 'en':
				return 'US';
			default:
				return locale;
		}
	};

	let value = $state<Locale>(getLocale());

	let emoji = $derived(getFlagEmoji(transformLocaleToFlag(value)));

	const onValueChange = (value: string) => {
		setLocale(value as Locale);
	};
</script>

<div class="font-emoji">
	<Select.Root type="single" bind:value {onValueChange}>
		<Select.Trigger
			class="trigger bg-popover hover:bg-background flex aspect-square justify-center rounded-full border-0 p-2 text-lg transition-all"
			aria-label={m.change_language()}
		>
			{emoji}
			<div class="sr-only">
				{m.change_language()}
			</div>
		</Select.Trigger>
		<Select.Content class="!w-[4.5rem]">
			{#each locales as lang}
				<Select.Item
					class="font-emoji text-lg"
					value={lang}
					label={getFlagEmoji(transformLocaleToFlag(lang))}
					disabled={false}
				>
					<!-- <span class="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
						{#if lang === languageTag()}
							<IconCheck />
						{/if}
					</span> -->
					{getFlagEmoji(transformLocaleToFlag(lang))}
				</Select.Item>
			{/each}
		</Select.Content>
	</Select.Root>
</div>
