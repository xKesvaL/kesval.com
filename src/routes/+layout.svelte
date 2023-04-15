<script lang="ts">
  import ContactBot from '$lib/components/molecules/ContactBot.svelte';
  import Footer from '$lib/components/organisms/Footer.svelte';
  import Header from '$lib/components/organisms/Header.svelte';
  import { page } from '$app/stores';
  import { browser, dev } from '$app/environment';
  import '$lib/scss/main.scss';
  import { webVitals } from '$lib/utils/vitals';
  import { inject } from '@vercel/analytics';
  import BackToTop from '$lib/components/molecules/BackToTop.svelte';
  import { fade, fly } from 'svelte/transition';

  export let data;

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

  let animDuration = 300;
</script>

<svelte:head>
  <meta name="robots" content="index,follow" />

  <meta name="og:type" content="website" />
</svelte:head>

<Header />

{#key data.url}
  <main in:fade={{ duration: animDuration, delay: animDuration }} out:fly={{ duration: animDuration }}>
    <slot />
  </main>
{/key}

<ContactBot />
<BackToTop />

<Footer />
