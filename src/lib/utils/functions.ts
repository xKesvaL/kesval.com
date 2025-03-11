export const capitalizeFirstLetter = (str: string) => {
	return str.charAt(0).toUpperCase() + str.slice(1);
};

export const getFlagEmoji = (countryCode: string) => {
	return [...countryCode.toUpperCase()]
		.map((char) => String.fromCodePoint(127397 + char.charCodeAt(0)))
		.reduce((a, b) => a + b);
};
