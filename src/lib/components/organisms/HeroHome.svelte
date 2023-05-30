<script lang="ts">
  import Image from '../atoms/Image.svelte';
  import Socials from '../molecules/Socials.svelte';
  import Button from '../atoms/Button.svelte';
  import { botState } from '$lib/stores/bot';

  function toggleBot() {
    botState.update((state) => !state);
  }
</script>

<section id="hero">
  <div class="socials"><Socials vertical={true} /></div>
  <div class="image">
    <Image src="/images/me/hero.jpg" alt="A Photo of KesvaL" loading="eager" />
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
    <div class="flex">
      <Button on:click={toggleBot}>Contact me</Button>
      <Button href="/about?scroll=resume" color="secondary">Resume</Button>
    </div>
  </div>
</section>

<style lang="scss">
  @use '$lib/scss/mixins' as *;
  @use '$lib/scss/breakpoints' as *;

  section {
    min-height: 90vh;
    display: grid;
    grid-template-columns: 0.5fr 3fr;
    align-items: center;
    justify-items: center;
    padding-block: 0;
    padding-bottom: 6rem;
    gap: 1rem;

    .text {
      grid-column: 1/-1;

      .flex {
        display: flex;
        gap: 1rem;
        flex-wrap: wrap;
      }

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
        font-size: 1rem;
        line-height: 1.5;
        max-width: 40ch;
        margin-bottom: 1.5rem;

        @include breakpoint(md) {
          font-size: 1.25rem;
        }
      }
    }

    .image {
      border-radius: var(--radius-blob-4);
      overflow: hidden;
      background: var(--color-primary);
      outline: 0.25rem var(--color-primary) solid;
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
