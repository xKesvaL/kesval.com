<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import { route } from '$lib/ROUTES';
	import * as m from '$paraglide/messages';
	import { setLocale } from '$paraglide/runtime';
</script>

<section
	class="min-h-screen-wo-nav flex flex-col-reverse items-center justify-between p-4 lg:flex-row"
>
	<div class="flex grow flex-col gap-4">
		<h1 class="max-w-[30ch] text-3xl leading-snug font-bold md:text-4xl lg:text-5xl">
			{m.home_hero_title()}
		</h1>
		<p class="text-muted-foreground max-w-prose">
			{m.home_hero_subtitle({ brand: m.brand_name() })}
		</p>
		<div class="mt-4 flex gap-2">
			<Button href={route('/')}>
				{m.hire_me()}
			</Button>
			<Button href={route('/')} variant="outline">
				{m.my_resume()}
			</Button>
		</div>
	</div>
	<div>img</div>
</section>
