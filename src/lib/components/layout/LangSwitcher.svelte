<script lang="ts">
	import { getFlagEmoji } from '$lib/utils/functions';
	import * as Select from '$lib/components/ui/select';
	import { availableLanguageTags, languageTag } from '$paraglide/runtime';
	import * as m from '$paraglide/messages';
	import { goto } from '$app/navigation';
	import { i18n } from '$lib/utils/i18n';
	import { page } from '$app/stores';
	import { LucideCheck } from 'lucide-svelte';

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

	const onChange = async (opt: any) => {
		console.log(opt.value);
		console.log(i18n.resolveRoute($page.url.pathname, opt.value));
		console.log(i18n.route($page.url.pathname));
		// goto(i18n.resolveRoute($page.url.pathname, opt.value));
		// setLanguageTag('fr');
		// setLanguageTag(opt.value as Locale);
	};

	$: emoji = getFlagEmoji(transformLocaleToFlag(selected.value));
</script>

<div class="font-emoji">
	<Select.Root bind:selected onSelectedChange={onChange}>
		<Select.Trigger
			class="trigger flex aspect-square justify-center rounded-full border-0 bg-popover p-2 text-lg transition-all hover:bg-background"
			icon={false}
			aria-label={m.common_changeLanguage()}
		>
			{emoji}
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
					asChild
				>
					<a
						class="relative flex w-full cursor-default select-none items-center rounded-sm bg-card p-4 py-1.5 pl-8 pr-2 font-emoji text-lg outline-none hover:bg-accent hover:text-accent-foreground disabled:pointer-events-none disabled:opacity-50"
						href={i18n.route($page.url.pathname)}
						hreflang={lang}
						aria-current={lang === languageTag() ? 'page' : undefined}
					>
						<span class="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
							{#if lang === languageTag()}
								<LucideCheck />
							{/if}
						</span>
						{getFlagEmoji(transformLocaleToFlag(lang))}
					</a>
				</Select.Item>
			{/each}
		</Select.Content>
	</Select.Root>
</div>
