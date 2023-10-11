import { DEFAULT_LOCALE, type Locale } from '$lib/config';
import { langStore } from '$lib/stores/lang';
import '$lib/utils/i18n';
import { waitLocale } from 'svelte-i18n';

import type { LayoutLoad } from './$types';

export const load: LayoutLoad = async ({ params }) => {
	const lang = params.lang || DEFAULT_LOCALE;

	langStore.set(lang as Locale);

	await waitLocale();

	return {
		lang
	};
};
