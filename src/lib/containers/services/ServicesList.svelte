<script lang="ts">
	import { Badge } from '$lib/components/ui/badge';
	import * as Card from '$lib/components/ui/card';
	import { services } from '$lib/utils/config';
	import { translate } from '$lib/utils/i18n';
	import { cn } from '$lib/utils/ui';
	import { IconArrowRight, IconCirclePlus, IconRosetteDiscountCheck } from '@tabler/icons-svelte';
	import * as m from '$paraglide/messages';
	import { getLocale } from '$paraglide/runtime';
	import { Button } from '$lib/components/ui/button';

	type Props = {
		itemsToShow?: number;
	};

	type FeatureCount = 1 | 2 | 3 | 4;
	type BonusCount = 1 | 2;

	let { itemsToShow }: Props = $props();

	let servicesToShow = $derived(services.slice(0, itemsToShow));

	const numberFormat = $derived(
		new Intl.NumberFormat(getLocale(), {
			style: 'currency',
			currency: 'EUR',
			maximumFractionDigits: 0
		})
	);
</script>

<div class="grid w-full gap-8 sm:grid-cols-2 lg:grid-cols-3">
	{#each servicesToShow as service (service.id)}
		{@const isHighlighted = 'highlight' in service && service.highlight}
		{@const amount =
			typeof service.price.amount === 'number'
				? numberFormat.format(service.price.amount)
				: service.price.amount}

		<Card.Root
			class={cn(
				'animate-appear',
				isHighlighted &&
					'ring-primary from-primary/5 scale-105 bg-gradient-to-br to-purple-50 shadow-xl ring-2'
			)}
		>
			{#if isHighlighted}
				<div class="absolute -top-4 left-1/2 -translate-x-1/2 transform">
					<Badge class="gap-2 rounded-full py-1 pr-4 pl-3">
						<span>⭐</span>
						<span class="-mt-0.5 w-max">{m['services.hero.service_highlight']()}</span>
					</Badge>
				</div>
			{/if}

			<Card.Header class="flex items-center justify-between">
				<div
					class={cn(
						'rounded-lg p-2',
						isHighlighted ? 'bg-primary text-primary-foreground' : 'bg-primary/10 text-primary'
					)}
				>
					<service.icon className="size-5" />
				</div>
				<Badge variant="outline" class="rounded-full text-xs font-medium">
					{#if typeof service.duration.from === 'number'}
						{m['services.hero.x_days_plus']({ days: service.duration.from })}
					{:else}
						{#await translate(`services.hero.${service.duration.from}`) then duration}
							{duration}
						{/await}
					{/if}
				</Badge>
			</Card.Header>
			<Card.Content>
				<Card.Title class={cn('mb-2 text-left text-xl', isHighlighted && 'text-primary')}>
					{#await translate(`services.${service.id}.title`) then title}
						{title}
					{/await}
				</Card.Title>
				<Card.Description class="text-muted-foreground mb-2 text-left leading-relaxed">
					{#await translate(`services.${service.id}.description`) then description}
						{description}
					{/await}
				</Card.Description>
				<p
					class={cn(
						'mb-4 text-left text-2xl font-bold',
						isHighlighted ? 'text-primary' : 'text-foreground'
					)}
				>
					{#if typeof service.price.amount === 'number'}
						{#if 'recurring' in service.price}
							{m['services.hero.from_x_euros_per_month']({ price: amount })}
						{:else if 'adr' in service.price}
							{m['services.hero.adr_x_euros']({ price: amount })}
						{:else}
							{m['services.hero.from_x_euros']({ price: amount })}
						{/if}
					{:else}
						{m['services.hero.on_quote']()}
					{/if}
				</p>
				<div class="mb-6 space-y-2">
					{#each { length: 4 } as _, index (index)}
						<div class="flex items-center space-x-3">
							<IconRosetteDiscountCheck
								class={cn(
									'size-5 flex-shrink-0',
									isHighlighted ? 'text-primary' : 'text-green-500'
								)}
							/>
							<span class="text-muted-foreground text-[0.9rem] leading-relaxed text-nowrap">
								{#await translate(`services.${service.id}.feature_${(index + 1) as FeatureCount}`) then feature}
									{feature}
								{/await}
							</span>
						</div>
					{/each}
					{#each { length: 2 } as _, index (index)}
						<div class="flex items-center space-x-3">
							<IconCirclePlus
								class={cn(
									'size-5 flex-shrink-0',
									isHighlighted ? 'text-green-500' : 'text-primary'
								)}
							/>
							<span class="text-muted-foreground text-[0.9rem] leading-relaxed text-nowrap">
								{#await translate(`services.${service.id}.bonus_${(index + 1) as BonusCount}`) then bonus}
									{bonus}
								{/await}
							</span>
						</div>
					{/each}
				</div>
				<Button variant={isHighlighted ? 'default' : 'outline'} class={cn('w-full')}>
					{isHighlighted ? 'Découvrir ce service' : 'En savoir plus'}
					<IconArrowRight class={cn('h-4 w-4', isHighlighted && 'animate-bounce-x')} />
				</Button>
			</Card.Content>
		</Card.Root>
	{/each}
</div>
