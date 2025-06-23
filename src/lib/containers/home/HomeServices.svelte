<script lang="ts">
	import AnimatedBadge from '$lib/components/animated/AnimatedBadge.svelte';
	import * as m from '$paraglide/messages';
	import { IconBolt, IconChartBarPopular, IconClock } from '@tabler/icons-svelte';
	import * as Card from '$lib/components/ui/card/index.js';

	const servicesBenefits = {
		timegain: {
			key: 'services.benefits.time_gain',
			icon: IconClock
		},
		measurableResults: {
			key: 'services.benefits.measurable_results',
			icon: IconChartBarPopular
		},
		tailorMadeSolutions: {
			key: 'services.benefits.tailor_made_solutions',
			icon: IconBolt
		}
	} as const;
</script>

<section class="section kcontainer px-4">
	<div class="flex flex-col gap-4 text-center">
		<AnimatedBadge class=" flex items-center gap-2">
			🤝
			<hr class="bg-muted-foreground h-4 w-[1px] shrink-0" />
			{m['services.our_services.suptitle']()}
		</AnimatedBadge>
		<h2
			class="from-foreground to-muted-foreground bg-gradient-to-br bg-clip-text font-bold text-transparent"
		>
			{m['services.our_services.title']()}
		</h2>
		<p class="text-muted-foreground mx-auto max-w-prose text-lg">
			{m['services.our_services.description']()}
		</p>
	</div>
	<div class="grid gap-8 lg:grid-cols-3">
		{#each Object.values(servicesBenefits) as benefit (benefit.key)}
			<Card.Root class=" gap-4">
				<Card.Header class="items-center gap-4 sm:flex lg:block lg:space-y-4 ">
					<div
						class="text-primary bg-primary/5 flex size-12 items-center justify-center rounded-lg text-3xl"
					>
						<benefit.icon class="size-6" />
					</div>
					<h3 class="text-2xl font-semibold">{m[`${benefit.key}.title`]()}</h3>
				</Card.Header>
				<Card.Content class="pt-0">
					<p class="text-muted-foreground text-pretty-fallback">
						{m[`${benefit.key}.description`]()}
					</p>
				</Card.Content>
			</Card.Root>
		{/each}
	</div>
</section>
