<svelte:head>
  <title>Privacy Policy - KesvaL</title>
  <meta name="description" content="The privacy policy of this website." />
  <meta name="robots" content="noindex, nofollow" />
</svelte:head>

<section class="container section">
  <h1>Privacy Policy</h1>

  <h2>Third Party</h2>
  <p>
    The only third party this website uses is Vercel Analytics, which is used to track the number of visitors and the
    web vitals. Learn more about what data is collected <a href="https://vercel.com/docs/concepts/analytics/privacy">
      here.
    </a>
    There is no intrusive tracking, and no data is shared with any other third party.
  </p>

  <h2>Cookies</h2>
  <p>
    This website only uses one cookie, which is used to store an identifier for the user's session. This cookie is used
    to avoid our analytics from counting the same user multiple times. This cookie is not used for any other purpose,
    and is not shared with any third party other than Vercel.
  </p>
  <p>
    As the CNIL (French Data Protection Authority) states, cookies are not permanent and never last longer than 13
    months.
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
    }

    a {
      text-decoration: underline;
      color: var(--color-accent-500);
    }
  }
</style>
