<script lang="ts">
import { IconArrowRight, IconCheck } from "@tabler/icons-svelte";
import { Button } from "$lib/components/ui/button";
import * as Card from "$lib/components/ui/card";
import { route } from "$lib/ROUTES";
import { services } from "$lib/utils/config";
import { translate } from "$lib/utils/i18n";
import { cn } from "$lib/utils/ui";
import * as m from "$paraglide/messages";
import { localizeHref } from "$paraglide/runtime";

const featureCounts = [1, 2, 3] as const;
</script>

<section class="section kcontainer px-4" id="solutions">
	<div class="max-w-2xl">
		<p class="text-primary text-sm font-semibold tracking-[0.12em] uppercase">
			{m['services.page.solutions.eyebrow']()}
		</p>
		<h2 class="mt-3 max-w-[18ch]">{m['services.page.solutions.title']()}</h2>
		<p class="text-muted-foreground mt-4 text-lg">{m['services.page.solutions.description']()}</p>
	</div>

	<div class="grid gap-4 md:grid-cols-2" aria-label={m['services.page.solutions.title']()}>
		{#each services as service (service.id)}
			{@const base = service.labelKey}
			<Card.Root id={service.id} class="group scroll-mt-28 gap-0 rounded-lg transition hover:-translate-y-1 hover:shadow-md">
				<Card.Header class="pb-4">
					<div class="flex items-start justify-between gap-5">
						<div class={cn('flex size-11 items-center justify-center rounded-md border', service.visual.bg)}>
							<service.icon class="text-primary size-5" />
						</div>
						<span class={cn('mt-1.5 size-2 rounded-full', service.visual.point)}></span>
					</div>
					<Card.Title class="mt-5 text-2xl">
						{#await translate(`${base}.suptitle`) then translation}{translation}{/await}
					</Card.Title>
					<Card.Description class="mt-2 text-base">
						{#await translate(`${base}.description`) then translation}{translation}{/await}
					</Card.Description>
				</Card.Header>
				<Card.Content>
					<ul class="grid gap-2.5 text-sm">
						{#each featureCounts as item (item)}
							<li class="flex gap-2.5">
								<IconCheck class="text-primary mt-0.5 size-4 shrink-0" />
								<span>{#await translate(`${base}.feature_${item}`) then translation}{translation}{/await}</span>
							</li>
						{/each}
					</ul>
				</Card.Content>
				<Card.Footer class="pt-2">
					<Button href={localizeHref(route('/audit-gratuit'))} variant="ghost" class="px-0 text-primary">
						{#await translate(`${base}.cta_primary`) then translation}{translation}{/await}
						<IconArrowRight />
					</Button>
				</Card.Footer>
			</Card.Root>
		{/each}
	</div>
</section>
