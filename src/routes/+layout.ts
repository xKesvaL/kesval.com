import { browser } from '$app/environment';
import { email } from '$lib/utils/data';
import '$lib/i18n';
import { locale, waitLocale } from 'svelte-i18n';
import type { LayoutLoad } from './$types';

export const load: LayoutLoad = async ({ url, parent }) => {
  await waitLocale();

  return {
    url,
    email,
  };
};
