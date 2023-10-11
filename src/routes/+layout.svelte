<script lang="ts">
	import { navigating } from '$app/stores';
	import { BRAND } from '$lib/config';
	import '$lib/styles/main.scss';
	import '$lib/styles/nprogress.scss';
	import '@kesval/design';
	import nprogress from 'nprogress';
	import { isLoading, locales } from 'svelte-i18n';
	import { setupViewTransition } from 'sveltekit-view-transition';

	import '../app.postcss';
	import Loading from '$lib/containers/layout/Loading.svelte';

	nprogress.configure({ easing: 'ease', minimum: 0.2, speed: 600 });
	$: $navigating ? nprogress.start() : nprogress.done();

	setupViewTransition();
</script>

<svelte:head>
	<meta content={BRAND.author.name} name="copyright" />
	<meta content={BRAND.name} name="og:site_name" />

	<!-- Href langs -->
	<link href={BRAND.url} hreflang="x-default" rel="alternate" />
	{#each $locales as locale}
		<link href={BRAND.url + '?lang=' + locale} hreflang={locale} rel="alternate" />
	{/each}
</svelte:head>

{#if $isLoading}
	<Loading />
{:else}
	<slot />
{/if}
