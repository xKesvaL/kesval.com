/**
 * Formats a given date into a string.
 * @param date The date to format (string or Date object).
 * @param locale The locale to use for formatting. Defaults to 'en-US'.
 * @returns A formatted date string (e.g., "May 16, 2025").
 */
export const formatDate = (date: string | Date, locale: string = 'en-US'): string => {
	const dateObj = typeof date === 'string' ? new Date(date) : date;
	return new Intl.DateTimeFormat(locale, {
		year: 'numeric',
		month: 'long',
		day: 'numeric'
	}).format(dateObj);
};
