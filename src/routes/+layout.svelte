<script lang="ts">
	import '../app.css';
	import Navigation from '$lib/components/layout/Navigation.svelte';
	import Footer from '$lib/components/layout/Footer.svelte';
	import { navigation } from '$lib/stores/common.svelte';
	import { locales, localizeHref } from '$lib/paraglide/runtime';
	import { page } from '$app/state';
	let { children } = $props();
</script>

<!-- This is a hack so sveltekit pre-renders all locales -->
<div style="display:none">
	{#each locales as locale}
		<a href={localizeHref(page.url.pathname, { locale })}>{locale}</a>
	{/each}
</div>

<Navigation />
<main class="kcontainer-nav-padding">
	{@render children()}
</main>
<Footer />
