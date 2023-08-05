import { browser } from '$app/environment';
import { email } from '$lib/utils/data';
import '$lib/i18n';
import { locale, waitLocale, locales } from 'svelte-i18n';
import type { LayoutLoad } from './$types';
import Cookies from 'js-cookie';

export const load: LayoutLoad = async ({ url, parent }) => {
  if (browser) {
    let paramsLang = url.searchParams.get('lang');
    locales.subscribe((l) => {
      if (!paramsLang || !l.includes(paramsLang)) {
        paramsLang = null;
      } else {
        Cookies.set('lang', paramsLang);
      }
    });

    locale.set(paramsLang || Cookies.get('lang') || window.navigator.language);
  }
  await waitLocale();

  return {
    url: url.pathname,
    email,
  };
};
