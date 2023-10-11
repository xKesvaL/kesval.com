import type { Brand, Route } from './typings/standard';

export const DEFAULT_LOCALE: Locale = 'en';

export const BRAND = {
	author: {
		name: 'KesvaL',
		url: 'https://kesval.com'
	},
	logo: {
		dark: '/images/logos/logo.png',
		light: '/images/logos/logo.png'
	},
	name: 'Starter',
	url: 'https://starter.kesval.com'
} as const satisfies Brand;

export const ROUTES = {
	home: {
		path: '/'
	}
} as const satisfies Record<string, Route>;

export const LOCALES = ['en', 'fr'] as const;

export type Locale = (typeof LOCALES)[number];
