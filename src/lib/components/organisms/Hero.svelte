<script lang="ts">
  import Image from '../atoms/Image.svelte';
  import Socials from '../molecules/Socials.svelte';
</script>

<section>
  <div class="socials"><Socials /></div>
  <div class="image">
    <Image path="logos/kesval" alt="A Photo of KesvaL" />
  </div>
  <div class="text">
    <h1>
      Hi. I'm Jordan.
      <br />
    </h1>
    <h2>Fullstack developer</h2>
  </div>
</section>

<style lang="scss">
  @use '$lib/scss/mixins' as *;
  @use '$lib/scss/breakpoints' as *;

  section {
    display: grid;
    grid-template-columns: 0.5fr 3fr;
    min-height: 40vh; // for dev purposes
    align-items: center;
    justify-items: center;
    padding-block: 6rem;

    .text {
      grid-column: 1/3;

      h1 {
        font-size: 4rem;
        font-weight: 700;
        line-height: 1.2;
      }
    }

    .image {
      border-radius: var(--radius-blob-4);
      overflow: hidden;
      background: var(--color-primary);
    }

    @include padded-container(1400px);

    @include breakpoint(md) {
      grid-template-columns: max-content 2fr 1fr;

      .text {
        grid-column: 2/3;
        grid-row: 1/2;
      }

      .image {
        grid-column: 3/4;
      }
    }
  }
</style>
