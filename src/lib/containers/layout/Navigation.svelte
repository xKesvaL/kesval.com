<script>
	import { page } from '$app/stores';
	import { navigationOpen } from '$lib/stores/common';
	import LangSwitcher from '../../components/layout/LangSwitcher.svelte';
	import NavigationMenuButton from '../../components/layout/NavigationMenuButton.svelte';
	import Settings from '../../components/layout/settings/Settings.svelte';
	import { bot } from '$lib/stores/bot';
	import { route } from '$lib/ROUTES';

	import * as m from '$lib/paraglide/messages';

	let pathWithoutlang = $page.url.pathname.replace(`/${$page.params.lang}`, '') || '/';
	$: pathWithoutlang = $page.url.pathname.replace(`/${$page.params.lang}`, '') || '/';
</script>

<header
	class="container-sm container sticky top-0 z-10 flex min-h-[4rem] items-center justify-between p-4 backdrop-blur-lg backdrop-saturate-200 lg:top-4 lg:rounded-3xl"
	id="navigation"
	style="view-transition-name: header"
>
	<a href={route('/')} class="relative h-12 w-12">
		<!-- <enhanced:img src="../../../assets/images/logos/logo.png" alt="KesvaL Logo" /> -->
	</a>
	<div
		class={`nav fixed left-0 right-0 top-0 z-50 flex min-h-screen flex-col items-start justify-center gap-10 overflow-hidden bg-primary p-12 text-5xl font-bold text-white transition-transform duration-500 lg:relative lg:min-h-0 lg:translate-x-0 lg:flex-row lg:bg-transparent lg:p-0 lg:text-2xl lg:font-normal lg:text-foreground ${
			$navigationOpen ? 'translate-x-0' : '-translate-x-full'
		}`}
		style="view-transition-name: header-nav"
	>
		<a
			class="rounded-md px-4 py-2 transition-colors duration-200 hover:bg-accent/40 {pathWithoutlang ===
			route('/')
				? 'bg-primary/40 hover:bg-primary/40'
				: ''} "
			on:click={() => navigationOpen.set(false)}
			href={route('/')}
		>
			{m.home_name()}
		</a>
		<a
			class="rounded-md px-4 py-2 transition-colors duration-200 hover:bg-accent/40 {pathWithoutlang.startsWith(
				route('/about'),
			)
				? 'bg-primary/40 hover:bg-primary/40'
				: ''} "
			on:click={() => navigationOpen.set(false)}
			href={route('/about')}
		>
			{m.about_name()}
		</a>
		<a
			class="rounded-md px-4 py-2 transition-colors duration-200 hover:bg-accent/40 {pathWithoutlang.startsWith(
				route('/work'),
			)
				? 'bg-primary/40 hover:bg-primary/40'
				: ''} "
			on:click={() => navigationOpen.set(false)}
			href={route('/work')}
		>
			{m.work_name()}
		</a>
		<a
			class="rounded-md px-4 py-2 transition-colors duration-200 hover:bg-accent/40 {pathWithoutlang.startsWith(
				route('/blog'),
			)
				? 'bg-primary/40 hover:bg-primary/40'
				: ''} "
			on:click={() => navigationOpen.set(false)}
			href={route('/blog')}
		>
			{m.blog_name()}
		</a>
		<button
			class="rounded-md px-4 py-2 transition-colors duration-200 hover:bg-accent/40 {$bot.open
				? 'bg-primary/40 hover:bg-primary/40'
				: ''} "
			on:click={() => {
				navigationOpen.set(false);
				bot.toggle();
			}}
		>
			{m.contact_name()}
		</button>
	</div>
	<div class="flex items-center gap-2 text-muted-foreground">
		<LangSwitcher />
		<Settings />
		<div class="relative z-50 flex items-center lg:hidden">
			<NavigationMenuButton />
		</div>
	</div>
</header>

<style lang="scss">
	header {
		background: hsl(var(--base-100));

		.nav {
			a,
			button {
				position: relative;
				padding: 0.5rem 1rem;
			}
		}
	}
</style>
