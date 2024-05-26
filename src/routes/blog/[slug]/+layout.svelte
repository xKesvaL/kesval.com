<script lang="ts">
	import { page } from '$app/stores';

	import Seo from '$lib/components/base/SEO.svelte';
	import { BRAND } from '$lib/config';
	import { activeLayout } from '$lib/stores/common';
	import { settings } from '$lib/stores/settings';
	import dayjs from 'dayjs';
	import "dayjs/locale/en";
	import "dayjs/locale/fr";
	import Giscus from '@giscus/svelte';
	import type { LayoutData } from './$types';

	export let data: LayoutData;

	import * as m from "$paraglide/messages";
	import { Button } from '$lib/components/ui/button';
	import IconShare from '$lib/icons/IconShare.svelte';
	import ResponsiveDialog from '$lib/components/base/ResponsiveDialog.svelte';
	import IconBrandX from '$lib/icons/IconBrandX.svelte';
	import { languageTag } from '$paraglide/runtime.js';
	import { theme } from '$lib/stores/theme';

	console.log('layout.svelte', data)
</script>

{#key $page.url.pathname}
	{#if data.post && $activeLayout === 'blog'}
		<Seo
			title={data.post.title}
			description={data.post?.excerpt}
			url={`${BRAND.url}${$page.url.pathname}`}
		/>

		<header class="-mt-24 h-[28rem] relative isolate bg-card">
			<div class="bg-gradient-to-b from-background/25 to-transparent via-75% via-background z-10 h-[calc(100%+16.5rem)] w-full absolute" /> 
			<img class="object-cover w-full h-full" src={data.post.coverImage} alt={data.post.coverImageAlt} />
		</header>

		<div
			class="article-container mx-auto -mt-64 relative pt-1 md:pt-10 max-w-[calc((var(--prose-mw-num)*1ch)+(44px*var(--prose-fs-num))-40rem)] transition-all isolate"
			style:--prose-mw-num={`${$settings.readingLength}`}
			style:--prose-fs-num={`${$settings.readingSize}`}
			>
			<div class="absolute top-0 left-0 right-0 h-[33rem] bg-gradient-to-b from-background to-transparent via-50% via-background -z-10 rounded-t-3xl md:rounded-t-4xl" />
			<article
				class="prose mx-auto transition-all p-4 md:p-0"
				style:--prose-mw={`${$settings.readingLength}ch`}
				style:--prose-fs={`${$settings.readingSize}px`}
				style:--prose-lh={`${$settings.readingHeight}`}
			>
				<img class="object-cover rounded-xl !w-full !h-48 md:!h-96 !my-0" src={data.post.coverImage} alt={data.post.coverImageAlt} />
				<div class="mt-4 md:mt-8 flex gap-4">
					<div class="w-12 h-12 md:w-14 md:h-14 rounded-full overflow-hidden border-2 border-primary">
						<enhanced:img src="$assets/me/hero.jpg" class="!my-0" alt={m.common_photoOfMe()} />
					</div>
					<div class="flex flex-col justify-between">
						<p class="!m-0 !text-base md:!text-xl">
							{m.by_author({ author: "Jordan Abeddou" })}
						</p>
						<p class="!m-0 !text-sm md:!text-base text-foreground/75">
							{dayjs(data.post.publishedAt).locale(languageTag()).format("DD MMMM YYYY")} - {data.post.readingTime}
						</p>
					</div>
					<div class="ml-auto flex items-center">
						<ResponsiveDialog title={m.share_post()} buttonProps={{ size: "icon", class: "p-2", variant: "ghost" }}>
							<IconShare slot="trigger" />

							<Button href={`https://x.com/intent/post?text=${m.share_post_content({ title: data.post.title, url: `${BRAND.url}/blog/${data.post.slug}` })}`} target="_blank" class="gap-2 w-full" variant="outline">
								<div class="w-6 h-6">
								<IconBrandX />
								</div>
								{m.share_to_platform({ platform: "X" })}
							</Button>
						</ResponsiveDialog>
					</div>
				</div>
				<h1 class="text-[2.25em] leading-tight mt-4 md:mt-8">{data.post.title}</h1>
				<p class="text-foreground/90">{data.post.excerpt}</p>

				<div class="w-full h-[1px] bg-border mt-10" />

				<slot />

			</article>
			<div class="giscus"></div>
			<Giscus
				id="comments"
				repo="xKesvaL/kesval.com"
        repoId="R_kgDOJLg2dQ"
        category="Comments"
        categoryId="DIC_kwDOJLg2dc4Cfd7h"
				mapping="title"
				term="Welcome to @giscus/react component!"
				reactionsEnabled="1"
				emitMetadata="1"
				inputPosition="top"
				theme={$theme === 'dark' ? 'dark' : $theme === 'auto' ? 'preferred_color_scheme' : 'light'}
				lang={languageTag()}
				loading="lazy"
			/>
		</div>

	{/if}
{/key}

<style>
	.article-container {
		--prose-mw-num: 65;
		--prose-fs-num: 18;
	}
</style>