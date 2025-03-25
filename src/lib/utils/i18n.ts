import * as m from '$paraglide/messages';

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
export function translate<K extends KeysWithRequiredArgs<MessageFunctions>>(
	key: K,
	args: Inputs<K>,
	options?: Options<K>
): ReturnType<MessageFunctions[K]>;

// Overload for messages that don't require args
export function translate<K extends KeysWithOptionalArgs<MessageFunctions>>(
	key: K,
	args?: Inputs<K>,
	options?: Options<K>
): ReturnType<MessageFunctions[K]>;

// Implementation
export function translate<K extends keyof typeof m>(
	key: K,
	args?: Inputs<K>,
	options?: Options<K>
) {
	if (key && key in m) {
		return m[key as keyof typeof m](args as never, options);
	}

	return key;
}
