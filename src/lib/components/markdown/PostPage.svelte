<script lang="ts">
	import type { Component } from 'svelte';
	import PostMetadata from './PostMetadata.svelte';
	import PostHeader from './PostHeader.svelte';
	import Toc from './Toc.svelte';
	import type { Post } from '$content/index';
	import VeliteImage from '../base/VeliteImage.svelte';
	import PostShare from './PostShare.svelte';
	import { IconArrowLeft } from '@tabler/icons-svelte';
	import RelatedPosts from './RelatedPosts.svelte';
	import { Button } from '../ui/button';
	import * as m from '$paraglide/messages';
	import { localizeHref } from '$paraglide/runtime';
	import { route } from '$lib/ROUTES';

	let {
		component,
		metadata
	}: {
		component: Component;
		metadata: Post;
	} = $props();

	const PageComponent = $derived(component);
</script>

<PostMetadata {metadata} />
<section class="">
	<VeliteImage
		imagePng={metadata.cover}
		imageAvif={metadata.coverAvif}
		alt={metadata.title}
		class="w-full object-cover"
		classWrapper="mx-auto max-w-[1168px] lg:rounded-b-2xl lg:border-5 shadow lg:border-t-0 w-full max-lg:mt-18 aspect-[2] lg:h-120 lg:aspect-auto"
	>
		<Button class="absolute bottom-4 left-4" href={localizeHref(route('/blog'))} variant="outline">
			<IconArrowLeft />
			{m['common.back']()}
		</Button>
	</VeliteImage>

	<div class="flex flex-row-reverse py-8">
		<aside class="fixed bottom-4 left-4 z-10 mr-auto lg:sticky lg:pl-16">
			<div class="sticky top-36 flex w-90 flex-col gap-8">
				<Toc toc={{ items: metadata.toc }} />
				<PostShare post={metadata} />
			</div>
		</aside>
		<div class="mr-auto ml-auto w-full max-w-prose px-4 lg:mr-0 lg:text-lg">
			<article class="prose xl:prose-lg @container w-full min-w-0" id="main-content">
				<PostHeader {metadata} />

				<PageComponent />

				<RelatedPosts {metadata} />
			</article>
		</div>
	</div>
</section>
