<svelte:head>
  <title>Home | KesvaL</title>
  <meta name="description" content="Come and discover who I truly am!" />
</svelte:head>

<section id="welcome">
  <h2>Hi. I'm Jordan.</h2>
</section>

<section id="resume" />
<section id="socials" />
<section id="certifications" />

<!--  Important stuff (id is important) -->
<style lang="scss">
  @use '$lib/scss/breakpoints.scss' as *;
  @use '$lib/scss/mixins' as *;

  section {
    padding-bottom: 5rem;

    h2 {
      font-size: 2rem;
      font-weight: 700;
      line-height: 1.2;
      text-align: center;
      margin-block: 0 5rem;

      @include breakpoint(md) {
        font-size: 3rem;
        margin-block: 2.5rem 7.5rem;
      }
    }
  }
</style>
