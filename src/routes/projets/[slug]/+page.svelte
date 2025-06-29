<script lang="ts">
	import { route } from '$lib/ROUTES';
	import { localizeHref } from '$paraglide/runtime';
	import * as m from '$paraglide/messages';
</script>

<section
	class="section-hero kcontainer flex-col items-center justify-center gap-4 px-4 text-center"
>
	<h1 class="h2">{m['projects.wip.title']()}</h1>
	<p class="text-lg lg:text-xl">
		{m['projects.wip.description']()}
		<a class="text-primary underline" href={localizeHref(route('/projets'))}
			>{m['projects.wip.projects_page']()}</a
		>
	</p>
</section>
