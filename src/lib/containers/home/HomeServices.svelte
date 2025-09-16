<script lang="ts">
	import AnimatedBadge from '$lib/components/animated/AnimatedBadge.svelte';
	import * as m from '$paraglide/messages';
	import {
		IconArrowRight,
		IconArrowUpRight,
		IconBolt,
		IconChartBarPopular,
		IconClock
	} from '@tabler/icons-svelte';
	import * as Card from '$lib/components/ui/card/index.js';
	import { Button } from '$lib/components/ui/button';
	import { localizeHref } from '$paraglide/runtime';
	import { route } from '$lib/ROUTES';
	import { getServiceRoute, services as importedServices } from '$lib/utils/config';
	import { translate } from '$lib/utils/i18n';

	let services = $derived(importedServices.filter((service) => service.id !== 'agencies'));
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
		{#each services as service (service.id)}
			<a href={localizeHref(getServiceRoute(service))} class="h-full">
				<Card.Root
					class="hover:border-primary gap-0 shadow-xs transition duration-300 hover:duration-150"
				>
					<Card.Header>
						<div class="items-center gap-4 space-y-4">
							<div
								class="text-primary from-primary/10 border-primary/20 flex size-10 items-center justify-center rounded-lg border bg-gradient-to-tr to-transparent text-3xl"
							>
								<service.icon class="size-5" />
							</div>
							<h3 class="text-2xl font-semibold">
								{#await translate(`${service.labelKey}.suptitle`) then translation}
									{translation}
								{/await}
							</h3>
							<Card.Description class="-mt-2 text-base">
								{#await translate(`${service.labelKey}.description`) then translation}
									{translation}
								{/await}
							</Card.Description>
						</div>
						<Card.Action>
							<IconArrowUpRight />
						</Card.Action>
					</Card.Header>
				</Card.Root>
			</a>
		{/each}
	</div>
	<Button href={localizeHref(route('/services'))} class="mx-auto" size="lg">
		{m['services.our_services.button']()}
		<IconArrowRight class="animate-bounce-x size-4" />
	</Button>
</section>
