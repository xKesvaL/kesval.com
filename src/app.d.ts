// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
import type { LocalStorageKey, SearchParam } from '$lib/config';

declare global {
	namespace App {
		// interface Error {}
		// interface Locals {}
		// interface PageData {}
		// interface Platform {}
	}

	interface ViewTransition {
		finished: Promise<void>;
		ready: Promise<void>;
		skipTransition: () => void;
		updateCallbackDone: Promise<void>;
	}

	interface Document {
		startViewTransition(updateCallback: () => Promise<void>): ViewTransition;
	}

	interface URLSearchParams {
		get(name: SearchParam): null | string;
	}

	interface Storage {
		getItem(key: LocalStorageKey): null | string;
		setItem(key: LocalStorageKey, value: string): void;
	}
}

export {};
