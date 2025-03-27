// Import types ONLY - this won't prevent tree-shaking
import type * as m from '$paraglide/messages';
import { getLocale } from '$paraglide/runtime';

type MessageFunctions = typeof m;
type Inputs<K extends keyof MessageFunctions> = Parameters<MessageFunctions[K]>[0];
type Options<K extends keyof MessageFunctions> = Parameters<MessageFunctions[K]>[1];

// Type to filter keys based on whether they require arguments
type KeysWithRequiredArgs<T> = {
	[K in keyof T]: object extends Parameters<T[K]>[0] ? never : K;
}[keyof T];

type KeysWithOptionalArgs<T> = {
	[K in keyof T]: object extends Parameters<T[K]>[0] ? K : never;
}[keyof T];

// Overload for messages that require args
export async function translate<K extends KeysWithRequiredArgs<MessageFunctions>>(
	key: K,
	args: Inputs<K>,
	options?: Options<K>
): Promise<ReturnType<MessageFunctions[K]>>;

// Overload for messages that don't require args
export async function translate<K extends KeysWithOptionalArgs<MessageFunctions>>(
	key: K,
	args?: Inputs<K>,
	options?: Options<K>
): Promise<ReturnType<MessageFunctions[K]>>;

// change this internally to use optionsWithDefaults.outputStructure
const PARAGLIDE_OUTPUT_STRUCTURE: 'message-modules' | 'locale-modules' = 'message-modules';

export async function translate<K extends keyof MessageFunctions>(
	key: K,
	args?: Inputs<K>,
	options?: Options<K>
): Promise<string> {
	const jsKey = key.replaceAll('.', '_');

	try {
		// --- Locale modules ---
		if (PARAGLIDE_OUTPUT_STRUCTURE === 'locale-modules') {
			const locale = getLocale();

			const module = await import(`$paraglide/messages/${locale}.js`);

			if (module && typeof module[jsKey] === 'function') {
				const messageFn = module[jsKey];

				return messageFn(args, options);
			}

			console.error(
				`[translate] Message key "${key}" not found or not a function in locale module "${locale}".`
			);
			return key;
		}

		// --- Messages modules ---
		const module = await import(`../paraglide/messages/${jsKey}.js`);

		if (module && typeof module[key] === 'function') {
			const messageFn = module[key];

			return messageFn(args, options);
		}

		console.error(`[paraglide] Message key "${key}" loaded, but 'module[key]' is not a function.`);
		return key;
	} catch (error) {
		console.error(`[paraglide] Failed to load message for key "${key}":`, error);
		return key;
	}
}
