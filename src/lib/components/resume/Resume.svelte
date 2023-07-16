<!--suppress CheckEmptyScriptTag -->
<script lang="ts">
  import Contact from '$lib/components/resume/Contact.svelte';
  import Experience from '$lib/components/resume/Experience.svelte';
  import Name from '$lib/components/resume/Name.svelte';
  import Photo from '$lib/components/resume/Photo.svelte';
  import Skills from '$lib/components/resume/Skills.svelte';
  import Title from '$lib/components/resume/Title.svelte';
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
  @use '$design' as *;

  .resume {
    overflow: hidden;
    position: relative;
    border-radius: $border-radius-4;
    background: radial-gradient(
        circle,
        rgba(var(--color-primary-500-rgb), 0.1) 0%,
        rgba(var(--color-base-100-rgb), 0) 100%
      ),
      linear-gradient(rgba(var(--color-base-200-rgb), 0.5), rgba(var(--color-base-200-rgb), 0.5));
    padding: $size-4 $size-2;
    color: var(--color-neutral-900);
    isolation: isolate;
    display: grid;
    gap: $size-6;
    grid-template-columns: 1fr;
    grid-template-areas:
      'photo'
      'name'
      'about'
      'skills'
      'work'
      'education';

    @mixin mdAndPrint {
      padding: $size-8 $size-6;
      grid-template-columns: 3fr 2fr;
      grid-template-rows: 1fr 1fr 1fr 1fr;

      grid-template-areas:
        'name photo'
        'work about'
        'work skills'
        'work education';
    }

    @mixin lgAndPrint {
      margin: $size-4 auto;
      max-width: 215.9mm;
      box-shadow: 0.5rem 1rem 2rem rgba(39, 44, 49, 0.6), 1px 3px 8px rgba(39, 44, 49, 0.3);
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
        background: hsla(
          var(--color-primary-500-hue),
          var(--color-primary-500-saturation),
          var(--color-primary-500-lightness),
          0.2
        );

        &.one {
          border-radius: $radius-blob-1;
          height: 110%;
          width: 110%;
          top: -64%;
          right: -45%;
        }
        &.two {
          border-radius: $radius-blob-3;
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
