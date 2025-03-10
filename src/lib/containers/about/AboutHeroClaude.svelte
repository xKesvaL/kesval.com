<script lang="ts">
	import * as m from '$paraglide/messages';
	import { fade, fly, scale } from 'svelte/transition';
	import {
		IconBrandGithub,
		IconBrandLinkedin,
		IconMail,
		IconBarbell,
		IconDevices,
		IconRocket
	} from '@tabler/icons-svelte';

	const socialLinks = [
		{ icon: IconBrandGithub, href: 'https://github.com/yourusername', label: 'GitHub' },
		{ icon: IconBrandLinkedin, href: 'https://linkedin.com/in/yourprofile', label: 'LinkedIn' },
		{ icon: IconMail, href: 'mailto:your@email.com', label: 'Email' }
	];

	const identityTags = [
		{ icon: IconRocket, label: 'Entrepreneur' },
		{ icon: IconDevices, label: 'Web & Mobile Dev' },
		{ icon: IconBarbell, label: 'Powerlifter' }
	];
</script>

<!-- Full-width section for gradient background -->
<section class="min-h-screen-wo-nav relative flex flex-col justify-center overflow-hidden">
	<!-- Abstract background element - now full width -->
	<div class="absolute inset-0 -z-10 overflow-hidden">
		<div
			class="from-primary/5 via-secondary/10 to-primary/5 absolute top-0 -right-[40%] h-[80%] w-[80%] rounded-full bg-gradient-to-br blur-3xl"
		></div>
		<div
			class="from-secondary/5 via-primary/10 to-secondary/5 absolute -bottom-[20%] -left-[30%] h-[70%] w-[70%] rounded-full bg-gradient-to-tr blur-3xl"
		></div>
	</div>

	<!-- Content wrapper with kcontainer -->
	<div class="kcontainer px-4">
		<div class="grid grid-cols-1 items-center gap-16 py-12 md:grid-cols-2 md:py-24">
			<!-- Left column: Text content -->
			<div class="flex flex-col gap-6">
				<div class="space-y-2" in:fade={{ duration: 400, delay: 300 }}>
					<p class="text-primary text-sm font-medium tracking-widest uppercase">
						{m.about_me?.() || 'About Me'}
					</p>
					<h1 class="text-4xl leading-tight font-bold md:text-5xl">
						<span
							class="gradient-text from-primary via-primary/80 to-secondary bg-gradient-to-r bg-clip-text text-transparent"
						>
							kesval
						</span>
					</h1>
				</div>

				<div in:fade={{ duration: 400, delay: 600 }}>
					<p class="text-muted-foreground max-w-prose text-lg">
						Young entrepreneur with a passion for creating exceptional digital experiences.
						Specializing in web and mobile development, I bring ideas to life with clean code and
						intuitive design. When I'm not coding, you'll find me powerlifting or enjoying various
						sports - balancing the digital world with physical strength.
					</p>
				</div>

				<div class="mt-2 flex flex-wrap gap-3" in:fade={{ duration: 400, delay: 800 }}>
					{#each identityTags as tag}
						<div
							class="bg-secondary/10 text-secondary-foreground flex items-center gap-1.5 rounded-full px-3 py-1 text-sm"
						>
							<svelte:component this={tag.icon} class="size-3.5" />
							{tag.label}
						</div>
					{/each}
				</div>

				<div class="mt-4 flex flex-wrap gap-4" in:fade={{ duration: 400, delay: 900 }}>
					{#each socialLinks as link}
						<a
							href={link.href}
							class="bg-card text-muted-foreground hover:bg-accent hover:text-foreground flex items-center gap-2 rounded-lg border px-4 py-2 text-sm transition-colors"
							target="_blank"
							rel="noopener noreferrer"
						>
							<svelte:component this={link.icon} class="size-4" />
							{link.label}
						</a>
					{/each}
				</div>
			</div>

			<!-- Right column: Photo frames -->
			<div class="relative h-[400px] md:h-[500px]">
				<!-- Main card -->
				<div
					class="from-card to-background absolute inset-0 overflow-hidden rounded-2xl border bg-gradient-to-br shadow-md"
					in:fly={{ y: 20, duration: 600, delay: 500 }}
				>
					<!-- Photo frames arrangement -->
					<div class="relative grid h-full grid-cols-2 gap-4 p-8">
						<!-- Large primary frame -->
						<div
							class="border-muted bg-muted/40 col-span-2 flex h-48 items-center justify-center overflow-hidden rounded-xl border shadow-sm"
							in:scale={{ delay: 700, duration: 400, start: 0.95 }}
						>
							<div class="text-muted-foreground/70 flex flex-col items-center">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="32"
									height="32"
									viewBox="0 0 24 24"
									fill="none"
									stroke="currentColor"
									stroke-width="1.5"
									stroke-linecap="round"
									stroke-linejoin="round"
									><path d="M15 8h.01" /><path
										d="M6 13v-3a6 6 0 0 1 6-6h6v6a6 6 0 0 1-6 6h-3"
									/><path d="M9 18a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" /></svg
								>
								<span class="mt-2 text-sm">Profile</span>
							</div>
						</div>

						<!-- Smaller frames -->
						<div
							class="border-muted bg-muted/40 flex h-40 -rotate-2 items-center justify-center overflow-hidden rounded-lg border shadow-sm"
							in:scale={{ delay: 800, duration: 400, start: 0.9 }}
						>
							<div class="text-muted-foreground/70 flex flex-col items-center">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="24"
									height="24"
									viewBox="0 0 24 24"
									fill="none"
									stroke="currentColor"
									stroke-width="1.5"
									stroke-linecap="round"
									stroke-linejoin="round"
									><path d="M7 13A5 5 0 0 0 7 3" /><path d="M17 13a5 5 0 0 1 0-10" /><path
										d="M3 21h18"
									/><path d="M12 7v12" /><path d="M16 21v-4" /><path d="M8 21v-4" /></svg
								>
								<span class="mt-1 text-sm">Powerlifting</span>
							</div>
						</div>

						<div
							class="border-muted bg-muted/40 flex h-40 rotate-2 items-center justify-center overflow-hidden rounded-lg border shadow-sm"
							in:scale={{ delay: 900, duration: 400, start: 0.9 }}
						>
							<div class="text-muted-foreground/70 flex flex-col items-center">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="24"
									height="24"
									viewBox="0 0 24 24"
									fill="none"
									stroke="currentColor"
									stroke-width="1.5"
									stroke-linecap="round"
									stroke-linejoin="round"><path d="M22 12h-4l-3 9L9 3l-3 9H2" /></svg
								>
								<span class="mt-1 text-sm">Projects</span>
							</div>
						</div>

						<!-- Decorative elements -->
						<div class="bg-primary/10 absolute top-4 right-4 h-16 w-16 rounded-full blur-md"></div>
						<div
							class="bg-secondary/10 absolute bottom-6 left-6 h-10 w-10 rounded-full blur-md"
						></div>
					</div>
				</div>
			</div>
		</div>
	</div>

	<!-- Scroll indicator -->
	<div class="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
		<div
			class="border-muted-foreground/30 flex size-10 items-center justify-center rounded-full border"
		>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="20"
				height="20"
				viewBox="0 0 24 24"
				fill="none"
				stroke="currentColor"
				stroke-width="2"
				stroke-linecap="round"
				stroke-linejoin="round"
				class="text-muted-foreground/70"
			>
				<path d="M12 5v14"></path>
				<path d="m19 12-7 7-7-7"></path>
			</svg>
		</div>
	</div>
</section>

<style>
	.gradient-text {
		background-size: 200% auto;
		animation: textShine 3s ease-in-out infinite alternate;
	}

	@keyframes textShine {
		0% {
			background-position: 0% center;
		}
		100% {
			background-position: 100% center;
		}
	}
</style>
