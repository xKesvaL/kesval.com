<script lang="ts">
	import { SOCIALS } from '$lib/config';
	import IconBrandGithub from '$lib/icons/IconBrandGithub.svelte';
	import IconBrandInstagram from '$lib/icons/IconBrandInstagram.svelte';
	import IconBrandLinkedin from '$lib/icons/IconBrandLinkedin.svelte';

	export let vertical = false;
	export let gap = 6;
</script>

<div class="flex gap-{gap} {vertical ? 'flex-col' : ''}" style="--sc-gp: {gap + 2}">
	<a
		href={SOCIALS.github.url}
		class="aspect-square h-10 w-10 transition-colors duration-200 hover:text-tertiary"
	>
		<IconBrandGithub />
		<div class="sr-only">Github</div>
	</a>
	<a
		href={SOCIALS.instagram.url}
		class="aspect-square h-10 w-10 transition-colors duration-200 hover:text-tertiary"
	>
		<IconBrandInstagram />
		<div class="sr-only">Instagram</div></a
	>
	<a
		href={SOCIALS.linkedin.url}
		class="aspect-square h-10 w-10 transition-colors duration-200 hover:text-tertiary"
	>
		<IconBrandLinkedin />
		<div class="sr-only">LinkedIn</div></a
	>
</div>

<style lang="scss">
	div {
		gap: calc(var(--sc-gp) * 4px);

		a {
			&:hover {
				filter: drop-shadow(0 0 0.4rem hsl(var(--tertiary) / 0.4));
			}
		}
	}
</style>
