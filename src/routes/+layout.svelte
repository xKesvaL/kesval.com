<script lang="ts">
  import ContactBot from '$lib/components/molecules/ContactBot.svelte';
  import Footer from '$lib/components/organisms/Footer.svelte';
  import Header from '$lib/components/organisms/Header.svelte';
  import '$lib/scss/main.scss';
</script>

<Header />

<main>
  <slot />
</main>

<ContactBot />

<Footer />
