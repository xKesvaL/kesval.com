import type { Handle } from '@sveltejs/kit';
import * as cookie from 'cookie';
import { dev } from '$app/environment';

export const handle = (async ({ event, resolve }) => {
  const cookies = cookie.parse(event.request.headers.get('cookie') || '');
  event.locals.userid = cookies['userid'] || crypto.randomUUID();

  const response = await resolve(event);

  if (dev) {
    return response;
  }

  if (!cookies['userid']) {
    const expires = new Date();
    expires.setFullYear(expires.getFullYear() + 1);
    // if this is the first time the user has visited this app,
    // set a cookie so that we recognise them when they return
    response.headers.set(
      'set-cookie',
      cookie.serialize('userid', event.locals.userid, {
        path: '/',
        httpOnly: true,
        secure: true,
        expires,
      }),
    );
  }

  return response;
}) satisfies Handle;
