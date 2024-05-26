import { browser } from "$app/environment";
import { DEFAULT_SETTINGS, type Settings } from "$lib/config";
import { writable } from "svelte/store";

export const readingSizes = [14, 16, 18, 20, 22, 24] as const;

export const readingHeights = [1.1, 1.3, 1.5, 1.7, 1.9, 2.1] as const;

export const readingLengths = [50, 55, 60, 65, 70, 75, 80] as const;

const createSettingsStore = () => {
	let settings = { ...DEFAULT_SETTINGS };

	if (browser) {
		const settingsString = localStorage.getItem("settings");
		if (settingsString) {
			settings = JSON.parse(settingsString) as Settings;
		}
	}

	const { set, subscribe, update } = writable<Settings>(settings);

	const setSettings = (value: Settings) => {
		set(value);
		if (browser) {
			localStorage.setItem("settings", JSON.stringify(value));
		}
	};

	const resetSettings = () => {
		const newSettings = { ...DEFAULT_SETTINGS, lastReset: Date.now() };
		set(newSettings);
		if (browser) {
			localStorage.setItem("settings", JSON.stringify(newSettings));
		}
	};

	const updateSettings = (fn: (value: Settings) => Settings) => {
		update((val) => {
			const newValue = fn(val);
			if (browser) {
				localStorage.setItem("settings", JSON.stringify(newValue));
			}
			return newValue;
		});
	};

	return {
		reset: resetSettings,
		set: setSettings,
		subscribe,
		update: updateSettings,
	};
};

export const settings = createSettingsStore();
