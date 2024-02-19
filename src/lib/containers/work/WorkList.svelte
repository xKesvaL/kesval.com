<script lang="ts">
	import * as m from '$paraglide/messages';
	import { PROJECTS } from '$lib/data/work';

	import CardWork from '$lib/components/cards/CardWork.svelte';
</script>

<section class="section container flex flex-col items-center">
	<h1 class="text-4xl lg:text-5xl">
		{m.work_name()} - KesvaL
	</h1>
	<div class="grid w-full grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
		{#each PROJECTS as project}
			<CardWork {project} />
		{/each}
	</div>
</section>
