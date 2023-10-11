import type { FormattedZodError } from '$lib/typings/standard';
import type { ZodError } from 'zod';

export const capitalizeFirstLetter = (str: string) => {
	return str.charAt(0).toUpperCase() + str.slice(1);
};

export const formatZodError = (error: ZodError): FormattedZodError => {
	return error.errors.reduce((acc, curr) => {
		if (curr.path.length === 0 || curr.path[0] === undefined) {
			return acc;
		}

		acc[curr.path[0]] = {
			message: curr.message
		};

		return acc;
	}, {} as FormattedZodError);
};
