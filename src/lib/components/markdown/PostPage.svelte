<script lang="ts">
	import type { TOCEntry } from '@svecodocs/kit';
	import type { Component } from 'svelte';
	import PostMetadata from './PostMetadata.svelte';
	import PostHeader from './PostHeader.svelte';
	import Toc from './Toc.svelte';

	let {
		component,
		title,
		excerpt,
		toc
	}: {
		component: Component;
		title: string;
		excerpt?: string;
		toc: TOCEntry[];
	} = $props();

	const PageComponent = $derived(component);
</script>

<PostMetadata {title} {excerpt} />
<section class="flex flex-row-reverse px-4 py-8 lg:-mr-0 xl:-mr-24">
	<aside class="fixed bottom-4 left-4 z-10 mr-auto lg:sticky lg:pl-16 xl:pl-24">
		<div class="sticky top-40">
			<Toc toc={{ items: toc }} />
		</div>
	</aside>
	<div class="section mr-auto ml-auto max-md:pt-20 lg:mr-0">
		<article class="prose xl:prose-lg w-full min-w-0" id="main-content">
			<PostHeader {title} {excerpt} />
			<PageComponent />
		</article>
	</div>
</section>
