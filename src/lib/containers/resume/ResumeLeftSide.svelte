<script lang="ts">
	import { EXPERIENCES, EDUCATIONS } from '$lib/data/personal';

	import * as m from '$paraglide/messages';
	import ResumeExperience from './ResumeExperience.svelte';
	import ResumeSection from './ResumeSection.svelte';

	const totalExperiences = [...EXPERIENCES, ...EDUCATIONS].sort(
		(a, b) => b.startDate.valueOf() - a.startDate.valueOf()
	);
</script>

<ResumeSection title={m.about_experience()}>
	<div class="flex w-full flex-col gap-6">
		{#each totalExperiences as experience, i (experience.company)}
			<ResumeExperience
				{experience}
				isLast={i === totalExperiences.length - 1}
			/>
		{/each}
	</div>
</ResumeSection>
