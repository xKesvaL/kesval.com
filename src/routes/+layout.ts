import type { MetaTagsProps } from 'svelte-meta-tags';
import { translate } from '$lib/utils/i18n.js';
import { deLocalizeHref, extractLocaleFromUrl, locales, localizeHref } from '$paraglide/runtime.js';
import { brand, POSTHOG_PROXY_URL, team } from '$lib/utils/config';
import { debug } from '$lib/utils/logger.js';
import { browser } from '$app/environment';
import posthog from 'posthog-js';

export const prerender = true;

const dynamicPaths = ['/blog/[slug]', '/projets/[slug]'];

export const load = async ({ url }) => {
	if (browser) {
		posthog.init('phc_t72sdBRlmwUrtvqvNR1tjEjdryM1qjeS1ely6eeHI95', {
			api_host: POSTHOG_PROXY_URL,
			ui_host: 'https://eu.posthog.com',
			defaults: '2025-05-24',
			person_profiles: 'always',
			// TODO: MAKE COOKIE BANNER WORK WITH THIS
			persistence: 'localStorage',
			cookieless_mode: 'on_reject'
		});
	}

	const delocalizedPath = deLocalizeHref(url.pathname).replaceAll(/\//g, '.').replaceAll('-', '_');

	// let isDynamicPath = false;

	let title: string | undefined = undefined;
	let description: string | undefined = undefined;
	let images: [{ url: string }] | undefined = undefined;
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
		// isDynamicPath = true;
		debug('default', 'Dynamic path detected, title set to undefined');
	} else {
		title = await translate(`meta${delocalizedPath !== '.' ? delocalizedPath : '.home'}.title`);
		description = await translate(
			`meta${delocalizedPath !== '.' ? delocalizedPath : '.home'}.description`
		);
		images = [{ url: '/og-image.png' }];
	}

	const baseMetaTags = Object.freeze({
		title: title,
		titleTemplate: `%s | ${brand.name}`,
		description: description,
		canonical: new URL(url.pathname, url.origin).href,
		robots: url.host === 'dev.kesval.com' ? 'noindex' : 'index, follow',
		openGraph: {
			title: title,
			description: description,
			locale: extractLocaleFromUrl(url.href),
			siteName: brand.name,
			url: new URL(url.pathname, url.origin).href,
			type: 'website',
			images: images
		},
		twitter: {
			creator: `${team.jordan.name} "${brand.nameShort}"`,
			creatorId: '@xKesvaL',
			description: description,
			site: brand.urlShort,
			title: title,
			cardType: 'summary',
			image: images?.[0]?.url
		},
		languageAlternates: locales.map((locale) => {
			return {
				hrefLang: locale,
				href: localizeHref(url.pathname, {
					locale
				})
			};
		})
	} satisfies MetaTagsProps);

	return {
		baseMetaTags
	};
};
