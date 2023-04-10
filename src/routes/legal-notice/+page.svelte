<script lang="ts">
  import { email } from '$lib/utils/data';
</script>

<section class="container">
  <h1>Legal Notice</h1>

  <h2>Website Editor</h2>
  <p>
    The owner and editor of this website is Jordan "KesvaL" Abeddou, you can contact him at <a href="mailto:{email}">
      {email}
    </a>
  </p>

  <h2>Website Hosting</h2>
  <p>
    All the hosting is done with the free plan on <a href="https://vercel.com" rel="noopener norefferer nofollow">
      Vercel
    </a>
    .
  </p>

  <h2>Credit</h2>
  <p>
    This website is built with <a href="https://svelte.dev" rel="noopener norefferer nofollow">Svelte</a>
    and
    <a href="https://kit.svelte.dev/" rel="noopener norefferer nofollow">SvelteKit.</a>
    The design is inspired by
    <a href="https://www.seanhalpin.xyz/">Sean Halpin's</a>
    portfolio and
    <a href="https://fantinel.dev/resume">Matt Fantinel's.</a>
  </p>
  <p>All Photos are taken or created by me, unless stated otherwise in the caption.</p>

  <h2>Links towards this website</h2>
  <p>
    All links towards this website are permitted as long as the origin does not diffuse hateful, racist, sexist, or any
    other kind of content that could be considered as offensive.
  </p>
  <p>
    You may not use deeplinks (basically, just link the main page and not a subpage) to share the website, except for
    sharing the projects, but a share button shall be on the page itself for use.
  </p>

  <h2>Laws</h2>
  <p>GDPR - General Data Protection Regulation</p>
  <p>
    All data collected on this website follows the GDPR, and is mentionned in the <a href="/privacy-policy">
      Privacy Policy.
    </a>
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
