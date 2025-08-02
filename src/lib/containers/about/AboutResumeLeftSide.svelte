<script lang="ts">
	import { getEducationExperience, getProfessionalExperience } from '$lib/utils/experience';
	import * as m from '$paraglide/messages';
	import AboutResumeExperience from './AboutResumeExperience.svelte';
	import AboutResumeSection from './AboutResumeSection.svelte';

	const professionalExperience = getProfessionalExperience(m);
	const educationExperience = getEducationExperience(m);
	
	const totalExperiences = [...professionalExperience, ...educationExperience]
		.sort((a, b) => b.startDate.valueOf() - a.startDate.valueOf())
		.filter((experience) => {
			if ('hideInResume' in experience) {
				return !experience.hideInResume;
			}
			return true;
		});
</script>

<AboutResumeSection title={m['about.resume.experience']()}>
	<div class="flex w-full flex-col gap-6">
		{#each totalExperiences as experience, i (experience.name)}
			<AboutResumeExperience {experience} isLast={i === totalExperiences.length - 1} />
		{/each}
	</div>
</AboutResumeSection>
