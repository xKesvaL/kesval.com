<script lang="ts">
  import type { Post } from '$lib';
  import BlogCard from '$lib/components/molecules/BlogCard.svelte';

  export let posts: Post[];
</script>

<section class="container">
  {#each posts as post, i}
    <BlogCard {post} vertical={(i + 2) % 3 === 0} />
  {/each}
</section>

<style lang="scss">
  @use '$lib/scss/breakpoints.scss' as *;
  @use '$lib/scss/mixins' as *;

  section {
    padding-block: 5rem;
    display: grid;
    grid-template-columns: 1fr;
    gap: 2rem;

    @include breakpoint('md') {
      grid-template-columns: 2fr 1fr;
    }
  }
</style>
