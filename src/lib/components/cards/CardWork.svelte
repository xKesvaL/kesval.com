<script lang="ts">
	import type { Project } from '$lib/data/work';
	import { formatDate, getI18n } from '$lib/utils/functions';
	import * as m from '$paraglide/messages';
	import CardGlass from './CardGlass.svelte';

	export let project: Project;
</script>

<CardGlass classes="w-full" classBg="gap-4" href={project.href}>
	<header class="flex items-center gap-4">
		<img
			class="h-10 w-10"
			src={project.imageUrl}
			alt={m.common_logo_of({ brand: getI18n(`projects_${project.name}_name`) })}
		/>
		<h2 class="text-2xl">
			{getI18n(`projects_${project.name}_name`)}
		</h2>
	</header>
	<hr />
	<p>
		{getI18n(`projects_${project.name}_excerpt`)}
	</p>
	<footer class="mt-auto flex items-end justify-between">
		<span class="rounded-lg border bg-primary/15 px-2 py-1 text-xs">
			{formatDate(project.startDate, { format: 'short' })}
		</span>
		<div class="ml-auto flex items-center gap-4">
			<span
				class="category rounded-lg border px-2 py-1 text-xs"
				style={`--cat-bg-color: ${project.category.colorType === 'custom' ? project.category.color : `hsl(var(--${project.category.color}) / 0.15)`}`}
			>
				{getI18n(`category_${project.category.name}`)}
			</span>
		</div>
	</footer>
</CardGlass>

<style lang="scss">
	.category {
		--cat-bg-color: hsl(var(--primary) / 0.1);
		--cat-bd-color: hsl(var(--border));
		background: var(--cat-bg-color);
		border-color: var(--cat-bd-color);
	}
</style>
