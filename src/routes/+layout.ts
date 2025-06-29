import type { MetaTagsProps } from 'svelte-meta-tags';
import { translate } from '$lib/utils/i18n.js';
import { deLocalizeHref, extractLocaleFromUrl, locales, localizeHref } from '$paraglide/runtime.js';
import { brand, team } from '$lib/utils/config';
import { debug } from '$lib/utils/logger.js';

export const prerender = true;

const dynamicPaths = ['/blog/[slug]', '/projets/[slug]'];

export const load = async ({ url }) => {
	const delocalizedPath = deLocalizeHref(url.pathname).replaceAll(/\//g, '.').replaceAll('-', '_');

	let title: string | undefined;
	let description: string | undefined;
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
		description = undefined;
		debug('default', 'Dynamic path detected, title set to undefined');
	} else {
		title = await translate(`meta${delocalizedPath !== '.' ? delocalizedPath : '.home'}.title`);
		description = await translate(
			`meta${delocalizedPath !== '.' ? delocalizedPath : '.home'}.description`
		);
	}

	const baseMetaTags = Object.freeze({
		title: title,
		titleTemplate: `%s | ${brand.name}`,
		description: description,
		canonical: new URL(url.pathname, url.origin).href,
		robots: url.host !== 'kesval.com' ? 'noindex' : 'index, follow',
		openGraph: {
			title: title,
			description: description,
			locale: extractLocaleFromUrl(url.href),
			siteName: brand.name,
			url: new URL(url.pathname, url.origin).href,
			type: 'website'
		},
		twitter: {
			creator: `${team.jordan.name} "${brand.nameShort}"`,
			creatorId: '@xKesvaL',
			description: description,
			site: brand.urlShort,
			title: title,
			cardType: 'summary'
		},
		languageAlternates: locales.map((locale) => {
			return {
				hrefLang: locale,
				href: localizeHref(url.pathname, { locale: extractLocaleFromUrl(url.href) })
			};
		})
	} satisfies MetaTagsProps);

	return {
		baseMetaTags
	};
};
