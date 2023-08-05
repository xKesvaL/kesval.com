<script lang="ts">
  import Image from '../base/Image.svelte';
  import Socials from '../base/Socials.svelte';
  import { botState } from '$lib/stores/bot';
  import Sparkles from '$lib/components/base/Sparkles.svelte';
  import { t } from 'svelte-i18n';

  function toggleBot() {
    botState.update((state) => !state);
  }
</script>

<section id="hero" class="section container container-wide">
  <div class="socials"><Socials vertical={true} /></div>
  <div class="image">
    <Image src="/images/me/hero.jpg" alt={$t('std.photoOfKesvaL')} loading="eager" border={false} />
  </div>
  <div class="text">
    <h1>
      {$t('home.sections.hero.title')}
      <br />
    </h1>
    <p class="subtitle">{$t('std.fullstackDev')}</p>
    <p>
      {$t('home.sections.hero.description')}
      <Sparkles>{$t('std.beautiful')}</Sparkles>{$t('home.sections.hero.description-2')}
    </p>
    <div class="flex">
      <button on:click={toggleBot} class="btn btn-primary">{$t('std.contactMe')}</button>
      <a href="/about?scroll=resume" class="btn btn-accent">{$t('std.my')} {$t('std.resume')}</a>
    </div>
  </div>
</section>

<style lang="scss">
  @use '$design' as *;

  section {
    padding-top: 1rem;
    min-height: 90vh;
    display: grid;
    grid-template-columns: 0.5fr 3fr;
    align-items: center;
    justify-items: center;
    row-gap: var(--size-4);
    background: radial-gradient(
      circle,
      rgba(var(--color-primary-500-rgb), 0.15) 0%,
      rgba(var(--color-base-100-rgb), 0) 60%
    );

    @include mq(md) {
      column-gap: var(--size-4);
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
        font-weight: var(--fw-bold);
        line-height: 1.2;

        @include mq(lg) {
          font-size: var(--fs-900);
        }
      }

      .subtitle {
        font-size: var(--fs-600);
        color: var(--color-neutral-900);
        margin-bottom: var(--size-4);
      }

      p:not(.subtitle) {
        font-size: var(--fs-500);
        max-width: 40ch;
        margin-bottom: var(--size-6);
      }

      .flex {
        gap: var(--size-4);
      }
    }

    .image {
      border-radius: var(--border-blob-4);
      overflow: hidden;
      background: var(--color-primary-500);
      outline: 2px var(--color-primary-500) solid;
      z-index: -1;
      margin: var(--size-1);
      margin-left: var(--size-8);
      max-height: var(--size-16);
      max-width: var(--size-16);
      aspect-ratio: 1/1;

      @include mq(md) {
        margin: 0.5rem;
        grid-column: 3/4;

        max-height: var(--size-18);
        max-width: var(--size-18);
      }
    }
  }
</style>
