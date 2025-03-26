// import type { MetaTagsProps } from 'svelte-meta-tags';
// import { translate } from '$lib/utils/i18n.js';
// import { deLocalizeHref } from '$paraglide/runtime.js';

export const prerender = true;

// export const load = ({ url }) => {
// 	const delocalizedPath = deLocalizeHref(url.pathname).replaceAll(/^\//g, '.').replaceAll('-', '_');

// 	const baseMetaTags = Object.freeze({
// 		title: translate(`meta.${delocalizedPath !== '.' ? delocalizedPath : 'home'}.title`),
// 		titleTemplate: `%s | ${translate('brand.name_short')}`,
// 		canonical: new URL(url.pathname, url.origin).href
// 	}) satisfies MetaTagsProps;

// 	return {
// 		baseMetaTags
// 	};
// };
