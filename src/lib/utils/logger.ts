import { capitalizeFirstLetter } from './functions';

export const loggerNamespaces = {
	default: {
		color: ''
	},
	motion: {
		color: 'color: rgb(254, 246, 42)'
	}
} as const;

type Namespace = keyof typeof loggerNamespaces;

const whiteBold = 'color: #fff; font-weight: bold;';
const grey = 'color: #bbb;';

export const debug = (namespace: Namespace, message: string) => {
	console.debug(
		`%c[%c${capitalizeFirstLetter(namespace)}%c] %c${message}`,
		whiteBold,
		loggerNamespaces[namespace].color,
		whiteBold,
		grey
	);
};
