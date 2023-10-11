import { browser } from '$app/environment';
import { writable } from 'svelte/store';

const createTheme = () => {
	let currentTheme;
	if (browser) {
		currentTheme = localStorage.getItem('theme') || 'auto';
	}

	const { set, subscribe, update } = writable<string>(currentTheme);

	const setTheme = (theme: string) => {
		if (browser) {
			localStorage.setItem('theme', theme);
			document.firstElementChild?.setAttribute('data-theme', theme);
		}
		set(theme);

		return theme;
	};

	return {
		set: (value: string) => {
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
