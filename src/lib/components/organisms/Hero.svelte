<script lang="ts">
  import Image from '../atoms/Image.svelte';
  import Socials from '../molecules/Socials.svelte';
  import Button from '../atoms/Button.svelte';
  import { botState } from '$lib/stores/bot';

  function toggleBot() {
    $botState = !$botState;
  }
</script>

<section id="hero">
  <div class="socials"><Socials vertical={true} /></div>
  <div class="image">
    <Image path="logos/kesval" alt="A Photo of KesvaL" />
  </div>
  <div class="text">
    <h1>
      Hi. I'm Jordan.
      <br />
    </h1>
    <p class="subtitle">Fullstack developer</p>
    <p>
      I'm a fullstack developer with a passion for building beautiful, performant and accessible web apps or websites.
    </p>
    <Button on:click={toggleBot}>Contact me</Button>
  </div>
</section>

<style lang="scss">
  @use '$lib/scss/mixins' as *;
  @use '$lib/scss/breakpoints' as *;

  section {
    min-height: 90vh;
    min-height: 90dvh;
    display: grid;
    grid-template-columns: 0.5fr 3fr;
    align-items: center;
    justify-items: center;
    padding-block: 0rem;
    padding-bottom: 6rem;
    gap: 1rem;

    .text {
      grid-column: 1/-1;

      h1 {
        font-size: 2.25rem;
        font-weight: 700;
        line-height: 1.2;
      }

      .subtitle {
        font-size: 1.75rem;
        color: hsl(var(--color-text-hue), 0%, var(--neutral-emphasis-inverse-less-lightness));
        margin-bottom: 1rem;
      }

      p:not(.subtitle) {
        font-size: 1.25rem;
        line-height: 1.5;
        max-width: 40ch;
        margin-bottom: 1.5rem;
      }
    }

    .image {
      border-radius: var(--radius-blob-4);
      overflow: hidden;
      background: var(--color-primary);
      z-index: -1;
      margin: 2rem;
    }

    @include padded-container(1400px);

    @include breakpoint(md) {
      grid-template-columns: max-content 2fr 1fr;
      gap: 2.5rem;
      padding-block: 8rem 10rem;

      .text {
        grid-column: 2/3;
        grid-row: 1/2;

        h1 {
          font-size: 4rem;
        }
      }

      .image {
        margin: 0.5rem;
        grid-column: 3/4;
      }
    }
  }
</style>
