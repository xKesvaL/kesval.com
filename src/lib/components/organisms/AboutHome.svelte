<script lang="ts">
  import Button from '../atoms/Button.svelte';
  import Image from '../atoms/Image.svelte';
</script>

<section id="about" class="container">
  <h2>Me, Myself & I</h2>
  <div class="grid">
    <div class="image">
      <!-- TODO Put real photo & remove figcaption -->
      <Image
        src="/images/about.png"
        alt="Another photo of Jordan 'KesvaL'"
        rounding="md"
        figcaption="Image of me maybe?" />
    </div>
    <div class="text">
      <p>
        Interested in development since I was a child, I started with the creation of minecraft plugins then I moved on
        to discord bots. As of today, I'm a web developer as you can see!
      </p>
      <p>
        I'm currently in my first year of a bachelor's degree in Multimedia and Internet Jobs at the University of
        Technology of Mulhouse.
      </p>
      <ul>
        <li>
          <span>10</span>
          years of experience
        </li>
        <li>
          <span>05</span>
          projects completed
        </li>
        <li>
          <span>02</span>
          companies worked at
        </li>
      </ul>
    </div>
    <div class="button">
      <Button href="/about">More About Me</Button>
    </div>
  </div>
</section>

<style lang="scss">
  @use '$lib/scss/breakpoints.scss' as *;
  @use '$lib/scss/mixins' as *;

  section {
    padding-bottom: 5rem;
    display: grid;
    grid-template-rows: auto 1fr;

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

    .grid {
      display: grid;
      justify-items: center;
      align-items: center;
      gap: 2rem;
      grid-template-rows: auto 1fr;

      @include breakpoint(sm) {
        grid-template-columns: 1fr 1fr;
        grid-template-rows: 1fr;
      }

      .button {
        margin-top: 0;
        grid-column: 1/-1;

        @include breakpoint(sm) {
          margin-top: 3rem;
        }
      }
    }

    .text {
      display: grid;
      gap: 0.5rem;

      @include breakpoint(md) {
        gap: 1rem;
      }

      @include breakpoint(lg) {
        gap: 1.5rem;
      }

      p {
        font-size: 1rem;
        margin-bottom: 0.5rem;
        max-width: 45ch;
        text-align: justify;

        @include breakpoint(md) {
          font-size: 1.25rem;
        }
      }

      ul {
        list-style: none;
        display: flex;
        gap: 2rem;
        justify-content: space-between;

        li {
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;

          @include breakpoint(md) {
            font-size: 1.25rem;
          }

          @include breakpoint(lg) {
            font-size: 1.5rem;
          }
          span {
            font-size: 1.25rem;
            font-weight: 700;
            font-family: var(--font-title);
            background: rgba(var(--color-bg-card-rgb), 0.3);
            border-radius: 9999vw;
            aspect-ratio: 1/1;
            display: flex;
            justify-content: center;
            flex-direction: column;
            align-items: center;
            width: 4rem;
            padding: 0.75rem 1rem 0.5rem;
            margin-bottom: 0.25rem;

            @include breakpoint(md) {
              font-size: 1.75rem;
              width: 6rem;
              padding: 1rem 1.5rem 0.75rem;
            }

            @include breakpoint(lg) {
              font-size: 2.5rem;
              width: 8rem;
              padding: 1.25rem 2rem 1rem;
            }
          }
        }
      }
    }

    .image {
      width: 100%;
      z-index: -1;

      @include breakpoint(lg) {
        width: 85%;
      }
    }
  }
</style>
