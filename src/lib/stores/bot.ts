import type { Chatbot } from '$lib/typings/chatbot';

import { writable } from 'svelte/store';

const createBotStore = () => {
	const { set, subscribe, update } = writable<Chatbot>({
		history: [],
		open: false
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
		update
	};
};

export const bot = createBotStore();
