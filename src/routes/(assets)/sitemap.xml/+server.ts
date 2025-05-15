import { brand } from '$lib/utils/config';
import { getAllPostsLocale } from '$lib/utils/posts';
import { baseLocale, locales, localizeHref, type Locale } from '$paraglide/runtime';

type SitemapEntry = {
	changefreq: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';
	links: Array<{ lang: string; url: string }>;
	loc: string;
	priority: number;
	lastmod: `${number}-${number}-${number}`;
	alternate: Array<{ lang: string; url: string }>;
};

const getBlogSlugs = (locale: Locale) => {
	return getAllPostsLocale(locale).map((post) => post.slug);
};

const localizeUrl = (url: string, locale: Locale) => {
	return localizeHref(url, { locale });
};

const generateSitemapEntries = (urls: string[]): SitemapEntry[] => {
	const sitemapEntries: SitemapEntry[] = [];

	urls.forEach((url) => {
		const entry: SitemapEntry = {
			changefreq: 'monthly',
			links: [],
			loc: url,
			priority: 0.5,
			lastmod: '2024-01-01',
			alternate: []
		};

		locales.forEach((locale) => {
			entry.alternate.push({
				lang: locale,
				url: localizeUrl(url, locale)
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
        xmlns="https://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="https://www.w3.org/1999/xhtml"
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

	console.log(uniqueUrls);

	return new Response(generateSitemapString(generateSitemapEntries(uniqueUrls)).trim(), {
		headers: {
			'Content-Type': 'application/xml'
		}
	});
}

async function GETOLD() {
	const files = import.meta.glob('$routes/**/*.{svelte,md}');
	const urls = Object.keys(files)
		.map((file) => {
			let url = file
				.replace('/src/routes', '')
				.replace('[[lang=locale]]', '')
				.replace('.svelte', '')
				.replace('.md', '')
				.replace('+page', '')
				.replace('+layout', '')
				.replace('+error', '')
				.replace('+server', '')
				.replace('+404', '')
				.replace(/\(([^)]+)\)\//g, '')
				.slice(0, -1);

			if (url.startsWith('//')) {
				url = url.slice(1);
			}
			return `${url}`;
		})
		.filter((url) => url !== '');

	const uniqueUrls = [...new Set(urls)];

	// Generate a sitemap for each locale using the LOCALES variable
	// use the unique urls array to generate the sitemap
	// the unique urls array looks like this:
	// [ '/', '/about', '/blog', '/work' ]
	// the sitemap should include the location, lastmod, changefreq, and priority
	// also include the link to every other locale for each url

	type SitemapEntryOld = {
		changefreq: string;
		links: Array<{ lang: string; url: string }>;
		location: string;
		priority: number;
	};

	const generateSitemap = (): SitemapEntryOld[] => {
		const sitemap: SitemapEntryOld[] = [];

		uniqueUrls.forEach((url) => {
			locales.forEach((locale) => {
				const localeToUse = locale === baseLocale ? '' : '/' + locale;
				const entry: SitemapEntryOld = {
					changefreq: 'monthly',
					links: [],
					location:
						url === '/' ? `${brand.website}${localeToUse}` : `${brand.website}${localeToUse}${url}`,
					priority: 0.5
				};

				locales.forEach((otherLocale) => {
					if (otherLocale !== locale) {
						const otherLocaleToUse = otherLocale === baseLocale ? '' : '/' + otherLocale;
						entry.links.push({
							lang: otherLocale,
							url:
								url === '/'
									? `${brand.website}${otherLocaleToUse}`
									: `${brand.website}${otherLocaleToUse}${url}`
						});
					}
				});

				sitemap.push(entry);
			});
		});

		return sitemap;
	};

	function generateSitemapString(): string {
		const sitemapEntries = generateSitemap();

		let sitemapString = `
        <?xml version="1.0" encoding="UTF-8" ?>
        <urlset
            xmlns="https://www.sitemaps.org/schemas/sitemap/0.9"
            xmlns:xhtml="https://www.w3.org/1999/xhtml"
            xmlns:mobile="https://www.google.com/schemas/sitemap-mobile/1.0"
            xmlns:news="https://www.google.com/schemas/sitemap-news/0.9"
            xmlns:image="https://www.google.com/schemas/sitemap-image/1.1"
            xmlns:video="https://www.google.com/schemas/sitemap-video/1.1">`;

		sitemapEntries.forEach((entry) => {
			sitemapString += `
            <url>
                <loc>${entry.location}</loc>
                <changefreq>${entry.changefreq}</changefreq>
                <priority>${entry.priority}</priority>`;

			entry.links.forEach((link) => {
				sitemapString += `
                <xhtml:link 
                    rel="alternate" 
                    hreflang="${link.lang}" 
                    href="${link.url}" />`;
			});

			sitemapString += `
            </url>`;
		});

		sitemapString += `
        </urlset>`;

		return sitemapString;
	}

	return new Response(generateSitemapString().trim(), {
		headers: {
			'Content-Type': 'application/xml'
		}
	});
}
