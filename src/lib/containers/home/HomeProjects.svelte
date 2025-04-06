<script lang="ts">
	import { filterProjects, projects } from '$lib/utils/projects';
	import * as m from '$paraglide/messages';
	import {
		Card,
		CardContent,
		CardDescription,
		CardHeader,
		CardTitle
	} from '$lib/components/ui/card';
	import { Button } from '$lib/components/ui/button';
	import { IconExternalLink } from '@tabler/icons-svelte';
	import { fly } from 'svelte/transition';

	let showedProjects = $derived.by(() => filterProjects(projects));
</script>

<section class="section min-h-[50vh]">
	<div class="kcontainer relative px-4">
		<div class="mb-16 space-y-4 text-center" in:fly={{ y: 20, duration: 800 }}>
			<h1
				class="from-foreground to-muted-foreground bg-gradient-to-br bg-clip-text text-4xl font-bold text-transparent sm:text-5xl"
			>
				{m['projects.title']?.() ?? 'Our Projects'}
			</h1>
			<p class="text-muted-foreground mx-auto max-w-[45ch] text-lg">
				{m['projects.description']?.() ?? 'Discover our latest work and projects'}
			</p>
		</div>

		<div
			class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
			in:fly={{ y: 20, duration: 800, delay: 200 }}
		>
			{#each showedProjects as project (project.id)}
				<Card class="bg-card/40 backdrop-blur-sm">
					{#if project.images?.[0]}
						<div class="aspect-video w-full overflow-hidden">
							{#if typeof project.images[0] === 'string'}
								<img
									src={project.images[0]}
									alt={project.name}
									class="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
								/>
							{:else}
								<enhanced:img
									src={project.images[0]}
									alt={project.name}
									class="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
								/>
							{/if}
						</div>
					{/if}
					<CardHeader>
						<div class="flex items-center justify-between">
							<CardTitle class="flex items-center gap-2">
								<project.icon class="text-primary size-5" />
								{project.name}
							</CardTitle>
							{#if project.link}
								<Button
									variant="ghost"
									size="icon"
									href={project.link}
									target="_blank"
									rel="noreferrer"
								>
									<IconExternalLink class="size-4" />
								</Button>
							{/if}
						</div>
						<CardDescription>
							{project.description}
						</CardDescription>
					</CardHeader>
					<CardContent>
						{#if project.client}
							<p class="text-muted-foreground text-sm">
								Client: {project.client}
							</p>
						{/if}
					</CardContent>
				</Card>
			{/each}
		</div>
	</div>
</section>
