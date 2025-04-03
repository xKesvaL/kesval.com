<script lang="ts">
	import * as Card from '$lib/components/ui/card/index.js';
	import { route } from '$lib/ROUTES';
	import type { Project } from '$lib/utils/projects';
	import { localizeHref } from '$paraglide/runtime';

	type Props = {
		project: Project;
	};

	let { project }: Props = $props();
</script>

<a href={localizeHref(route('/projets/[projectId]', { projectId: project.id }))}>
	<Card.Root class="shadow-cool hover:border-primary rounded-2xl">
		<Card.Header>
			<Card.Title>
				{project.name}
			</Card.Title>
			<Card.Description>
				{project.description}
			</Card.Description>
		</Card.Header>
		<Card.Content>
			<p>Card Content</p>
		</Card.Content>
		<Card.Footer>
			<p>Card Footer</p>
		</Card.Footer>
	</Card.Root>
</a>
