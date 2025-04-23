<script lang="ts">
	import inView from '$lib/actions/inView';
	import * as m from '$paraglide/messages';
	import { getLocale } from '$paraglide/runtime';
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
		}, 1000);
	};
</script>

<section class="kcontainer section-hero min-h-screen justify-center px-4">
	<div class="flex flex-col items-start gap-4 md:col-span-5">
		<div class="flex flex-col gap-8">
			<h1 class="animate-appear big">
				{m['about.hero.title']()}
			</h1>
			<span class="animate-appear text-2xl">
				{m['about.hero.subtitle']()}
			</span>
			<div class="flex flex-col gap-4">
				<p class="text-muted-foreground animate-appear max-w-prose text-lg">
					{m['about.hero.description']()}
				</p>
				<p class="text-muted-foreground animate-appear max-w-prose text-lg">
					{m['about.hero.additional_description']()}
				</p>
			</div>
		</div>
	</div>
	<div
		class="border-border/50 to-muted/10 after:bg-[radial-gradient(circle_at_center,theme(colors.primary.DEFAULT/3%)_0%,transparent_70%),radial-gradient(circle_at_bottom_right,theme(colors.secondary.DEFAULT/2%)_0%,transparent_60%)] shadow-cool relative grid gap-4 rounded-2xl border bg-gradient-to-br from-white via-white px-8 pt-2 pb-8 transition-all duration-300 after:absolute after:inset-0 after:-z-10 after:rounded-2xl after:opacity-40 md:grid-cols-3 md:gap-8"
		use:inView={{}}
		onenter={() => updateValues()}
		style:--animation-appear-delay="0.5"
	>
		<div class="animate-appear flex flex-col items-start gap-2">
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
					{m['about.hero.experience']()}
				</h3>
			</div>
			<p class="text-muted-foreground max-w-prose">
				{m['about.hero.experience_description']()}
			</p>
		</div>
		<div class="animate-appear flex flex-col items-start gap-2">
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
					{m['about.hero.projects']()}
				</h3>
			</div>
			<p class="text-muted-foreground max-w-prose">
				{m['about.hero.projects_description']()}
			</p>
		</div>
		<div class="animate-appear flex flex-col items-start gap-2">
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
					{m['about.hero.clients']()}
				</h3>
			</div>
			<p class="text-muted-foreground max-w-prose">
				{m['about.hero.clients_description']()}
			</p>
		</div>
	</div>
</section>
