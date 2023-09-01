<script lang="ts">
  import Close from '$lib/icons/IconClose.svelte';
  import Hamburger from '$lib/icons/IconHamburger.svelte';
  import Image from '../base/Image.svelte';
  import ThemeSwitcher from './ThemeSwitcher.svelte';
  import { page } from '$app/stores';
  import { botState } from '$lib/stores/bot';
  import { t } from 'svelte-i18n';
  import LangSwitcher from './LangSwitcher.svelte';

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

<header class="container container-sm {scrolled ? 'scrolled' : ''} {scrollDirection === 'down' ? 'scrolled-down' : ''}">
  <a href="/" aria-label={$t('std.kesvalLogo')} class="logo">
    <Image src={'/images/logos/kesval.png'} alt={$t('std.kesvalLogo')} rounding="full" border={false} />
  </a>
  <div class="th-sw">
    <LangSwitcher />
    <ThemeSwitcher />
  </div>
  <button class="open no-anim" aria-controls="navigation" on:click={toggleExpanded}>
    <span class="hamburger">
      <Hamburger />
    </span>
    <span class="visually-hidden">{$t('std.show')} {$t('std.menu')}</span>
  </button>
  <!-- svelte-ignore a11y-role-supports-aria-props -->
  <!--suppress HtmlWrongAttributeValue -->
  <nav id="navigation" aria-expanded={expanded}>
    <ul>
      <li class={$page.route.id === '/' ? 'active' : ''}>
        <a class="home" href="/" data-sveltekit-preload-data data-sveltekit-preload-code on:click={toggleExpanded}>
          {$t('home.meta.title')}
          <span>/</span>
        </a>
      </li>
      <li class={$page.route.id?.startsWith('/about') ? 'active' : ''}>
        <a href="/about" data-sveltekit-preload-data data-sveltekit-preload-code on:click={toggleExpanded}>
          {$t('about.meta.title')}
        </a>
      </li>
      <li class={$page.route.id?.startsWith('/projects') ? 'active' : ''}>
        <a href="/projects" data-sveltekit-preload-data data-sveltekit-preload-code on:click={toggleExpanded}>
          {$t('projects.meta.title')}
        </a>
      </li>
      <li class={$page.route.id?.startsWith('/blog') ? 'active' : ''}>
        <a href="/blog" data-sveltekit-preload-data data-sveltekit-preload-code on:click={toggleExpanded}>Blog</a>
      </li>
      <li>
        <button class="no-anim" on:click={toggleBot}>{$t('contact.meta.title')}</button>
        <!-- ChatBot -->
      </li>
    </ul>
    <button class="close no-anim" aria-controls="navigation" on:click={toggleExpanded}>
      <Close />
      <span class="visually-hidden">{$t('std.close')} {$t('std.menu')}</span>
    </button>
  </nav>
</header>

<style lang="scss">
  header {
    --padding: 1rem;
    view-transition-name: header;

    display: flex;
    justify-content: flex-end;
    align-items: center;
    gap: clamp(0.5rem, 2vw, 2rem);

    position: sticky;
    top: 0;
    left: 0;
    right: 0;
    margin-bottom: 0;
    padding-block: 1rem;
    backdrop-filter: blur(0.5rem) saturate(1);
    min-height: 10vh;
    transition: transform 0.3s ease-in-out;
    background: rgba(var(--base-100-rgb), 0.85);
    z-index: 10;

    @include mq(lg) {
      --padding: 2rem;
      justify-content: space-between;
      border-radius: 2rem;
      top: 1rem;
      margin-bottom: 2rem;
    }

    &.scrolled {
      transform: translateY(0);
    }

    &.scrolled.scrolled-down {
      transform: translateY(-120%);
    }

    .logo {
      margin-right: auto;
      width: 3rem;
      aspect-ratio: 1;
      z-index: 200;

      @include mq(lg) {
        margin-right: 0;
      }
    }

    .th-sw {
      display: flex;
      gap: clamp(0.5rem, 2vw, 2rem);

      @include mq(lg) {
        order: 3;
        gap: 1rem;
      }
    }

    nav {
      position: absolute;
      height: 100vh;
      width: 100%;
      top: 0;
      left: 0;
      transform: translateX(-100%);
      transition: transform 0.5s ease-in-out;
      background: var(--base-100);
      z-index: 100;

      &[aria-expanded='true'] {
        transform: translateX(0);
      }

      @include mq(xs) {
        border-right: 2px solid var(--primary-200);
        width: 20rem;
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
        padding-block: 8rem;
        height: 100%;
        list-style: none;
        gap: clamp(1rem, 7vw, 2rem);
        color: var(--base-900);

        @include mq(lg) {
          flex-direction: row;
          padding-block: 0;
        }

        li {
          border-radius: 0.75rem;
          transition: background 0.25s ease;
          display: flex;

          &:hover,
          &:focus,
          &:focus-within {
            background: rgba(var(--secondary-500-rgb), 0.4);
          }

          &.active {
            background: rgba(var(--primary-500-rgb), 0.3);
          }

          a,
          button {
            color: var(--base-900);
            padding: 0.75rem 1.5rem;
            background: none;
            font-size: var(--fs-500);
            font-weight: 400;

            @include mq(lg) {
              padding: 0.5rem 1rem;
            }
          }
        }

        .home {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;

          span {
            border: 2px solid rgba(var(--base-800-rgb), 0.9);
            border-radius: 0.5rem;
            aspect-ratio: 1;
            width: 2rem;
            height: 2rem;
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
        padding: 1.5rem;
        background: none;
        height: auto;

        @include mq(lg) {
          display: none;
        }
      }
    }

    button.open {
      background: rgba(var(--base-200-rgb), 0.7);
      padding: 0.5rem;
      border-radius: 0.75rem;

      span.hamburger {
        max-width: 24px;
        max-height: 24px;
        display: block;
      }

      @include mq(lg) {
        display: none;
      }
    }
  }
</style>
