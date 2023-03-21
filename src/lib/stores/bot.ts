import type { ChatBotAnswers } from '$lib';
import { writable } from 'svelte/store';

const createBot = () => {
  const { subscribe, set } = writable<boolean>(false);

  return {
    subscribe,
    set: (value: boolean) => {
      set(value);
    },
  };
};
export const botState = createBot();

export const history = writable<ChatBotAnswers[]>([]);
