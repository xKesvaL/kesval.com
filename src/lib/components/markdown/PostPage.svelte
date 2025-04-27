<script lang="ts">
	import type { TOCEntry } from '@svecodocs/kit';
	import type { Component } from 'svelte';
	import PostMetadata from './PostMetadata.svelte';
	import PostHeader from './PostHeader.svelte';

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
<section>
	<aside class="sticky">
		<div class="sticky top-24 hidden pl-16 xl:block">
			<!-- <Toc toc={{ items: toc }} /> -->
		</div>
	</aside>
	<div class="section mx-auto">
		<article class="prose xl:prose-lg mx-auto w-full min-w-0 pb-12" id="main-content">
			<PostHeader {title} {excerpt} />
			<PageComponent />
		</article>
	</div>
</section>
