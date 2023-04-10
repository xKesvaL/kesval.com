<script lang="ts">
  import Github from '$lib/icons/socials/Github.svelte';
  import LinkedIn from '$lib/icons/socials/LinkedIn.svelte';
  import Email from '$lib/icons/socials/Email.svelte';
  import Website from '$lib/icons/socials/Website.svelte';
  import Language from '$lib/icons/Language.svelte';
  import Pin from '$lib/icons/Pin.svelte';
  import Star from '$lib/icons/Star.svelte';
  import Suitcase from '$lib/icons/Suitcase.svelte';
  import { age, email, yearsOfCoding } from '$lib/utils/data';
</script>

<ul class="resume-contact">
  <li class="birthday">
    <span class="icon"><Star /></span>
    <span>{age} years old</span>
  </li>
  <li class="experience">
    <span class="icon"><Suitcase /></span>
    <span>{yearsOfCoding} years of coding</span>
  </li>
  <li class="location">
    <span class="icon"><Pin /></span>
    <span>Mulhouse, France</span>
  </li>
  <li class="email">
    <span class="icon"><Email /></span>
    <a href="mailto:{email}">{email}</a>
  </li>
  <li class="linkedin">
    <span class="icon"><LinkedIn /></span>
    <a href="https://www.linkedin.com/in/jabeddou/" target="_blank" rel="noopener nofollow noreferrer">
      LinkedIn Profile
    </a>
  </li>
  <li class="website">
    <span class="icon"><Website /></span>
    <a href="https://kesval.com" target="_blank" rel="noopener nofollow noreferrer">kesval.com</a>
  </li>
  <li class="github">
    <span class="icon"><Github /></span>
    <a href="https://github.com/xKesvaL" target="_blank" rel="noopener nofollow noreferrer">GitHub Profile</a>
  </li>
  <li class="languages">
    <span class="icon"><Language /></span>
    <span>English, French</span>
  </li>
</ul>

<style lang="scss">
  @use '$lib/scss/breakpoints.scss' as *;
  @use '$lib/scss/mixins' as *;

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
        color: var(--color-text);
        border-bottom: 2px dotted var(--color-primary);
        transition: border-bottom 0.25s ease, color 0.25s ease;

        &:hover {
          border-bottom: 2px solid var(--color-primary);
          color: hsl(var(--color-primary-hue), var(--color-primary-saturation), var(--primary-dark-lightness));
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

    @include breakpoint(md) {
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
