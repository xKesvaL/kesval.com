<script lang="ts">
	import { page } from '$app/state';
	import { GOOGLE_ANALYTICS_ID } from '$lib/utils/config';

	$effect(() => {
		if (typeof gtag !== 'undefined') {
			gtag('config', GOOGLE_ANALYTICS_ID, {
				page_title: document.title,
				page_path: page.url.pathname
			});
		}
	});
</script>

<svelte:head>
	<script async src={`https://www.googletagmanager.com/gtag/js?id=${GOOGLE_ANALYTICS_ID}`}>
	</script>
	<script>
		window.dataLayer = window.dataLayer || [];

		function gtag() {
			dataLayer.push(arguments);
		}

		gtag('js', new Date());
		gtag('config', `${GOOGLE_ANALYTICS_ID}`);
	</script>
</svelte:head>
