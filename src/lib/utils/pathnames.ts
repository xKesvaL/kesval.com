export const locales = ['fr', 'en'] as const;

export const baseLocale = 'fr' satisfies Locale;

export type Locales = (typeof locales)[number];
export type Locale = Locales;

type LocalizeOptions = Record<Locale, string>;

export const localize = (options: LocalizeOptions): Array<[Locale, string]> => {
	// Ensure that the baseLocale is always at the end of the array
	return Object.entries(options)
		.map(([locale, path]) => {
			if (locale === baseLocale) {
				return [locale as Locale, path];
			}

			return [locale as Locale, `/${locale}${path}`];
		})
		.sort((a, b) => a[0].localeCompare(b[0]));
};

export type UrlPatterns = Array<{
	pattern: string;
	localized: Array<[Locale, string]>;
}>;

export const urlPatterns: UrlPatterns = [
	// SERVICES
	{
		pattern: '/services',
		localized: localize({
			fr: '/services',
			en: '/services'
		})
	},
	{
		pattern: '/services/agences',
		localized: localize({
			fr: '/services/agences',
			en: '/services/agencies'
		})
	},
	{
		pattern: '/services/applications-web',
		localized: localize({
			fr: '/services/applications-web',
			en: '/services/web-applications'
		})
	},
	{
		pattern: '/services/automatisation',
		localized: localize({
			fr: '/services/automatisation',
			en: '/services/automation'
		})
	},
	{
		pattern: '/services/design',
		localized: localize({
			fr: '/services/design',
			en: '/services/design'
		})
	},
	{
		pattern: '/services/maintenance',
		localized: localize({
			fr: '/services/maintenance',
			en: '/services/maintenance'
		})
	},
	{
		pattern: '/services/site-vitrine',
		localized: localize({
			fr: '/services/site-vitrine',
			en: '/services/website'
		})
	},
	// PROJECTS
	{
		pattern: '/projets',
		localized: localize({
			fr: '/projets',
			en: '/projects'
		})
	},
	{
		pattern: '/projets/[slug]',
		localized: localize({
			fr: '/projets/[slug]',
			en: '/projects/[slug]'
		})
	},
	// BLOG
	{
		pattern: '/blog',
		localized: localize({
			fr: '/blog',
			en: '/blog'
		})
	},
	{
		pattern: '/blog/[slug]',
		localized: localize({
			fr: '/blog/[slug]',
			en: '/blog/[slug]'
		})
	},
	// CONTACT
	{
		pattern: '/contact',
		localized: localize({
			fr: '/contact',
			en: '/contact'
		})
	},
	// EVERY OTHER
	{
		pattern: '/:path(.*)?',
		localized: localize({
			fr: '/:path(.*)?',
			en: '/:path(.*)?'
		})
	}
];
