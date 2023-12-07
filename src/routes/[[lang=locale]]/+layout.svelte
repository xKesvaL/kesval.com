<script lang="ts">
	import { browser } from '$app/environment';
	import BackToTopButton from '$lib/components/layout/BackToTopButton.svelte';
	import ContactBot from '$lib/containers/layout/ContactBot.svelte';
	import Footer from '$lib/components/layout/Footer.svelte';
	import Navigation from '$lib/containers/layout/Navigation.svelte';
	import { scrollLocked } from '$lib/stores/common';
	import { settings } from '$lib/stores/settings';

	$: if (browser) {
		document.body.setAttribute('data-scroll-locked', $scrollLocked ? 'true' : 'false');
	}

	$: if (browser) {
		document.documentElement.setAttribute('data-dyslexic', $settings.dyslexia ? 'true' : 'false');
	}
</script>

<Navigation />

<main>
	<slot />
</main>

<ContactBot />
<BackToTopButton />
<Footer />

<style lang="scss">
	main {
		background: radial-gradient(circle at 28% 37%, hsl(var(--primary-300) / 0.1), transparent 40%),
			radial-gradient(circle at 70% 66%, hsl(var(--secondary-300) / 0.1), transparent 40%);

		margin-top: -8rem;
		padding-top: 8rem;

		min-height: calc(100vh + 3rem);

		/* @include mq(lg) {
			margin-top: -6rem;
			min-height: calc(100vh + 1rem);
		} */
	}
</style>
