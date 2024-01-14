import {sequence} from "@sveltejs/kit/hooks";
import * as Sentry from "@sentry/sveltekit";
import { sourceLanguageTag, type AvailableLanguageTag } from "$paraglide/runtime"


Sentry.init({
    dsn: "https://6feb3ad608f30022aa1bc11958536856@o4506571645190144.ingest.sentry.io/4506571646238720",
    tracesSampleRate: 1
})

export const handleError = Sentry.handleErrorWithSentry();

export const handle = sequence(Sentry.sentryHandle(), async function _handle({ event, resolve }) {
				const lang: AvailableLanguageTag =
								(event.params.lang as AvailableLanguageTag) ?? sourceLanguageTag


				return await resolve(event, {
								transformPageChunk({ done, html }) {
												if (done) {
																return html.replace("%lang%", lang);
												}
								},
				})
});