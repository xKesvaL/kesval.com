export const locales = ['fr', 'en'] as const;

export type Locales = (typeof locales)[number];
export type Locale = Locales;

export const baseLocale = 'fr' satisfies Locale;

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
	{
		pattern: '/a-propos',
		localized: localize({
			fr: '/a-propos',
			en: '/about'
		})
	},
	{
		pattern: '/projets',
		localized: localize({
			fr: '/projets',
			en: '/projects'
		})
	},
	{
		pattern: '/projets/[projectId]',
		localized: localize({
			fr: '/projets/[projectId]',
			en: '/projects/[projectId]'
		})
	},
	{
		pattern: '/:path(.*)?',
		localized: localize({
			fr: '/:path(.*)?',
			en: '/:path(.*)?'
		})
	}
];
