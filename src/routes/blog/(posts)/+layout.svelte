<script lang="ts">
  import type { LayoutData } from './$types';
  import TableOfContents from '$lib/components/blog/TableOfContents.svelte';
  import Breadcrumbs from '$lib/components/base/Breadcrumbs.svelte';
  import Chip from '$lib/components/base/Chip.svelte';
  import { locale, t } from 'svelte-i18n';
  import { capitalizeFirstLetter } from '$lib/utils/functions';

  export let data: LayoutData;

  const { post } = data;

  const title = `${post.title} - KesvaL`;
  const description = post.excerpt;
  const url = `https://kesval.com/blog/${post.slug}`;
  const image = `https://kesval.com/images/blog/${post.slug}/cover.png`;
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

  <meta name="og:image" content={image} />
  <meta name="twitter:image" content={image} />
</svelte:head>

<section>
  <Breadcrumbs name={post.title} type="blog" href={post.slug} />
  <div class="post">
    <div class="side"></div>
    <article class="prose">
      <header>
        <h1>
          {post.title}
        </h1>
        <div class="infos">
          <time datetime={post.date}>
            {capitalizeFirstLetter($t('std.published'))}
            {$t('std.onDay')}
            {new Date(post.date).toLocaleDateString($locale || 'en', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            })}
          </time>
          {#if post.updatedAt}
            <time datetime={post.updatedAt}>
              {capitalizeFirstLetter($t('std.updated'))}
              {$t('std.onDay')}
              {new Date(post.updatedAt).toLocaleDateString($locale || 'en', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </time>
          {/if}
          <div class="tags">
            {#each post.tags as tag, i}
              {#if i < 2}
                <Chip label={tag} color={i == 0 ? 'primary' : 'secondary'} rotation={i == 0 ? 135 : 225} />
              {/if}
            {/each}
          </div>
        </div>
      </header>

      <slot />
    </article>
    <div class="side">
      <TableOfContents />
    </div>
  </div>
</section>

<style lang="scss">
  section {
    padding: 1rem !important;
  }

  :root {
    scroll-padding: 12vh;
  }

  .post {
    display: flex;
    justify-content: center;
    gap: 2rem;
  }

  .side {
    flex: 1 1 0%;
  }

  article {
    padding-block: 2rem;
    margin-left: 0;
    max-width: 90ch;
    width: 100%;
    flex: none;

    @include mq(lg) {
      margin-left: auto;
    }

    header {
      h1 {
        margin-bottom: 2rem;
        font-size: var(--fs-800);
        text-align: center;
      }

      .infos {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 0.5rem;
        time {
          font-size: 0.9rem;
          color: var(--base-700);
        }

        .tags {
          display: flex;
          gap: 0.5rem;
        }
      }
    }
  }
</style>
