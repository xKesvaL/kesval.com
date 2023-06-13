<script lang="ts">
  import type { Post } from '$lib';
  import BlogCard from '$lib/components/molecules/BlogCard.svelte';

  export let posts: Post[];
</script>

<section class="container">
  <h2>My Latest Posts</h2>
  <div class="list">
    {#each posts as post, i}
      <BlogCard {post} vertical={(i + 2) % 3 === 0} />
    {/each}
  </div>
</section>

<style lang="scss">
  @use '$lib/scss/breakpoints.scss' as *;
  @use '$lib/scss/mixins' as *;

  section {
    padding-block: 5rem;

    h2 {
      font-size: 2rem;
      font-weight: 700;
      line-height: 1.2;
      text-align: center;
      margin-block: 0 5rem;

      @include breakpoint(md) {
        font-size: 3rem;
        margin-block: 2.5rem 7.5rem;
      }
    }

    .list {
      display: grid;
      grid-template-columns: 1fr;
      gap: 2rem;

      @include breakpoint('md') {
        grid-template-columns: 2fr 1fr;
      }
    }
  }
</style>
