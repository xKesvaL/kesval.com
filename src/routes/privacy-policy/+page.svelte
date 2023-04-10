<section class="container">
  <h1>Privacy Policy</h1>

  <h2>Third Party Privacy Policies</h2>
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
  @use '$lib/scss/breakpoints.scss' as *;
  @use '$lib/scss/mixins' as *;

  section {
    padding-block: 5rem;

    h1 {
      font-size: 2.5rem;
      font-weight: 700;
      line-height: 1.2;
      text-align: center;
      margin-block: 2rem 3rem;

      @include breakpoint(md) {
        font-size: 3.25rem;
        margin-block: 2rem 5rem;
      }
    }

    h2 {
      font-size: 1.5rem;
      font-weight: 700;
      line-height: 1.2;
      text-align: left;
      margin-block: 2rem 0.5rem;

      @include breakpoint(md) {
        font-size: 2.25rem;
        margin-block: 3rem 0.5rem;
      }
    }

    a {
      text-decoration: underline;
      color: hsl(var(--color-tertiary-hue), var(--color-tertiary-saturation), var(--primary-dark-lightness));
    }
  }
</style>
