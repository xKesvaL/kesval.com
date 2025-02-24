<script lang="ts">
	import NavigationMobileButton from './NavigationMobileButton.svelte';
</script>

<nav
	class="gradient-border bg-background fixed right-4 bottom-4 left-4 z-50 h-16 rounded-2xl backdrop-blur-2xl"
>
	<div class="bg-background flex h-full w-full items-center justify-between rounded-[15px] p-3">
		<enhanced:img src="$assets/logo.png" alt="An alt text" class="size-10 rounded-lg" />
		<NavigationMobileButton />
	</div>
</nav>
