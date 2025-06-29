<script>
	import { onMount } from 'svelte';
	import * as CookieConsent from 'vanilla-cookieconsent';
	import { getCookiesConfig } from '$lib/utils/cookies';
	import 'vanilla-cookieconsent/dist/cookieconsent.css';
	import { getLocale } from '$paraglide/runtime';

	/**
	 * Only run plugin on the client side
	 */
	onMount(() => {
		CookieConsent.run(getCookiesConfig(getLocale()));
	});
</script>
