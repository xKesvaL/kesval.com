<script lang="ts">
	import * as m from '$paraglide/messages';
</script>

<section class="min-h-screen-wo-nav flex items-center justify-between p-4">
	<div class="flex flex-col gap-4">
		<h1 class="max-w-[30ch] text-5xl leading-snug font-bold">
			{m.home_hero_title()}
		</h1>
		<p class="text-muted-foreground max-w-prose">
			{m.home_hero_subtitle()}
		</p>
	</div>
	<div></div>
</section>
