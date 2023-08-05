<script lang="ts">
  import { getFlagEmoji } from '$lib/utils/functions';
  import { locale, locales } from 'svelte-i18n';
  import Cookies from 'js-cookie';
  import { langCookieParams } from '$lib/utils/data';

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
    Cookies.set('lang', e.currentTarget.value, langCookieParams);
    locale.set(e.currentTarget.value);
  }}>
  {#each $locales as lang, i}
    <option value={lang} selected={i === $locales.indexOf($locale || 'en')}>
      {getFlagEmoji(transformLocaleToFlag(lang))}
    </option>
  {/each}
</select>

<style lang="scss">
  @use '$design' as *;

  select {
    background: none;
    display: flex;
    align-items: center;
    justify-content: center;
    appearance: none;
    border: none;
    padding: 0.5rem;
    line-height: 1.1;
    border-radius: var(--border-radius-3);
    font-family: 'Twemoji Country Flags', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
      Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    background: var(--color-base-200);
    transition: background 0.3s ease-out;

    @include mq(lg) {
      background: rgba(var(--color-base-200-rgb), 0.3);
    }

    &:hover {
      background: rgba(var(--color-accent-500-rgb), 0.4);
    }

    &:focus {
      outline: none;
      background: rgba(var(--color-accent-500-rgb), 0.4);
    }

    &:focus-visible {
      outline: 2px solid currentColor;
    }

    option {
      background: var(--color-base-300);

      &:hover {
        background: var(--color-accent-500);
      }
    }
  }
</style>
