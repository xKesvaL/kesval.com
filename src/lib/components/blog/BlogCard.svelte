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
    <h3>{post.title}</h3>
    <span>{post.readingTime}</span>
    <p>{post.excerpt}</p>

    <div class="tags">
      <span class="tag primary">
        {post.categories[0]}
      </span>
      <span class="tag secondary">{post.tags[0]}</span>
    </div>
  </div>
</a>

<style lang="scss">
  @use '$design' as *;

  a {
    display: flex;
    background: linear-gradient(
        135deg,
        rgba(var(--color-primary-500-rgb), 0.1) 50%,
        rgba(var(--color-base-200-rgb), 0.75) 100%
      ),
      linear-gradient(90deg, rgba(var(--color-base-200-rgb), 0.25), rgba(var(--color-base-200-rgb), 0.25));
    color: $color-neutral-900;
    border-radius: $border-radius-4;
    overflow: hidden;
    flex-direction: column;
    grid-row: span 2;
    border: 1px solid rgba(var(--color-primary-900-rgb), 0.2);
    box-shadow: $box-shadow-2;
    transition: 0.2s;

    &:hover {
      border-color: rgba(var(--color-primary-900-rgb), 0.6);
      scale: 1.01;
    }

    @include mq(xs) {
      flex-direction: row;
      grid-row: span 1;
    }

    &.vertical {
      @include mq(lg) {
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
      padding: $size-4;
      display: grid;
      grid-template-rows: auto auto 1fr auto;

      h3 {
        font-size: var(--fs-600);
        margin-bottom: -$size-1;
      }

      & > span {
        font-size: var(--fs-300);
        margin-top: 0;
        opacity: 0.85;
      }

      p {
        font-size: var(--fs-400);
        margin-top: 0.25rem;
      }

      .tags {
        margin-left: auto;
        display: flex;
        gap: $size-2;
        margin-top: 1rem;

        .tag {
          border-style: solid;
          border-width: 1px;
          padding: 0.25rem 0.5rem;
          font-size: var(--fs-200);
          border-radius: 0.25rem;

          @include mq(sm) {
            font-size: var(--fs-400);
          }

          &.primary {
            background: rgba(var(--color-primary-500-rgb), 0.1);
            border-color: $color-primary-500;
            color: $color-primary-900;
          }

          &.secondary {
            background: rgba(var(--color-accent-500-rgb), 0.1);
            border-color: $color-accent-500;
            color: $color-accent-900;
          }
        }
      }
    }
  }
</style>
