import type { LayoutLoad } from './$types';

import { languageTag } from '$paraglide/runtime';

export const load: LayoutLoad = async () => {
	const lang = languageTag();

	return {
		lang
	};
};
