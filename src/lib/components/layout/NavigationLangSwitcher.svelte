<script lang="ts">
	import * as Select from '$lib/components/ui/select';
	import { capitalizeFirstLetter, getFlagEmoji } from '$lib/utils/functions';
	import { getLocale, locales, setLocale, type Locale } from '$paraglide/runtime';
	import * as m from '$paraglide/messages';
	import { cn } from '$lib/utils/ui';
	import { navigation } from '$lib/stores/common.svelte';

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

	let languageNames = new Intl.DisplayNames(getLocale(), { type: 'language' });
</script>

<div class="font-emoji">
	<Select.Root type="single" bind:value {onValueChange}>
		<Select.Trigger
			size="lg"
			class={cn(
				' flex aspect-square h-10 cursor-pointer justify-center rounded-lg border p-2 text-lg ring-1 ring-transparent transition-all duration-300 [&>svg]:hidden',
				navigation.state === 'open' &&
					'bg-background! hover:bg-background/90 md:bg-background md:text-primary md:hover:bg-background/90 md:ring-primary delay-50',
				navigation.state === 'closed' && 'bg-muted hover:bg-muted/90 delay-[400ms]'
			)}
			aria-label={m.change_language()}
		>
			{emoji}
			<div class="sr-only">
				{m.change_language()}
			</div>
		</Select.Trigger>
		<Select.Content class="!w-[4.5rem]" align="start" alignOffset={-2}>
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
					<span class="text-muted-foreground text-sm">
						{capitalizeFirstLetter(languageNames.of(lang) ?? lang)}
					</span>
				</Select.Item>
			{/each}
		</Select.Content>
	</Select.Root>
</div>
