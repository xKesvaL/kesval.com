<script lang="ts">
	import { navigating, page } from '$app/stores';
	import '$lib/styles/fonts.scss';
	import '$lib/styles/main.scss';
	import '$lib/styles/nprogress.scss';
	import '@kesval/design';
	import nprogress from 'nprogress';
	import { setupViewTransition } from 'sveltekit-view-transition';

	import BackToTopButton from '$lib/components/layout/BackToTopButton.svelte';
	import ContactBot from '$lib/containers/layout/ContactBot.svelte';
	import Footer from '$lib/components/layout/Footer.svelte';
	import Navigation from '$lib/containers/layout/Navigation.svelte';

	import '../app.postcss';
	import { polyfillCountryFlagEmojis } from '$lib/utils/functions';
	import { onMount } from 'svelte';
	import { browser } from '$app/environment';
	import { ParaglideJS } from '@inlang/paraglide-sveltekit';
	import { i18n } from '$lib/utils/i18n';

	import { activeLayout, scrollLocked } from '$lib/stores/common';
	import { settings } from '$lib/stores/settings';
	import Seo from '$lib/components/base/SEO.svelte';

	$: if (browser) {
		document.body.setAttribute('data-scroll-locked', $scrollLocked ? 'true' : 'false');
		document.documentElement.setAttribute('data-dyslexic', $settings.dyslexia ? 'true' : 'false');
	}

	nprogress.configure({ easing: 'ease', minimum: 0.2, speed: 600 });
	$: $navigating && browser ? nprogress.start() : nprogress.done();

	setupViewTransition();

	onMount(() => {
		polyfillCountryFlagEmojis();
	});

	$: pathname = $page.url.pathname;
	$: activeLayout.handle($page.url);
</script>

{#if $activeLayout === 'base'}
	<Seo {pathname} />
{/if}

<ParaglideJS {i18n}>
	<Navigation />

	<main>
		<slot />
	</main>

	<ContactBot />
	<BackToTopButton />
	<Footer />
</ParaglideJS>

<style lang="scss">
	main {
		background: radial-gradient(circle at 28% 37%, hsl(var(--primary-300) / 0.1), transparent 40%),
			radial-gradient(circle at 70% 66%, hsl(var(--secondary-300) / 0.1), transparent 40%);

		margin-top: -4rem;
		padding-top: 4rem;

		min-height: 100vh;

		@media (min-width: 1024px) {
			padding-top: 6rem;
		}
	}
</style>
