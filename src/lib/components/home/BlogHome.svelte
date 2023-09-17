<script lang="ts">
  import type { Post } from '$lib';
  import BlogCard from '$lib/components/blog/BlogCard.svelte';
  import { t } from 'svelte-i18n';

  export let posts: Post[];
</script>

<section class="container container-wide section">
  <h2>{$t('blog.myLatestPosts')}</h2>
  <div class="list">
    {#each posts as post, i}
      <BlogCard {post} vertical={(i + 2) % 3 === 0} />
    {/each}
  </div>
  <a href="/blog" class="button primary">{$t('blog.allMyPosts')}</a>
</section>

<style lang="scss">
  section {
    display: grid;
    h2 {
      text-align: center;
    }

    .list {
      display: grid;
      grid-template-columns: 1fr;
      grid-template-rows: 1fr 1fr;
      gap: 1rem;

      @include mq(lg) {
        grid-template-columns: 1fr 1fr 1fr;
      }
    }

    a {
      margin-inline: auto;
      margin-top: 2.5rem;
    }
  }
</style>
