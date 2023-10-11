// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		interface Locals {
			uid: string;
		}
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
}

export {};
