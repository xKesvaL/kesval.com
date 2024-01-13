<script lang="ts">
	import ResumeSidebar from './ResumeSidebar.svelte';
	import ResumeContent from './ResumeContent.svelte';
</script>

<div
	class="bg-popover max-w-[51rem] w-full rounded-xl overflow-hidden resume flex flex-col sm:flex-row"
>
	<ResumeSidebar />
	<ResumeContent />
</div>

<style lang="scss">
	.resume {
		box-shadow:
			0 0 12px 1px hsl(var(--primary-500) / 0.1),
			0 2px 12px 0 hsl(var(--primary-500) / 0.1);
	}
</style>
