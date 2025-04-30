<script lang="ts">
	import ShineBorder from '$lib/components/animated/ShineBorder.svelte';
	import * as Form from '$lib/components/ui/form';
	import { superForm, type Infer, type SuperValidated } from 'sveltekit-superforms';
	import { Input } from '$lib/components/ui/input';
	import { Textarea } from '$lib/components/ui/textarea';
	import { zodClient } from 'sveltekit-superforms/adapters';
	import * as m from '$paraglide/messages';
	import { contactFormSchema, type ContactFormSchema } from '$lib/schemas/contact';

	type Props = {
		form: SuperValidated<Infer<ContactFormSchema>>;
	};

	let { form: formServer }: Props = $props();

	// Initialize the superForm instance
	const form = superForm(formServer, {
		validators: zodClient(contactFormSchema),
		onSubmit: async () => {
			console.log('Form submitted:', $formData);
		}
	});

	const { form: formData, enhance } = form;
</script>

<section class="kcontainer section-hero px-4">
	<div class="grid grid-cols-12 gap-8">
		<ShineBorder class="animate-appear col-span-full w-full p-6 md:col-span-8">
			<form use:enhance method="POST">
				<Form.Field {form} name="name">
					<Form.Control>
						{#snippet children({ props })}
							<Form.Label>Name</Form.Label>
							<Input {...props} bind:value={$formData.name} />
						{/snippet}
					</Form.Control>
					<Form.FieldErrors />
				</Form.Field>
				<Form.Field {form} name="email">
					<Form.Control>
						{#snippet children({ props })}
							<Form.Label>Email</Form.Label>
							<Input {...props} bind:value={$formData.email} />
						{/snippet}
					</Form.Control>
					<Form.FieldErrors />
				</Form.Field>
				<Form.Field {form} name="company">
					<Form.Control>
						{#snippet children({ props })}
							<Form.Label>Company</Form.Label>
							<Input {...props} bind:value={$formData.company} />
						{/snippet}
					</Form.Control>
					<Form.FieldErrors />
				</Form.Field>
				<Form.Field {form} name="message">
					<Form.Control>
						{#snippet children({ props })}
							<Form.Label>Message</Form.Label>
							<Textarea {...props} bind:value={$formData.message} />
						{/snippet}
					</Form.Control>
					<Form.FieldErrors />
				</Form.Field>
				<Form.Button>I want a free quote</Form.Button>
			</form>
		</ShineBorder>
		<ShineBorder class="animate-appear col-span-full w-full p-6 md:col-span-4"></ShineBorder>
		<ShineBorder
			class="animate-appear col-span-full w-full overflow-hidden md:pt-20 [&>div]:!border-none"
		>
			<!-- Cal inline embed code begins -->
			<div style="width:100%;height:100%;overflow:scroll" id="my-cal-inline"></div>
			<script type="text/javascript">
				(function (C, A, L) {
					let p = function (a, ar) {
						a.q.push(ar);
					};
					let d = C.document;
					C.Cal =
						C.Cal ||
						function () {
							let cal = C.Cal;
							let ar = arguments;
							if (!cal.loaded) {
								cal.ns = {};
								cal.q = cal.q || [];
								d.head.appendChild(d.createElement('script')).src = A;
								cal.loaded = true;
							}
							if (ar[0] === L) {
								const api = function () {
									p(api, arguments);
								};
								const namespace = ar[1];
								api.q = api.q || [];
								if (typeof namespace === 'string') {
									cal.ns[namespace] = cal.ns[namespace] || api;
									p(cal.ns[namespace], ar);
									p(cal, ['initNamespace', namespace]);
								} else p(cal, ar);
								return;
							}
							p(cal, ar);
						};
				})(window, 'https://app.cal.com/embed/embed.js', 'init');
				Cal('init', 'devis-gratuit', { origin: 'https://cal.com' });

				Cal.ns['devis-gratuit']('inline', {
					elementOrSelector: '#my-cal-inline',
					config: { layout: 'month_view', theme: 'light' },
					calLink: 'kesval-studio/devis-gratuit'
				});

				Cal.ns['devis-gratuit']('ui', {
					theme: 'light',
					cssVarsPerTheme: {
						light: {
							'cal-brand': '#4D01FD',
							'cal-bg': 'transparent',
							'cal-border-booker-width': '0px'
						},
						dark: { 'cal-brand': '#4D01FD' }
					},
					hideEventTypeDetails: false,
					layout: 'month_view'
				});
			</script>
			<!-- Cal inline embed code ends -->
		</ShineBorder>
	</div>
</section>

<style>
	:global(.cal-embed) {
		border: none !important;
	}
</style>
