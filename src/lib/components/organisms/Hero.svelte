<script lang="ts">
  import Image from '../atoms/Image.svelte';
  import Socials from '../molecules/Socials.svelte';
</script>

<section>
  <div class="socials"><Socials vertical={true} /></div>
  <div class="image">
    <Image path="logos/kesval" alt="A Photo of KesvaL" />
  </div>
  <div class="text">
    <h1>
      Hi. I'm Jordan.
      <br />
    </h1>
    <p class="subtitle">Fullstack developer</p>
    <p>Bla bla bla high level fullstack dev 10 years experience idk just content yk.</p>
  </div>
</section>

<style lang="scss">
  @use '$lib/scss/mixins' as *;
  @use '$lib/scss/breakpoints' as *;

  section {
    min-height: 90vh;
    display: grid;
    grid-template-columns: 0.5fr 3fr;
    min-height: 40vh; // for dev purposes
    align-items: center;
    justify-items: center;
    padding-block: 0rem;
    gap: 4rem 1rem;

    .text {
      grid-column: 1/3;

      h1 {
        font-size: 2.25rem;
        font-weight: 700;
        line-height: 1.2;
      }

      .subtitle {
        font-size: 1.75rem;
        color: hsl(var(--color-text-hue), 0%, var(--neutral-emphasis-inverse-less-lightness));
        margin-bottom: 1rem;
      }

      p {
        font-size: 1.25rem;
        line-height: 1.5;
        max-width: 40ch;
      }
    }

    .image {
      border-radius: var(--radius-blob-4);
      overflow: hidden;
      background: var(--color-primary);
      z-index: -1;
      margin: 2rem;
    }

    @include padded-container(1400px);

    @include breakpoint(md) {
      grid-template-columns: max-content 2fr 1fr;
      gap: 2.5rem;
      padding-block: 8rem 10rem;

      .text {
        grid-column: 2/3;
        grid-row: 1/2;

        h1 {
          font-size: 4rem;
        }
      }

      .image {
        margin: 0.5rem;
        grid-column: 3/4;
      }
    }
  }
</style>
