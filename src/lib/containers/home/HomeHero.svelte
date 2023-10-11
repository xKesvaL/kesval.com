<script>
	import { Button } from '$lib/components/ui/button';
	import { theme } from '$lib/stores/theme';
</script>

<section class="section container container-wide">
	<h1>Welcome to SvelteKit</h1>
	<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
	<div>
		<h2>Colors ({$theme}) :</h2>
		<div class="flex flex-wrap gap-4 box bg-neutral-700 p-8 rounded-xl justify-center align-items">
			<div class="bg-background text-foreground">Background</div>
			<div class="bg-muted text-muted-foreground">Muted</div>
			<div class="bg-popover text-popover-foreground">Popover</div>
			<div class="bg-card text-card-foreground">Card</div>
			<div class="bg-border text-foreground">Border</div>
			<div class="bg-primary text-primary-foreground">Primary</div>
			<div class="bg-secondary text-secondary-foreground">Secondary</div>
			<div class="bg-accent text-accent-foreground">Accent</div>
			<div class="bg-destructive text-destructive-foreground">Destructive</div>
			<div class="bg-info text-info-foreground">Info</div>
			<div class="bg-success text-success-foreground">Success</div>
		</div>
	</div>
	<Button on:click={() => theme.toggle()} variant="default">Switch Theme</Button>
</section>

<style lang="scss">
	section {
		background: radial-gradient(
			circle,
			rgba(var(--color-primary-500-rgb), 0.15) 0%,
			rgba(var(--color-base-100-rgb), 0) 60%
		);

		min-height: 90vh;

		.box > div {
			@apply w-32 h-32 rounded-full justify-center items-center flex;
		}
	}
</style>
