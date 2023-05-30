<script lang="ts">
  import Image from '$lib/components/atoms/Image.svelte';
  import SkillDropdown from '$lib/components/molecules/SkillDropdown.svelte';
  import Socials from '$lib/components/molecules/Socials.svelte';
  import Resume from '$lib/components/organisms/Resume.svelte';
  import { onMount } from 'svelte';
  import type { LayoutData } from './$types';
  import Button from '$lib/components/atoms/Button.svelte';

  export let data: LayoutData;

  const { age, email, yearsOfCoding, skillTypes, skills, experiences } = data;

  onMount(() => {
    let queries = new URLSearchParams(window.location.search);
    if (queries && queries.has('scroll')) {
      let element = document.getElementById(queries.get('scroll') as string);
      if (element)
        setTimeout(() => {
          element?.scrollIntoView();
        }, 500);
    }
  });
</script>

<svelte:head>
  <title>About - KesvaL</title>
  <meta name="description" content="Come and discover who I truly am!" />
</svelte:head>

<section id="welcome" class="container">
  <h1>Hi. I'm Jordan.</h1>
  <div class="presentation">
    <div class="img">
      <!-- TODO Put real photo -->
      <Image
        src="/images/about.png"
        alt="A Photo of KesvaL"
        figcaption="There is supposed to be an image of me here."
        rounding="md" />
    </div>
    <div>
      <p>
        I'm a french {age} year old programmer and I've been doing that since I was 8 years old, it's my passion. I started
        with Java, creating minecraft plugins and later on moved on to NodeJS. I'm a student at the Technological University
        of Mulhouse, France, studying Multimedia and Web Development, 1st year.
      </p>
      <p>
        I just love programming really, especially building new things that correlate to what I love in real life. For
        example, I'm planning on building a powerlifting app.
      </p>
    </div>
  </div>
</section>

<section id="skills" class="container">
  <h2>Skills. Take a look.</h2>
  <div class="skills">
    {#each skillTypes as skillType}
      <SkillDropdown skills={skills.filter((sk) => sk.type === skillType)} {skillType} />
    {/each}
  </div>
</section>
<section id="resume" class="container">
  <div class="resume">
    <h2>My Resume</h2>
    <Button href="/resume.pdf" download="resume-kesval">Download</Button>
  </div>
  <Resume {age} {email} {yearsOfCoding} {skills} {experiences} />
</section>
<!-- TODO Certifications -->
<!-- <section id="certifications" class="container" /> -->
<section id="socials" class="container">
  <h2>Socials</h2>
  <div class="socials-list">
    <Socials full={true} />
  </div>
</section>

<!--  Important stuff (id is important) -->
<style lang="scss">
  @use '$lib/scss/breakpoints.scss' as *;
  @use '$lib/scss/mixins' as *;

  section {
    padding-top: 0.001rem;
    padding-bottom: 7.5rem;

    .resume {
      display: flex;
      align-items: center;
      justify-content: space-evenly;
    }

    h1,
    h2 {
      font-size: 2rem;
      font-weight: 700;
      line-height: 1.2;
      text-align: center;
      margin-block: 2rem 3rem;
      padding-top: 1.25rem;

      @include breakpoint(md) {
        font-size: 3rem;
        margin-block: 5rem;
      }
    }

    .presentation {
      display: grid;
      grid-template-columns: 1fr;
      align-items: center;
      margin: 0 auto;
      height: fit-content;
      gap: 1rem;

      @include breakpoint(sm) {
        grid-template-columns: 1fr 1fr;
        flex-direction: row;
        gap: 4rem;
      }

      .img {
        width: auto;

        @include breakpoint(sm) {
          height: 20rem;
          width: 100%;
        }
      }

      p {
        font-size: 1.1rem;
        margin-block: 1rem;

        @include breakpoint(sm) {
          max-width: 25ch;
          font-size: 1.2rem;
        }

        @include breakpoint(md) {
          max-width: 45ch;
        }

        @include breakpoint(lg) {
          font-size: 1.4rem;
        }
      }
    }

    .skills {
      display: flex;
      flex-direction: column;
      gap: 1rem;
      margin: 0 auto;
      align-items: center;
      width: 100%;

      @include breakpoint(md) {
        flex-direction: row;
        gap: 2rem;
        justify-content: space-evenly;
        align-items: flex-start;
      }

      @include breakpoint(lg) {
        gap: 4rem;
      }
    }
  }
</style>
