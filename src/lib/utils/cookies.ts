import type { Locale } from '$paraglide/runtime';
import * as CookieConsent from 'vanilla-cookieconsent';

const GOOGLE_ANALYTICS_ID = 'G-VBZTZPQWJ9';

const enableGoogleAnalytics = () => {
	CookieConsent.loadScript(`https://www.googletagmanager.com/gtag/js?id=${GOOGLE_ANALYTICS_ID}`, {
		async: ''
	});

	window.dataLayer = window.dataLayer || [];
	window.gtag = function () {
		dataLayer.push(arguments);
	};
	gtag('js', new Date());
	gtag('config', GOOGLE_ANALYTICS_ID);
};

const disableGoogleAnalytics = () => {
	gtag('consent', 'update', {
		analytics_storage: 'denied',
		ad_storage: 'denied'
	});
	window[`ga-disable-${GOOGLE_ANALYTICS_ID}`] = true;
};

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
							name: /^_ga/ // regex: match all cookies starting with '_ga'
						},
						{
							name: '_gid' // string: exact cookie name
						}
					]
				},

				// https://cookieconsent.orestbida.com/reference/configuration-reference.html#category-services
				services: {
					ga: {
						label: 'Google Analytics',
						onAccept: enableGoogleAnalytics,
						onReject: disableGoogleAnalytics
					}
				}
			},
			ads: {}
		},

		onConsent: () => {
			if (CookieConsent.acceptedCategory('analytics')) {
				enableGoogleAnalytics();
			}
		},

		onChange: ({ changedCategories }) => {
			if (changedCategories.includes('analytics')) {
				if (CookieConsent.acceptedCategory('analytics')) {
					enableGoogleAnalytics();
				} else {
					disableGoogleAnalytics();
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
