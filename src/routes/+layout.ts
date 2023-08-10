import '$lib/i18n';
import { email } from '$lib/utils/data';
import { waitLocale } from 'svelte-i18n';
import type { LayoutLoad } from './$types';

export const load: LayoutLoad = async ({ url, parent }) => {
  await waitLocale();

  return {
    url,
    email,
  };
};
