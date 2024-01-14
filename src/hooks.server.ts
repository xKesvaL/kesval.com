import { sourceLanguageTag, type AvailableLanguageTag } from "$paraglide/runtime"


export async function handle({ event, resolve }) {
	const lang: AvailableLanguageTag =
		(event.params.lang as AvailableLanguageTag) ?? sourceLanguageTag


	return await resolve(event, {
		transformPageChunk({ done, html }) {
			if (done) {
				return html.replace("%lang%", lang);
			}
		},
	})
}