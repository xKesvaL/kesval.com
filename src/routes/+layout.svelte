<script lang="ts">
  import ContactBot from '$lib/components/molecules/ContactBot.svelte';
  import Footer from '$lib/components/organisms/Footer.svelte';
  import Header from '$lib/components/organisms/Header.svelte';
  import { page } from '$app/stores';
  import { browser } from '$app/environment';
  import '$lib/scss/main.scss';
  import { webVitals } from '$lib/utils/vitals';

  let analyticsId = import.meta.env.VERCEL_ANALYTICS_ID;

  $: if (browser && analyticsId) {
    webVitals({
      path: $page.url.pathname,
      params: $page.params,
      analyticsId,
    });
  }
</script>

<Header />

<main>
  <slot />
</main>

<ContactBot />

<Footer />
