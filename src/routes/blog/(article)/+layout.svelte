<script>
	import { page } from '$app/stores';

	import Seo from '$lib/components/base/SEO.svelte';
	import { BRAND } from '$lib/config';
	import { activeLayout } from '$lib/stores/common';
	import { settings } from '$lib/stores/settings';

	export let data;
</script>

{#key $page.url.pathname}
	{#if data.post && $activeLayout === 'blog'}
		<Seo
			title={data.post.title}
			description={data.post?.excerpt}
			url={`${BRAND.url}${$page.url.pathname}`}
		/>
	{/if}
{/key}

<div>
	<article
		class="prose mx-auto transition-all"
		style:--prose-mw={`${$settings.readingLength}ch`}
		style:--prose-fs={`${$settings.readingSize}px`}
		style:--prose-lh={`${$settings.readingHeight}`}
	>
		<div><slot /></div>
	</article>
</div>
