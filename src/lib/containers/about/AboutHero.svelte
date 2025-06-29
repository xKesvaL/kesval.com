<script lang="ts">
	import inView from '$lib/actions/inView';
	import { IsMobile } from '$lib/hooks/is-mobile.svelte';
	import { translate } from '$lib/utils/i18n';
	import * as m from '$paraglide/messages';
	import { getLocale } from '$paraglide/runtime';
	import NumberFlow, { continuous } from '@number-flow/svelte';
	import { IconAward, IconClipboardCheck, IconUserStar } from '@tabler/icons-svelte';
	import dayjs from 'dayjs';

	const isMobile = new IsMobile();

	type Values = {
		experience: number;
		projects: number;
		clients: number;
	};

	let actualValues = {
		experience: dayjs().diff(dayjs('2022-01-01'), 'year'),
		projects: 11,
		clients: 4
	} satisfies Values;

	let values = $state<Values>({
		experience: 0,
		projects: 0,
		clients: 0
	});

	const updateValues = (key: keyof Values) => {
		setTimeout(
			() => {
				values[key] = actualValues[key];
			},
			isMobile.current ? 1000 : 500
		);
	};
</script>

<section class="section-hero kcontainer justify-center px-4 md:pt-12 md:pb-16 lg:pt-12 lg:pb-16">
	<div class="flex flex-col items-start gap-4 md:col-span-5">
		<div class="flex flex-col gap-1">
			<h1
				class=" big from-foreground to-muted-foreground bg-gradient-to-b bg-clip-text text-transparent"
			>
				{m['about.hero.title']()}
			</h1>
			<span class=" text-xl md:text-2xl">
				{m['about.hero.subtitle']()}
			</span>
			<p class="text-muted-foreground mt-3 max-w-prose md:text-lg">
				{m['about.hero.description']()}
			</p>
		</div>
	</div>
	<div
		class="border-primary to-muted/10 after:bg-[radial-gradient(circle_at_center,theme(colors.primary.DEFAULT/3%)_0%,transparent_70%),radial-gradient(circle_at_bottom_right,theme(colors.secondary.DEFAULT/2%)_0%,transparent_60%)] shadow-cool relative grid gap-4 rounded-2xl border bg-gradient-to-br from-white via-white px-8 pt-2 pb-8 transition-all duration-300 after:absolute after:inset-0 after:-z-10 after:rounded-2xl after:opacity-40 md:grid-cols-3 md:gap-8"
	>
		{#each Object.keys(values) as key (key)}
			<div
				class=" flex flex-col items-start gap-2"
				use:inView={{
					onEnter: () => updateValues(key as keyof Values)
				}}
			>
				<div class="-space-y-4">
					<div class="flex items-center gap-4">
						<NumberFlow
							locales={getLocale()}
							plugins={[continuous]}
							value={values[key as keyof Values]}
							class="text-primary-darker text-7xl font-extrabold md:text-8xl"
						/>
						{#if key === 'experience'}
							<IconAward class="size-16 md:size-22" stroke={1.5} />
						{:else if key === 'projects'}
							<IconClipboardCheck class="size-16 md:size-22" stroke={1.5} />
						{:else if key === 'clients'}
							<IconUserStar class="size-16 md:size-22" stroke={1.5} />
						{/if}
					</div>
					<h3>
						{#await translate(`about.hero.${key as keyof Values}`) then translation}
							{translation}
						{/await}
					</h3>
				</div>
				<p class="text-muted-foreground max-w-prose">
					{#await translate(`about.hero.${key as keyof Values}_description`) then translation}
						{translation}
					{/await}
				</p>
			</div>
		{/each}
	</div>
</section>
