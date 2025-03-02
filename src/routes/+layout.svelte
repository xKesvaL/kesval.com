<script lang="ts">
	import '../app.css';
	import Navigation from '$lib/components/layout/Navigation.svelte';
	import Footer from '$lib/components/layout/Footer.svelte';
	let { children } = $props();
</script>

<Navigation />
<main class="kcontainer-nav-padding kcontainer">
	{@render children()}
</main>
<Footer />
