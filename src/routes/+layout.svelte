<script lang="ts">
	import '../app.css';
	import Navigation from '$lib/components/layout/Navigation.svelte';
	import Footer from '$lib/components/layout/Footer.svelte';
	import { getLocale, locales, localizeHref } from '$lib/paraglide/runtime';
	import { page } from '$app/state';
	import Analytics from '$lib/components/base/Analytics.svelte';
	import { deepMerge, MetaTags } from 'svelte-meta-tags';
	import HireCard from '$lib/components/layout/HireCard.svelte';
	// import { building, dev } from '$app/environment';
	import { Toaster } from '$lib/components/ui/sonner';
	import { IsMobile } from '$lib/hooks/is-mobile.svelte';

	let { children, data } = $props();
	let metaTags = $derived(deepMerge(data.baseMetaTags, page.data.pageMetaTags));

	const isMobile = new IsMobile();
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
	<Toaster
		position="bottom-right"
		offset={{ right: isMobile.current ? '16px' : '96px', bottom: '16px' }}
	/>

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

	<!-- {#if !building && dev}
		{#await import('$lib/components/dev/AnimationDevTool.svelte') then Module}
			<Module.default />
		{/await}
	{/if} -->
{/key}
