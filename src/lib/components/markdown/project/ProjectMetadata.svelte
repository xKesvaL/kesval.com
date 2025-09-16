<script lang="ts">
	import { page } from '$app/state';
	import type { Project } from '$content/index';
	import { brand, team } from '$lib/utils/config';
	import { getImageSrc } from '$lib/utils/content';
	import { extractLocaleFromUrl } from '$paraglide/runtime';
	import type { Image } from 'velite';

	let {
		metadata,
		ogImage,
		keywords = Array.from(brand.keywords)
	}: {
		metadata: Project;
		ogImage?: Image;
		keywords?: string[];
	} = $props();

	const trueTitle = $derived(
		metadata.title === brand.name ? brand.name : `${metadata.title} | ${brand.name}`
	);

	let imageSrc = $derived(getImageSrc(ogImage?.src));
</script>

<svelte:head>
	<title>{trueTitle}</title>
	<meta name="description" content={metadata.excerpt} />
	<meta name="keywords" content={keywords?.join(',')} />
	<meta name="author" content={`${team.jordan.name} "${brand.nameShort}"`} />
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:site" content={brand.website} />
	<meta name="twitter:title" content={trueTitle} />
	<meta name="twitter:description" content={metadata.excerpt} />
	<meta name="twitter:image" content={imageSrc} />
	<meta name="twitter:image:alt" content={trueTitle} />
	<meta name="twitter:creator" content={`${team.jordan.name} "${brand.nameShort}"`} />
	<meta property="og:title" content={trueTitle} />
	<meta property="og:type" content="website" />
	<meta property="og:url" content={brand.website + page.url.pathname} />
	<meta property="og:image" content={imageSrc} />
	<meta property="og:image:alt" content={trueTitle} />
	<meta property="og:image:width" content={ogImage?.width?.toString()} />
	<meta property="og:image:height" content={ogImage?.height?.toString()} />
	<meta property="og:description" content={metadata.excerpt} />
	<meta property="og:site_name" content={brand.name} />
	<meta property="og:locale" content={extractLocaleFromUrl(page.url.href)} />
</svelte:head>
