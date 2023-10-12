<script>
	import Image from '../base/Image.svelte';
	import ThemeSwitcher from './ThemeSwitcher.svelte';
</script>

<header
	class="min-h-[4rem] sticky top-4 container p-4 container-sm bg-muted/80 backdrop-blur-lg backdrop-saturate-200 rounded-3xl flex justify-between items-center"
>
	<div class="w-12 h-12">
		<Image src="/images/logos/logo.png" alt="KesvaL Logo" />
	</div>
	<div>mid</div>
	<div>
		<ThemeSwitcher />
	</div>
</header>
