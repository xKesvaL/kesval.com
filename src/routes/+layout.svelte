<script lang="ts">
	import '../app.css';
	import Navigation from '$lib/components/layout/Navigation.svelte';
	import Footer from '$lib/components/layout/Footer.svelte';
	import { navigation } from '$lib/stores/common.svelte';
	let { children } = $props();

	$effect(() => {
		if (navigation.state === 'open') {
			document.body.style.overflowY = 'hidden';
		} else {
			document.body.style.overflowY = '';
		}
	});
</script>

<Navigation />
<main class="kcontainer-nav-padding kcontainer">
	{@render children()}
</main>
<Footer />
