<script lang="ts">
  import { t } from 'svelte-i18n';
  import type { PageData } from './$types';

  export let data: PageData;
  const { email } = data;
  const title = `${$t('legalNotice.meta.title')} - KesvaL`
  const description = $t('legalNotice.meta.description')
  const url = 'https://kesval.com/legal-notice';
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

  <meta name="robots" content="noindex, nofollow" />
</svelte:head>


<section class="container section">
  <h1>{$t('legalNotice.meta.title')}</h1>

  <h2>{$t('legalNotice.sections.websiteEditor.title')}</h2>
  <p>
    {$t('legalNotice.sections.websiteEditor.description')}
    <a href="mailto:{email}">
      {email}
    </a>
  </p>

  <h2>{$t('legalNotice.sections.websiteHosting.title')}</h2>
  <p>
    {$t('legalNotice.sections.websiteHosting.description')}
    <a href="https://vercel.com" rel="noopener norefferer nofollow">Vercel.</a>
  </p>

  <h2>{$t('legalNotice.sections.credit.title')}</h2>
  <p>
    {$t('legalNotice.sections.credit.description')}
    <a href="https://svelte.dev" rel="noopener norefferer nofollow">Svelte</a>
    {$t('std.and')}
    <a href="https://kit.svelte.dev/" rel="noopener norefferer nofollow">SvelteKit.</a>
    {$t('legalNotice.sections.credit.description-2')}
    <a href="https://www.seanhalpin.xyz/">Sean Halpin's</a>
    portfolio {$t('std.and')}
    <a href="https://fantinel.dev/resume">Matt Fantinel's.</a>
  </p>
  <p>{$t('legalNotice.sections.credit.description-3')}</p>

  <h2>{$t('legalNotice.sections.links.title')}</h2>
  <p>
    {$t('legalNotice.sections.links..description')}
  </p>

  <h2>{$t('legalNotice.sections.laws.title')}</h2>
  <p>
    {$t('legalNotice.sections.laws.description')}
    <a href="/privacy-policy">{$t('privacyPolicy.meta.title')}.</a>
  </p>
</section>

<style lang="scss">
  @use '$design' as *;

  section {
    h1 {
      text-align: center;
    }

    h2 {
      text-align: left;
      margin-bottom: 0.25rem;
      margin-top: 5rem;
      font-size: var(--fs-700);
    }

    a {
      text-decoration: underline;
      color: var(--color-accent-500);
    }
  }
</style>
