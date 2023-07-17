<script lang="ts">
  import type { LayoutData } from './$types';

  export let data: LayoutData;

  const { post } = data;
</script>

<svelte:head>
  <title>{post.title} - KesvaL</title>
  <meta name="description" content={post.excerpt} />
</svelte:head>

<section class="container container-wide">
  <article class="container prose">
    <slot />
  </article>
</section>

<style lang="scss">
  @use '$design' as *;

  :root {
    scroll-padding: 10vh;
  }

  article {
    --padding: 0;
    padding-block: $size-fluid-4;
  }
</style>
