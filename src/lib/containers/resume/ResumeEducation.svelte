<script lang="ts">
	import { formatDate, getI18n } from '$lib/utils/functions';
	import type { Education } from '$lib/data/personal';
	import * as m from '$paraglide/messages';

	export let education: Education;
	export let first = false;
</script>

<div
	class="education flex flex-col gap-2 p-4 last:rounded-b-lg lg:last:rounded-b-none lg:last:rounded-r-lg {first
		? 'rounded-t-lg lg:!rounded-l-lg lg:rounded-t-none'
		: ''}"
>
	<div class="flex w-full items-center gap-2">
		<img
			alt={getI18n(`experience_company_${education.school}`)}
			class="h-10 w-10 flex-shrink-0 rounded-full"
			src={education.imageUrl}
		/>
		<h3 class="font-sans text-sm font-normal">
			{getI18n(`experience_company_${education.school}`)}
		</h3>
	</div>
	<div class="flex flex-col gap-1">
		<p class="text-sm font-medium">
			{getI18n(`experience_job_${education.degree}`)}
		</p>
		<div class="text-xs text-muted-foreground/75">
			{formatDate(education.startDate, { format: 'short' })} - {education.endDate
				? formatDate(education.endDate, { format: 'short' })
				: m.common_present()}
		</div>
	</div>
</div>

<style lang="scss">
	.education {
		background: hsl(var(--primary-200) / 0.1);
	}
</style>
