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
		'group relative grid grid-cols-1 gap-6',
		type === 'highlighted' && 'xl:grid-cols-10 xl:items-center xl:gap-12'
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
	<a
		href={localizeHref(route('/projets/[slug]', { slug: project.uniqueId }))}
		class={cn(
			'bg-muted relative mb-auto w-full overflow-hidden rounded-2xl border transition-all duration-500 group-hover:shadow-lg',
			type === 'highlighted' && 'xl:col-span-6'
		)}
	>
		<div class="aspect-video w-full overflow-hidden">
			<VeliteImage
				imagePng={project.cover}
				imageAvif={project.coverAvif}
				alt={project.title}
				class="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
				classWrapper="h-full"
			/>
		</div>
		<div
			class="absolute inset-0 bg-black/15 transition-opacity duration-500 group-hover:opacity-0"
		></div>
		<div class="absolute top-2 left-2 h-10 w-40 bg-black/20 blur-2xl"></div>

		<!-- Client tag -->
		{#if project.client}
			<div
				class="bg-popover absolute top-4 left-4 rounded-lg border px-3 py-1 text-xs font-medium drop-shadow-xs"
			>
				{project.client}
			</div>
		{/if}
	</a>

	<!-- Project info -->
	<div class={cn(type === 'highlighted' && 'xl:col-span-4')}>
		<div class="space-y-2">
			<div class="space-y-2">
				<div class="flex items-center gap-4">
					{#if project.icon}
						<VeliteImage
							imagePng={project.icon}
							imageAvif={project.iconAvif}
							alt={project.title}
							classWrapper="overflow-hidden rounded-lg shadow-xs border"
							class="size-10"
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
