<script lang="ts">
	import { services } from '$lib/utils/config';
	import { translate } from '$lib/utils/i18n';
	import { Card, CardContent, CardHeader } from '../ui/card';
	import * as m from '$paraglide/messages';
</script>

<div class="not-prose grid grid-cols-1 gap-4 @xl:grid-cols-2">
	{#each services as service (service.id)}
		<a href={service.href} class="h-full">
			<Card class="hover:border-primary h-full rounded-2xl transition duration-300 hover:scale-103">
				<CardHeader
					class="flex w-full flex-row items-center gap-4 p-4 @2xl:flex-col @2xl:items-start"
				>
					<div
						class="bg-primary/5 text-primary mb-0 flex size-12 shrink-0 items-center justify-center rounded-lg"
					>
						<service.icon />
					</div>
					<div class="flex h-full flex-col justify-between">
						<h3 class="text-xl font-semibold">
							{#await translate(`services.${service.id}.title`) then translation}
								{translation}
							{/await}
						</h3>
						<p class="text-muted-foreground text-base">
							{#await translate(`services.${service.id}.description`) then translation}
								{translation}
							{/await}
						</p>
					</div>
				</CardHeader>
			</Card></a
		>
	{/each}
</div>
