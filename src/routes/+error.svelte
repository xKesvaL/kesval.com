<script lang="ts">
  import { page } from '$app/stores';
  import Button from '$lib/components/atoms/Button.svelte';
  import Image from '$lib/components/atoms/Image.svelte';
  const error = $page.status === 404 ? 404 : $page.status ?? 404;
  const message = `The page you are looking for does not exist.`;

  const title = `${error} - Page not found - KesvaL`;
  const description = message;
  const url = 'https://kesval.com/';
  const image = 'https://kesval.com/images/404.svg';
</script>

<svelte:head>
  <title>{title}</title>
  <meta name="og:title" content={title} />
  <meta name="twitter:title" content={title} />

  <meta name="description" content={description} />
  <meta name="og:description" content={description} />
  <meta name="twitter:description" content={description} />

  <meta name="keywords" content="kesval, fullstack, developer, frontend, backend, front, back, end" />
  <meta name="subject" content="The portfolio for a fullstack developer named Jordan, KesvaL" />

  <meta name="og:url" content={url} />
  <meta name="twitter:url" content={url} />

  <meta name="og:image" content={image} />
  <meta name="twitter:image" content={image} />

  <meta name="og:locale" content="en" />
  <meta name="og:site_name" content="KesvaL" />
</svelte:head>

<section class="container">
  <h1>{error} - Page not found</h1>
  <p>{error === 404 ? message : $page.error.message}</p>
  <Button href="/">Return back home</Button>
  <div class="image">
    <Image src="/images/error.svg" alt="Page not found illustration" />
  </div>
</section>

<style lang="scss">
  @use '$lib/scss/breakpoints.scss' as *;

  section {
    padding-block: 2.5rem;
    display: flex;
    flex-direction: column;
    align-items: center;

    @include breakpoint(md) {
      padding-block: 5rem;
    }

    h1 {
      font-size: 2.5rem;
      font-weight: 700;
      line-height: 1.2;
      text-align: center;
      margin-block: 2rem 1rem;

      @include breakpoint(md) {
        font-size: 3.25rem;
      }
    }

    p {
      font-size: 1.25rem;
      font-weight: 400;
      line-height: 1.5;
      text-align: center;
      margin-block: 0 1.5rem;

      @include breakpoint(md) {
        font-size: 1.5rem;
      }
    }

    .image {
      margin-block: 4rem 0;
      height: 20rem;
    }
  }
</style>
