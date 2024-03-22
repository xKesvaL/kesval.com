<script>
	import Socials from '$lib/components/base/Socials.svelte';
	import * as m from '$paraglide/messages';
</script>

<section class="container flex flex-col gap-8 py-10 lg:gap-16 lg:py-20">
	<h2 class="text-center text-4xl lg:text-5xl">
		{m.about_socials_title()}
	</h2>
	<div class="flex justify-center">
		<Socials vertical={false} gap={4} />
	</div>
</section>
