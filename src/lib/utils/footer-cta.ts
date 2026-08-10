import { route } from '$lib/ROUTES';
import * as m from '$paraglide/messages';

export type FooterCta = {
	title: string;
	description: string;
	action: string;
	reassurance: string;
	href: string;
};

const defaultCta = (): FooterCta => ({
	title: m['footer.cta.default.title'](),
	description: m['footer.cta.default.description'](),
	action: m['footer.cta.default.action'](),
	reassurance: m['footer.cta.default.reassurance'](),
	href: route('/contact')
});

// Add a route and its message group here when a page needs a tailored closing CTA.
const ctasByRoute: Record<string, () => FooterCta> = {
	[route('/services')]: () => ({
		title: m['footer.cta.services.title'](),
		description: m['footer.cta.services.description'](),
		action: m['footer.cta.services.action'](),
		reassurance: m['footer.cta.services.reassurance'](),
		href: route('/audit-gratuit')
	}),
	[route('/projets')]: () => ({
		title: m['footer.cta.projects.title'](),
		description: m['footer.cta.projects.description'](),
		action: m['footer.cta.projects.action'](),
		reassurance: m['footer.cta.projects.reassurance'](),
		href: route('/contact')
	}),
	[route('/blog')]: () => ({
		title: m['footer.cta.blog.title'](),
		description: m['footer.cta.blog.description'](),
		action: m['footer.cta.blog.action'](),
		reassurance: m['footer.cta.blog.reassurance'](),
		href: route('/contact')
	}),
	[route('/contact')]: () => ({
		title: m['footer.cta.contact.title'](),
		description: m['footer.cta.contact.description'](),
		action: m['footer.cta.contact.action'](),
		reassurance: m['footer.cta.contact.reassurance'](),
		href: route('/audit-gratuit')
	}),
	[route('/audit-gratuit')]: () => ({
		title: m['footer.cta.audit.title'](),
		description: m['footer.cta.audit.description'](),
		action: m['footer.cta.audit.action'](),
		reassurance: m['footer.cta.audit.reassurance'](),
		href: route('/contact')
	})
};

export const getFooterCta = (pathname: string): FooterCta => {
	const match = Object.entries(ctasByRoute).find(
		([path]) => pathname === path || (path !== '/' && pathname.startsWith(`${path}/`))
	);

	return match ? match[1]() : defaultCta();
};
