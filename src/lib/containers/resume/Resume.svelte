<script lang="ts">
	import ResumeRightSide from './ResumeRightSide.svelte';
	import ResumeHeader from './ResumeHeader.svelte';
	import ResumeLeftSide from './ResumeLeftSide.svelte';
</script>

<div
	class="resume relative flex w-full max-w-[56rem] flex-col gap-4 overflow-hidden rounded-xl bg-background p-4 md:gap-8 md:p-8 lg:aspect-[1/1.414]"
>
	<ResumeHeader />
	<div class="grid h-full w-full gap-4 md:grid-cols-[6fr,4fr] md:gap-8">
		<ResumeLeftSide />
		<ResumeRightSide />
	</div>

	<!-- Blobs -->
	<div class="pointer-events-none absolute inset-0 blur-3xl">
		<div
			class="absolute -left-[10%] h-[27%] w-[80%] rotate-6 rounded-full bg-primary/50 opacity-15"
		></div>
		<div
			class="absolute -left-[10%] top-[7.5%] h-[85%] w-full -rotate-[33deg] rounded-full bg-primary/50 opacity-10"
		></div>
		<div
			class="absolute -bottom-[10%] -left-[10%] h-[26%] w-[48%] rotate-12 rounded-full bg-primary/50 opacity-25"
		></div>
		<div
			class="absolute -top-[3%] right-0 h-[40%] w-[47%] -rotate-[25deg] rounded-full bg-primary/50 opacity-25"
		></div>
		<div
			class="absolute -right-[5%] bottom-0 h-[29%] w-[38%] -rotate-[25deg] rounded-full bg-primary/50 opacity-25"
		></div>
	</div>
</div>

<style lang="scss">
	.resume {
		box-shadow:
			0 0 12px 1px hsl(var(--primary-500) / 0.1),
			0 2px 12px 0 hsl(var(--primary-500) / 0.1);
	}
</style>
