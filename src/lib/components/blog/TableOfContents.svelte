<script lang="ts">
  // Most of the code comes from https://github.com/janosh/svelte-toc/
  // I just wanted to have my own file to be able to modify it deeply

  import IconList from '$lib/icons/IconList.svelte';
  import { onMount } from 'svelte';
  import { blur } from 'svelte/transition';

  export let autoHide = true;
  export let activeHeading: HTMLHeadingElement | null = null;
  export let activeHeadingScrollOffset = 100;
  export let activeTocLi: HTMLLIElement | null = null;

  export let breakpoint: 480 | 600 | 720 | 1024 | 1280 = 1024;

  export let desktop = true;

  export let flashClickedHeadingsFor = 1000;
  export let getHeadingIds = (node: HTMLHeadingElement): string => node.id;
  export let getHeadingLevels = (node: HTMLHeadingElement): number => Number(node.nodeName[1]); // get the number from H1, H2, ...
  export let getHeadingTitles = (node: HTMLHeadingElement): string => node.textContent?.replace('#', '') ?? ``;
  export let headings: HTMLHeadingElement[] = [];
  export let headingSelector = `.prose :is(h2, h3, h4):not(.toc-exclude)`;
  export let hide = false;
  export let keepActiveTocItemInView = true;

  export let minItems = 0;

  export let open = false;
  export let openButtonLabel = `Open table of contents`;

  export let pageBody: HTMLElement | string = `body`;

  export let title = `Table of contents`;

  export let titleTag: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' = `h2`;
  export let tocItems: HTMLLIElement[] = [];
  export let warnOnEmpty = true;

  let windowWidth: number;

  let aside: HTMLElement;
  let nav: HTMLElement;

  $: levels = headings.map(getHeadingLevels);
  $: minLevel = Math.min(...levels);
  $: desktop = windowWidth >= breakpoint;

  let y: number;
  let scrolled = false;

  let prevScroll = 0;

  let scrollDirection: 'up' | 'down' = 'up';

  $: scrolled = y > 0;

  $: {
    if (y >= 128 && y > prevScroll) {
      scrollDirection = 'down';
    } else if (y < prevScroll) {
      scrollDirection = 'up';
    }
    prevScroll = y;
  }

  const close = (event: MouseEvent) => {
    if (!aside.contains(event.target as Node)) open = false;
  };

  const requeryHeadings = () => {
    if (typeof document === `undefined`) return;
    headings = [...document.querySelectorAll(headingSelector)] as HTMLHeadingElement[];
    setActiveHeading();
    if (headings.length === 0) {
      if (warnOnEmpty) {
        console.warn(`No headings found for selector "${headingSelector}". Hiding TOC.`);
      }
      if (autoHide) hide = true;
    } else if (hide && autoHide) {
      hide = false;
    }
  };

  let scrollId: number;
  const setActiveHeading = () => {
    let idHead = headings.length;
    while (idHead--) {
      const { top } = headings[idHead].getBoundingClientRect();

      // loop through headings from last to first until we find one that the viewport already
      // scrolled past. if none is found, set make first heading active
      if (top < activeHeadingScrollOffset || idHead === 0) {
        activeHeading = headings[idHead];
        activeTocLi = tocItems[idHead];

        clearTimeout(scrollId);
        scrollId = window.setTimeout(() => {
          if (keepActiveTocItemInView && activeTocLi) {
            nav.scrollTo({
              top: activeTocLi.offsetTop - nav.offsetHeight / 2,
              behavior: `smooth`,
            });
          }
        }, 50);
        return;
      }
    }
  };

  const handler = (node: HTMLHeadingElement) => (event: MouseEvent | KeyboardEvent) => {
    if (event instanceof KeyboardEvent && ![`Enter`, ` `].includes(event.key)) return;
    open = false;
    node.scrollIntoView({ behavior: `smooth`, block: 'start' });

    const id = getHeadingIds && getHeadingIds(node);
    if (id) history.replaceState({}, '', `#${id}`);

    if (flashClickedHeadingsFor) {
      node.classList.add(`toc-clicked`);
      setTimeout(() => node.classList.remove(`toc-clicked`), flashClickedHeadingsFor);
    }
  };

  onMount(() => {
    if (typeof pageBody === `string`) {
      pageBody = document.querySelector(pageBody) as HTMLElement;

      if (!pageBody) {
        throw new Error(`Could not find page body element: ${pageBody}`);
      }
    }
    const mutation_observer = new MutationObserver(requeryHeadings);
    mutation_observer.observe(pageBody, { childList: true, subtree: true });
    return () => mutation_observer.disconnect();
  });
</script>

<svelte:window bind:innerWidth={windowWidth} on:scroll|passive={setActiveHeading} on:click={close} bind:scrollY={y} />

<aside
  class:desktop
  class:hidden={hide}
  class={scrollDirection === 'up' ? '' : 'retracted'}
  class:mobile={!desktop}
  bind:this={aside}
  hidden={hide}
  aria-hidden={hide}>
  {#if !open && !desktop && headings.length >= minItems}
    <button on:click|preventDefault|stopPropagation={() => (open = true)} aria-label={openButtonLabel}>
      <slot name="open-toc-icon">
        <IconList />
      </slot>
    </button>
  {/if}
  {#if open || (desktop && headings.length >= minItems)}
    <nav transition:blur|local bind:this={nav}>
      {#if title}
        <slot name="title">
          <svelte:element this={titleTag} class="toc-title toc-exclude">
            {title}
          </svelte:element>
        </slot>
      {/if}
      <ol>
        {#each headings as heading, idx}
          <!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
          <li
            style:margin-left="{levels[idx] - minLevel}em"
            style:font-size="{2 - 0.2 * (levels[idx] - minLevel)}ex"
            class:active={activeHeading === heading}
            on:click={handler(heading)}
            on:keyup={handler(heading)}
            bind:this={tocItems[idx]}>
            <slot name="toc-item" {heading} {idx}>
              {getHeadingTitles(heading)}
            </slot>
          </li>
        {/each}
      </ol>
    </nav>
  {/if}
</aside>

<style lang="scss">
  @use '$design' as *;

  aside {
    overflow-wrap: break-word;
    height: max-content;
    z-index: 1;
    transition: transform 0.3s ease-in-out;

    &.desktop {
      position: sticky;
      top: 1rem;
      transform: translateY(10vh);

      &.retracted {
        transform: translateY(0);
      }
    }

    &.mobile {
      position: fixed;
      bottom: 1rem;
      left: 1rem;
      z-index: 6;

      nav {
        left: 0;
        background: linear-gradient(135deg, rgba(var(--color-accent-500-rgb), 0.02), rgba(var(--color-base-200-rgb), 0)),
          linear-gradient(315deg, rgba(var(--color-accent-500-rgb), 0.02), rgba(var(--color-base-200-rgb), 0)),
          radial-gradient(rgba(var(--color-base-200-rgb), 1), rgba(var(--color-base-200-rgb), 1));
      }
    }

    nav {
      overflow: auto scroll;
      overscroll-behavior: contain;
      max-height: 90vh;
      padding: 1rem;
      position: relative;
      border: 1px solid rgba(var(--color-primary-900-rgb), 0.3);
      border-radius: $border-radius-2;
      background: linear-gradient(135deg, rgba(var(--color-primary-500-rgb), 0.02), rgba(var(--color-base-200-rgb), 0)),
        linear-gradient(315deg, rgba(var(--color-primary-500-rgb), 0.02), rgba(var(--color-base-200-rgb), 0)),
        radial-gradient(rgba(var(--color-base-200-rgb), 0.1), rgba(var(--color-base-200-rgb), 0.1));

      ol {
        list-style: none;
        padding: 0;

        li {
          cursor: pointer;
          margin-block: 0.2rem;
          padding: 0.25rem 0.5rem;
          border-radius: $border-radius-2;
          transition: 0.3s;

          &:hover {
            color: var(--color-accent-500);
          }

          &.active {
            background: linear-gradient(
                135deg,
                rgba(var(--color-primary-500-rgb), 0.2),
                rgba(var(--color-base-200-rgb), 0.5)
              ),
              linear-gradient(315deg, rgba(var(--color-secondary-500-rgb), 0.2), rgba(var(--color-base-200-rgb), 0.5)),
              linear-gradient(0deg, rgba(var(--color-accent-500-rgb), 0.2), rgba(var(--color-base-200-rgb), 0.5)),
              radial-gradient(rgba(var(--color-base-200-rgb), 0.3), rgba(var(--color-base-200-rgb), 0.3));
          }
        }
      }
    }

    button {
      position: absolute;
      bottom: 0.25rem;
      left: 0;
      cursor: pointer;
      z-index: 2;
      padding: 0.5rem;
      border-radius: $border-radius-full;
      width: 3.75rem;
      background: var(--color-base-200);
      transition: 0.3s;
      display: grid;
      place-items: center;

      &:hover {
        scale: 1.1;
      }
    }

    .toc-title {
      font-size: var(--fs-600);
      margin-top: 0;
      margin-bottom: 1rem;
    }
  }
</style>
