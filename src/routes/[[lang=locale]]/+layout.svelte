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
