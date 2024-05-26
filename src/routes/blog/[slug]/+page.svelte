<script lang="ts">
	import type { PageData } from './$types';
	import Markdown from '$lib/markdown/Markdown.svelte';
	import Giscus from '@giscus/svelte';
	import { settings } from '$lib/stores/settings';
	import { languageTag } from '$paraglide/runtime';
	import { theme } from '$lib/stores/theme';
	import ResponsiveDialog from '$lib/components/base/ResponsiveDialog.svelte';
	import { Button } from '$lib/components/ui/button';
	import IconShare from '$lib/icons/IconShare.svelte';
	import * as m from '$paraglide/messages';
	import dayjs from 'dayjs';
	import IconBrandX from '$lib/icons/IconBrandX.svelte';
	import 'dayjs/locale/en';
	import 'dayjs/locale/fr';
	import Seo from '$lib/components/base/SEO.svelte';
	import { BRAND } from '$lib/config';
	import { page } from '$app/stores';

	export let data: PageData;

	const keyDate = dayjs(data.post?.publishedAt).format('YYYY-MM-DD');
</script>

{#if data.post}
	<Seo
		title={data.post.title}
		description={data.post?.excerpt}
		url={`${BRAND.url}${$page.url.pathname}`}
	/>

	<header
		class="relative isolate -mt-24 h-[28rem] bg-card"
		style:view-transition-name="blog-header"
	>
		<div
			class="absolute z-10 h-[calc(100%+16.5rem)] w-full bg-gradient-to-b from-background/25 via-background via-75% to-transparent"
		/>
		<img
			class="h-full w-full object-cover"
			src={data.post.coverImage}
			alt={data.post.coverImageAlt}
		/>
	</header>

	<div
		class="article-container relative isolate mx-auto -mt-64 max-w-[calc((var(--prose-mw-num)*1ch)+(44px*var(--prose-fs-num))-40rem)] pt-1 transition-all md:pt-10"
		style:--prose-mw-num={`${$settings.readingLength}`}
		style:--prose-fs-num={`${$settings.readingSize}`}
		style:view-transition-name="blog-container"
	>
		<div
			class="absolute left-0 right-0 top-0 -z-10 h-[33rem] rounded-t-3xl bg-gradient-to-b from-background via-background via-50% to-transparent md:rounded-t-4xl"
		/>
		<article
			class="prose mx-auto p-4 transition-all md:p-0"
			style:--prose-mw={`${$settings.readingLength}ch`}
			style:--prose-fs={`${$settings.readingSize}px`}
			style:--prose-lh={`${$settings.readingHeight}`}
		>
			<img
				class="!my-0 !h-48 !w-full rounded-xl object-cover md:!h-96"
				src={data.post.coverImage}
				alt={data.post.coverImageAlt}
				style:view-transition-name="blog-cover-image-{keyDate}"
			/>
			<div class="mt-4 flex gap-4 md:mt-8">
				<div class="h-12 w-12 overflow-hidden rounded-full border-2 border-primary md:h-14 md:w-14">
					<enhanced:img src="$assets/me/hero.jpg" class="!my-0" alt={m.common_photoOfMe()} />
				</div>
				<div class="flex flex-col justify-between">
					<p class="!m-0 !text-base md:!text-xl">
						{m.by_author({ author: 'Jordan Abeddou' })}
					</p>
					<p class="!m-0 !text-sm text-foreground/75 md:!text-base">
						{dayjs(data.post.publishedAt).locale(languageTag()).format('DD MMMM YYYY')} - {data.post
							.readingTime}
					</p>
				</div>
				<div class="ml-auto flex items-center">
					<ResponsiveDialog
						title={m.share_post()}
						buttonProps={{ size: 'icon', class: 'p-2', variant: 'ghost' }}
					>
						<IconShare slot="trigger" />

						<Button
							href={`https://x.com/intent/post?text=${m.share_post_content({ title: data.post.title, url: `${BRAND.url}/blog/${data.post.slug}` })}`}
							target="_blank"
							class="w-full gap-2"
							variant="outline"
						>
							<div class="h-6 w-6">
								<IconBrandX />
							</div>
							{m.share_to_platform({ platform: 'X' })}
						</Button>
					</ResponsiveDialog>
				</div>
			</div>
			<h1 class="mt-4 text-[2.25em] leading-tight md:mt-8" style:view-transition-name="blog-title-{keyDate}">
				{data.post.title}
			</h1>
			<p class="text-foreground/90">{data.post.excerpt}</p>

			<div class="mt-10 h-[1px] w-full bg-border" />

			<div>
				<Markdown content={data.post.content} />
			</div>
		</article>
		<div class="giscus mt-8"></div>
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

<style>
	.article-container {
		--prose-mw-num: 65;
		--prose-fs-num: 18;
	}
</style>
