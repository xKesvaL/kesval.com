<script lang="ts">
  import type { Post } from '$lib';
  import { dev } from '$app/environment';

  export let post: Post;

  export let vertical: boolean;
</script>

<article class:vertical>
  <div class="image">
    <img src="/images/blog/{post.slug}/cover.{dev ? 'png' : 'avif'}" alt={post.excerpt} />
  </div>
  <div class="text">
    <h2>{post.title}</h2>
    <p>{post.excerpt}</p>
  </div>
</article>

<style lang="scss">
  @use '$lib/scss/breakpoints.scss' as *;
  @use '$lib/scss/mixins' as *;

  article {
    display: flex;
    background: var(--color-bg-card);

    &.vertical {
      @include breakpoint(md) {
        flex-direction: column;
        grid-row: span 2;
      }
    }

    div {
      flex: 1;
    }

    .text {
      padding: 1rem;
    }
  }
</style>
