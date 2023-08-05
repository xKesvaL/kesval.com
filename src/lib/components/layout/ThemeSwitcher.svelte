<script lang="ts">
  import { theme } from '$lib/stores/theme';
  import { t } from 'svelte-i18n';

  const toggleTheme = () => {
    if ($theme === 'auto') {
      theme.set('light');
    } else if ($theme === 'light') {
      theme.set('dark');
    } else {
      theme.set('auto');
    }
  };
</script>

<noscript>
  <style>
    .theme-switcher {
      display: none !important;
    }
  </style>
</noscript>

<button class="theme-switcher" on:click={toggleTheme} data-theme={$theme} aria-controls="body">
  <svg aria-hidden="true" width="24" height="24" viewBox="0 0 24 24">
    <mask id="moon">
      <rect x="0" y="0" width="100%" height="100%" fill="white" />
      <circle cx="42" cy="6" r="11" fill="black" />
    </mask>
    <circle id="sun" cx="12" cy="12" r="11" mask="url(#moon)" />
    <g id="sun-beams">
      <line x1="12" y1="1" x2="12" y2="3" />
      <line x1="12" y1="21" x2="12" y2="23" />
      <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
      <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
      <line x1="1" y1="12" x2="3" y2="12" />
      <line x1="21" y1="12" x2="23" y2="12" />
      <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
      <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
    </g>
  </svg>
  <span class="visually-hidden">{$theme}</span>
  <span class="label">{$t('std.auto')}</span>
</button>

<style lang="scss">
  @use '$design' as *;

  button {
    color: var(--color-neutral-800);
    display: flex;
    align-items: center;
    background: var(--color-base-200);
    padding: 0.5rem;
    border-radius: var(--border-radius-3);
    transition: background 0.3s ease-out;

    @include mq(lg) {
      background: rgba(var(--color-base-200-rgb), 0.3);
    }
    &:hover,
    &:focus {
      background: rgba(var(--color-accent-500-rgb), 0.4);
    }

    .label {
      transition: all 0.25s ease-in-out;
      text-transform: uppercase;
      font-size: 0.75rem;
      opacity: 0;
      transform-origin: left;
      transform: scaleX(0);
      max-width: 0;
      color: var(--color-neutral-800);
      z-index: 0;
    }

    #moon,
    #sun {
      fill: var(--color-neutral-800);
      stroke: none;
    }

    #sun {
      transition: all 0.25s ease-in-out;
      transform-origin: center center;
    }

    #sun-beams {
      --opacity-duration: 0.15s;
      stroke: var(--color-neutral-800);
      stroke-width: 2px;
      transform-origin: center center;
      transition: all 0.25s cubic-bezier(0.175, 0.885, 0.32, 1.275), opacity var(--opacity-duration) ease-in-out;
    }

    #moon > circle {
      transition: all 0.25s ease-in-out;
    }

    @mixin light-icon {
      & #sun {
        transform: scale(0.5);
      }
      & #sun-beams {
        transform: rotateZ(0.25turn);
        --opacity-duration: 0.5s;
      }
    }

    @mixin dark-icon {
      #sun {
        cx: 14;
      }

      & #moon > circle {
        transform: translateX(-20px);
      }
      & #sun-beams {
        opacity: 0;
      }
    }

    .theme-toggle:not([data-theme]) {
      @include light-icon;
    }

    &[data-theme='auto'] {
      gap: 5px;

      .label {
        opacity: 1;
        transform: scaleX(1);
        max-width: 30px;
      }
      @media not all and (prefers-color-scheme: dark) {
        @include light-icon;
      }
      @media (prefers-color-scheme: dark) {
        @include dark-icon;
      }
    }

    &[data-theme='light'] {
      @include light-icon;
    }

    &[data-theme='dark'] {
      @include dark-icon;
    }
  }
</style>
