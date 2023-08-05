import { browser } from '$app/environment';
import { email, langCookieParams } from '$lib/utils/data';
import '$lib/i18n';
import { locale, waitLocale } from 'svelte-i18n';
import type { LayoutLoad } from './$types';
import Cookies from 'js-cookie';

export const load: LayoutLoad = async ({ url, parent }) => {
  if (browser) {
    const paramsLang = url.searchParams.get('lang');
    const lang = paramsLang || Cookies.get('lang') || window.navigator.language || 'en';
    Cookies.set('lang', lang, langCookieParams);
    locale.set(lang);
  }
  await waitLocale();

  return {
    url: url.pathname,
    email,
  };
};
