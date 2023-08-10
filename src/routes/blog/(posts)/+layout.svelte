<script lang="ts">
  import type { LayoutData } from './$types';
  import TableOfContents from '$lib/components/blog/TableOfContents.svelte';
  import Breadcrumbs from '$lib/components/base/Breadcrumbs.svelte';

  export let data: LayoutData;

  const { post } = data;

  const title = `${post.title} - KesvaL`;	
  const description = post.excerpt;
  const url = `https://kesval.com/blog/${post.slug}`;
</script>

<svelte:head>
  <title>{title}</title>
  <meta name="og:title" content={title} />
  <meta name="twitter:title" content={title} />

  <meta name="description" content={description} />
  <meta name="og:description" content={description} />
  <meta name="twitter:description" content={description} />

  <meta name="og:url" content={url} />
  <meta name="twitter:url" content={url} />
</svelte:head>

<section class="container container-wide">
  <Breadcrumbs name={post.title} type="blog" href={post.slug} />
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
