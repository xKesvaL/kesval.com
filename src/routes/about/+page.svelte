<script lang="ts">
  import Image from '$lib/components/base/Image.svelte';
  import SkillDropdown from '$lib/components/base/SkillDropdown.svelte';
  import Socials from '$lib/components/base/Socials.svelte';
  import Resume from '$lib/components/resume/Resume.svelte';
  import { onMount } from 'svelte';
  import type { LayoutData } from './$types';
  import Sparkles from '$lib/components/base/Sparkles.svelte';

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

<section id="welcome" class="container container-wide section min">
  <h1 class="title">Hi. I'm Jordan.</h1>
  <div class="presentation">
    <div class="img">
      <!-- TODO Put real photo -->
      <Image alt="A Photo of KesvaL" figcaption="Sorry, no image of me here neither" rounding="md" />
    </div>
    <div>
      <p>
        I'm a french {age} year old programmer and I've been doing that since I was 8 years old, it's my <Sparkles>
          passion
        </Sparkles>. I started with Java, creating minecraft plugins and later on moved on to NodeJS. I'm a student at
        the Technological University of Mulhouse, France, studying Multimedia and Web Development, 2nd year.
      </p>
      <p>
        I just love programming really, especially building new things that correlate to what I love in real life. For
        example, I'm planning on building a powerlifting app.
      </p>
    </div>
  </div>
</section>

<section id="skills" class="container section container-wide">
  <h2>Skills. Take a look.</h2>
  <div class="skills">
    {#each skillTypes as skillType}
      <SkillDropdown skills={skills.filter((sk) => sk.type === skillType)} {skillType} />
    {/each}
  </div>
</section>
<section id="resume" class="container section container-wide min">
  <div class="resume">
    <h2 class="myresume">My Resume</h2>
    <a href="/resume.pdf" download="resume-kesval" id="download-resume" class="btn btn-primary">Download</a>
  </div>
  <Resume {age} {email} {yearsOfCoding} {skills} {experiences} />
</section>

<!-- TODO Certifications -->
<!-- <section id="certifications" class="container" /> -->

<section id="socials" class="container section">
  <h2 class="mysocials">Socials</h2>
  <div class="socials-list">
    <Socials full={true} />
  </div>
</section>

<style lang="scss">
  @use '$design' as *;

  section {
    &.min {
      min-height: 90vh;
    }

    .resume {
      display: flex;
      align-items: center;
      justify-content: space-evenly;
      flex-direction: column;
      margin-bottom: 2rem;

      @include mq(sm) {
        flex-direction: row;
        margin-bottom: 0;
      }

      .myresume {
        margin-block: $size-4;

        @include mq(sm) {
          margin-block: $size-10;
        }
      }
    }

    h1,
    h2 {
      text-align: center;
    }

    .presentation {
      display: grid;
      grid-template-columns: 1fr;
      align-items: center;
      margin: 0 auto;
      height: fit-content;
      gap: 1rem;

      @include mq(sm) {
        grid-template-columns: 1fr 1fr;
        flex-direction: row;
        gap: 4rem;
      }

      .img {
        width: auto;

        @include mq(sm) {
          height: 20rem;
          width: 100%;
        }
      }

      p {
        font-size: var(--fs-600);
        margin-block: 1rem;

        @include mq(sm) {
          max-width: 25ch;
        }

        @include mq(md) {
          max-width: 45ch;
        }

        @include mq(lg) {
          max-width: 60ch;
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

      @include mq(md) {
        flex-direction: row;
        gap: 2rem;
        justify-content: space-evenly;
        align-items: flex-start;
      }

      @include mq(lg) {
        gap: 4rem;
      }
    }

    .mysocials {
      margin-bottom: $size-8;
    }
  }
</style>
