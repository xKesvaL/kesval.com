<script lang="ts">
	import ResumeName from './ResumeName.svelte';
</script>

<div
	class="p-4 rounded-lg shadow-xl bg-muted max-w-[51rem] flex-1 resume h-96 grid gap-1 grid-cols-1 lg:grid-cols-[3fr,2fr] grid-rows-4"
>
	<ResumeName />
</div>

<style lang="scss">
	.resume {
		background-image: radial-gradient(
				at 30% 30%,
				hsl(var(--primary) / 0.1) 0%,
				hsl(var(--primary) / 0) 100%
			),
			radial-gradient(at 70% 70%, hsl(var(--primary) / 0.1) 0%, hsl(var(--primary) / 0) 100%);

		grid-template-areas:
			'photo'
			'name'
			'about'
			'skills'
			'work'
			'education';

		@media (min-width: 1024px) {
			grid-template-areas:
				'name photo'
				'work about'
				'work skills'
				'work education';
		}
	}
</style>
