<script lang="ts">
	import { page } from '$app/state';
	import type { Post } from '$content/index';
	import { brand, type OgImage } from '$lib/utils/config';
	import { extractLocaleFromUrl, getLocale } from '$paraglide/runtime';

	let {
		metadata,
		ogImage = brand.ogImage,
		keywords = Array.from(brand.keywords)
	}: {
		metadata: Post;
		ogImage?: OgImage;
		keywords?: string[];
	} = $props();

	const trueTitle = $derived(
		metadata.title === brand.name ? brand.name : `${metadata.title} | ${brand.name}`
	);
</script>

<svelte:head>
	<title>{trueTitle}</title>
	<meta name="description" content={metadata.excerpt} />
	<meta name="keywords" content={keywords?.join(',')} />
	<meta name="author" content="huntabyte" />
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:site" content={brand.website} />
	<meta name="twitter:title" content={trueTitle} />
	<meta name="twitter:description" content={metadata.excerpt} />
	<meta name="twitter:image" content={ogImage?.url} />
	<meta name="twitter:image:alt" content={trueTitle} />
	<meta name="twitter:creator" content="huntabyte" />
	<meta property="og:title" content={trueTitle} />
	<meta property="og:type" content="website" />
	<meta property="og:url" content={brand.website + page.url.pathname} />
	<meta property="og:image" content={ogImage?.url} />
	<meta property="og:image:alt" content={trueTitle} />
	<meta property="og:image:width" content={ogImage?.width} />
	<meta property="og:image:height" content={ogImage?.height} />
	<meta property="og:description" content={metadata.excerpt} />
	<meta property="og:site_name" content={brand.name} />
	<meta property="og:locale" content={extractLocaleFromUrl(page.url.href)} />
</svelte:head>
