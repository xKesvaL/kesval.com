<script lang="ts">
	import '../app.css';
	import Navigation from '$lib/components/layout/Navigation.svelte';
	let { children } = $props();
</script>

<Navigation />
{@render children()}
