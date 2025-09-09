<script lang="ts">
	import AboutResumeSection from './AboutResumeSection.svelte';
	import * as m from '$paraglide/messages';
	import { skillsList } from '$lib/utils/skills';
</script>

<aside class="grid h-full grid-rows-[min-content_min-content] gap-4">
	<AboutResumeSection title={m['about.resume.about.title']()}>
		<p class="">
			{m['about.resume.about.description']()}
		</p>
	</AboutResumeSection>
	<AboutResumeSection title={m['about.resume.skills']()}>
		<div class="flex flex-col gap-1">
			<p class="text-lg font-medium">{m['skills.front_end']()}</p>
			<div class="flex flex-wrap gap-2">
				{#each skillsList.front_end as skill (skill.name)}
					<div
						class="flex h-10 flex-grow items-center justify-center gap-2 rounded-lg border border-[#087ea4] bg-[#087ea4]/10 px-2 py-3 text-sm"
					>
						<div class="size-4 shrink-0">
							<skill.icon class="size-4" />
						</div>
						<span>{skill.name}</span>
					</div>
				{/each}
			</div>
		</div>
		<div class="flex flex-col gap-1">
			<p class="text-lg font-medium">{m['skills.back_end']()}</p>
			<div class="grid grid-cols-3 gap-2">
				{#each skillsList.back_end as skill (skill.name)}
					<div
						class="flex h-10 items-center justify-center gap-2 rounded-lg border border-[#1dab5f] bg-[#1dab5f]/5 px-2 py-3 text-sm"
					>
						<div class="size-4 shrink-0">
							<skill.icon class="size-4" />
						</div>
						<span>{skill.name}</span>
					</div>
				{/each}
			</div>
		</div>
		<div class="flex flex-col gap-1">
			<p class="text-lg font-medium">{m['common.others']()}</p>
			<div class="grid grid-cols-2 gap-2">
				{#each skillsList.other as skill (skill.name)}
					<div
						class="border-primary bg-primary/5 flex h-10 flex-grow items-center justify-center gap-2 rounded-lg border px-2 py-3 text-sm"
					>
						<div class="size-4 shrink-0">
							<skill.icon class="size-4" />
						</div>
						<span>{skill.name}</span>
					</div>
				{/each}
			</div>
		</div>
	</AboutResumeSection>
</aside>
