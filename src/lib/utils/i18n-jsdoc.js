// Import types ONLY - this won't prevent tree-shaking
/** @import * as m from '$paraglide/messages' */

import { getLocale } from '$paraglide/runtime';

/**
 * Contains all exported message functions.
 * @typedef {typeof m} MessageFunctions
 */

// change this internally to use optionsWithDefaults.outputStructure
/**
 * @type {'message-modules' | 'locale-modules'}
 */
const PARAGLIDE_OUTPUT_STRUCTURE = 'message-modules';

/**
 * Translates a message identified by a key, dynamically loading the message function.
 *
 * IntelliSense might not be able to strictly enforce the requiredness of `args` based
 * solely on the `key` in JSDoc, unlike in TypeScript. Refer to the message definitions.
 *
 * @template {keyof MessageFunctions} K - The key of the message to translate.
 * @param {K} key - The message key.
 * @param {Parameters<MessageFunctions[K]>[0]} [args] - Arguments for the message function.
 *   Required if the specific message function corresponding to `K` expects arguments.
 * @param {Parameters<MessageFunctions[K]>[1]} [options] - Optional options for the message function (e.g., language tag).
 * @returns {Promise<string>} A promise that resolves to the translated string, or the key itself if translation fails.
 */
export async function translate(key, args, options) {
	const jsKey = key.replaceAll('.', '_');

	try {
		// --- Locale modules ---
		if (PARAGLIDE_OUTPUT_STRUCTURE === 'locale-modules') {
			const locale = getLocale();

			const module = await import(`$paraglide/messages/${locale}.js`);

			console.log(module);

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

		console.log(module);
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
