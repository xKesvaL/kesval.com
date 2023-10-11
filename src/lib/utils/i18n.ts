import { getLocaleFromNavigator, init, register } from 'svelte-i18n';

import { DEFAULT_LOCALE } from '../config';

register('en', () => import('../lang/en.json'));
register('fr', () => import('../lang/fr.json'));

init({
	fallbackLocale: DEFAULT_LOCALE,
	initialLocale: getLocaleFromNavigator() || DEFAULT_LOCALE
});
