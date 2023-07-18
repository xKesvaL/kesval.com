<script lang="ts">
  import Socials from '../base/Socials.svelte';
  import { updated } from '$lib/utils/data';
  import ClockIcon from '$lib/icons/IconClockIcon.svelte';
</script>

<footer class="container container-full">
  <div>
    <h2>
      Jordan
      <br />
      "KesvaL"
    </h2>
  </div>
  <div><Socials color="var(--color-neutral-800)" /></div>
  <div class="util-links">
    <a href="/legal-notice">Legal Notice</a>
    <a href="/privacy-policy">Privacy Policy</a>
    <a href="/sitemap.xml">Sitemap</a>
  </div>
  <div class="copyright">
    <p>KesvaL © 2023. All rights reserved.</p>
    <p>
      <span><ClockIcon /></span>
      Updated: {updated.toLocaleDateString('fr-FR')}
    </p>
  </div>
</footer>

<style lang="scss">
  @use '$design' as *;

  footer {
    min-height: 20vh;
    background: linear-gradient(
      135deg,
      rgba(var(--color-primary-100-rgb), 0.7),
      rgba(var(--color-primary-100-rgb), 0.3)
    );
    color: white;
    padding: 2rem 1rem;
    display: grid;
    align-items: center;
    justify-items: center;
    grid-template-columns: 1fr;
    gap: 2rem 0;

    .copyright {
      grid-column: 1/-1;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-around;
      gap: 0.5rem;
      width: 100%;
      color: $color-neutral-800;
      text-align: center;
      margin-top: 1rem;

      @include mq(sm) {
        flex-direction: row;
        padding-inline: 2.5rem;
      }

      p {
        display: flex;
        align-items: center;
        gap: 0.5rem;
      }

      span {
        display: block;
        max-height: 20px;
        max-width: 20px;
      }
    }

    .util-links {
      grid-column: 1/-1;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-wrap: wrap;
      gap: 1rem;

      @include mq(md) {
        gap: 4rem;
      }

      a {
        padding-bottom: 0.125rem;
        border-bottom: 1px dashed var(--color-neutral-800);
        transition: color 0.2s ease, border-bottom 0.2s ease;
        color: $color-neutral-800;

        &:hover,
        &:focus {
          border-bottom: 1px solid var(--color-accent-500);
          color: var(--color-accent-500);
        }
      }
    }

    h2 {
      text-align: center;
      margin-block: 1rem;
      font-size: var(--fs-700);

      br {
        display: none;
      }
    }

    @include mq(md) {
      grid-template-columns: 1fr 1fr;
      padding: 2rem 6rem;

      h2 {
        br {
          display: block;
        }
      }
    }

    @include mq(lg) {
      padding: 2rem 10rem;
    }
  }
</style>
