import type { ParamMatcher } from '@sveltejs/kit';

import { LOCALES } from '$lib/config';

export const match: ParamMatcher = (param) => {
	return LOCALES.includes(param);
};
