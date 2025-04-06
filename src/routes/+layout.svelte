<script lang="ts">
	import '../app.css';
	import Navigation from '$lib/components/layout/Navigation.svelte';
	import Footer from '$lib/components/layout/Footer.svelte';
	import { locales, localizeHref } from '$lib/paraglide/runtime';
	import { page } from '$app/state';
	import Analytics from '$lib/components/base/Analytics.svelte';
	import { deepMerge, MetaTags } from 'svelte-meta-tags';

	let { children, data } = $props();
	let metaTags = $derived(deepMerge(data.baseMetaTags, page.data.pageMetaTags));
</script>

<!-- This is a hack so sveltekit pre-renders all locales -->
<div style="display:none">
	{#each locales as locale}
		<a href={localizeHref(page.url.pathname, { locale })}>{locale}</a>
	{/each}
</div>

<MetaTags {...metaTags} />

<Analytics />

<Navigation />
<main>
	{@render children()}
</main>
<Footer />
