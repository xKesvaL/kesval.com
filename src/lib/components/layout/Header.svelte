<script lang="ts">
  import Close from '$lib/icons/IconClose.svelte';
  import Hamburger from '$lib/icons/IconHamburger.svelte';
  import Image from '../base/Image.svelte';
  import ThemeSwitcher from './ThemeSwitcher.svelte';
  import { page } from '$app/stores';
  import { botState } from '$lib/stores/bot';

  let expanded = false;
  let y: number;
  let scrolled = false;

  let prevScroll = 0;

  let scrollDirection: 'up' | 'down' = 'up';

  function toggleExpanded() {
    expanded = !expanded;
  }

  function toggleBot() {
    botState.update((state) => !state);
  }

  $: scrolled = y > 0;

  $: {
    if (y >= 128 && y > prevScroll && !expanded) {
      scrollDirection = 'down';
    } else if (y < prevScroll && !expanded) {
      scrollDirection = 'up';
    }
    prevScroll = y;
  }
</script>

<svelte:window bind:scrollY={y} />

<header class="container {scrolled ? 'scrolled' : ''} {scrollDirection === 'down' ? 'scrolled-down' : ''}">
  <a href="/" aria-label="Site Logo" class="logo">
    <Image src={'/images/logos/kesval.png'} alt="KesvaL's logo" rounding="full" border={false} />
  </a>
  <div class="th-sw">
    <ThemeSwitcher />
  </div>
  <button class="open" aria-controls="navigation" on:click={toggleExpanded}>
    <Hamburger />
    <span class="visually-hidden">Show Menu</span>
  </button>
  <!-- svelte-ignore a11y-role-supports-aria-props -->
  <!--suppress HtmlWrongAttributeValue -->
  <nav id="navigation" aria-expanded={expanded}>
    <ul>
      <li class={$page.route.id === '/' ? 'active' : ''}>
        <a class="home" href="/" data-sveltekit-preload-data data-sveltekit-preload-code on:click={toggleExpanded}>
          Home <span>/</span>
        </a>
      </li>
      <li class={$page.route.id?.startsWith('/about') ? 'active' : ''}>
        <a href="/about" data-sveltekit-preload-data data-sveltekit-preload-code on:click={toggleExpanded}>About</a>
      </li>
      <li class={$page.route.id?.startsWith('/projects') ? 'active' : ''}>
        <a href="/projects" data-sveltekit-preload-data data-sveltekit-preload-code on:click={toggleExpanded}>
          Projects
        </a>
      </li>
      <li class={$page.route.id?.startsWith('/blog') ? 'active' : ''}>
        <a href="/blog" data-sveltekit-preload-data data-sveltekit-preload-code on:click={toggleExpanded}>Blog</a>
      </li>
      <li>
        <button on:click={toggleBot}>Contact</button>
        <!-- ChatBot -->
      </li>
    </ul>
    <button class="close" aria-controls="navigation" on:click={toggleExpanded}>
      <Close />
      <span class="visually-hidden">Close Menu</span>
    </button>
  </nav>
</header>

<style lang="scss">
  @use '$design' as *;

  header {
    --padding: 1rem;

    display: flex;
    justify-content: flex-end;
    align-items: center;
    gap: clamp($size-4, 2vw, $size-8);

    position: sticky;
    top: 0;
    left: 0;
    right: 0;
    font-size: var(--fs-600);
    margin-bottom: 0;
    padding-block: $size-4;
    backdrop-filter: blur(0.5rem) saturate(1);
    min-height: 10vh;
    transition: transform 0.3s ease-in-out;
    background: rgba(var(--color-base-100-rgb), 0.85);
    z-index: 10;

    @include mq(lg) {
      --padding: 2rem;
      justify-content: space-between;
      border-radius: $size-8;
      top: $size-4;
      margin-bottom: $size-8;
    }

    &.scrolled {
      transform: translateY(0);
    }

    &.scrolled.scrolled-down {
      transform: translateY(-120%);
    }

    .logo {
      margin-right: auto;
      width: $size-10;
      aspect-ratio: $ratio-square;
      z-index: 200;

      @include mq(lg) {
        margin-right: 0;
      }
    }

    .th-sw {
      @include mq(lg) {
        order: 3;
      }
    }

    nav {
      position: absolute;
      height: 100vh;
      width: 100%;
      top: 0;
      left: 0;
      transform: translateX(-100%);
      transition: transform 0.5s $ease-4;
      background: var(--color-base-100);
      z-index: 100;

      &[aria-expanded='true'] {
        transform: translateX(0);
      }

      @include mq(xs) {
        border-right: 2px solid var(--color-primary-200);
        width: $size-17;
      }

      @include mq(lg) {
        position: relative;
        width: auto;
        height: 100%;
        background: transparent;
        transform: none;
        backdrop-filter: none;
        border-right: none;
      }

      ul {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding-block: $size-14;
        height: 100%;
        list-style: none;
        gap: clamp($size-4, 7vw, $size-8);
        color: var(--color-neutral-900);

        @include mq(lg) {
          flex-direction: row;
          padding-block: 0;
        }

        li {
          padding: $size-3 $size-6;
          border-radius: $border-radius-3;
          transition: background 0.25s ease;

          @include mq(lg) {
            padding: 0.5rem $size-4;
          }

          &:hover,
          &:focus,
          &:focus-within {
            background: rgba(var(--color-accent-500-rgb), 0.4);
          }

          &.active {
            background: rgba(var(--color-primary-500-rgb), 0.3);
          }

          a {
            color: var(--color-neutral-900);
          }
        }

        .home {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: $size-2;

          span {
            border: 2px solid rgba(var(--color-neutral-800-rgb), 0.9);
            border-radius: $size-2;
            aspect-ratio: $ratio-square;
            width: $size-7;
            height: $size-7;
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: var(--fs-400);
          }
        }
      }

      button.close {
        position: absolute;
        top: 0;
        right: 0;
        padding: $size-6;

        @include mq(lg) {
          display: none;
        }
      }
    }

    button.open {
      @include mq(lg) {
        display: none;
      }
    }
  }
</style>
