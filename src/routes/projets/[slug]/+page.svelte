<script lang="ts">
	import { route } from '$lib/ROUTES';
	import { localizeHref } from '$paraglide/runtime';
</script>

<section class="section-hero flex-col items-center justify-center gap-4 text-center">
	<h1>This page is a work in progress!</h1>
	<p class="text-lg lg:text-xl">
		Sorry for the inconvenience. Go back to the <a
			class="text-primary underline"
			href={localizeHref(route('/projets'))}>projects page</a
		>
	</p>
</section>
