<script>
	import { route } from '$lib/ROUTES';
	import CardGlass from '$lib/components/cards/CardGlass.svelte';
	import { Button } from '$lib/components/ui/button';
	import { PERSONAL } from '$lib/data/personal';

	import * as m from '$paraglide/messages';
	import { languageTag } from '$paraglide/runtime';
</script>

<section class="container-sm section flex flex-col justify-center">
	<h2 class="text-center text-4xl lg:text-5xl">
		{m.home_about_title()}
	</h2>
	<div class="flex flex-col gap-12">
		<div class="grid gap-8 lg:grid-cols-2 lg:items-center lg:gap-16">
			<div class="flex flex-col gap-4">
				<h3 class="mb-2 hidden font-sans text-4xl font-bold lg:flex">
					{m.home_about_passionate()}
				</h3>
				<p class="text-lg lg:text-xl">
					{m.home_about_descriptions_0()}
				</p>
				<p class="text-lg lg:text-xl">
					{m.home_about_descriptions_1()}
				</p>
			</div>
			<div class="grid grid-cols-2 grid-rows-2 gap-4">
				<CardGlass>
					<span class="font-sans font-bold text-6xl"> {PERSONAL.yearsOfExperience} </span>
					<p class="lg:text-xl">
						{m.common_years_of_experience_slf()}
					</p>
				</CardGlass>
				<CardGlass>
					<span class="font-sans font-bold text-6xl"> 05 </span>
					<p class="lg:text-xl">
						{m.home_about_projectsDelivered()}
					</p></CardGlass
				>
				<CardGlass>
					<span class="font-sans font-bold text-6xl"> 02 </span>
					<p class="lg:text-xl">
						{m.home_about_professionalExperiences()}
					</p></CardGlass
				>
				<CardGlass>
					<span class="font-sans font-bold text-6xl"> 08 </span>
					<p class="lg:text-xl">
						{m.home_about_openSourceContributions()}
					</p></CardGlass
				>
			</div>
		</div>
		<Button class="mx-auto lg:ml-auto lg:mr-0" href={route('/about')}>
			{m.home_about_button()}
		</Button>
	</div>
</section>
