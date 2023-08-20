<script>
  import { t } from 'svelte-i18n';

  const title = `${$t('privacyPolicy.meta.title')} - KesvaL`;
  const description = $t('privacyPolicy.meta.description');
  const url = 'https://kesval.com/privacy-policy';
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
  <h1>{$t('privacyPolicy.meta.title')}</h1>

  <h2>{$t('privacyPolicy.sections.thirdParty.title')}</h2>
  <p>
    {$t('privacyPolicy.sections.thirdParty.description')}
    <a href="https://vercel.com/docs/concepts/analytics/privacy">
      {$t('std.here')}.
    </a>
    {$t('privacyPolicy.sections.thirdParty.description-2')}
  </p>

  <h2>{$t('privacyPolicy.sections.cookies.title')}</h2>
  <p>
    {$t('privacyPolicy.sections.cookies.description')}
  </p>
  <p>
    {$t('privacyPolicy.sections.cookies.description-2')}
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
      color: var(--secondary-500);
    }
  }
</style>
