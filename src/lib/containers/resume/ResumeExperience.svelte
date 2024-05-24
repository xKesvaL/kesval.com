<script lang="ts">
	import type { Experience } from '$lib/data/personal';
	import IconMapPin from '$lib/icons/IconMapPin.svelte';
	import { capitalizeFirstLetter, getI18n } from '$lib/utils/functions';
	import dayjs from 'dayjs';
	import durationPlugin from "dayjs/plugin/duration";
	import relativeTimePlugin from "dayjs/plugin/relativeTime";
	import "dayjs/locale/en";
	import "dayjs/locale/fr";

	dayjs.extend(durationPlugin);
	dayjs.extend(relativeTimePlugin);

	import * as m from '$paraglide/messages';
	import { languageTag } from '$paraglide/runtime';

	export let experience: Experience;
	export let nextExperienceHasCurrent: boolean;
	export let isLast: boolean;

	const durationDate = dayjs(experience.endDate || Date.now()).diff(experience.startDate);
	const duration = dayjs.duration(durationDate).locale(languageTag()).humanize();
</script>

<div class="grid grid-cols-[48px,1fr] gap-3">
	<div class="relative flex flex-col items-center gap-1">
		<span class="h-5 flex-shrink-0 text-xs text-muted-foreground">
			{#if !experience.endDate}
				{m.common_current()}
			{:else if experience.endDate}
				{experience.endDate.getFullYear()}
			{/if}
		</span>
		<div class="flex size-6 flex-shrink-0 rounded-full border border-primary p-1">
			{#if !experience.endDate}
				<div class="h-full w-full rounded-full bg-primary"></div>
			{/if}
		</div>
		<span class="mt-1 h-4 flex-shrink-0 text-xs text-muted-foreground">
			{experience.startDate.getFullYear()}
		</span>
		{#if !isLast}
			<div
				class={`absolute -bottom-4 h-[calc(100%-4rem)] border border-primary`}
			></div>
		{/if}
	</div>
	<div>
		<h4 class="mt-5 text-2xl font-black">
			{getI18n(`experience_${experience.company}_title`)}
		</h4>
		<div class="-mt-0.5 flex items-center gap-1 text-sm text-muted-foreground">
		{capitalizeFirstLetter(duration)}
			<div>|</div>
			{getI18n(`experience_job_${experience.role}`)}
			<div>|</div>
			<div class="h-4 w-4"><IconMapPin /></div>
			{experience.location}
		</div>
		<p class="mt-1">
			{getI18n(`experience_${experience.company}_description`)}
		</p>
	</div>
</div>
