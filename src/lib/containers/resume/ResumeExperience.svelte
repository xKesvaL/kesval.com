<script lang="ts">
	import { formatDate, getI18n } from '$lib/utils/functions';
	import type { Experience } from '$lib/data/personal';
	import * as m from '$paraglide/messages';
	import { IconMapPinFilled } from '$lib/icons';

	export let experience: Experience;
	export let first = false;
</script>

<div
	class="experience flex w-full gap-4 p-4 last:rounded-b-lg {first
		? 'rounded-t-lg'
		: ''} {!experience.endDate ? 'active' : ''}"
>
	<div class="flex-shrink-0">
		<img
			alt={getI18n(`experience_company_${experience.company}`)}
			class="h-10 w-10 flex-shrink-0 rounded-full"
			src={experience.imageUrl}
		/>
	</div>
	<div class="flex h-full flex-grow flex-col justify-between gap-1">
		<span class="text-xs text-muted-foreground">{getI18n(`experience_job_${experience.role}`)}</span
		>
		<p class="text-sm font-medium">
			{getI18n(`experience_company_${experience.company}`)}
		</p>
	</div>
	<div class="flex h-full flex-col items-end justify-between gap-1">
		<span
			class="date rounded-md px-1 py-0.5 text-[10px] text-muted-foreground {!experience.endDate
				? 'active'
				: ''} relative -right-1 -top-0.5"
		>
			{formatDate(experience.startDate, { format: 'short' })} -
			{#if experience.endDate}
				{formatDate(experience.endDate, { format: 'short' })}
			{:else}
				<span class="present">{m.common_present()}</span>
			{/if}
		</span>
		<p class="flex items-center gap-1 text-[10px] text-muted-foreground">
			<span class="block h-4 w-4 text-muted-foreground/75">
				<IconMapPinFilled />
			</span>
			{experience.location}
		</p>
	</div>
</div>

<style lang="scss">
	.experience {
		background: hsl(var(--primary-200) / 0.1);

		&.active {
			background: hsl(var(--primary-200) / 0.2);
		}

		.date {
			background: hsl(var(--primary-200) / 0.1);

			&.active {
				background: hsl(var(--primary-200) / 0.2);
			}

			.present {
				color: hsl(var(--primary-800));
			}
		}
	}
</style>
