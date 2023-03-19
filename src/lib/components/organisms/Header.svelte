<script lang="ts">
  import Close from '$lib/icons/Close.svelte';
  import Hamburger from '$lib/icons/Hamburger.svelte';
  import Image from '../atoms/Image.svelte';
  import ThemeSwitcher from '../molecules/ThemeSwitcher.svelte';
  import { page } from '$app/stores';

  let expanded: boolean = false;
  let y: number;
  let scrolled: boolean = false;

  function toggleExpanded() {
    expanded = !expanded;
  }

  $: if (y > 0) {
    scrolled = true;
  } else {
    scrolled = false;
  }
</script>

<svelte:window bind:scrollY={y} />

<header class={scrolled ? 'scrolled' : ''}>
  <a href="/" aria-label="Site Logo" class="logo">
    <Image path={'logos/kesval'} alt="KesvaL's logo" />
  </a>
  <nav id="navigation" aria-expanded={expanded}>
    <ul role="navigation">
      <li class={$page.route.id == '/' ? 'active' : ''}>
        <a class="home" href="/" data-sveltekit-preload-data data-sveltekit-preload-code on:click={toggleExpanded}>
          Home <span>/</span>
        </a>
      </li>
      <li class={$page.route.id == '/about' ? 'active' : ''}>
        <a href="/about" data-sveltekit-preload-data data-sveltekit-preload-code on:click={toggleExpanded}>About</a>

        <!-- Presentation, experience, skills -->
      </li>
      <li class={$page.route.id == '/projects' ? 'active' : ''}>
        <a href="/projects" data-sveltekit-preload-data data-sveltekit-preload-code on:click={toggleExpanded}>
          Projects
        </a>
        <!-- Page with all projects: detailed and access to examples -->
      </li>
      <li>
        <button>Contact</button>
        <!-- ChatBot -->
      </li>
    </ul>
    <button class="close" aria-controls="navigation" on:click={toggleExpanded}>
      <Close />
      <span class="visually-hidden">Close Menu</span>
    </button>
  </nav>
  <div>
    <ThemeSwitcher />
  </div>
  <button class="open" aria-controls="navigation" on:click={toggleExpanded}>
    <Hamburger />
    <span class="visually-hidden">Show Menu</span>
  </button>
</header>

<style lang="scss">
  @use '$lib/scss/breakpoints' as *;
  @use '$lib/scss/mixins' as *;

  header {
    button {
      color: var(--color-text);
    }

    display: flex;
    justify-content: flex-end;
    align-items: center;
    gap: clamp(1rem, 2vw, 2rem);

    position: sticky;
    top: 0;
    left: 0;
    right: 0;
    font-size: 2rem;
    margin-bottom: 0;
    padding-block: 1rem;
    backdrop-filter: blur(0.3rem);

    @include padded-container();

    @include breakpoint(md) {
      justify-content: space-between;
      font-size: 1.5rem;
    }

    @include breakpoint(lg) {
      border-radius: 2rem;
      top: 1rem;
      margin-bottom: 2rem;
    }

    .logo {
      margin-right: auto;
      width: 3rem;
      aspect-ratio: 1/1;
      z-index: 9;

      @include breakpoint(md) {
        margin-right: 0;
      }
    }

    &.scrolled {
      background: rgba(var(--color-bg-body-rgb), 0.8);
    }

    nav {
      position: absolute;
      height: 100vh;
      width: 100%;
      top: 0;
      left: 0;
      transform: translateX(-100%);
      transition: transform 0.5s cubic-bezier(0.075, 0.82, 0.165, 1);
      background: hsl(var(--color-bg-body-hue), var(--color-bg-body-saturation), var(--neutral-emphasis-lightness));

      &[aria-expanded='true'] {
        transform: translateX(0);
      }

      @include breakpoint(xs) {
        width: 24rem;
      }

      @include breakpoint(md) {
        position: relative;
        width: auto;
        height: 100%;
        background: transparent;
        transform: none;
        backdrop-filter: none;
      }

      ul {
        --padding-block: 8rem;

        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
        padding-block: var(--padding-block);
        height: 100%;
        list-style: none;
        gap: clamp(0.5rem, 1vw, 1rem);

        @include breakpoint(md) {
          flex-direction: row;
          padding-block: 0;
        }

        li {
          padding: 0.5rem 1rem;
          border-radius: 100vh;

          &.active {
            background: rgba(var(--color-primary-rgb), 0.3);
          }

          a {
            color: var(--color-text);
          }
        }

        .home {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;

          span {
            border: 2px solid rgba(var(--color-text-rgb), 0.5);
            border-radius: 0.5rem;
            aspect-ratio: 1/1;
            width: 2rem;
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: 1.25rem;
          }
        }
      }

      button.close {
        position: absolute;
        top: 0;
        right: 0;
        padding: 1.5rem;

        @include breakpoint(md) {
          display: none;
        }
      }
    }

    button.open {
      @include breakpoint(md) {
        display: none;
      }
    }
  }
</style>
