import { route } from '$lib/ROUTES';
import { brand } from '$lib/utils/config';
import { getAllContent } from '$lib/utils/content';
import { baseLocale, locales, localizeHref, type Locale } from '$paraglide/runtime';

type SitemapEntry = {
	changefreq: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';
	loc: string;
	priority: number;
	lastmod?: string;
	alternate: Array<{ lang: string; url: string }>;
};

// replace [slug] with every slug in the slugs array
const generateBlogSitemapEntries = (url: string) => {
	const posts = getAllContent('posts');

	const baseLocalePosts = posts.filter((post) => post.locale === baseLocale);

	return baseLocalePosts
		.map((post) => {
			if (!post.slugClean) {
				return null;
			}

			const postsInOtherLocales = posts.filter((p) => p.uniqueId === post.uniqueId);

			const alternate = postsInOtherLocales
				.map((p) => {
					if (!p.slugClean) {
						return null;
					}

					return {
						lang: p.locale,
						url: `${brand.website}${localizeHref(route('/blog/[slug]', { slug: p.slugClean }), {
							locale: p.locale
						})}`
					};
				})
				.filter((p) => p !== null);

			return {
				changefreq: 'monthly',
				alternate: alternate,
				loc: `${brand.website}${url.replace('[slug]', post.slugClean)}`,
				priority: 0.5,
				lastmod: post.updatedAt ? new Date(post.updatedAt).toISOString().split('T')[0] : undefined
			} satisfies SitemapEntry;
		})
		.filter((p) => p !== null);
};

const localizeUrl = (url: string, locale: Locale) => {
	return localizeHref(url, { locale });
};

const generateSitemapEntries = (urls: string[]): SitemapEntry[] => {
	const sitemapEntries: SitemapEntry[] = [];

	urls.forEach((url) => {
		const matchesSlug = url.match(/\/blog\/([^/]+)/);

		if (matchesSlug) {
			const entries = generateBlogSitemapEntries(url);
			sitemapEntries.push(...entries);
			return;
		}

		const entry: SitemapEntry = {
			changefreq: 'monthly',
			loc: `${brand.website}${url}`,
			priority: 0.5,
			lastmod: '2024-01-01',
			alternate: []
		};

		locales.forEach((locale) => {
			entry.alternate.push({
				lang: locale,
				url: `${brand.website}${localizeUrl(url, locale)}`
			});
		});

		sitemapEntries.push(entry);
	});

	return sitemapEntries;
};

const generateSitemapString = (sitemapEntries: SitemapEntry[]): string => {
	let sitemapString = `
    <?xml version="1.0" encoding="UTF-8" ?>
    <urlset
        xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml"
        xmlns:mobile="https://www.google.com/schemas/sitemap-mobile/1.0"
        xmlns:news="https://www.google.com/schemas/sitemap-news/0.9"
        xmlns:image="https://www.google.com/schemas/sitemap-image/1.1"
        xmlns:video="https://www.google.com/schemas/sitemap-video/1.1">`;

	sitemapEntries.forEach((entry) => {
		sitemapString += `
    <url>
        <loc>${entry.loc}</loc>
        <changefreq>${entry.changefreq}</changefreq>
        <priority>${entry.priority}</priority>`;

		if (entry.lastmod) {
			sitemapString += `<lastmod>${entry.lastmod}</lastmod>`;
		}

		entry.alternate.forEach((alternate) => {
			sitemapString += `
        <xhtml:link rel="alternate" hreflang="${alternate.lang}" href="${alternate.url}" />`;
		});

		sitemapString += `
    </url>`;
	});

	sitemapString += `
    </urlset>`;

	return sitemapString;
};

export async function GET() {
	const files = import.meta.glob('$routes/**/+{page.svelte,server.ts}');
	const urls = Object.keys(files)
		.map((file) => {
			const url = file
				.replaceAll('/src/routes', '')
				.replaceAll('+page.svelte', '')
				.replaceAll('+server.ts', '')
				// This removes layout groups that are in parenthesis but keeps url
				.replace(/\(([^)]+)\)\//g, '')
				// This removes the last slash
				.slice(0, -1);

			return url;
		})
		.filter((url) => url !== '');

	const uniqueUrls = [...new Set(urls)];

	const sitemapEntries = generateSitemapEntries(uniqueUrls);
	const sitemapString = generateSitemapString(sitemapEntries);

	return new Response(sitemapString.trim(), {
		headers: {
			'Content-Type': 'application/xml'
		}
	});
}
