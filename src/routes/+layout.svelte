<script lang="ts">
  import ContactBot from '$lib/components/layout/ContactBot.svelte';
  import Footer from '$lib/components/layout/Footer.svelte';
  import Header from '$lib/components/layout/Header.svelte';
  import { page } from '$app/stores';
  import { browser, dev } from '$app/environment';
  import '@kesval/design';
  import '$lib/scss/main.scss';
  import { webVitals } from '$lib/utils/vitals';
  import { inject } from '@vercel/analytics';
  import BackToTop from '$lib/components/layout/BackToTop.svelte';
  import { fly } from 'svelte/transition';
  import { navigating } from '$app/stores';
  import NProgress from 'nprogress';
  import '$lib/scss/nprogress.scss';
  import type { LayoutData } from './$types';
  import { polyfillCountryFlagEmojis } from '$lib/utils/functions';
  import { locale } from 'svelte-i18n';
  NProgress.configure({ minimum: 0.2, easing: 'ease', speed: 600 });
  $: $navigating ? NProgress.start() : NProgress.done();
  polyfillCountryFlagEmojis();

  export let data: LayoutData;

  const { email, url } = data;

  $: if (browser) {
    const paramsLang = url.searchParams.get('lang');
    let lang = paramsLang || localStorage.getItem('lang') || window.navigator.language || 'en';
    lang = lang.split('-')[0];
    localStorage.setItem('lang', lang);
    locale.set(lang);
  }

  if (!dev) {
    inject({
      mode: 'production',
    });
  }

  let analyticsId = import.meta.env.VERCEL_ANALYTICS_ID;

  $: if (browser && analyticsId && !dev) {
    webVitals({
      path: $page.url.pathname,
      params: $page.params,
      analyticsId,
    });
  }
</script>

<svelte:head>
  <meta name="robots" content="index, follow" />

  <meta name="og:type" content="website" />
</svelte:head>

<Header />

{#key data.url.pathname}
  <main in:fly={{ y: 100, duration: 300, delay: 300 }} out:fly={{ y: -100, duration: 300 }}>
    <slot />
  </main>
{/key}

<ContactBot {email} />
<BackToTop />

<Footer />
