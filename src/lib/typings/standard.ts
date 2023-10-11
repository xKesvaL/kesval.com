export interface Brand {
	author: BrandAuthor;
	logo: BrandLogo;
	name: string;
	url: string;
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

export type ThemeColor =
	| 'accent'
	| 'background'
	| 'card'
	| 'destructive'
	| 'info'
	| 'muted'
	| 'popover'
	| 'primary'
	| 'secondary'
	| 'success';

// eslint-disable-next-line perfectionist/sort-union-types
export type ThemeSize = 'sm' | 'md' | 'lg';

export interface FormattedZodError {
	[key: string]: {
		message: string;
	};
}
