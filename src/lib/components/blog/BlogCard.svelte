<script lang="ts">
  import type { Post } from '$lib';
  import { dev } from '$app/environment';
  import Card from '$lib/components/base/Card.svelte';
  import Chip from '$lib/components/base/Chip.svelte';

  export let post: Post;

  export let vertical: boolean;
</script>

<Card
  href="/blog/{post.slug}"
  padding={'0'}
  classes={vertical ? ['vertical'] : []}
  color="rgba(var(--color-secondary-300-rgb), 0.3)">
  <div class:vertical class="wrapper">
    <div class="image">
      <img src="/images/blog/{post.slug}/cover.{dev ? 'png' : 'avif'}" alt={post.excerpt} />
    </div>
    <div class="text">
      <h3>{post.title}</h3>
      <span>{post.readingTime}</span>
      <p>{post.excerpt}</p>

      <div class="tags">
        <Chip label={post.categories[0]} />
        <Chip label={post.tags[0]} color="accent" rotation={235} />
      </div>
    </div>
  </div>
</Card>

<style lang="scss">
  @use '$design' as *;

  .wrapper {
    display: flex;
    color: var(--color-neutral-900);
    overflow: hidden;
    flex-direction: column;
    transition: 0.2s;
    height: 100%;

    @include mq(xs) {
      flex-direction: row;
    }

    &.vertical {
      @include mq(lg) {
        flex-direction: column;
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
      padding: var(--size-4);
      display: grid;
      grid-template-rows: auto auto 1fr auto;
      background: linear-gradient(135deg, rgba(var(--color-primary-500-rgb), 0.05), rgba(var(--color-base-200-rgb), 0)),
        linear-gradient(315deg, rgba(var(--color-primary-500-rgb), 0.05), rgba(var(--color-base-200-rgb), 0)),
        radial-gradient(rgba(var(--color-base-200-rgb), 0.25), rgba(var(--color-base-200-rgb), 0.25));

      h3 {
        font-size: var(--fs-600);
        margin-bottom: -var(--size-1);
      }

      & > span {
        font-size: var(--fs-300);
        margin-top: 0;
        opacity: 0.85;
      }

      p {
        font-size: var(--fs-400);
        margin-top: 0.25rem;
        flex: 1;
      }

      .tags {
        margin-left: auto;
        display: flex;
        gap: var(--size-2);
        margin-top: auto;
      }
    }
  }
</style>
