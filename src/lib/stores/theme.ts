import type { Theme } from '$lib/config';

import { browser } from '$app/environment';
import { writable } from 'svelte/store';

export const DEFAULT_THEME = 'auto';

const createTheme = () => {
	let currentTheme;
	if (browser) {
		currentTheme = localStorage.getItem('theme') || DEFAULT_THEME;
	}

	const { set, subscribe, update } = writable<string>(currentTheme || DEFAULT_THEME);

	const setTheme = (theme: string) => {
		if (browser) {
			localStorage.setItem('theme', theme);
			document.firstElementChild?.setAttribute('data-theme', theme);
		}
		set(theme);

		return theme;
	};

	return {
		set: (value: Theme) => {
			setTheme(value);
		},
		subscribe,
		toggle: () => {
			update((t) => {
				if (t === 'dark') {
					return setTheme('light');
				} else if (t === 'light') {
					return setTheme('auto');
				} else {
					return setTheme('dark');
				}
			});
		}
	};
};

export const theme = createTheme();
