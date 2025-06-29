<script lang="ts">
	import Sparkles from '$lib/components/base/Sparkles.svelte';
	import { Badge } from '$lib/components/ui/badge';
	import type { ServiceType } from '$lib/utils/config';
	import { translate } from '$lib/utils/i18n';
	import * as Card from '$lib/components/ui/card';
	import { Button } from '$lib/components/ui/button';
	import { IconArrowLeft, IconGlobe, IconPhone, IconPlayerPlay } from '@tabler/icons-svelte';
	import * as m from '$paraglide/messages';
	import { localizeHref } from '$paraglide/runtime';
	import { route } from '$lib/ROUTES';

	type Props = {
		service: ServiceType;
	};

	const { service }: Props = $props();

	const tService = `services.${service.id}` as const;
	const tDetails = `${tService}.details` as const;
</script>

<section
	class="section-hero from-background min-h-0 bg-gradient-to-b via-[var(--color-spe)]/1 via-50% to-[var(--color-spe)]/9"
	style="--color-spe: {service.color}"
>
	<div class="kcontainer grid w-full gap-16 px-4 lg:grid-cols-2">
		<div class="flex flex-col gap-4">
			<Button variant="ghost" class="mb-4 w-fit" href={localizeHref(route('/services'))}>
				<IconArrowLeft class="size-5!" />
				{m['common.back']()}
			</Button>
			<Badge class="h-10 gap-3 rounded-full bg-[var(--color-spe)] pr-5 pl-4 text-sm font-medium">
				<service.icon class="size-5!" />
				{#await translate(`${tService}.title`) then title}
					{title}
				{/await}
			</Badge>
			<h1 class="h2">
				{#await translate(`${tDetails}.title_before`) then titleBefore}
					{titleBefore}
				{/await}
				<Sparkles color="special" highlight="color-spe">
					{#await translate(`${tDetails}.title_highlight`) then titleHighlight}
						{titleHighlight}
					{/await}
				</Sparkles>
				{#await translate(`${tDetails}.title_after`) then titleAfter}
					{titleAfter}
				{/await}
			</h1>
			<p class="text-muted-foreground max-w-prose text-lg lg:text-xl">
				{#await translate(`${tDetails}.description`) then description}
					{description}
				{/await}
			</p>
			<div class="mt-4 grid grid-cols-2 gap-4">
				<Card.Root>
					<Card.Content class="flex flex-col items-center gap-1">
						<span class="text-3xl font-bold" style="color: {service.color}">
							{#await translate(`${tDetails}.result_1.amount`) then result1Amount}
								{result1Amount}
							{/await}
						</span>
						<p class="text-muted-foreground">
							{#await translate(`${tDetails}.result_1.short_description`) then result1ShortDescription}
								{result1ShortDescription}
							{/await}
						</p>
					</Card.Content>
				</Card.Root>
				<Card.Root>
					<Card.Content class="flex flex-col items-center gap-1">
						<span class="text-primary text-3xl font-bold">
							{#await translate(`${tDetails}.result_2.amount`) then result2Amount}
								{result2Amount}
							{/await}
						</span>
						<p class="text-muted-foreground">
							{#await translate(`${tDetails}.result_2.short_description`) then result2ShortDescription}
								{result2ShortDescription}
							{/await}
						</p>
					</Card.Content>
				</Card.Root>
			</div>
			<div class="mt-4 flex gap-4">
				<Button
					size="lg"
					class="relative h-11 w-fit gap-3 bg-[var(--color-spe)] pr-5! hover:bg-[var(--color-spe)]/90"
					href={localizeHref(route('/contact'))}
				>
					<service.icon class="size-5!" />
					{#await translate(`${tDetails}.cta`) then cta}
						{cta}
					{/await}
					<div
						class="bg-destructive absolute top-0 right-0 translate-x-2 -translate-y-1/2 rounded-full px-2 py-1 text-xs"
					>
						{m['common.free_quote']()}
					</div>
				</Button>
				<Button
					size="lg"
					class="h-11 w-fit gap-3 pr-5!"
					variant="outline"
					href={localizeHref(route('/projets'))}
				>
					<IconPlayerPlay class="size-5!" />
					{#await translate(`${tDetails}.see_more`) then seeMore}
						{seeMore}
					{/await}
				</Button>
			</div>
		</div>
		<div class="flex flex-col justify-center">
			<div class="relative">
				<div
					class="-rotate-3 transform rounded-2xl bg-white p-8 shadow-xl transition-transform duration-300 hover:rotate-0"
				>
					<div class="space-y-4">
						<div class="flex items-center justify-between">
							<div class="h-4 w-1/3 rounded bg-[var(--color-spe)]/20"></div>
							<div class="h-4 w-1/4 rounded bg-[var(--color-spe)]"></div>
						</div>
						<div class="space-y-2">
							<div class="bg-muted h-3 w-full rounded"></div>
							<div class="bg-muted h-3 w-3/4 rounded"></div>
							<div class="bg-muted h-3 w-1/2 rounded"></div>
						</div>
						<div class="grid grid-cols-2 gap-4 pt-4">
							<div
								class="flex h-20 items-center justify-center rounded bg-gradient-to-br from-[var(--color-spe)]/20 to-[var(--color-spe)]/10"
							>
								<IconGlobe class="h-8 w-8 text-[var(--color-spe)]" />
							</div>
							<div
								class="from-primary/20 to-primary/10 flex h-20 items-center justify-center rounded bg-gradient-to-br"
							>
								<IconPhone class="text-primary h-8 w-8" />
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>
