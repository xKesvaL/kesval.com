import { route } from "$lib/ROUTES.js";
import { redirect } from "@sveltejs/kit";

export const load = async ({ params }) => {
	const fallback = params.fallback;
	const parts = fallback.split("/");

	if (parts[0] === "fr") {
		return redirect(302, route("/"));
	}

	return {
		status: 404,
		message: "Not found",
	};
};

export const prerender = false;
