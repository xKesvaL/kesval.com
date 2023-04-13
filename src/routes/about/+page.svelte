<script lang="ts">
  import Image from '$lib/components/atoms/Image.svelte';
  import Resume from '$lib/components/organisms/Resume.svelte';
  import { age } from '$lib/utils/data';
  import { onMount } from 'svelte';

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
        path="about"
        alt="A Photo of KesvaL"
        figcaption="There is supposed to be an image of me here."
        rounding="md" />
    </div>
    <p>
      I'm a french {age} year old programmer and I've been doing that since I was 8 years old, it's my passion. I started
      with Java, creating minecraft plugins and later on moved on to NodeJS. I'm a student at the Technological University
      of Mulhouse, France, studying Multimedia and Web Development, 1st year.
    </p>
  </div>
</section>

<section id="resume" class="container">
  <h2>My Resume</h2>
  <Resume />
</section>
<section id="socials" class="container" />
<section id="certifications" class="container" />

<!--  Important stuff (id is important) -->
<style lang="scss">
  @use '$lib/scss/breakpoints.scss' as *;
  @use '$lib/scss/mixins' as *;

  section {
    padding-top: 0.001rem;
    padding-bottom: 7.5rem;

    h1,
    h2 {
      font-size: 2rem;
      font-weight: 700;
      line-height: 1.2;
      text-align: center;
      margin-block: 2rem 3rem;

      @include breakpoint(md) {
        font-size: 3rem;
        margin-block: 5rem;
      }
    }

    .presentation {
      display: flex;
      justify-content: space-around;
      flex-direction: column;
      align-items: center;
      margin: 0 auto;
      height: fit-content;
      gap: 1rem;

      @include breakpoint(sm) {
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
        max-width: 35ch;
        font-size: 1.1rem;

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
  }
</style>
