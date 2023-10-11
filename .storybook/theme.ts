import { create } from '@storybook/theming/create';
import { BRAND } from '../src/lib/config';

export default create({
	base: 'dark',

	brandTitle: BRAND.name,
	brandUrl: BRAND.url,
	brandImage: BRAND.logo.dark,

	colorPrimary: BRAND.color.primary,
	colorSecondary: BRAND.color.secondary
});
