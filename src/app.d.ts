// See https://kit.svelte.dev/docs/types#app

import type { SearchParam } from '$lib/config';

// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		interface Locals {
			lang: string;
			uid: string;
		}
		interface PageData {
			lang: string;
		}
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
}

export {};
