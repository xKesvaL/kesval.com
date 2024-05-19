<script lang="ts">
	import IconMail from '$lib/icons/IconMail.svelte';
	import IconWorldWww from '$lib/icons/IconWorldWww.svelte';
	import IconMapPin from '$lib/icons/IconMapPin.svelte';
	import IconLanguage from '$lib/icons/IconLanguage.svelte';
	import { PERSONAL } from '$lib/data/personal';
	import { BRAND } from '$lib/config';
	import { route } from '$lib/ROUTES';
	import ResumeSection from './ResumeSection.svelte';

	import * as m from '$paraglide/messages';
	import { SKILLS } from '$lib/data/skills';
</script>

<aside class="grid h-full grid-rows-[min-content,min-content,min-content] gap-4">
	<ResumeSection title={m.common_about()}>
		<p class="text-[0.9rem]">
			{m.resume_about()}
		</p>
	</ResumeSection>
	<ResumeSection title={m.common_skills()}>
		<div class="flex flex-col gap-2">
			<p class="font-medium">Front-End</p>
			<div class="flex flex-wrap gap-2">
				{#each SKILLS.front_end as skill}
					<div
						class="flex h-10 flex-grow items-center justify-center gap-2 rounded-lg border border-tertiary bg-tertiary/10 px-2 py-3 text-sm"
					>
						<div class="size-5 flex-shrink-0">
							<svelte:component this={skill.icon} />
						</div>
						<span>{skill.name}</span>
					</div>
				{/each}
			</div>
		</div>
		<div class="flex flex-col gap-2">
			<p class="font-medium">Back-End</p>
			<div class="grid grid-cols-3 gap-2">
				{#each SKILLS.back_end as skill}
					<div
						class="flex h-10 items-center justify-center gap-2 rounded-lg border border-success bg-success/10 px-2 py-3 text-sm"
					>
						<div class="size-5 flex-shrink-0">
							<svelte:component this={skill.icon} />
						</div>
						<span>{skill.name}</span>
					</div>
				{/each}
			</div>
		</div>
		<div class="flex flex-col gap-2">
			<p class="font-medium">{m.skills_other()}</p>
			<div class="grid grid-cols-2 gap-2">
				{#each SKILLS.other as skill}
					<div
						class="flex h-10 flex-grow items-center justify-center gap-2 rounded-lg border border-primary bg-primary/10 px-2 py-3 text-sm"
					>
						<div class="size-5 flex-shrink-0">
							<svelte:component this={skill.icon} />
						</div>
						<span>{skill.name}</span>
					</div>
				{/each}
			</div>
		</div>
	</ResumeSection>
	<ResumeSection title={m.common_education()}>
		<p class="text-[0.9rem]">
			{m.resume_education()}
		</p>
	</ResumeSection>
</aside>
