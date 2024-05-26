export interface Brand {
	author: BrandAuthor;
	color: BrandColors;
	logo: BrandLogo;
	name: string;
	url: string;
	shortUrl: string;
}

export interface BrandLogo {
	dark: string;
	light: string;
}

export interface BrandAuthor {
	name: string;
	url: string;
}

export interface Route {
	path: string;
}

export type BrandColors = Record<BrandColor, string>;

export type BrandColor = 'primary' | 'secondary';

export type ThemeColor =
	| 'tertiary'
	| 'background'
	| 'card'
	| 'destructive'
	| 'info'
	| 'muted'
	| 'popover'
	| 'success'
	| BrandColor;

export type ThemeSize = 'sm' | 'md' | 'lg';

export interface FormattedZodError {
	[key: string]: {
		message: string;
	};
}
