<!--suppress CheckEmptyScriptTag -->
<script lang="ts">
  import Contact from '$lib/components/resume/Contact.svelte';
  import Experience from '$lib/components/resume/Experience.svelte';
  import Name from '$lib/components/resume/Name.svelte';
  import Photo from '$lib/components/resume/Photo.svelte';
  import Skills from '$lib/components/resume/Skills.svelte';
  import Title from '$lib/components/resume/Title.svelte';
  import type { Skill } from '$lib';
  import { t } from 'svelte-i18n';

  export let age: number;
  export let email: string;
  export let yearsOfCoding: number;

  export let skills: Skill[];
</script>

<article class="resume">
  <div class="blobs">
    <div class="blob one" />
    <div class="blob two" />
  </div>
  <div class="section header-left">
    <Name />
    <Contact {age} {email} {yearsOfCoding} />
  </div>
  <div class="section header-right">
    <Photo />
  </div>
  <div class="section about">
    <Title>{$t('resume.about.title')}</Title>
    <p>
      {$t('resume.about.description')}
    </p>
  </div>
  <div class="section experience">
    <Title>{$t('resume.experience.title')}</Title>
    <Experience />
  </div>
  <div class="section skills">
    <Title>{$t('resume.skills.title')}</Title>
    <Skills {skills} />
  </div>
  <div class="section education">
    <Title>{$t('resume.education.title')}</Title>
    <p>
      {$t('resume.education.description')}
    </p>
  </div>
</article>

<style lang="scss">
  @use '$design' as *;

  .resume {
    overflow: hidden;
    position: relative;
    border-radius: 1rem;
    background: radial-gradient(circle, rgba(var(--primary-500-rgb), 0.1) 0%, rgba(var(--base-100-rgb), 0) 100%),
      linear-gradient(rgba(var(--base-200-rgb), 0.5), rgba(var(--base-200-rgb), 0.5));
    padding: 1rem 0.5rem;
    color: var(--base-900);
    isolation: isolate;
    display: grid;
    gap: 1.5rem;
    grid-template-columns: 1fr;
    grid-template-areas:
      'photo'
      'name'
      'about'
      'skills'
      'work'
      'education';

    @mixin mdAndPrint {
      padding: 2rem 1.5rem;
      grid-template-columns: 3fr 2fr;
      grid-template-rows: 1fr 1fr 1fr 1fr;

      grid-template-areas:
        'name photo'
        'work about'
        'work skills'
        'work education';
    }

    @mixin lgAndPrint {
      margin: 1rem auto;
      max-width: 215.9mm;
      box-shadow:
        0.5rem 1rem 2rem rgba(39, 44, 49, 0.6),
        1px 3px 8px rgba(39, 44, 49, 0.3);
    }

    @include mq(md) {
      @include mdAndPrint;
    }

    @include mq(lg) {
      @include lgAndPrint;
    }

    @media print {
      @include mdAndPrint;
      @include lgAndPrint;
    }

    .blobs {
      position: absolute;
      inset: 0;
      z-index: -1;

      .blob {
        position: absolute;
        background: hsla(var(--primary-500-hue), var(--primary-500-saturation), var(--primary-500-lightness), 0.2);

        &.one {
          border-radius: var(--border-blob-1);
          height: 110%;
          width: 110%;
          top: -64%;
          right: -45%;
        }
        &.two {
          border-radius: var(--border-blob-3);
          height: 45%;
          width: 45%;
          left: 0%;
          bottom: -15%;
          rotate: -45deg;
        }
      }
    }

    .section {
      padding: 0.5rem;

      &.header-left {
        grid-area: name;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        gap: 1rem;
      }

      &.header-right {
        grid-area: photo;
        display: flex;
        align-items: center;
        justify-content: center;
        height: fit-content;
      }

      &.about {
        grid-area: about;
      }

      &.experience {
        grid-area: work;
      }

      &.skills {
        grid-area: skills;
      }

      &.education {
        grid-area: education;
      }
    }
  }

  // Print is adjusted for « Letter » paper size
  // This should be default when clicking on print as far as I know?
  @media print {
    .resume {
      box-shadow: none;
      margin: 0;
      max-height: 320mm; // 279.4mm
      overflow: hidden;
      border-radius: 0;

      .section {
        margin: 0;
      }

      .blob.two {
        display: none;
      }
    }

    :global(header) {
      display: none !important;
    }
    :global(footer) {
      display: none !important;
    }
    :global(section:not(#resume)) {
      display: none !important;
    }
    :global(section#resume) {
      padding: 0;
    }
    :global(h2:not(#resume-name)) {
      display: none !important;
    }
    :global(a#download-resume) {
      display: none !important;
    }
    :global(button#back-to-top) {
      display: none !important;
    }
  }
</style>
