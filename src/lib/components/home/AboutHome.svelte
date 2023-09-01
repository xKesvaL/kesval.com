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
          <span><Sparkles highlight="off" color="secondary">05</Sparkles></span>
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
    <a href="/about" class="button primary">{$t('home.sections.about.moreAboutMe')}</a>
  </div>
</section>

<style lang="scss">
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
      gap: 2rem;
      grid-template-rows: auto 1fr;

      @include mq(md) {
        grid-template-columns: 1fr 1fr;
        grid-template-rows: 1fr;
      }

      .button {
        margin-top: 0;
        grid-column: 1/-1;

        @include mq(md) {
          margin-top: 2rem;
        }
      }
    }

    .text {
      display: grid;

      p {
        margin-bottom: 0.5rem;
        font-size: var(--fs-500);

        @include mq(lg) {
          font-size: 1.15rem;
        }
      }

      ul {
        list-style: none;
        display: flex;
        gap: 0.75rem;
        justify-content: space-evenly;
        align-items: center;

        @include mq(md) {
          gap: 1rem;
        }

        li {
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
          font-size: var(--fs-500);
          flex: 1;
          margin-top: 1.5rem;

          span {
            font-size: var(--fs-600);
            font-weight: var(--fw-bold);
            font-family: var(--ft-title);
            background: radial-gradient(rgba(var(--base-200-rgb), 0.3), rgba(var(--base-200-rgb), 0.3)),
              radial-gradient(rgba(var(--primary-200-rgb), 0.3), transparent);
            border-radius: 9999px;
            aspect-ratio: 1;
            display: flex;
            justify-content: center;
            flex-direction: column;
            align-items: center;
            width: 4rem;
            padding: 0.5rem 1rem;
            margin-bottom: 0.25rem;

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
