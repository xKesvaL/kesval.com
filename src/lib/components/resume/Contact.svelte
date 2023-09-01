<script lang="ts">
  import Github from '$lib/icons/socials/IconGithub.svelte';
  import LinkedIn from '$lib/icons/socials/IconLinkedIn.svelte';
  import Email from '$lib/icons/socials/IconEmail.svelte';
  import Website from '$lib/icons/socials/IconWebsite.svelte';
  import Language from '$lib/icons/IconLanguage.svelte';
  import Pin from '$lib/icons/IconPin.svelte';
  import Star from '$lib/icons/IconStar.svelte';
  import Suitcase from '$lib/icons/IconSuitcase.svelte';
  import { t } from 'svelte-i18n';

  export let age: number;
  export let email: string;
  export let yearsOfCoding: number;
</script>

<ul class="resume-contact">
  <li class="birthday">
    <span class="icon"><Star /></span>
    <span>{age} {$t('std.yearsOld')}</span>
    <!-- French -->
    <!-- <span>{age} ans</span> -->
  </li>
  <li class="experience">
    <span class="icon"><Suitcase /></span>
    <span>{yearsOfCoding} {$t('std.years')} {$t('std.of')} {$t('std.coding')}</span>
    <!-- French -->
    <!-- <span>{yearsOfCoding} années de code</span> -->
  </li>
  <li class="location">
    <span class="icon"><Pin /></span>
    <span>Mulhouse, {$t('std.countries.france')}</span>
  </li>
  <li class="email">
    <span class="icon"><Email /></span>
    <a href="mailto:{email}">{email}</a>
  </li>
  <li class="linkedin">
    <span class="icon"><LinkedIn /></span>
    <a href="https://www.linkedin.com/in/jordan-abeddou/" target="_blank" rel="noopener nofollow noreferrer">
      LinkedIn {$t('std.profile')}
    </a>
  </li>
  <li class="website">
    <span class="icon"><Website /></span>
    <a href="https://kesval.com" target="_blank" rel="noopener nofollow noreferrer">kesval.com</a>
  </li>
  <li class="github">
    <span class="icon"><Github /></span>
    <a href="https://github.com/xKesvaL" target="_blank" rel="noopener nofollow noreferrer">
      GitHub {$t('std.profile')}
    </a>
  </li>
  <li class="languages">
    <span class="icon"><Language /></span>
    <span>{$t('std.langs.english')}, {$t('std.langs.french')}</span>
  </li>
</ul>

<style lang="scss">
  .resume-contact {
    list-style: none;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1rem 0.5rem;
    margin-inline: auto;
    grid-template-areas:
      'email email'
      'website website'
      'location languages'
      'birthday experience'
      'github linkedin';

    li {
      display: flex;
      align-items: center;
      gap: 0.5rem;

      .icon {
        width: 2rem;
      }

      a {
        color: var(--base-900);
        border-bottom: 2px dotted var(--primary-500);
        transition:
          border-bottom 0.25s ease,
          color 0.25s ease;

        &:hover,
        &:focus {
          border-bottom: 2px solid var(--primary-500);
          color: var(--primary-800);
        }
      }

      &.birthday {
        grid-area: birthday;
      }

      &.location {
        grid-area: location;
      }

      &.experience {
        grid-area: experience;
      }

      &.email {
        grid-area: email;
        margin: 0 auto;
      }

      &.linkedin {
        grid-area: linkedin;
      }

      &.website {
        grid-area: website;
        display: none;
      }

      &.github {
        grid-area: github;
      }

      &.languages {
        grid-area: languages;
      }
    }

    @mixin mdAndPrint {
      margin-inline: 0;
      gap: 0.5rem 0.25rem;

      grid-template-areas:
        'location github'
        'birthday linkedin'
        'experience email'
        'languages website';

      li {
        &.email {
          margin: 0;
        }
        &.website {
          display: flex;
        }
      }
    }

    @include mq(md) {
      @include mdAndPrint;
    }

    @media print {
      @include mdAndPrint;
      grid-template-areas:
        'location languages'
        'birthday email'
        'experience website';

      .linkedin,
      .github {
        display: none;
      }

      a {
        border: none !important;
      }
    }
  }
</style>
