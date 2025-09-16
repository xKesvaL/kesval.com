<script lang="ts">
	import type { Project } from '$content/index';
	import type { Component } from 'svelte';
	import VeliteImage from '$lib/components/base/VeliteImage.svelte';
	import { Card, CardContent, CardHeader, CardTitle } from '$lib/components/ui/card';
	import { Tabs, TabsContent, TabsList, TabsTrigger } from '$lib/components/ui/tabs';
	import { Button } from '$lib/components/ui/button';
	import { IconArrowUpRight, IconExternalLink } from '@tabler/icons-svelte';
	import * as m from '$paraglide/messages';
	import { AspectRatio } from '$lib/components/ui/aspect-ratio';
	import { Separator } from '$lib/components/ui/separator';
	import { IconPhoto, IconWorld, IconBrandFigma, IconBrandGithub } from '@tabler/icons-svelte';
	import { IsMobileCustom } from '$lib/hooks/is-mobile-custom.svelte';
	import { IconTag } from '@tabler/icons-svelte';
	import { Badge } from '$lib/components/ui/badge';
	import ProjectMetadata from './ProjectMetadata.svelte';

	let {
		component,
		metadata
	}: {
		component: Component;
		metadata: Project;
	} = $props();

	const PageComponent = component;

	type ExtendedProject = Project & {
		figma?: string;
		previewUrl?: string;
		previewHeight?: number;
	};
	const md = metadata as ExtendedProject;

	const hasWebsite = Boolean(md.previewUrl || md.website);
	const hasFigma = Boolean(md.figma);

	const defaultTab = (hasWebsite && 'website') || (hasFigma && 'figma') || 'cover';

	const previewSrc = (md.previewUrl || md.website) ?? '';
	const figmaEmbedUrl = (() => {
		const raw = md.figma;
		if (!raw) return '';
		return raw.includes('/embed') || raw.includes('embed?')
			? raw
			: `https://www.figma.com/embed?embed_host=share&url=${encodeURIComponent(raw)}`;
	})();

	const isMobile = new IsMobileCustom(1024);

	// Consistent preview shape to avoid layout shifts (keeps current visual size)
	const previewRatio = isMobile.current ? 9 / 16 : 16 / 10;
	const FRAME_W = 1400;
	const FRAME_H = 875;

	const ACTUAL_W = 368;

	let previewScale = $derived(isMobile.current ? 1 : ACTUAL_W / FRAME_W);
</script>

<ProjectMetadata {metadata} ogImage={metadata.cover} />

<section class="section-hero lg:pt-8">
	<div class="kcontainer mx-auto grid w-full gap-16 px-4 lg:grid-cols-[minmax(0,1fr)_420px]">
		<!-- Left: Case study content -->
		<div class="min-w-0">
			<article class="prose xl:prose-lg @container w-full min-w-0" id="main-content">
				<header class="not-prose relative">
					<h1
						class="text-foreground scroll-m-20 text-4xl font-extrabold tracking-tight sm:text-5xl"
					>
						{metadata.title}
					</h1>
					{#if metadata.excerpt}
						<p class="text-muted-foreground mt-4 text-xl leading-8 text-balance">
							{metadata.excerpt}
						</p>
					{/if}
					{#if metadata.tags && metadata.tags.length > 0}
						<div class="text-muted-foreground mt-6 mb-6 flex items-center gap-1.5 text-sm">
							<IconTag class="h-4 w-4" />
							<div class="flex flex-wrap gap-1">
								{#each metadata.tags as tag (tag)}
									<Badge variant="secondary" class="text-xs">{tag}</Badge>
								{/each}
							</div>
						</div>
					{/if}
					<Separator class="mt-8" />
				</header>

				<PageComponent />
			</article>
		</div>

		<!-- Right: Preview + meta -->
		<!-- Preview Tabs -->
		<Card
			class="shadow-primary/5 gap-4 overflow-hidden overflow-y-auto shadow-[inset_0_-4px_8px_0px] drop-shadow-xs lg:sticky lg:top-[calc(var(--nav-height)+var(--nav-spacing)+2rem)] lg:h-fit lg:max-h-[calc(100dvh-var(--nav-height)-var(--nav-spacing)-4rem)] lg:self-start"
		>
			<CardHeader class="">
				<CardTitle>{m['projects.case.panel_title']()}</CardTitle>
			</CardHeader>
			<CardContent class="pt-0">
				<Tabs value={defaultTab} class="w-full">
					<TabsList class="w-full">
						<TabsTrigger value="cover">
							<IconPhoto class="mr-1 size-4" />
							{m['projects.case.tabs.cover']()}
						</TabsTrigger>
						<TabsTrigger value="website" disabled={!hasWebsite}>
							<IconWorld class="mr-1 size-4" />
							{m['projects.case.tabs.website']()}
						</TabsTrigger>
						<TabsTrigger value="figma" disabled={!hasFigma}>
							<IconBrandFigma class="mr-1 size-4" />
							{m['projects.case.tabs.prototype']()}
						</TabsTrigger>
					</TabsList>

					<TabsContent value="cover" class="pt-3">
						<AspectRatio ratio={previewRatio} class="bg-muted overflow-hidden rounded-lg border">
							<VeliteImage
								imagePng={metadata.cover}
								imageAvif={metadata.coverAvif}
								alt={metadata.title}
								class="h-full w-full object-cover"
								classWrapper="h-full"
							/>
						</AspectRatio>
					</TabsContent>

					<TabsContent value="website" class="pt-3">
						{#if hasWebsite}
							<AspectRatio ratio={previewRatio} class="bg-muted overflow-hidden rounded-lg border">
								<div class="relative h-full w-full">
									<iframe
										src={previewSrc}
										title="Website preview"
										loading="lazy"
										referrerpolicy="no-referrer"
										sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
										width={FRAME_W}
										height={FRAME_H}
										class={`origin-top-left max-lg:h-full max-lg:w-full`}
										style={`transform: scale(${previewScale})`}
									></iframe>
								</div>
							</AspectRatio>
							{#if metadata.website}
								<Button
									class="mt-3 w-full"
									href={metadata.website}
									target="_blank"
									rel="noopener noreferrer"
								>
									{m['common.visit_site']()}
									<IconExternalLink />
								</Button>
							{/if}
						{/if}
					</TabsContent>

					<TabsContent value="figma" class="pt-3">
						{#if hasFigma}
							<AspectRatio ratio={previewRatio} class="bg-muted overflow-hidden rounded-lg border">
								<div class="relative h-full w-full">
									<iframe
										src={figmaEmbedUrl}
										title="Figma prototype"
										loading="lazy"
										allowfullscreen
										sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
										width={FRAME_W}
										height={FRAME_H}
										class="origin-top-left"
										style={`transform: scale(${previewScale})`}
									></iframe>
								</div>
							</AspectRatio>
							<Button
								class="mt-3 w-full"
								href={md.figma}
								target="_blank"
								rel="noopener noreferrer"
								variant="outline"
							>
								{m['projects.case.buttons.open_figma']()}
								<IconExternalLink />
							</Button>
						{/if}
					</TabsContent>
				</Tabs>
			</CardContent>
			<CardHeader class="pt-4">
				<CardTitle>{m['projects.case.meta_title']()}</CardTitle>
			</CardHeader>
			<CardContent class="pt-0">
				<dl class="space-y-2">
					<div class="grid grid-cols-2 gap-2 gap-y-4 text-sm">
						<div class="flex flex-col gap-1">
							<dt class="text-muted-foreground">
								{m['projects.case.meta.client']()}
							</dt>
							<dd class="font-medium">{metadata.client}</dd>
						</div>
						<div class="flex flex-col gap-1">
							<dt class="text-muted-foreground">{m['projects.case.meta.type']()}</dt>
							<dd class="font-medium">{metadata.projectType}</dd>
						</div>
						<div class="flex flex-col gap-1">
							<dt class="text-muted-foreground">
								{m['projects.case.meta.technologies']()}
							</dt>
							<dd class="font-medium">{metadata.technologies.slice(0, 2).join(', ')}</dd>
						</div>
						<div class="flex flex-col gap-1">
							<dt class="text-muted-foreground">{m['projects.case.meta.price']()}</dt>
							<dd class="font-medium">{metadata.price ? `${metadata.price} €` : 'N/A'}</dd>
						</div>
						{#if metadata.startedAt}
							<div class="flex flex-col gap-1">
								<span class="text-muted-foreground">{m['projects.case.meta.started']()}</span>
								<span class="font-medium">
									{new Date(metadata.startedAt).toLocaleDateString(metadata.locale, {
										year: 'numeric',
										month: 'long',
										day: 'numeric'
									})}
								</span>
							</div>
						{/if}
						{#if metadata.finishedAt}
							<div class="flex flex-col gap-1">
								<span class="text-muted-foreground">{m['projects.case.meta.finished']()}</span>
								<span class="font-medium">
									{new Date(metadata.finishedAt).toLocaleDateString(metadata.locale, {
										year: 'numeric',
										month: 'long',
										day: 'numeric'
									})}
								</span>
							</div>
						{/if}
					</div>

					{#if metadata.website || metadata.github}
						<Separator class="my-4" />
						<div class="grid grid-cols-2 gap-2">
							{#if metadata.website}
								<Button
									variant="outline"
									href={metadata.website}
									target="_blank"
									rel="noopener noreferrer"
								>
									{m['common.visit_site']()}
									<IconArrowUpRight class="mr-1 size-4" />
								</Button>
							{/if}
							{#if metadata.github}
								<Button
									variant="ghost"
									href={metadata.github}
									target="_blank"
									rel="noopener noreferrer"
								>
									<IconBrandGithub class="mr-1 size-4" />
									{m['nav.github']()}
								</Button>
							{/if}
						</div>
					{/if}
				</dl>
			</CardContent>
		</Card>
	</div>
</section>
