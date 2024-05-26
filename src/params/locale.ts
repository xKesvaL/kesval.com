import type { ParamMatcher } from '@sveltejs/kit';

import { isAvailableLanguageTag } from '$paraglide/runtime';

export const match: ParamMatcher = (param) => {
	return isAvailableLanguageTag(param);
};
