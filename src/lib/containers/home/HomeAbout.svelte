<script lang="ts">
	import inView from '$lib/actions/inView';
	import { IsMobile } from '$lib/hooks/is-mobile.svelte';
	import { translate } from '$lib/utils/i18n';
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

<section class="section bg-primary pyc-lg lg:pyc-xl relative z-10 overflow-hidden">
	<div class="kcontainer text-primary-foreground flex w-full flex-col gap-8 px-4 md:gap-12">
		<div class="grid gap-6 md:grid-cols-3 md:gap-8">
			{#each Object.keys(values) as key (key)}
				<div
					class=" bg-primary-foreground/5 hover:bg-primary-foreground/10 border-primary-foreground/10 flex flex-col rounded-xl border p-6 pt-2 backdrop-blur-lg transition"
					use:inView={{
						onEnter: () => updateValues(key as keyof Values)
					}}
				>
					<div class="flex items-center gap-4">
						<NumberFlow
							locales={getLocale()}
							plugins={[continuous]}
							value={values[key as keyof Values]}
							class="text-primary-foreground text-7xl font-extrabold md:text-8xl"
						/>
						{#if key === 'experience'}
							<IconAward class="text-primary-foreground size-18 md:size-20" stroke={1.5} />
						{:else if key === 'projects'}
							<IconClipboardCheck class="text-primary-foreground size-18 md:size-20" stroke={1.5} />
						{:else if key === 'clients'}
							<IconUserStar class="text-primary-foreground size-18 md:size-20" stroke={1.5} />
						{/if}
					</div>

					<div class="-mt-2 space-y-2">
						<h3 class="text-primary-foreground text-3xl font-semibold">
							{#await translate(`home.about.${key as keyof Values}`) then translation}
								{translation}
							{/await}
						</h3>
						<p class="text-primary-foreground text-sm leading-relaxed">
							{#await translate(`home.about.${key as keyof Values}_description`) then translation}
								{translation}
							{/await}
						</p>
					</div>
				</div>
			{/each}
		</div>

		<!-- Subtle background pattern -->
		<div class="absolute inset-0 -z-10 opacity-15">
			<div class="bgc-dot h-full w-full"></div>
		</div>
	</div>
</section>
