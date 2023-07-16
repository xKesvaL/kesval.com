<script lang="ts">
  import type { PageData } from './$types';

  export let data: PageData;
  const { email } = data;
</script>

<section class="container section">
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
      Vercel.
    </a>
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

  <h2>Links</h2>
  <p>
    All links towards this website are permitted as long as the origin does not diffuse hateful, racist, sexist, or any
    other kind of content that could be considered as offensive.
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
      color: $color-accent-500;
    }
  }
</style>
