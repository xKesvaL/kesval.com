import * as m from '$paraglide/messages';

type MessageFunctions = typeof m;
type Inputs<K extends keyof MessageFunctions> = Parameters<MessageFunctions[K]>[0];
type Options<K extends keyof MessageFunctions> = Parameters<MessageFunctions[K]>[1];

export const translate = <K extends keyof typeof m>(
	key: K,
	args?: Inputs<K>,
	options?: Options<K>
) => {
	if (key && key in m) {
		return m[key as keyof typeof m](args as never, options);
	}

	return key;
};
