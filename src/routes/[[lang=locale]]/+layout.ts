import { DEFAULT_LOCALE, type Locale } from '$lib/config';
import { langStore } from '$lib/stores/lang';
import '$lib/utils/i18n';
import { waitLocale } from 'svelte-i18n';

import type { LayoutLoad } from './$types';

export const load: LayoutLoad = async ({ data, params, url }) => {
	const owerwriteLang = url.searchParams.get('owlang');

	let lang = data.lang;
	if (owerwriteLang) {
		lang = params.lang || DEFAULT_LOCALE;
	}

	langStore.set(lang as Locale);

	await waitLocale();

	return {
		lang
	};
};
