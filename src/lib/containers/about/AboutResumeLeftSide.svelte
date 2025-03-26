<script lang="ts">
	import { educationExperience, professionalExperience } from '$lib/utils/experience';
	import { translate } from '$lib/utils/i18n';
	import * as m from '$paraglide/messages';
	import AboutResumeExperience from './AboutResumeExperience.svelte';
	import AboutResumeSection from './AboutResumeSection.svelte';

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
