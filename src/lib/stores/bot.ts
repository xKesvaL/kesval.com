import type { ChatBot } from '$lib/typings/chatbot';

import { writable } from 'svelte/store';

const createBotStore = () => {
	const { set, subscribe, update } = writable<ChatBot>({
		history: [],
		open: false,
	});

	return {
		set,
		subscribe,
		toggle: () => {
			update((t) => {
				t.open = !t.open;
				return t;
			});
		},
		update,
	};
};

export const bot = createBotStore();
