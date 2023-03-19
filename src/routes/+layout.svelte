<script lang="ts">
  import Footer from '$lib/components/organisms/Footer.svelte';
  import Header from '$lib/components/organisms/Header.svelte';
  import '$lib/scss/main.scss';
</script>

<Header />

<main>
  <slot />
</main>

<Footer />
