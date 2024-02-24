import { i18n } from "$lib/utils/i18n";
import { writable } from "svelte/store";

const seoLayouts = ["base", "blog"];

export type SeoLayout = (typeof seoLayouts)[number];

export const createActiveSeoLayout = () => {
	const { subscribe, set } = writable<SeoLayout>("base");

	const handle = (url: URL) => {
		if (i18n.route(url.pathname).startsWith("/blog/")) {
			set("blog");
		} else {
			set("base");
		}
	};

	return {
		subscribe,
		handle,
	};
};

export const activeSeoLayout = createActiveSeoLayout();
