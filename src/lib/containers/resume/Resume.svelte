<script lang="ts">
	import ResumeName from './ResumeName.svelte';
	import ResumePhoto from './ResumePhoto.svelte';
	import ResumeContact from './ResumeContact.svelte';
</script>

<div
	class="p-4 rounded-lg shadow-xl bg-muted max-w-[51rem] flex-1 resume grid gap-1 grid-cols-1 lg:grid-cols-[3fr,2fr]"
>
	<div class="section header-left flex flex-col gap-4">
		<ResumeName />
		<ResumeContact />
	</div>
	<div class="section header-right flex justify-center items-center h-full">
		<ResumePhoto />
	</div>
	<div class="section about"></div>
	<div class="section experience"></div>
	<div class="section skills"></div>
	<div class="section education"></div>
</div>

<style lang="scss">
	.resume {
		background-image: radial-gradient(
				at 30% 30%,
				hsl(var(--primary) / 0.1) 0%,
				hsl(var(--primary) / 0) 100%
			),
			radial-gradient(at 70% 70%, hsl(var(--primary) / 0.1) 0%, hsl(var(--primary) / 0) 100%);

		grid-template-areas:
			'photo'
			'name'
			'about'
			'skills'
			'work'
			'education';

		@media (min-width: 1024px) {
			grid-template-areas:
				'name photo'
				'work about'
				'work skills'
				'work education';
		}

		.section {
			padding: 0.5rem;

			&.header-left {
				grid-area: name;
			}

			&.header-right {
				grid-area: photo;
			}

			&.about {
				grid-area: about;
			}

			&.experience {
				grid-area: work;
			}

			&.skills {
				grid-area: skills;
			}

			&.education {
				grid-area: education;
			}
		}
	}
</style>
