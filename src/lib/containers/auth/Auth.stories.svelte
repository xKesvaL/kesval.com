<script lang="ts">
	import type { ArgTypes } from '@storybook/svelte';	import type { ComponentProps } from 'svelte';

	import { Meta, Story, Template } from '@storybook/addon-svelte-csf';

	import Auth from './Auth.svelte';

	type Story = ComponentProps<Auth>;

	const metaArgs: Story = {
		type: 'login'
	};

	const argTypes: ArgTypes<Story> = {
		type: {
			control: 'select',
			options: ['login', 'register', 'reauth'],
			type: 'string'
		}
	};
</script>

<Meta {argTypes} args={metaArgs} component={Auth} title="Containers/Auth/Base" />

<Template {argTypes} args={metaArgs} let:args>
	<Auth {...args} />
</Template>

<Story let:args name="Default">
	<Auth {...args} />
</Story>
