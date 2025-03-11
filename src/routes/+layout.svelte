<script lang="ts">
	import '../app.css';
	import Navigation from '$lib/components/layout/Navigation.svelte';
	import Footer from '$lib/components/layout/Footer.svelte';
	import { navigation } from '$lib/stores/common.svelte';
	import { locales, localizeHref } from '$lib/paraglide/runtime';
	import { page } from '$app/state';
	import Analytics from '$lib/components/base/Analytics.svelte';
	import { MetaTags } from 'svelte-meta-tags';
	import * as m from '$paraglide/messages';

	let { children } = $props();
</script>

<!-- This is a hack so sveltekit pre-renders all locales -->
<div style="display:none">
	{#each locales as locale}
		<a href={localizeHref(page.url.pathname, { locale })}>{locale}</a>
	{/each}
</div>

<MetaTags titleTemplate={`%s | ${m.brand_name_short()}`} />

<Analytics />

<Navigation />
<main class="kcontainer-nav-padding">
	{@render children()}
</main>
<Footer />
