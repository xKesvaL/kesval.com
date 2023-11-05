<script lang="ts">
	import { SOCIALS } from '$lib/config';
	import IconBrandGithub from '$lib/icons/IconBrandGithub.svelte';
	import IconBrandInstagram from '$lib/icons/IconBrandInstagram.svelte';
	import IconBrandLinkedin from '$lib/icons/IconBrandLinkedin.svelte';

	export let vertical = false;
</script>

<div class="flex gap-6 lg:gap-8 {vertical ? 'flex-col' : ''}">
	<a
		href={SOCIALS.github.url}
		class="aspect-square h-10 w-10 transition-colors duration-200 hover:text-accent"
	>
		<IconBrandGithub />
		<div class="sr-only">Github</div>
	</a>
	<a
		href={SOCIALS.instagram.url}
		class="aspect-square h-10 w-10 transition-colors duration-200 hover:text-accent"
	>
		<IconBrandInstagram />
		<div class="sr-only">Instagram</div></a
	>
	<a
		href={SOCIALS.linkedin.url}
		class="aspect-square h-10 w-10 transition-colors duration-200 hover:text-accent"
	>
		<IconBrandLinkedin />
		<div class="sr-only">LinkedIn</div></a
	>
</div>
