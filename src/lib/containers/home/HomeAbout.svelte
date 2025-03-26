<script lang="ts">
	import inView from '$lib/actions/inView';
	import { Button } from '$lib/components/ui/button';
	import { route } from '$lib/ROUTES';
	import { translate } from '$lib/utils/i18n';
	import * as m from '$paraglide/messages';
	import { getLocale, localizeHref } from '$paraglide/runtime';
	import NumberFlow, { continuous } from '@number-flow/svelte';
	import { IconAward, IconClipboardCheck, IconPhotoOff, IconUserStar } from '@tabler/icons-svelte';
	import dayjs from 'dayjs';

	let actualValues = {
		yearsOfExperience: dayjs().diff(dayjs('2022-01-01'), 'year'),
		projects: 11,
		clients: 4
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

<section class="kcontainer section px-4">
	<div class="grid gap-8 md:grid-cols-12 md:gap-16">
		<div class="flex flex-col items-start gap-4 md:col-span-5">
			<div class="flex flex-col gap-2">
				<span class="suptitle">
					{translate('brand.name')}
				</span>
				<h2>
					{translate('home.about.title')}
				</h2>
				<p class="max-w-prose">
					{translate('home.about.description')}
				</p>
			</div>
			<Button href={localizeHref(route('/a-propos'))}>
				{m.about_me()}
			</Button>
		</div>
		<div class="grid grid-cols-3 gap-2 md:col-span-7 md:gap-6">
			<div
				class="bg-muted shadow-cool flex h-full rotate-3 items-center justify-center rounded-lg border p-4 transition hover:scale-110"
			>
				<IconPhotoOff class="size-16" stroke={1} />
			</div>
			<div
				class="bg-muted shadow-cool flex h-full -rotate-3 items-center justify-center rounded-lg border p-4 transition hover:scale-110"
			>
				<IconPhotoOff class="size-16" stroke={1} />
			</div>
			<div
				class="bg-muted shadow-cool flex h-full rotate-3 items-center justify-center rounded-lg border p-4 transition hover:scale-110"
			>
				<IconPhotoOff class="size-16" stroke={1} />
			</div>
		</div>
	</div>
	<div
		class="border-border/50 to-muted/10 after:bg-[radial-gradient(circle_at_center,theme(colors.primary.DEFAULT/3%)_0%,transparent_70%),radial-gradient(circle_at_bottom_right,theme(colors.secondary.DEFAULT/2%)_0%,transparent_60%)] shadow-cool relative grid gap-4 rounded-2xl border bg-gradient-to-br from-white via-white px-8 pt-2 pb-8 backdrop-blur-[1px] transition-all duration-300 after:absolute after:inset-0 after:-z-10 after:rounded-2xl after:opacity-40 md:grid-cols-3 md:gap-8"
		use:inView={{}}
		onenter={() => updateValues()}
	>
		<div class="flex flex-col items-start gap-2">
			<div class="-space-y-4">
				<div class="flex items-center gap-4">
					<NumberFlow
						locales={getLocale()}
						plugins={[continuous]}
						value={values.yearsOfExperience}
						class="text-7xl font-bold md:text-8xl"
					/>
					<IconUserStar class="size-16 md:size-20" stroke={1.5} />
				</div>
				<h3>
					{translate('home.about.experience')}
				</h3>
			</div>
			<p class="text-muted-foreground max-w-prose text-sm">
				{translate('home.about.experience_description')}
			</p>
		</div>
		<div class="flex flex-col items-start gap-2">
			<div class="-space-y-4">
				<div class="flex items-center gap-4">
					<NumberFlow
						locales={getLocale()}
						plugins={[continuous]}
						value={values.projects}
						class="text-7xl font-bold md:text-8xl"
					/>
					<IconClipboardCheck class="size-16 md:size-20" stroke={1.5} />
				</div>
				<h3>
					{translate('home.about.projects')}
				</h3>
			</div>
			<p class="text-muted-foreground max-w-prose text-sm">
				{translate('home.about.projects_description')}
			</p>
		</div>
		<div class="flex flex-col items-start gap-2">
			<div class="-space-y-4">
				<div class="flex items-center gap-4">
					<NumberFlow
						locales={getLocale()}
						plugins={[continuous]}
						value={values.clients}
						class="text-7xl font-bold md:text-8xl"
					/>
					<IconAward class="size-16 md:size-20" stroke={1.5} />
				</div>
				<h3>
					{translate('home.about.clients')}
				</h3>
			</div>
			<p class="text-muted-foreground max-w-prose text-sm">
				{translate('home.about.clients_description')}
			</p>
		</div>
	</div>
</section>
