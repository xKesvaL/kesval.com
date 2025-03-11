<script lang="ts">
	import Masonry from 'svelte-masonry';
</script>

<section class="kcontainer px-4 py-8 md:py-20">
	<!-- TODO: REFACTOR THIS, ITS A BAD LIBRARY -->
	<Masonry gridGap={'0.75rem'} colWidth={'minmax(Min(20em, 100%), 1fr)'}></Masonry>
</section>
