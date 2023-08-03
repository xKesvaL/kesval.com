<script lang="ts">
  import type { LayoutData } from './$types';
  import TableOfContents from '$lib/components/blog/TableOfContents.svelte';
  import Breadcrumb from '$lib/components/base/Breadcrumb.svelte';

  export let data: LayoutData;

  const { post } = data;
</script>

<svelte:head>
  <title>{post.title} - KesvaL</title>
  <meta name="description" content={post.excerpt} />
</svelte:head>

<section class="container container-wide">
  <Breadcrumb name={post.title} type="blog" />
  <div class="post">
    <article class="prose">
      <slot />
    </article>
    <TableOfContents />
  </div>
</section>

<style lang="scss">
  @use '$design' as *;

  :root {
    scroll-padding: 10vh;
  }

  .post {
    display: flex;
    justify-content: center;
    gap: 2rem;
  }

  article {
    padding-block: var(--size-fluid-4);
    margin-left: 0;

    @include mq(lg) {
      margin-left: auto;
    }
  }
</style>
