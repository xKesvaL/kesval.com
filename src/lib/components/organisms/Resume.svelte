<!--suppress CheckEmptyScriptTag -->
<script lang="ts">
  import Contact from '../molecules/resume/Contact.svelte';
  import Experience from '../molecules/resume/Experience.svelte';
  import Name from '../molecules/resume/Name.svelte';
  import Photo from '../molecules/resume/Photo.svelte';
  import Skills from '../molecules/resume/Skills.svelte';
  import Title from '../molecules/resume/Title.svelte';
  import type { Company, Skill } from '$lib';

  export let age: number;
  export let email: string;
  export let yearsOfCoding: number;

  export let skills: Skill[];

  export let experiences: Company[];
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
    <Title>About</Title>
    <p>
      I'm a passioned fullstack developer. I started when I was 8, writing my first lines of code in Java, creating
      minecraft mods. I then moved to web development, and I'm now working with the latest technologies, such as Svelte,
      Deno, and TypeScript. Later, I want to create some apps for myself, that will maybe be used by others.
    </p>
  </div>
  <div class="section experience">
    <Title>Experience</Title>
    <Experience {experiences} />
  </div>
  <div class="section skills">
    <Title>Skills</Title>
    <Skills {skills} />
  </div>
  <div class="section education">
    <Title>Education</Title>
    <p>
      I have a High School Diploma in Computer Science and Mathematics, and I'm currently studying at the University of
      Mulhouse, in Multimedia and Internet, where I'm learning about web development, 3D, video, and audio. I'm in my
      first year.
    </p>
  </div>
</article>

<style lang="scss">
  @use '$lib/scss/breakpoints.scss' as *;
  @use '$lib/scss/mixins' as *;

  .resume {
    overflow: hidden;
    position: relative;
    border-radius: 1rem;
    background: var(--color-bg-card);
    padding: 1rem 0.5rem;
    color: var(--color-text);
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
      box-shadow: 0.5rem 1rem 2rem rgba(39, 44, 49, 0.6), 1px 3px 8px rgba(39, 44, 49, 0.3);
    }

    @include breakpoint(md) {
      @include mdAndPrint;
    }

    @include breakpoint(lg) {
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
        background: hsla(
          var(--color-primary-hue),
          var(--color-primary-saturation),
          var(--color-primary-lightness),
          0.2
        );

        &.one {
          border-radius: var(--radius-blob-1);
          height: 110%;
          width: 110%;
          top: -64%;
          right: -45%;
        }
        &.two {
          border-radius: var(--radius-blob-4);
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

        p {
          text-align: justify;
        }
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
