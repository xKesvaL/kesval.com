import type { Handle } from '@sveltejs/kit';

import { DEFAULT_LOCALE, type Locale } from '$lib/config';
import { langStore } from '$lib/stores/lang';

export const handle: Handle = async ({ event, resolve }) => {
	let lang =
		event.url.searchParams.get('lang') ||
		event.request.headers.get('accept-language')?.split(',')[0];

	lang = lang?.split('-')[0];

	langStore.set((lang as Locale) || DEFAULT_LOCALE);

	return resolve(event);
};
