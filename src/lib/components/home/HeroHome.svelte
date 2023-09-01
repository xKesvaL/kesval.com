<script lang="ts">
  import Image from '../base/Image.svelte';
  import Socials from '../base/Socials.svelte';
  import { botState } from '$lib/stores/bot';
  import Sparkles from '$lib/components/base/Sparkles.svelte';
  import { t } from 'svelte-i18n';
  import { capitalizeFirstLetter } from '$lib/utils/functions';

  function toggleBot() {
    botState.update((state) => !state);
  }
</script>

<section id="hero" class="section container">
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
      <button on:click={toggleBot} class="button primary">{$t('std.contactMe')}</button>
      <a href="/about?scroll=resume" class="button secondary">
        {capitalizeFirstLetter($t('std.my'))}
        {$t('std.resume')}
      </a>
    </div>
  </div>
</section>

<style lang="scss">
  section {
    padding-top: 1rem;
    min-height: 90vh;
    display: grid;
    grid-template-columns: 0.5fr 3fr;
    align-items: center;
    justify-items: center;
    row-gap: 1rem;
    background: radial-gradient(circle, rgba(var(--primary-500-rgb), 0.15) 0%, transparent 50%);

    @include mq(md) {
      column-gap: 1rem;
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
        font-weight: 700;
        line-height: 1.2;
        margin: 0;

        @include mq(lg) {
          font-size: var(--fs-900);
        }
      }

      .subtitle {
        font-size: var(--fs-600);
        color: var(--base-900);
        margin-bottom: 1rem;
      }

      p:not(.subtitle) {
        font-size: var(--fs-500);

        @include mq(lg) {
          font-size: 1.15rem;
        }

        color: var(--base-800);
        max-width: 40ch;
        margin-bottom: 1.5rem;
      }

      .flex {
        gap: 1rem;
      }
    }

    .image {
      border-radius: 63% 37% 37% 63% / 43% 37% 63% 57%;
      overflow: hidden;
      background: var(--primary-500);
      outline: 2px var(--primary-500) solid;
      z-index: -1;
      margin: 0.25rem;
      margin-left: 2rem;
      max-height: 15rem;
      max-width: 15rem;
      aspect-ratio: 1/1;

      @include mq(md) {
        margin: 0.5rem;
        grid-column: 3/4;

        max-height: 30rem;
        max-width: 30rem;
      }
    }
  }
</style>
