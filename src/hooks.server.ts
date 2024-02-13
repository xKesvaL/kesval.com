import { i18n } from "$lib/utils/i18n";

import { sequence } from "@sveltejs/kit/hooks";

export const handle = sequence(i18n.handle());
