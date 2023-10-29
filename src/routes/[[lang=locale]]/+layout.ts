import { browser } from '$app/environment';
import { DEFAULT_LOCALE, type Locale } from '$lib/config';
import { langStore } from '$lib/stores/lang';
import '$lib/utils/i18n';
import { redirect } from '@sveltejs/kit';
import { waitLocale } from 'svelte-i18n';

import type { LayoutLoad } from './$types';

export const load: LayoutLoad = async ({ params }) => {
	const lang = browser
		? localStorage.getItem('lang') || params.lang || DEFAULT_LOCALE
		: params.lang || DEFAULT_LOCALE;

	langStore.set(lang as Locale);

	await waitLocale();

	return {
		lang
	};
};
