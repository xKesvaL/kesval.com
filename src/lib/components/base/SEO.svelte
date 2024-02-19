<script lang="ts">
	import { BRAND } from '$lib/config';
	import { getI18n } from '$lib/utils/functions';
	import { i18n } from '$lib/utils/i18n';

	export let pathname: string;

	$: route = i18n.route(pathname).replace('/', '').replaceAll('/', '_');
	$: title = route === '' ? 'home' : route;

	$: seo = {
		title: getI18n(`seo_${title}_title`),
		description: getI18n(`seo_${title}_description`),
		url: `${BRAND.url}${pathname}`
	};
</script>

<svelte:head>
	<!-- Title -->
	<title>{`${seo.title} - ${BRAND.name}`}</title>
	<meta name="og:title" content={`${seo.title} - ${BRAND.name}`} />
	<meta name="twitter:title" content={`${seo.title} - ${BRAND.name}`} />

	<!-- Description -->
	<meta name="description" content={seo.description} />
	<meta name="og:description" content={seo.description} />
	<meta name="twitter:description" content={seo.description} />

	<!-- URL -->
	<meta name="og:url" content={seo.url} />
	<meta name="twitter:url" content={seo.url} />

	<!-- Brand name -->
	<meta name="og:type" content="website" />
	<meta content={BRAND.author.name} name="copyright" />
	<meta content={BRAND.name} name="og:site_name" />
</svelte:head>
