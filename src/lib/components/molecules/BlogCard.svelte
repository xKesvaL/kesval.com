<script lang="ts">
  import type { Post } from '$lib';
  import { dev } from '$app/environment';

  export let post: Post;

  export let vertical: boolean;
</script>

<a class:vertical href="/blog/{post.slug}">
  <div class="image">
    <img src="/images/blog/{post.slug}/cover.{dev ? 'png' : 'avif'}" alt={post.excerpt} />
  </div>
  <div class="text">
    <h2>{post.title}</h2>
    <span>{post.readingTime}</span>
    <p>{post.excerpt}</p>

    <div class="tags">
      <span class="tag primary">
        {post.categories[0]}
      </span>
      {#each post.tags.slice(0, 2) as tag}
        <span class="tag secondary">{tag}</span>
      {/each}
    </div>
  </div>
</a>

<style lang="scss">
  @use '$lib/scss/breakpoints.scss' as *;
  @use '$lib/scss/mixins' as *;

  a {
    display: flex;
    background: var(--color-bg-card);
    border-radius: 2rem;
    overflow: hidden;

    &.vertical {
      @include breakpoint(md) {
        flex-direction: column;
        grid-row: span 2;
      }
    }

    div {
      flex: 1;
    }

    .image {
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }

    .text {
      padding: 1rem;

      h2 {
        font-size: 1.25rem;
        margin-bottom: -0.5rem;

        @include breakpoint(lg) {
          font-size: 1.5rem;
        }
      }

      & > span {
        font-size: 0.9rem;
        margin-top: 0;
        opacity: 0.85;

        @include breakpoint(lg) {
          font-size: 1rem;
        }
      }

      p {
        font-size: 1rem;

        @include breakpoint(lg) {
          font-size: 1.1rem;
        }
        margin-top: 0.5rem;
      }

      .tags {
        display: flex;
        gap: 0.5rem;
      }
    }
  }
</style>
