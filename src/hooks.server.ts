import type { Handle } from '@sveltejs/kit';

import { dev } from '$app/environment';
import { DEFAULT_LOCALE } from '$lib/config';

export const handle: Handle = async ({ event, resolve }) => {
	event.locals.uid = event.cookies.get('uid') || crypto.randomUUID();

	const lang =
		event.cookies.get('lang') ||
		event.request.headers.get('accept-language')?.split(',')[0]?.split('-')[0] ||
		DEFAULT_LOCALE;

	event.locals.lang = lang;

	const response = await resolve(event);

	if (dev) {
		return response;
	}

	if (!event.cookies.get('uid')) {
		const expires = new Date();
		expires.setFullYear(expires.getFullYear() + 1);
		// if this is the first time the user has visited this app,
		// set a cookie so that we recognize them when they return
		event.cookies.set('uid', event.locals.uid, {
			expires,
			httpOnly: true,
			path: '/',
			secure: true
		});
	}

	return response;
};
