<script lang="ts">
  import Image from '../base/Image.svelte';
  import Socials from '../base/Socials.svelte';
  import { botState } from '$lib/stores/bot';

  function toggleBot() {
    botState.update((state) => !state);
  }
</script>

<section id="hero" class="section container container-wide">
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
      <button on:click={toggleBot} class="btn btn-primary">Contact me</button>
      <a href="/about?scroll=resume" class="btn btn-accent">Resume</a>
    </div>
  </div>
</section>

<style lang="scss">
  @use '$design' as *;

  section {
    --padding: 1rem;
    padding-top: 1rem;
    min-height: 90vh;
    display: grid;
    grid-template-columns: 0.5fr 3fr;
    align-items: center;
    justify-items: center;
    row-gap: $size-4;
    background: radial-gradient(
      circle,
      rgba(var(--color-primary-500-rgb), 0.1) 0%,
      rgba(var(--color-base-100-rgb), 0) 60%
    );

    @include mq(md) {
      --padding: 2rem;
      column-gap: $size-4;
      grid-template-columns: max-content 2fr 1fr;
      padding-top: inherit;
    }

    @include mq(lg) {
      column-gap: 0;
    }

    .text {
      grid-column: 1/-1;

      @include mq(md) {
        grid-column: 2/3;
        grid-row: 1/2;
      }

      h1 {
        font-size: var(--fs-800);
        font-weight: $font-weight-bold;
        line-height: 1.2;

        @include mq(lg) {
          font-size: var(--fs-900);
        }
      }

      .subtitle {
        font-size: var(--fs-600);
        color: var(--color-neutral-900);
        margin-bottom: $size-4;
      }

      p:not(.subtitle) {
        font-size: var(--fs-500);
        max-width: 40ch;
        margin-bottom: $size-6;
      }
    }

    .image {
      border-radius: $radius-blob-4;
      overflow: hidden;
      background: var(--color-primary-500);
      outline: 2px var(--color-primary-500) solid;
      z-index: -1;
      margin: $size-8;
      max-height: $size-16;
      max-width: $size-16;
      aspect-ratio: 1/1;

      @include mq(md) {
        margin: 0.5rem;
        grid-column: 3/4;

        max-height: $size-18;
        max-width: $size-18;
      }
    }
  }
</style>
