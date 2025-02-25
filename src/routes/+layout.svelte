<script lang="ts">
	import '../app.css';
	import Navigation from '$lib/components/layout/Navigation.svelte';
	let { children } = $props();
</script>

<Navigation />
<main class="kcontainer-nav-padding kcontainer">
	{@render children()}
</main>
