<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import { route } from '$lib/ROUTES';
	import * as m from '$paraglide/messages';
	import { localizeHref } from '$paraglide/runtime';
</script>

<section class="kcontainer flex flex-col gap-8 px-4 py-12">
	<div class="flex justify-between">
		<div class="flex flex-col gap-2">
			<span class="text-primary text-xs tracking-widest uppercase">
				{m.brand_name()}
			</span>
			<h2 class="text-3xl font-medium">
				{m.home_stats_title()}
			</h2>
			<p>desc</p>
			<Button href={localizeHref(route('/a-propos'))}>
				{m.about_me()}
			</Button>
		</div>
		<div>imgs</div>
	</div>
	<div class="grid grid-cols-3 rounded-2xl border p-4"></div>
</section>
