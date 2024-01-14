<script lang="ts">
	import * as m from '$paraglide/messages';
	import { PROJECTS } from '$lib/data/work';
	import CardGlass from '$lib/components/cards/CardGlass.svelte';
	import { getI18n } from '$lib/utils/functions';
	import { IconBrandGithub, IconLink } from '$lib/icons';
	import { formatDate } from '$lib/utils/functions';
	import { route } from '$lib/ROUTES';
	import { Button } from '$lib/components/ui/button';
</script>

<section class="section container flex flex-col items-center">
	<h1 class="text-4xl lg:text-5xl">
		{m.work_name()} - KesvaL
	</h1>
	<div class="grid w-full grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
		{#each PROJECTS as project}
			<CardGlass classes="w-full" classBg="gap-4">
				<header class="flex items-center gap-4">
					<img
						class="h-10 w-10"
						src={project.imageUrl}
						alt={getI18n(`projects_${project.name}_name`)}
					/>
					<h2 class="text-2xl">
						{getI18n(`projects_${project.name}_name`)}
					</h2>
					<div class="ml-auto flex items-center gap-2">
						<svelte:element
							this={project.github ? 'a' : 'div'}
							href={project.github}
							target="_blank"
							class="block h-6 w-6 rounded-md border p-0.5 transition-all {project.github
								? 'border-foreground/75 text-foreground/75 hover:border-foreground hover:text-foreground'
								: 'cursor-not-allowed border-foreground/25 text-foreground/25'}"
						>
							<IconBrandGithub />
						</svelte:element>
						<svelte:element
							this={project.site ? 'a' : 'div'}
							href={project.site}
							target="_blank"
							class="block h-6 w-6 rounded-md border p-0.5 transition-all {project.site
								? 'border-foreground/75 text-foreground/75 hover:border-foreground hover:text-foreground'
								: 'cursor-not-allowed border-foreground/25 text-foreground/25'}"
						>
							<IconLink />
						</svelte:element>
					</div>
				</header>
				<hr />
				<p>
					{getI18n(`projects_${project.name}_excerpt`)}
				</p>
				<footer class="mt-auto flex items-end justify-between">
					<span class="rounded-lg border bg-primary/15 px-2 py-1 text-xs">
						{formatDate(project.startDate, { format: 'short' })}
					</span>
					<Button size="sm" href={project.href}>See more</Button>
				</footer>
			</CardGlass>
		{/each}
	</div>
</section>
