<script lang="ts">
	import { navigating, page } from '$app/stores';
	import { BRAND } from '$lib/config';
	import '$lib/styles/main.scss';
	import '$lib/styles/nprogress.scss';
	import '@kesval/design';
	import nprogress from 'nprogress';
	import { isLoading, locales } from 'svelte-i18n';
	import { setupViewTransition } from 'sveltekit-view-transition';

	import '../app.postcss';
	import Loading from '$lib/containers/layout/Loading.svelte';
	import { polyfillCountryFlagEmojis } from '$lib/utils/functions';

	nprogress.configure({ easing: 'ease', minimum: 0.2, speed: 600 });
	$: $navigating ? nprogress.start() : nprogress.done();

	setupViewTransition();
	polyfillCountryFlagEmojis();
</script>

<svelte:head>
	<meta content={BRAND.author.name} name="copyright" />
	<meta content={BRAND.name} name="og:site_name" />

	<!-- Href langs -->
	<link href={$page.url.pathname} hreflang="x-default" rel="alternate" />
	{#each $locales as locale}
		<link href={`/${locale}${$page.url.pathname}?owlang=true`} hreflang={locale} rel="alternate" />
	{/each}
</svelte:head>

{#if $isLoading}
	<Loading />
{:else}
	<slot />
{/if}
