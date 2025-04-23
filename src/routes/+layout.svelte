<script lang="ts">
	import '../app.css';
	import Navigation from '$lib/components/layout/Navigation.svelte';
	import Footer from '$lib/components/layout/Footer.svelte';
	import { getLocale, locales, localizeHref } from '$lib/paraglide/runtime';
	import { page } from '$app/state';
	import Analytics from '$lib/components/base/Analytics.svelte';
	import { deepMerge, MetaTags } from 'svelte-meta-tags';
	import HireCard from '$lib/components/layout/HireCard.svelte';
	import AnimationDevTool from '$lib/components/dev/AnimationDevTool.svelte';
	import { building, dev } from '$app/environment';

	let { children, data } = $props();
	let metaTags = $derived(deepMerge(data.baseMetaTags, page.data.pageMetaTags));
</script>

{#key getLocale()}
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
		{#key page.url.pathname}
			{@render children()}
		{/key}
	</main>
	<Footer />

	<div class="fixed right-4 bottom-4 z-10 flex">
		<HireCard />
	</div>

	{#if !building && dev}
		<AnimationDevTool />
	{/if}
{/key}
