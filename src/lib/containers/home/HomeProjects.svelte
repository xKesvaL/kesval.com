<script lang="ts">
	import { route } from '$lib/ROUTES';
	import { highlightedProjects } from '$lib/utils/projects';
	import * as m from '$paraglide/messages';
	import { localizeHref } from '$paraglide/runtime';
	import { IconArrowRight, IconLayersSubtract, IconSparkles } from '@tabler/icons-svelte';
	import { onMount } from 'svelte';
	import { fly } from 'svelte/transition';
	import type { Picture } from 'vite-imagetools';
	import Button from '$lib/components/ui/button/button.svelte';
</script>

<section class="section">
	<div class="kcontainer px-4"></div>
</section>
