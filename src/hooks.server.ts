import type { Handle } from '@sveltejs/kit';

import { dev } from '$app/environment';
import * as cookie from 'cookie';

export const handle: Handle = async ({ event, resolve }) => {
	const cookies = cookie.parse(event.request.headers.get('cookie') || '');
	event.locals.uid = cookies['uid'] || crypto.randomUUID();

	const response = await resolve(event);

	if (dev) {
		return response;
	}

	if (!cookies['uid']) {
		const expires = new Date();
		expires.setFullYear(expires.getFullYear() + 1);
		// if this is the first time the user has visited this app,
		// set a cookie so that we recognize them when they return
		response.headers.set(
			'set-cookie',
			cookie.serialize('uid', event.locals.uid, {
				expires,
				httpOnly: true,
				path: '/',
				secure: true
			})
		);
	}

	return response;
};
