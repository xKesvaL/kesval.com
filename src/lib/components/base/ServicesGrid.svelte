<script lang="ts">
	import { getServiceRoute, services } from '$lib/utils/config';
	import { translate } from '$lib/utils/i18n';
	import { localizeHref } from '$paraglide/runtime';
	import { Card, CardHeader } from '../ui/card';
</script>

<div class="not-prose grid grid-cols-1 gap-4 @xl:grid-cols-2">
	{#each services as service (service.id)}
		<a href={localizeHref(getServiceRoute(service))} class="h-full">
			<Card
				class="hover:border-primary h-full rounded-2xl p-0 shadow-xs transition duration-300 hover:scale-102 hover:duration-150"
			>
				<CardHeader
					class="flex w-full flex-row items-center gap-4 p-6 @2xl:flex-col @2xl:items-start"
				>
					<div
						class="from-primary/10 to-popover text-primary border-primary/25 mb-0 flex size-12 shrink-0 items-center justify-center rounded-lg border bg-gradient-to-br"
					>
						<service.icon />
					</div>
					<div class="flex h-full flex-col gap-2">
						<h3 class="text-xl font-semibold">
							{#await translate(`${service.labelKey}.suptitle`) then translation}
								{translation}
							{/await}
						</h3>
						<p class="text-muted-foreground text-base">
							{#await translate(`${service.labelKey}.description`) then translation}
								{translation}
							{/await}
						</p>
					</div>
				</CardHeader>
			</Card></a
		>
	{/each}
</div>
