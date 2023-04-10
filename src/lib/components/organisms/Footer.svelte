<script lang="ts">
  import Socials from '../molecules/Socials.svelte';
  import ThemeSwitcher from '../molecules/ThemeSwitcher.svelte';
</script>

<footer>
  <div>
    <h2>
      Jordan
      <br />
      "KesvaL"
    </h2>
  </div>
  <div><Socials color="var(--color-static-text)" /></div>
  <div class="util-links">
    <a href="/sitemap.xml">Sitemap</a>
    <a href="/legal-notice">Legal Notice</a>
    <a href="/privacy-policy">Privacy Policy</a>
  </div>
  <div class="copyright">KesvaL © 2023. All rights reserved</div>
</footer>

<style lang="scss">
  @use '$lib/scss/mixins' as *;
  @use '$lib/scss/breakpoints' as *;

  footer {
    min-height: 20vh;
    background: hsl(var(--color-primary-hue), var(--color-primary-saturation), 30%);
    color: var(--color-static-text);
    padding: 2rem 1rem;
    display: grid;
    align-items: center;
    justify-items: center;
    grid-template-columns: 1fr;
    gap: 2rem 0;

    .copyright {
      grid-column: 1/-1;
      text-align: center;
    }

    .util-links {
      grid-column: 1/-1;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-wrap: wrap;
      gap: 1rem;

      @include breakpoint(md) {
        gap: 4rem;
      }

      a {
        padding-bottom: 0.125rem;
        border-bottom: 1px dashed var(--color-static-text);
        transition: color 0.2s ease, border-bottom 0.2s ease;

        &:hover {
          border-bottom: 1px solid var(--color-secondary);
          color: var(--color-secondary);
        }
      }
    }

    h2 br {
      display: none;
    }

    @include breakpoint(md) {
      grid-template-columns: 1fr 1fr;
      padding: 2rem 6rem;

      h2 {
        br {
          display: block;
        }
      }
    }

    @include breakpoint(lg) {
      padding: 2rem 10rem;
    }
  }
</style>
