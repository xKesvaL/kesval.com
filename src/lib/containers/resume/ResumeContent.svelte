<script lang="ts">
	import ResumeSection from './ResumeSection.svelte';
	import ResumeExperience from './ResumeExperience.svelte';
	import ResumeEducation from './ResumeEducation.svelte';
	import { EXPERIENCES, EDUCATIONS } from '$lib/data/personal';
	import { SKILLS } from '$lib/data/skills';
	import { IconCode, IconServer, IconDots } from '$lib/icons';
	import { getI18n } from '$lib/utils/functions';

	import * as m from '$paraglide/messages';
</script>

<div class="flex w-full flex-col py-4 md:py-8">
	<ResumeSection title={m.about_experience()}>
		{#each EXPERIENCES as experience, i (experience.company)}
			<ResumeExperience {experience} first={i === 0} />
		{/each}
	</ResumeSection>
	<ResumeSection classes="grid lg:grid-cols-3" title={m.about_education()}>
		{#each EDUCATIONS as education, i (education.school)}
			<ResumeEducation {education} first={i === 0} />
		{/each}
	</ResumeSection>
	<ResumeSection classes="grid gap-2 lg:grid-cols-[2fr,2fr,1fr]" title={m.about_skills()}>
		{#each Object.entries(SKILLS) as [skill, list] (skill)}
			<div class="flex flex-col gap-4">
				<div class="flex items-center gap-2">
					<div
						class="h-6 w-6 rounded-full p-1 {skill === 'other'
							? 'bg-success/10'
							: skill === 'front_end'
								? 'bg-primary/10'
								: 'bg-accent/10'}"
					>
						{#if skill === 'front_end'}
							<IconCode />
						{:else if skill === 'back_end'}
							<IconServer />
						{:else if skill === 'other'}
							<IconDots />
						{/if}
					</div>
					<h3 class="font-sans font-medium">
						{getI18n(`skills_${skill}`)}
					</h3>
				</div>
				<div class="grid gap-1 {skill !== 'other' ? 'grid-cols-2' : ''}">
					{#each list as item, i (item.name)}
						<div
							class:rounded-bl-lg={i === list.length - 2 && skill !== 'other'}
							class:rounded-tr-lg={i === 1 && skill !== 'other'}
							class="px-3 py-1.5 text-sm first:rounded-tl-lg last:rounded-br-lg {skill === 'other'
								? 'bg-success/10 first:rounded-tr-lg last:rounded-bl-lg'
								: skill === 'front_end'
									? 'bg-primary/10'
									: 'bg-accent/10'}"
						>
							{item.name}
						</div>
					{/each}
				</div>
			</div>
		{/each}
	</ResumeSection>
	<ResumeSection title={m.about_tools()}>
		<div class="-ml-8 flex flex-col gap-2 md:ml-0">
			<div class="grid grid-cols-3 gap-2">
				<div class="flex flex-col items-center justify-center gap-2 rounded-tl-md bg-primary/5 p-4">
					<img alt="VSCode" class="h-10 w-10 md:h-12 md:w-12" src="/experiences/vscode.png" />
					<h3 class="font-sans font-medium">VSCode</h3>
					<p class="text-center text-xs text-muted-foreground">
						{m.tools_vscode()}
					</p>
				</div>
				<div class="flex flex-col items-center justify-center gap-2 bg-primary/5 p-4">
					<img alt="Figma" class="h-10 w-10 md:h-12 md:w-12" src="/experiences/figma.webp" />
					<h3 class="font-sans font-medium">Figma</h3>
					<p class="text-center text-xs text-muted-foreground">
						{m.tools_figma()}
					</p>
				</div>
				<div class="flex flex-col items-center justify-center gap-2 rounded-tr-md bg-primary/5 p-4">
					<img alt="Notion" class="h-10 w-10 md:h-12 md:w-12" src="/experiences/notion.png" />
					<h3 class="font-sans font-medium">Notion</h3>
					<p class="text-center text-xs text-muted-foreground">
						{m.tools_notion()}
					</p>
				</div>
			</div>
			<div class="grid grid-cols-2 gap-2 md:grid-cols-4">
				<div class="flex flex-col items-center justify-center gap-2 rounded-bl-md bg-primary/5 p-4">
					<img
						alt="Vercel"
						class="h-8 w-8 rounded-full md:h-10 md:w-10"
						src="/experiences/vercel.png"
					/>
					<h3 class="font-sans font-medium">Vercel</h3>
					<p class="text-center text-xs text-muted-foreground">
						{m.tools_vercel()}
					</p>
				</div>
				<div class="flex flex-col items-center justify-center gap-2 bg-primary/5 p-4">
					<img
						alt="Github"
						class="h-8 w-8 rounded-full md:h-10 md:w-10"
						src="/experiences/github.png"
					/>
					<h3 class="font-sans font-medium">Github</h3>
					<p class="text-center text-xs text-muted-foreground">
						{m.tools_github()}
					</p>
				</div>
				<div class="flex flex-col items-center justify-center gap-2 bg-primary/5 p-4">
					<img
						alt="WebStorm"
						class="h-8 w-8 rounded-full md:h-10 md:w-10"
						src="/experiences/webstorm.png"
					/>
					<h3 class="font-sans font-medium">WebStorm</h3>
					<p class="text-center text-xs text-muted-foreground">
						{m.tools_webstorm()}
					</p>
				</div>
				<div class="flex flex-col items-center justify-center gap-2 rounded-br-md bg-primary/5 p-4">
					<img
						alt="Dribbble"
						class="h-8 w-8 rounded-full md:h-10 md:w-10"
						src="/experiences/dribbble.png"
					/>
					<h3 class="font-sans font-medium">Dribbble</h3>
					<p class="text-center text-xs text-muted-foreground">
						{m.tools_dribbble()}
					</p>
				</div>
			</div>
		</div>
	</ResumeSection>
</div>
