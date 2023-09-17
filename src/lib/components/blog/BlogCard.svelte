<script lang="ts">
  import type { Post } from '$lib';
  import { dev } from '$app/environment';
  import Card from '$lib/components/base/Card.svelte';
  import Chip from '$lib/components/base/Chip.svelte';
  import Image from '../base/Image.svelte';
  import { t } from 'svelte-i18n';

  export let post: Post;

  export let vertical: boolean;
</script>

<Card
  href="/blog/{post.slug}"
  padding={'0'}
  classes={vertical ? ['vertical'] : []}
  color="rgba(var(--secondary-300-rgb), 0.3)"
  cardLabel="{$t('std.seeMoreOf', { values: { name: post.title } })} {post.readingTime} {post.excerpt}"
  cardStyle="grid-column: span 2; {vertical ? 'grid-column: span 1;' : ''} view-transition-name: blog-card-{post.slug}">
  <div class:vertical class="wrapper">
    <div class="image">
      <Image
        src="/images/blog/{post.slug}/cover.png"
        alt={post.excerpt}
        border={false}
        viewTransitionName={`blog-img-${post.slug}`} />
    </div>
    <div class="text">
      <h3 style="view-transition-name: blog-title-{post.slug}">{post.title}</h3>
      <span>{post.readingTime}</span>
      <p>{post.excerpt}</p>

      <div class="tags">
        <Chip label={post.categories[0]} />
        <Chip label={post.tags[0]} color="secondary" rotation={235} />
      </div>
    </div>
  </div>
</Card>

<style lang="scss">
  .wrapper {
    display: flex;
    color: var(--base-900);
    overflow: hidden;
    flex-direction: column;
    transition: 0.2s;
    height: 100%;

    @include mq(xs) {
      max-height: 16rem;
      flex-direction: row;
    }

    &.vertical {
      @include mq(lg) {
        max-height: none;
        .image {
          max-height: 16.5rem;
        }

        flex-direction: column;
      }
    }

    div {
      flex: 1;
    }

    .text {
      padding: 0.5rem;
      display: grid;
      grid-template-rows: auto auto 1fr auto;
      background: linear-grad-secondary(135deg, 0.025), linear-grad-secondary(315deg, 0.025);

      h3 {
        font-size: var(--fs-600);
        margin-bottom: -0.25rem;
        text-wrap: balance;
        padding: 0.5rem 0.5rem 0 0.5rem;
      }

      & > span {
        font-size: var(--fs-300);
        margin-top: 0;
        opacity: 0.85;
        padding: 0 0.5rem;
      }

      p {
        font-size: var(--fs-400);
        margin-top: 0.25rem;
        flex: 1;
        padding: 0 0.5rem;
      }

      .tags {
        margin-left: auto;
        display: flex;
        gap: 0.5rem;
        margin-top: auto;
      }
    }
  }
</style>
