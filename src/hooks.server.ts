import type { Handle } from '@sveltejs/kit';
import { locale } from 'svelte-i18n';

export const handle: Handle = async ({ event, resolve }) => {
  let lang = event.url.searchParams.get('lang') || event.request.headers.get('accept-language')?.split(',')[0];
  lang = lang?.split('-')[0];
  if (lang) {
    locale.set(lang);
  }
  return resolve(event);
};
