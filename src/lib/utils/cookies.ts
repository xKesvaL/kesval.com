import type { Locale } from '$paraglide/runtime';
import * as CookieConsent from 'vanilla-cookieconsent';
import posthog from 'posthog-js';

export const getCookiesConfig = (locale: Locale) => {
	const config: CookieConsent.CookieConsentConfig = {
		categories: {
			necessary: {
				enabled: true,
				readOnly: true
			},
			analytics: {
				autoClear: {
					cookies: [
						{
							name: /^ph_/ // regex: match all cookies starting with '_ga'
						}
					]
				},

				// https://cookieconsent.orestbida.com/reference/configuration-reference.html#category-services
				services: {
					posthog: {
						label: 'PostHog'
						// onAccept: posthog.opt_in_capturing,
						// onReject: posthog.opt_out_capturing
					}
				}
			}
		},

		onConsent: () => {
			if (CookieConsent.acceptedCategory('analytics')) {
				console.debug('[POSTHOG] Opt in capturing');
				posthog.opt_in_capturing();
			}
		},

		onChange: ({ changedCategories }) => {
			if (changedCategories.includes('analytics')) {
				if (CookieConsent.acceptedCategory('analytics')) {
					console.debug('[POSTHOG] Opt in capturing');
					posthog.opt_in_capturing();
				} else {
					console.debug('[POSTHOG] Opt out capturing');
					posthog.opt_out_capturing();
				}
			}
		},

		guiOptions: {
			consentModal: {
				layout: 'box inline',
				position: 'bottom left',
				equalWeightButtons: true,
				flipButtons: false
			},
			preferencesModal: {
				layout: 'box',
				equalWeightButtons: true,
				flipButtons: false
			}
		},

		revision: 1, // this is the "version" of the cookie consent

		language: {
			default: locale,
			translations: {
				en: async () => {
					const lang = await fetch('/lang/en-cookies.json');
					return await lang.json();
				},
				fr: async () => {
					const lang = await fetch('/lang/fr-cookies.json');
					return await lang.json();
				}
			}
		}
	};

	return config;
};
