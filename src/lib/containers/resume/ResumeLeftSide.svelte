<script lang="ts">
	import { EXPERIENCES, EDUCATIONS } from '$lib/data/personal';
	import { SKILLS } from '$lib/data/skills';
	import { IconCode, IconServer, IconDots } from '$lib/icons';
	import { getI18n } from '$lib/utils/functions';

	import * as m from '$paraglide/messages';
	import ResumeExperience from './ResumeExperience.svelte';
	import ResumeSection from './ResumeSection.svelte';

	const totalExperiences = [...EXPERIENCES, ...EDUCATIONS].sort(
		(a, b) => b.startDate.valueOf() - a.startDate.valueOf()
	);
</script>

<ResumeSection title={m.about_experience()}>
	{#each totalExperiences as experience, i (experience.company)}
		<ResumeExperience
			{experience}
			nextExperienceHasCurrent={!totalExperiences[i + 1]?.endDate}
			isLast={i === totalExperiences.length - 1}
		/>
	{/each}
</ResumeSection>
