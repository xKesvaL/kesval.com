<script lang="ts">
  import Image from '../base/Image.svelte';
  import Sparkles from '$lib/components/base/Sparkles.svelte';
  import { t } from 'svelte-i18n';
  import { capitalizeFirstLetter } from '$lib/utils/functions';
</script>

<section id="about" class="container container-wide section">
  <h2>{$t('home.sections.about.title')}</h2>
  <div class="grid">
    <div class="image">
      <!-- TODO Put real photo & remove figcaption -->
      <Image alt={$t('std.photoOfKesvaL')} rounding="md" figcaption="No image of me yet, sorry :)" />
    </div>
    <div class="text">
      <p>
        {$t('home.sections.about.description')}
      </p>
      <p>
        {$t('home.sections.about.description-2')}
      </p>
      <ul>
        <li>
          <span>
            <Sparkles highlight="off" color="primary">10</Sparkles>
          </span>
          {$t('std.years')}
          {$t('std.ofContracted')}
          <br />
          {$t('std.experience')}
        </li>
        <li>
          <span><Sparkles highlight="off" color="accent">05</Sparkles></span>
          {capitalizeFirstLetter($t('std.projects'))}
          <br />
          {$t('std.completeds')}
        </li>
        <li>
          <span><Sparkles highlight="off" color="secondary">02</Sparkles></span>
          {$t('home.sections.about.companiesWorkedAt')}
        </li>
      </ul>
    </div>
    <div class="button">
      <a href="/about" class="btn btn-primary">{$t('home.sections.about.moreAboutMe')}</a>
    </div>
  </div>
</section>

<style lang="scss">
  @use '$design' as *;

  section {
    display: grid;
    grid-template-rows: auto 1fr;

    @include mq(sm) {
      --padding: 5rem;
    }

    @include mq(md) {
      --padding: 2rem;
    }

    h2 {
      text-align: center;
    }

    .grid {
      display: grid;
      justify-items: center;
      align-items: center;
      gap: var(--size-8);
      grid-template-rows: auto 1fr;

      @include mq(md) {
        grid-template-columns: 1fr 1fr;
        grid-template-rows: 1fr;
      }

      .button {
        margin-top: 0;
        grid-column: 1/-1;

        @include mq(md) {
          margin-top: var(--size-8);
        }
      }
    }

    .text {
      display: grid;

      p {
        font-size: var(--fs-500);
        margin-bottom: var(--size-2);
      }

      ul {
        list-style: none;
        display: flex;
        gap: var(--size-3);
        justify-content: space-evenly;
        align-items: center;

        @include mq(md) {
          gap: var(--size-4);
        }

        li {
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
          font-size: var(--fs-600);
          flex: 1;
          margin-top: 1.5rem;

          span {
            font-size: var(--fs-600);
            font-weight: var(--fw-bold);
            font-family: var(--ft-title);
            background: radial-grad-primary(), grad-base();
            border-radius: var(--border-radius-full);
            aspect-ratio: var(--aspect-square);
            display: flex;
            justify-content: center;
            flex-direction: column;
            align-items: center;
            width: var(--size-11);
            padding: 0.5rem 1rem;
            margin-bottom: var(--size-1);

            @include mq(xs) {
              font-size: var(--fs-700);
              width: 5rem;
            }

            @include mq(md) {
              width: 6rem;
              padding: 0.75rem 1.5rem;
            }
          }
        }
      }
    }

    .image {
      width: 100%;
      height: 100%;
      z-index: -1;
      padding-bottom: 2rem;

      @include mq(lg) {
        width: 90%;
      }
    }
  }
</style>
