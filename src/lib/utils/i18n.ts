import {
	sourceLanguageTag,
	availableLanguageTags,
	type AvailableLanguageTag
} from '$paraglide/runtime';

/**
 * Takes in a path with or without a language tag and returns the path with the given language tag.
 * @returns
 */
export function translatePath(path: string, lang: AvailableLanguageTag) {
	path = getPathWithoutLang(path);

	//Don't prefix with the source language tag, that's the default
	if (lang === sourceLanguageTag) return path;
	//Otherwise, prefix with the language tag
	else return `/${lang}${path}`;
}

/**
 * Removes the language tag from the path, if it exists.
 */
function getPathWithoutLang(path: string) {
	const [, maybeLang, ...rest] = path.split('/');
	if (availableLanguageTags.includes(maybeLang)) return `/${rest.join('/')}`;
	else return path;
}
