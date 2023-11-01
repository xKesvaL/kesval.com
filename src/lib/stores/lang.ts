import { browser } from '$app/environment';
import { DEFAULT_LOCALE, type Locale } from '$lib/config';
import Cookies from 'js-cookie';
import { writable } from 'svelte/store';
import { locale } from 'svelte-i18n';

const createLangStore = () => {
	let currentLang = DEFAULT_LOCALE;

	if (browser) {
		const lang = Cookies.get('lang');
		if (lang) {
			currentLang = lang as Locale;
			locale.set(lang);
		}
	}

	const { set, subscribe } = writable(currentLang);

	const setLang = (lang: Locale) => {
		locale.set(lang);
		if (browser) {
			Cookies.set('lang', lang, {
				expires: 365,
				path: '/'
			});
		}
		set(lang);
	};

	const getUrlForLang = (lang: Locale) => {
		let newUrl = browser ? window.location.pathname : '';
		const currLang = browser ? Cookies.get('lang') || DEFAULT_LOCALE : DEFAULT_LOCALE;

		const currentUrlLang = currLang === DEFAULT_LOCALE ? '' : `/${currLang}`;
		const newUrlLang = lang === DEFAULT_LOCALE ? '' : `/${lang}`;

		newUrl = newUrl.replace(currentUrlLang, newUrlLang);

		return newUrl || '/';
	};

	return {
		getUrlForLang,
		set: setLang,
		subscribe
	};
};

export const langStore = createLangStore();
