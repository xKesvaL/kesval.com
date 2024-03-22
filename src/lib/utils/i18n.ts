import { createI18n } from "@inlang/paraglide-js-adapter-sveltekit";
import * as runtime from "$paraglide/runtime.js";
import * as m from "$paraglide/messages.js";

export const i18n = createI18n(runtime, {
	defaultLanguageTag: "en",
	pathnames: {
		"/about": m.about_path,
		"/work": m.work_path,
		"/blog": m.blog_path,
	},
});
