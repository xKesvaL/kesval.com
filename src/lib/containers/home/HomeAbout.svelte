<section class="container-wide container flex flex-col justify-center gap-8 py-12">
	<h2 class="text-center text-4xl lg:text-5xl">Me, Myself and I</h2>
	<div class="flex flex-col gap-8 lg:flex-row">
		<div class="flex-grow">
			<h3 class="font-sans font-bold">Texte</h3>
			<p>Texte</p>
			<h3 class="font-sans font-bold">Texte</h3>
			<p>Texte</p>
		</div>
		<div class="grid flex-grow grid-cols-2 grid-rows-2 gap-4">
			<div class="glass rounded-lg p-4"></div>
			<div class="glass rounded-lg p-4"></div>
			<div class="glass rounded-lg p-4"></div>
			<div class="glass rounded-lg p-4"></div>
		</div>
	</div>
</section>

<style lang="scss">
	section.container {
		.glass {
			background: radial-gradient(
					circle at 28% 37%,
					hsl(var(--primary-300) / 0.15),
					transparent 75%
				),
				radial-gradient(circle at 70% 66%, hsl(var(--secondary-300) / 0.15), transparent 75%),
				hsl(var(--base-200) / 1);
		}
	}
</style>
