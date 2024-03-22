import { writable } from "svelte/store";
import { i18n } from "$lib/utils/i18n";

const createNavigationOpenStore = () => {
	const { set, subscribe, update } = writable<boolean>(false);

	return {
		set: (value: boolean) => {
			scrollLocked.set(value);
			set(value);
		},
		subscribe,
		toggle: () => {
			update((t) => {
				scrollLocked.set(!t);
				return !t;
			});
		},
		update,
	};
};

export const navigationOpen = createNavigationOpenStore();

export const scrollLocked = writable<boolean>(false);

const layouts = ["base", "blog"];

export type Layout = (typeof layouts)[number];

export const createLayoutStore = () => {
	const { subscribe, set } = writable<Layout>("base");

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

export const activeLayout = createLayoutStore();
