<script lang="ts">
  import Socials from '../molecules/Socials.svelte';
  import ThemeSwitcher from '../molecules/ThemeSwitcher.svelte';
</script>

<footer>
  <div><h2>Jordan<br>Abeddou</h2></div>
  <div><Socials color="var(--color-static-text)" /><ThemeSwitcher /></div>
  <div class="copyright">KesvaL © 2023. All rights reserved</div>
</footer>

<style lang="scss">
  @use '$lib/scss/mixins' as *;

  footer {
    min-height: 20vh;
    background: hsl(var(--color-primary-hue), var(--color-primary-saturation), 30%);
    color: var(--color-static-text);
    padding: 0 10rem;
    display: grid;
    align-items: center;
    justify-items: center;
    grid-template-columns: 1fr;

    .copyright {
      grid-column: 1/-1;
      text-align: center;
    }

    @include breakpoint(md) {
      grid-template-columns: 1fr 1fr;
    }
  }
</style>
