<script lang="ts">
	import { page } from '$app/stores';
	import { brand, type OgImage } from '$lib/utils/config';

	let {
		title = brand.name,
		ogImage = brand.ogImage,
		excerpt,
		keywords = Array.from(brand.keywords)
	}: {
		title?: string;
		ogImage?: OgImage;
		excerpt?: string;
		keywords?: string[];
	} = $props();

	const trueTitle = $derived(title === brand.name ? brand.name : `${title} | ${brand.name}`);
</script>

<svelte:head>
	<title>{trueTitle}</title>
	<meta name="description" content={excerpt} />
	<meta name="keywords" content={keywords?.join(',')} />
	<meta name="author" content="huntabyte" />
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:site" content={brand.website} />
	<meta name="twitter:title" content={title} />
	<meta name="twitter:description" content={excerpt} />
	<meta name="twitter:image" content={ogImage?.url} />
	<meta name="twitter:image:alt" content={title} />
	<meta name="twitter:creator" content="huntabyte" />
	<meta property="og:title" content={title} />
	<meta property="og:type" content="website" />
	<meta property="og:url" content={brand.website + $page.url.pathname} />
	<meta property="og:image" content={ogImage?.url} />
	<meta property="og:image:alt" content={title} />
	<meta property="og:image:width" content={ogImage?.width} />
	<meta property="og:image:height" content={ogImage?.height} />
	<meta property="og:description" content={excerpt} />
	<meta property="og:site_name" content={brand.name} />
	<meta property="og:locale" content="EN_US" />
</svelte:head>
