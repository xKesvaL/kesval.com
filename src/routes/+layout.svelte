<script lang="ts">
	import { navigating, page } from '$app/stores';
	import { BRAND } from '$lib/config';
	import '$lib/styles/fonts.scss';
	import '$lib/styles/main.scss';
	import '$lib/styles/nprogress.scss';
	import '@kesval/design';
	import nprogress from 'nprogress';
	import { setupViewTransition } from 'sveltekit-view-transition';

	import '../app.postcss';
	import { polyfillCountryFlagEmojis } from '$lib/utils/functions';
	import { onMount } from 'svelte';
	import { availableLanguageTags } from '$paraglide/runtime';

	nprogress.configure({ easing: 'ease', minimum: 0.2, speed: 600 });
	$: $navigating ? nprogress.start() : nprogress.done();

	setupViewTransition();

	onMount(() => {
		polyfillCountryFlagEmojis();
	});
</script>

<svelte:head>
	<meta content={BRAND.author.name} name="copyright" />
	<meta content={BRAND.name} name="og:site_name" />

	<!-- Href langs -->
	<link href={$page.url.pathname} hreflang="x-default" rel="alternate" />
	{#each availableLanguageTags as locale}
		<link href={`/${locale}${$page.url.pathname}?owlang=true`} hreflang={locale} rel="alternate" />
	{/each}
</svelte:head>

<slot />
