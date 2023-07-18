<script lang="ts">
  import type { LayoutData } from './$types';
  import TableOfContents from '$lib/components/blog/TableOfContents.svelte';

  export let data: LayoutData;

  const { post } = data;
</script>

<svelte:head>
  <title>{post.title} - KesvaL</title>
  <meta name="description" content={post.excerpt} />
</svelte:head>

<section class="container container-wide">
  <article class="prose">
    <slot />
  </article>
  <TableOfContents />
</section>

<style lang="scss">
  @use '$design' as *;

  :root {
    scroll-padding: 10vh;
  }

  section {
    display: flex;
    justify-content: center;
    gap: 2rem;
  }

  article {
    padding-block: $size-fluid-4;
    margin-left: 0;

    @include mq(lg) {
      margin-left: auto;
    }
  }
</style>
