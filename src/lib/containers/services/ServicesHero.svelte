<script lang="ts">
	import AnimatedBadge from '$lib/components/animated/AnimatedBadge.svelte';
	import { Badge } from '$lib/components/ui/badge';
	import * as Card from '$lib/components/ui/card';
	import { services } from '$lib/utils/config';
	import { translate } from '$lib/utils/i18n';
	import { cn } from '$lib/utils/ui';
	import * as m from '$paraglide/messages';
	import { IconCirclePlus, IconRosetteDiscountCheck } from '@tabler/icons-svelte';
</script>

<section class="section-hero items-center justify-center">
	<div class="kcontainer flex w-full flex-col items-center justify-center gap-16 px-4 text-center">
		<div class="flex flex-col gap-2">
			<AnimatedBadge class="animate-appear flex items-center gap-2">
				💻
				<hr class="bg-muted-foreground h-4 w-[1px] shrink-0" />
				{m['services.hero.suptitle']()}
			</AnimatedBadge>

			<h1
				class="from-foreground to-muted-foreground animate-appear bg-gradient-to-br bg-clip-text font-bold text-transparent"
			>
				{m['services.hero.title']()}
			</h1>
			<p class="text-muted-foreground animate-appear mx-auto max-w-prose text-lg">
				{m['services.hero.description']()}
			</p>
		</div>

		<div class="grid w-full gap-8 sm:grid-cols-2 lg:grid-cols-3">
			{#each services as service (service.id)}
				{@const isHighlighted = 'highlight' in service && service.highlight}
				<Card.Root
					class={cn(
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
									{m['services.hero.from_x_euros_per_month']({ price: service.price.amount })}
								{:else if 'adr' in service.price}
									{m['services.hero.adr_x_euros']({ price: service.price.amount })}
								{:else}
									{m['services.hero.from_x_euros']({ price: service.price.amount })}
								{/if}
							{:else}
								{m['services.hero.on_quote']()}
							{/if}
						</p>
						<div class="mb-6 space-y-2">
							{#each { length: 4 } as _, index}
								<div class="flex items-center space-x-3">
									<IconRosetteDiscountCheck
										class={cn(
											'size-4 flex-shrink-0',
											isHighlighted ? 'text-primary' : 'text-green-500'
										)}
									/>
									<span class="text-muted-foreground text-sm leading-relaxed text-nowrap">
										{#await translate(`services.${service.id}.feature_${index + 1}`) then feature}
											{feature}
										{/await}
									</span>
								</div>
							{/each}
							{#each { length: 2 } as _, index}
								<div class="flex items-center space-x-3">
									<IconCirclePlus
										class={cn(
											'size-4 flex-shrink-0',
											isHighlighted ? 'text-green-500' : 'text-primary'
										)}
									/>
									<span class="text-muted-foreground text-sm leading-relaxed text-nowrap">
										{#await translate(`services.${service.id}.bonus_${index + 1}`) then bonus}
											{bonus}
										{/await}
									</span>
								</div>
							{/each}
						</div>
					</Card.Content>
				</Card.Root>
			{/each}
		</div>
	</div>
</section>
