<script>
	import { page } from '$app/stores';

	import Seo from '$lib/components/base/SEO.svelte';
	import { BRAND } from '$lib/config';
	import { activeSeoLayout } from '$lib/stores/seo';

	export let data;
</script>

{#key $page.url.pathname}
	{#if data.post && $activeSeoLayout === 'blog'}
		<Seo
			title={data.post.title}
			description={data.post?.excerpt}
			url={`${BRAND.url}${$page.url.pathname}`}
		/>
	{/if}
{/key}

<slot />
