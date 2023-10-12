<script lang="ts">
	import BackToTopButton from '$lib/components/layout/BackToTopButton.svelte';
	import Footer from '$lib/components/layout/Footer.svelte';
	import Navigation from '$lib/components/layout/Navigation.svelte';
</script>

<Navigation />

<main>
	<slot />
</main>

<BackToTopButton />
<Footer />

<style lang="scss">
	main {
		background: radial-gradient(circle at 28% 37%, hsl(var(--primary-300) / 0.15), transparent 40%),
			radial-gradient(circle at 70% 66%, hsl(var(--secondary-300) / 0.15), transparent 40%);

		margin-top: -6rem;
		padding-top: 8rem;

		min-height: calc(100vh + 1rem);
	}
</style>
