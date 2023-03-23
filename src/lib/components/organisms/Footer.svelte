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
