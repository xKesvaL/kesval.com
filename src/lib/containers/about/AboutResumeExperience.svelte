<script lang="ts">
	import dayjs from 'dayjs';
	import durationPlugin from 'dayjs/plugin/duration';
	import relativeTimePlugin from 'dayjs/plugin/relativeTime';
	import 'dayjs/locale/en';
	import 'dayjs/locale/fr';

	dayjs.extend(durationPlugin);
	dayjs.extend(relativeTimePlugin);

	import * as m from '$paraglide/messages';
	import { getLocale } from '$paraglide/runtime';
	import { IconMapPin } from '@tabler/icons-svelte';
	import type { Experience } from '$lib/utils/experience';
	import { translate } from '$lib/utils/i18n';
	import { capitalizeFirstLetter } from '$lib/utils/functions';

	type Props = {
		experience: Experience;
		isLast: boolean;
	};

	let { experience, isLast }: Props = $props();

	const durationDate = dayjs(experience.endDate || Date.now()).diff(experience.startDate);
	const duration = dayjs.duration(durationDate).locale(getLocale()).humanize();
</script>

<div class="grid grid-cols-[48px_1fr] gap-2 md:gap-3">
	<div class="relative flex flex-col items-center gap-1">
		<span class="text-muted-foreground h-5 flex-shrink-0 text-xs">
			{#if !experience.endDate}
				{m.present()}
			{:else if experience.endDate}
				{experience.endDate.getFullYear()}
			{/if}
		</span>
		<div class="border-primary flex size-6 flex-shrink-0 rounded-full border p-1">
			{#if !experience.endDate}
				<div class="bg-primary h-full w-full rounded-full"></div>
			{/if}
		</div>
		<span class="text-muted-foreground mt-1 h-4 flex-shrink-0 text-xs">
			{experience.startDate.getFullYear()}
		</span>
		{#if !isLast}
			<div class={`border-primary absolute -bottom-4 h-[calc(100%-4rem)] border`}></div>
		{/if}
	</div>
	<div>
		<h4 class="mt-5 text-2xl font-medium">
			{await translate(`experience.${experience.name}.title`)}
		</h4>
		<div class="text-muted-foreground flex items-center gap-1 text-xs md:-mt-0.5 md:text-sm">
			{capitalizeFirstLetter(duration)}
			<div>|</div>
			{await translate(`experience.job.${experience.role}`)}
			<div>|</div>
			<IconMapPin class="size-4" />
			{experience.location}
		</div>
		<p class="mt-1">
			{await translate(`experience.${experience.name}.description`)}
		</p>
	</div>
</div>
