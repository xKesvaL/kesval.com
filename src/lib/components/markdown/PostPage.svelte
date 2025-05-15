<script lang="ts">
	import type { Component } from 'svelte';
	import PostMetadata from './PostMetadata.svelte';
	import PostHeader from './PostHeader.svelte';
	import Toc from './Toc.svelte';
	import type { Post } from '$content/index';
	import VeliteImage from '../base/VeliteImage.svelte';

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
		class="mx-auto h-120 w-full max-w-[1400px] rounded-4xl object-cover"
		convertStaticPathTo="/blog"
	/>
	<div class="flex flex-row-reverse py-8">
		<aside class="fixed bottom-4 left-4 z-10 mr-auto lg:sticky lg:pl-16">
			<div class="sticky top-36 w-90">
				<Toc toc={{ items: metadata.toc }} />
			</div>
		</aside>
		<div class="section mr-auto ml-auto w-full max-w-prose px-4 max-md:pt-20 lg:mr-0 lg:text-lg">
			<article class="prose xl:prose-lg @container w-full min-w-0" id="main-content">
				<PostHeader title={metadata.title} excerpt={metadata.excerpt} />
				<PageComponent />
			</article>
		</div>
	</div>
</section>
