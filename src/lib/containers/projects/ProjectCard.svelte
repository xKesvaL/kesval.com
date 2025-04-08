<script lang="ts">
	import * as Card from '$lib/components/ui/card/index.js';
	import { route } from '$lib/ROUTES';
	import type { Project } from '$lib/utils/projects';
	import { localizeHref } from '$paraglide/runtime';
	import { Button } from '$lib/components/ui/button';
	import { IconExternalLink, IconArrowRight } from '@tabler/icons-svelte';
	import { cn } from '$lib/utils/ui';

	type Props = {
		project: Project;
		index: number;
		type?: 'project' | 'highlighted';
	};

	let { project, index, type = 'project' }: Props = $props();

	// Get the first image or use a placeholder
	let feature = $derived(
		project.images && project.images.length > 0 ? project.images[0] : 'https://placehold.co/720x480'
	);
</script>

<div
	class={cn(
		'relative flex flex-col gap-8',
		type === 'highlighted' && 'md:flex-row md:items-center md:gap-12'
	)}
>
	{#if type === 'highlighted'}
		<!-- Project number -->
		<div
			class=" from-muted-foreground/50 to-muted-foreground/30 absolute -top-16 -left-8 mb-6 hidden bg-gradient-to-br bg-clip-text text-8xl font-black text-transparent md:block"
		>
			{(index + 1).toString().padStart(2, '0')}
		</div>
	{/if}

	<!-- Project image -->
	<div
		class={cn(
			'group relative mb-auto w-full overflow-hidden rounded-2xl',
			type === 'highlighted' && 'md:w-3/5'
		)}
	>
		<div class="aspect-video w-full overflow-hidden">
			{#if typeof feature === 'string'}
				<img
					src={feature}
					alt={project.name}
					class="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
				/>
			{:else}
				<enhanced:img
					src={feature}
					alt={project.name}
					class="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
				/>
			{/if}
		</div>
		<div
			class="absolute inset-0 bg-black/15 transition-opacity duration-500 group-hover:opacity-0"
		></div>

		<!-- Client tag -->
		{#if project.client}
			<div class="bg-background absolute top-4 left-4 rounded-lg px-3 py-1 text-xs font-medium">
				{project.client}
			</div>
		{/if}
	</div>

	<!-- Project info -->
	<div>
		<div class="space-y-4">
			<div>
				<div class="flex items-center gap-4">
					{#if project.icon}
						<div class="bg-muted flex size-10 items-center justify-center rounded-lg">
							<project.icon class="size-5" />
						</div>
					{/if}
					<h3 class="text-2xl font-bold">{project.name}</h3>
				</div>
				{#if project.description}
					<p class="text-muted-foreground mt-2">{project.description}</p>
				{/if}
			</div>

			<div class="flex gap-3 pt-2">
				<Button
					variant="outline"
					size={type === 'project' ? 'default' : 'sm'}
					class="group"
					href={localizeHref(route('/projets/[projectId]', { projectId: project.id }))}
				>
					<span>View details</span>
					<IconArrowRight class=" transition-transform group-hover:translate-x-0.5" />
				</Button>
				{#if project.link}
					<Button
						variant="ghost"
						size={type === 'project' ? 'default' : 'sm'}
						class="group"
						href={project.link}
						target="_blank"
						rel="noopener noreferrer"
					>
						<span>Visit</span>
						<IconExternalLink class="" />
					</Button>
				{/if}
			</div>
		</div>
	</div>
</div>
