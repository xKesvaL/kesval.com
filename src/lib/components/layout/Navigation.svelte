<script>
	import { navigationOpen } from '$lib/stores/common';
	import Image from '../base/Image.svelte';
	import LangSwitcher from './LangSwitcher.svelte';
	import NavigationMenuButton from './NavigationMenuButton.svelte';
	import Settings from './settings/Settings.svelte';
</script>

<header
	class="container-sm container sticky top-0 flex min-h-[4rem] items-center justify-between p-4 backdrop-blur-lg backdrop-saturate-200 lg:top-4 lg:rounded-3xl"
	id="navigation"
>
	<div class="h-12 w-12">
		<Image src="/images/logos/logo.png" alt="KesvaL Logo" />
	</div>
	<div
		class={`fixed left-0 right-0 top-0 min-h-screen bg-primary transition-transform duration-500 lg:relative lg:min-h-0 lg:translate-x-0 ${
			$navigationOpen ? 'translate-x-0' : '-translate-x-full'
		}`}
	>
		mid
	</div>
	<div class="flex items-center gap-2 text-muted-foreground">
		<LangSwitcher />
		<Settings />
		<div class="flex items-center lg:hidden">
			<NavigationMenuButton />
		</div>
	</div>
</header>

<style lang="scss">
	header {
		background: hsl(var(--base-100));
	}
</style>
