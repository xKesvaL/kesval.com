<script lang="ts">
	import inView from '$lib/actions/inView';
	import { Button } from '$lib/components/ui/button';
	import { route } from '$lib/ROUTES';
	import * as m from '$paraglide/messages';
	import { localizeHref } from '$paraglide/runtime';
	import NumberFlow from '@number-flow/svelte';
	import { IconAward, IconClipboardCheck, IconUserStar } from '@tabler/icons-svelte';
	import dayjs from 'dayjs';

	let actualValues = {
		yearsOfExperience: dayjs().diff(dayjs('2022-01-01'), 'year'),
		projects: 13,
		clients: dayjs().diff(dayjs('2004-10-14'), 'year')
	};

	let values = $state({
		yearsOfExperience: 0,
		projects: 0,
		clients: 0
	});

	const updateValues = () => {
		setTimeout(() => {
			values = actualValues;
		}, 500);
	};
</script>

<section class="kcontainer flex flex-col gap-8 px-4 py-12">
	<div class="flex justify-between">
		<div class="flex flex-col gap-2">
			<span class="text-primary text-xs tracking-widest uppercase">
				{m.brand_name()}
			</span>
			<h2 class="text-3xl font-medium">
				{m.home_about_title()}
			</h2>
			<p>desc</p>
			<Button href={localizeHref(route('/a-propos'))}>
				{m.about_me()}
			</Button>
		</div>
		<div>imgs</div>
	</div>
	<div
		class="grid grid-cols-3 gap-8 rounded-2xl border px-8 pt-2 pb-8"
		use:inView={{}}
		onenter={() => updateValues()}
	>
		<div class="flex flex-col -space-y-4">
			<div class="flex items-center gap-4">
				<NumberFlow value={values.yearsOfExperience} class="text-7xl font-bold" />
				<IconUserStar class="size-16" stroke={2.5} />
			</div>
			<h2 class="text-3xl font-medium">
				{m.home_about_experience()}
			</h2>
		</div>
		<div class="flex flex-col -space-y-4">
			<div class="flex items-center gap-4">
				<NumberFlow value={values.projects} class="text-7xl font-bold" />
				<IconClipboardCheck class="size-16" stroke={2.5} />
			</div>
			<h2 class="text-3xl font-medium">
				{m.home_about_projects()}
			</h2>
		</div>
		<div class="flex flex-col -space-y-4">
			<div class="flex items-center gap-4">
				<NumberFlow value={values.clients} class="text-7xl font-bold" />
				<IconAward class="size-16" stroke={2.5} />
			</div>
			<h2 class="text-3xl font-medium">
				{m.home_about_clients()}
			</h2>
		</div>
	</div>
</section>
