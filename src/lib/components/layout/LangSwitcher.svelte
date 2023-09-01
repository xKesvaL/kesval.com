<script lang="ts">
  import { getFlagEmoji } from '$lib/utils/functions';
  import { locale, locales } from 'svelte-i18n';

  const transformLocaleToFlag = (locale: string) => {
    switch (locale) {
      case 'en':
        return 'US';
      default:
        return locale;
    }
  };
</script>

<select
  on:change={(e) => {
    localStorage.setItem('lang', e.currentTarget.value);
    locale.set(e.currentTarget.value);
  }}
  class="no-anim">
  {#each $locales as lang, i}
    <option value={lang} selected={i === $locales.indexOf($locale || localStorage?.getItem('lang') || 'en')}>
      {getFlagEmoji(transformLocaleToFlag(lang))}
    </option>
  {/each}
</select>

<style lang="scss">
  select {
    background: none;
    display: flex;
    align-items: center;
    justify-content: center;
    appearance: none;
    border: none;
    padding: 0.5rem;
    line-height: 1.1;
    border-radius: 0.75rem;
    text-align: center;
    font-family:
      'Twemoji Country Flags',
      system-ui,
      -apple-system,
      BlinkMacSystemFont,
      'Segoe UI',
      Roboto,
      Oxygen,
      Ubuntu,
      Cantarell,
      'Open Sans',
      'Helvetica Neue',
      sans-serif;
    background: var(--base-200);
    transition: background 0.3s ease-out;
    height: auto;
    font-size: var(--fs-500);
    aspect-ratio: 1;
    width: 2.5rem;
    background: rgba(var(--base-200-rgb), 0.7);

    &:hover {
      background: rgba(var(--secondary-500-rgb), 0.4);
    }

    &:focus {
      outline: none;
      background: rgba(var(--secondary-500-rgb), 0.4);
    }

    &:focus-visible {
      outline: 2px solid currentColor;
    }

    option {
      background: var(--base-200);
    }
  }
</style>
