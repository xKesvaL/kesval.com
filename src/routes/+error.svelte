<script lang="ts">
  import { page } from '$app/stores';
  import Image from '$lib/components/base/Image.svelte';
  import { t } from 'svelte-i18n';
  const error = $page.status === 404 ? 404 : $page.status ?? 404;
  const message = `${$t('notFound.meta.description')}`;

  const title = `${error} - ${$t('notFound.meta.title')} - KesvaL`;
  const description = message;
  const url = 'https://kesval.com/';
  const image = 'https://kesval.com/images/error.svg';
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

<section class="container">
  <h1>{error} - {$t('notFound.meta.title')}</h1>
  <p>{error === 404 ? message : $page.error?.message}</p>
  <a href="/" class="button primary">{$t('error.backHome')}</a>
  <div class="image">
    <Image src="/images/error.svg" alt={$t('error.imageAlt')} border={false} />
  </div>
</section>

<style lang="scss">
  @use '$design' as *;

  section {
    padding-block: 2.5rem;
    display: flex;
    flex-direction: column;
    align-items: center;

    @include mq(md) {
      padding-block: 5rem;
    }

    h1 {
      font-size: 2.5rem;
      font-weight: 700;
      line-height: 1.2;
      text-align: center;
      margin-block: 2rem 1rem;

      @include mq(md) {
        font-size: 3.25rem;
      }
    }

    p {
      font-size: 1.25rem;
      font-weight: 400;
      line-height: 1.5;
      text-align: center;
      margin-block: 0 1.5rem;

      @include mq(md) {
        font-size: 1.5rem;
      }
    }

    .image {
      margin-block: 4rem 0;
      height: 20rem;
    }
  }
</style>
