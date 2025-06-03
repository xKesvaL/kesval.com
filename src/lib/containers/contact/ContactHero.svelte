<script lang="ts">
	import ShineBorder from '$lib/components/animated/ShineBorder.svelte';
	import * as Form from '$lib/components/ui/form';
	import { superForm, type Infer, type SuperValidated } from 'sveltekit-superforms';
	import { Input } from '$lib/components/ui/input';
	import { Textarea } from '$lib/components/ui/textarea';
	import { zodClient } from 'sveltekit-superforms/adapters';
	import * as m from '$paraglide/messages';
	import { contactFormSchema, type ContactFormSchema } from '$lib/schemas/contact';
	import {
		IconUser,
		IconMail,
		IconBuilding,
		IconMessage,
		IconSend,
		IconSparkles
	} from '@tabler/icons-svelte';
	import { gsap } from 'gsap';
	import { hover } from 'motion';
	import { onMount } from 'svelte';

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

	// let timeline = gsap.timeline({ defaults: { duration: 0.3 }, paused: true }); // Old timeline definition
	let timeline: gsap.core.Tween | gsap.core.Timeline; // Declare timeline, allow for Tween or Timeline type

	onMount(() => {
		// New single tween for the animation
		timeline = gsap.to('.icon-send-to-animate', {
			keyframes: [
				{ translateX: 6, translateY: -6, rotate: 15, marginRight: 6 },
				{ translateX: 12, translateY: -10, rotate: 40, marginRight: 12 },
				{ translateX: 18, translateY: -6, rotate: 70, marginRight: 18 },
				{ translateX: 24, translateY: -1, rotate: 45, marginRight: 24 }
			],
			duration: 0.8, // Total duration: 0.3s per segment * 4 segments
			ease: 'power2.inOut', // Let keyframes handle their own easing for segments
			paused: true
		});

		hover('.icon-send-button', () => {
			timeline.play();

			return () => {
				timeline.reverse();
			};
		});
	});
</script>

<section class="kcontainer section-hero px-4">
	<div class="grid grid-cols-12 gap-8">
		<ShineBorder class="animate-appear col-span-full w-full p-8 md:col-span-8">
			<div class="space-y-8">
				<!-- Form Header -->
				<div class="space-y-2">
					<div class="flex items-center gap-2">
						<h2 class="title-gradient-muted-foreground text-3xl font-bold">
							{m['contact.hero.get_your_free_quote']()}
						</h2>
					</div>
					<p class="text-muted-foreground">
						{m['contact.hero.description']()}
					</p>
				</div>

				<!-- Form -->
				<form use:enhance method="POST" class="space-y-6">
					<!-- Personal Information Section -->
					<div class="space-y-4">
						<div class="grid grid-cols-1 gap-4 md:grid-cols-2">
							<Form.Field {form} name="name" class="space-y-3">
								<Form.Control>
									{#snippet children({ props })}
										<Form.Label class="flex items-center gap-2 text-sm font-medium">
											<IconUser class="text-muted-foreground h-4 w-4" />
											{m['contact.hero.name']()} *
										</Form.Label>
										<Input
											{...props}
											bind:value={$formData.name}
											placeholder={m['contact.hero.name_placeholder']()}
											class="h-11"
										/>
									{/snippet}
								</Form.Control>
								<Form.FieldErrors />
							</Form.Field>

							<Form.Field {form} name="email" class="space-y-3">
								<Form.Control>
									{#snippet children({ props })}
										<Form.Label class="flex items-center gap-2 text-sm font-medium">
											<IconMail class="text-muted-foreground h-4 w-4" />
											{m['contact.hero.email']()} *
										</Form.Label>
										<Input
											{...props}
											bind:value={$formData.email}
											placeholder={m['contact.hero.email_placeholder']()}
											class="h-11"
										/>
									{/snippet}
								</Form.Control>
								<Form.FieldErrors />
							</Form.Field>
						</div>

						<Form.Field {form} name="company" class="space-y-3">
							<Form.Control>
								{#snippet children({ props })}
									<Form.Label class="flex items-center gap-2 text-sm font-medium">
										<IconBuilding class="text-muted-foreground h-4 w-4" />
										{m['contact.hero.company']()}
									</Form.Label>
									<Input
										{...props}
										bind:value={$formData.company}
										placeholder={m['contact.hero.company_placeholder']()}
										class="h-11"
									/>
								{/snippet}
							</Form.Control>
							<Form.FieldErrors />
						</Form.Field>
					</div>

					<!-- Project Details Section -->
					<div class="space-y-4">
						<Form.Field {form} name="message" class="space-y-3">
							<Form.Control>
								{#snippet children({ props })}
									<Form.Label class="flex items-center gap-2 text-sm font-medium">
										<IconMessage class="text-muted-foreground h-4 w-4" />
										{m['contact.hero.your_project']()} *
									</Form.Label>
									<Textarea
										{...props}
										bind:value={$formData.message}
										placeholder={m['contact.hero.your_project_placeholder']()}
										class=""
										oninput={(e) => {
											const target = e.target as HTMLTextAreaElement;
											target.style.height = '0px';
											target.style.height = `${Math.min(target.scrollHeight + 2, 200)}px`;
										}}
									/>
								{/snippet}
							</Form.Control>
							<Form.FieldErrors />
						</Form.Field>
					</div>

					<!-- Submit Button -->
					<div class="pt-4">
						<Form.Button
							size="lg"
							class="icon-send-button h-12 w-full gap-4 text-base font-semibold shadow-lg transition-all hover:shadow-xl"
						>
							<IconSend class="icon-send-to-animate h-5 w-5" />
							{m['contact.hero.get_my_free_quote']()}
						</Form.Button>
					</div>

					<!-- Trust indicators -->
					<div class="text-muted-foreground space-y-2 text-center text-sm">
						<p>⚡ {m['contact.hero.quick_response']()}</p>
					</div>
				</form>
			</div>
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
