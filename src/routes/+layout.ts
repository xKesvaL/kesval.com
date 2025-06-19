import type { MetaTagsProps } from 'svelte-meta-tags';
import { translate } from '$lib/utils/i18n.js';
import { deLocalizeHref } from '$paraglide/runtime.js';
import { brand } from '$lib/utils/config';
import { debug } from '$lib/utils/logger.js';

export const prerender = true;

const dynamicPaths = ['/blog/[slug]', '/projets/[slug]'];

export const load = async ({ url }) => {
	const delocalizedPath = deLocalizeHref(url.pathname).replaceAll(/\//g, '.').replaceAll('-', '_');

	let title: string | undefined;
	// if delocalizedPath has the form of any dynamic path, we need to set title as undefined
	if (
		dynamicPaths.some((path) =>
			delocalizedPath.startsWith(
				path
					.replaceAll(/\//g, '.')
					.replaceAll('-', '_')
					.replace(/\[.*?\]/g, '')
			)
		)
	) {
		title = undefined;
		debug('default', 'Dynamic path detected, title set to undefined');
	} else {
		title = await translate(`meta${delocalizedPath !== '.' ? delocalizedPath : '.home'}.title`);
	}

	const baseMetaTags = Object.freeze({
		title: title,
		titleTemplate: `%s | ${brand.name}`,
		canonical: new URL(url.pathname, url.origin).href,
		robots: url.host !== 'kesval.com' ? 'noindex' : 'index, follow'
	} satisfies MetaTagsProps);

	return {
		baseMetaTags
	};
};
