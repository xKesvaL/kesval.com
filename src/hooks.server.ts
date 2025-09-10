import type { Handle, HandleServerError } from "@sveltejs/kit";
import { paraglideMiddleware } from "$lib/paraglide/server";
import { sequence } from "@sveltejs/kit/hooks";
import { POSTHOG_PROXY_URL } from "$lib/utils/config";

// creating a handle to use the paraglide middleware
const paraglideHandle: Handle = ({ event, resolve }) =>
	paraglideMiddleware(
		event.request,
		({ request: localizedRequest, locale }) => {
			event.request = localizedRequest;
			return resolve(event, {
				transformPageChunk: ({ html }) => {
					return html.replace("%lang%", locale);
				},
			});
		},
	);

const posthogHandle: Handle = async ({ event, resolve }) => {
	const { pathname } = event.url;

	if (pathname.startsWith(POSTHOG_PROXY_URL)) {
		// Determine target hostname based on static or dynamic ingestion
		const hostname = pathname.startsWith(`${POSTHOG_PROXY_URL}/static/`)
			? "eu-assets.i.posthog.com" // change us to eu for EU Cloud
			: "eu.i.posthog.com"; // change us to eu for EU Cloud

		// Build external URL
		const url = new URL(event.request.url);
		url.protocol = "https:";
		url.hostname = hostname;
		url.port = "443";
		url.pathname = pathname.replace(`${POSTHOG_PROXY_URL}/`, "");

		// Clone and adjust headers
		const headers = new Headers(event.request.headers);
		headers.set("Accept-Encoding", "");
		headers.set("host", hostname);

		// Proxy the request to the external host
		const response = await fetch(url.toString(), {
			method: event.request.method,
			headers,
			body: event.request.body,
			duplex: "half",
		});

		return response;
	}

	const response = await resolve(event);
	return response;
};

export const handle = sequence(posthogHandle, paraglideHandle);

export const handleError: HandleServerError = async ({ error, message }) => {
	console.error("Server error:", error);

	return {
		message: `Error: ${message}`,
	};
};
