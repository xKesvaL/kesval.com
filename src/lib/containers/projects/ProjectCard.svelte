<script lang="ts">
	import { route } from '$lib/ROUTES';
	import { localizeHref } from '$paraglide/runtime';
	import { Button } from '$lib/components/ui/button';
	import { IconExternalLink, IconArrowRight } from '@tabler/icons-svelte';
	import { cn } from '$lib/utils/ui';
	import * as m from '$paraglide/messages';
	import type { Project } from '$content/index';
	import VeliteImage from '$lib/components/base/VeliteImage.svelte';

	type Props = {
		project: Project;
		index: number;
		type?: 'project' | 'highlighted';
	};

	let { project, index, type = 'project' }: Props = $props();
</script>

<div
	class={cn(
		'relative flex flex-col gap-8',
		type === 'highlighted' && 'xl:flex-row xl:items-center xl:gap-12'
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
			'group relative mb-auto w-full overflow-hidden rounded-2xl border',
			type === 'highlighted' && 'xl:w-3/5'
		)}
	>
		<div class="aspect-video w-full overflow-hidden">
			<VeliteImage
				imagePng={project.cover}
				imageAvif={project.coverAvif}
				alt={project.title}
				class="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
			/>
		</div>
		<div
			class="absolute inset-0 bg-black/15 transition-opacity duration-500 group-hover:opacity-0"
		></div>
		<div class="absolute top-2 left-2 h-10 w-40 bg-black/40 blur-xl"></div>

		<!-- Client tag -->
		{#if project.client}
			<div
				class="bg-popover absolute top-4 left-4 rounded-lg px-3 py-1 text-xs font-medium drop-shadow-lg"
			>
				{project.client}
			</div>
		{/if}
	</div>

	<!-- Project info -->
	<div>
		<div class="space-y-4">
			<div class="space-y-4">
				<div class="flex items-center gap-4">
					{#if project.icon}
						<VeliteImage
							imagePng={project.icon}
							imageAvif={project.iconAvif}
							alt={project.title}
							class="size-10 rounded-lg"
						/>
					{/if}
					<h3 class="h4">{project.title}</h3>
				</div>
				{#if project.excerpt}
					<p class="text-muted-foreground mt-2">{project.excerpt}</p>
				{/if}
			</div>

			<div class="flex gap-3 pt-2">
				<Button
					variant="outline"
					size={type === 'project' ? 'default' : 'sm'}
					class="group"
					href={localizeHref(route('/projets/[slug]', { slug: project.uniqueId }))}
				>
					<span>
						{m['projects.view_details']()}
					</span>
					<IconArrowRight class=" transition-transform group-hover:translate-x-0.5" />
				</Button>
				{#if project.website}
					<Button
						variant="ghost"
						size={type === 'project' ? 'default' : 'sm'}
						class="group"
						href={project.website}
						target="_blank"
						rel="noopener noreferrer"
					>
						<span>{m['common.visit']()}</span>
						<IconExternalLink class="" />
					</Button>
				{/if}
			</div>
		</div>
	</div>
</div>
