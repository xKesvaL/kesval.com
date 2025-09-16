<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import { cn } from '$lib/utils/ui';
	import { route } from '$lib/ROUTES';
	import { localizeHref } from '$paraglide/runtime';
	import { IconCheck } from '@tabler/icons-svelte';
	import { services } from '$lib/utils/config';
	import { translate } from '$lib/utils/i18n';
	import * as m from '$paraglide/messages';
	import { IconCode, IconRocket, IconLifebuoy } from '@tabler/icons-svelte';
	import Sparkles from '$lib/components/base/Sparkles.svelte';
	import { Badge } from '$lib/components/ui/badge';

	// Accent colors per service for decorative icon tinting (CSS variables)
	const accentColors: Record<string, string> = {
		web_on_premise: '#34d399', // emerald-400
		web_apps: '#818cf8', // indigo-400
		design: '#fb7185', // rose-400
		agencies: '#a78bfa' // purple-400
	};

	const maxJitterXPercent = 300; // ±10%
	const maxJitterYPercent = 50; // ±3%

	const maxRotateDeg = 20;

	const rand = (max: number) => Math.round((Math.random() * 2 - 1) * max);
	const primaryOffsets = services.map(() => ({
		x: rand(maxJitterXPercent),
		y: rand(maxJitterYPercent)
	}));
	const secondaryOffsets = services.map(() => ({
		x: rand(maxJitterXPercent),
		y: rand(maxJitterYPercent)
	}));
	const tertiaryOffsets = services.map(() => ({
		x: rand(maxJitterXPercent),
		y: rand(maxJitterYPercent)
	}));

	const primaryRotate = services.map(() => rand(maxRotateDeg));
	const secondaryRotate = services.map(() => rand(maxRotateDeg));
	const tertiaryRotate = services.map(() => rand(maxRotateDeg));
</script>

{#each services as service, i (service.id)}
	{@const v = service.visual}
	{@const base = service.labelKey}
	{@const isOdd = i % 2 === 1}
	{@const PrimaryIcon = service.icons?.[0] ?? service.icon}
	{@const SecondaryIcon = service.icons?.[1] ?? IconRocket}
	{@const TertiaryIcon = service.icons?.[2] ?? IconCode}
	{@const accent = accentColors[service.id] ?? '#8b8b8b'}
	<section class="section relative overflow-hidden" id={service.id}>
		<!-- Subtle, refined background: a soft tinted glow plus a neutral radial on the right -->
		<div class="pointer-events-none absolute inset-0 -z-10">
			<!-- Noise texture overlay (very subtle) -->
			<div class="bgc-noise absolute inset-0 opacity-5 mix-blend-multiply"></div>
			<div
				class={cn(
					'absolute top-1/2 left-1/2 h-[85%] w-[90vw] -translate-x-1/2 -translate-y-1/2 opacity-30 blur-3xl',
					v.bg
				)}
			></div>
			<div
				class={cn(
					'absolute top-1/2 h-[60vw] w-[60vw] -translate-y-1/2 rounded-full bg-[radial-gradient(closest-side,rgba(0,0,0,0.06),transparent_65%)] opacity-10',
					isOdd ? 'left-[-10vw]' : 'right-[-10vw]'
				)}
			></div>
			<div
				class="from-background absolute inset-x-0 top-0 h-24 bg-gradient-to-b to-transparent"
			></div>
			<div
				class="from-background absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t to-transparent"
			></div>

			<!-- Decorative service icons (from config, 3 per service) -->
			<div class="absolute inset-0" style={`--accent:${accent}`}>
				<PrimaryIcon
					class={cn('absolute opacity-10', 'size-[110px]')}
					style={`color: var(--accent); top:${8}%; left:${50}%; transform: translate(calc(-50% + ${primaryOffsets[i]?.x ?? 0}%), ${primaryOffsets[i]?.y ?? 0}%) rotate(${primaryRotate[i] ?? 0}deg);`}
				/>
				<SecondaryIcon
					class={cn('absolute opacity-10', 'size-[100px]')}
					style={`color: var(--accent); top:${40}%; right:${12}%; transform: translate(${secondaryOffsets[i]?.x ?? 0}%, ${secondaryOffsets[i]?.y ?? 0}%) rotate(${secondaryRotate[i] ?? 0}deg);`}
				/>
				<TertiaryIcon
					class={cn('absolute hidden opacity-10 md:block', 'size-[90px]')}
					style={`color: var(--accent); bottom:${8}%; left:${12}%; transform: translate(${tertiaryOffsets[i]?.x ?? 0}%, ${tertiaryOffsets[i]?.y ?? 0}%) rotate(${tertiaryRotate[i] ?? 0}deg);`}
				/>
			</div>
		</div>
		<div class="kcontainer px-4">
			<div class="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-16 xl:gap-24">
				<div class={cn('space-y-6 lg:col-span-6 xl:space-y-8', isOdd && 'lg:order-2')}>
					<div
						class={cn(
							'text-foreground/80 inline-flex items-center gap-2 rounded-full border bg-white/90 px-3 py-1 text-xs shadow-sm backdrop-blur',
							v.border
						)}
					>
						<span class={cn('size-2 rounded-full', v.point)}></span>
						<span>{#await translate(`${base}.suptitle`) then translation}{translation}{/await}</span
						>
					</div>
					<h2
						class="from-foreground to-muted-foreground bg-gradient-to-br bg-clip-text text-4xl leading-tight font-bold tracking-tight text-transparent md:text-5xl md:leading-tight md:tracking-tight"
						style="--sprkl-clr: {accent}"
					>
						{#await translate(`${base}.title_before`) then translation}{translation}{/await}
						<Sparkles color="var(--sprkl-clr)" style="color: {accent}">
							{#await translate(`${base}.title_highlighted`) then translation}{translation}{/await}
						</Sparkles>
						{#await translate(`${base}.title_after`) then translation}{translation}{/await}
					</h2>
					<p class="text-muted-foreground max-w-[62ch] text-base md:text-lg">
						{#await translate(`${base}.description`) then translation}{translation}{/await}
					</p>
					<div class="not-prose flex flex-wrap gap-2" role="list">
						<span
							class={cn(
								'text-foreground/80 inline-flex items-center gap-2 rounded-full border bg-white/80 px-2.5 py-1 text-xs ring-1 ring-black/0 focus:outline-none focus-visible:ring-2',
								v.ring
							)}
							role="listitem"
						>
							<span class={cn('size-1.5 rounded-full', v.point)}
							></span>{#await translate(`${base}.pill_1`) then translation}{translation}{/await}
						</span>
						<span
							class={cn(
								'text-foreground/80 inline-flex items-center gap-2 rounded-full border bg-white/80 px-2.5 py-1 text-xs focus:outline-none focus-visible:ring-2',
								v.ring
							)}
							role="listitem"
						>
							<span class={cn('size-1.5 rounded-full', v.point)}
							></span>{#await translate(`${base}.pill_2`) then translation}{translation}{/await}
						</span>
						<span
							class={cn(
								'text-foreground/80 inline-flex items-center gap-2 rounded-full border bg-white/80 px-2.5 py-1 text-xs focus:outline-none focus-visible:ring-2',
								v.ring
							)}
							role="listitem"
						>
							<span class={cn('size-1.5 rounded-full', v.point)}
							></span>{#await translate(`${base}.pill_3`) then translation}{translation}{/await}
						</span>
					</div>
					<ul class="mt-4 grid gap-2.5 text-base">
						<li class="flex items-start gap-3">
							<IconCheck
								class="mt-0.5 size-5"
								style={`color: ${accent}`}
							/>{#await translate(`${base}.feature_1`) then translation}{translation}{/await}
						</li>
						<li class="flex items-start gap-3">
							<IconCheck
								class="mt-0.5 size-5"
								style={`color: ${accent}`}
							/>{#await translate(`${base}.feature_2`) then translation}{translation}{/await}
						</li>
						<li class="flex items-start gap-3">
							<IconCheck
								class="mt-0.5 size-5"
								style={`color: ${accent}`}
							/>{#await translate(`${base}.feature_3`) then translation}{translation}{/await}
						</li>
					</ul>
					<div class="flex flex-wrap items-center gap-3 pt-2">
						<Button
							size="lg"
							class="shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
							href={localizeHref(route('/contact'))}
							style="--color-primary: color-mix(in oklab, {accent}, black 10%)"
						>
							{#await translate(`${base}.cta_primary`) then translation}
								{translation}
							{/await}
						</Button>
						<Button
							size="lg"
							variant="outline"
							class="transition hover:-translate-y-0.5"
							href={localizeHref(route('/projets'))}
							>{m['services.sections.common.cta_secondary']()}</Button
						>
					</div>
				</div>
				<div class={cn('lg:col-span-6', isOdd && 'lg:order-1')}>
					<div
						class={cn(
							'group relative aspect-[3/2] w-full overflow-hidden rounded-2xl border bg-white transition will-change-transform',
							v.border
						)}
					>
						<div class={cn('absolute inset-0', v.previewGlow)}></div>
						{#if isOdd}
							<div
								class="absolute -top-6 -left-6 h-20 w-20 rounded-full bg-[radial-gradient(circle,theme(colors.indigo.200/.35),transparent_60%)]"
							></div>
						{:else}
							<div
								class="absolute -top-6 -right-6 h-20 w-20 rounded-full bg-[radial-gradient(circle,theme(colors.emerald.200/.35),transparent_60%)]"
							></div>
						{/if}
						<div
							class="absolute inset-10 -rotate-1 rounded-xl border border-black/5 bg-white/80 shadow-sm"
						></div>
						<div
							class="absolute inset-8 rotate-1 rounded-xl border border-black/10 bg-white/85 shadow-sm"
						></div>
						<div
							class={cn(
								'absolute inset-6 rounded-xl bg-white/90 shadow-sm backdrop-blur transition duration-500 group-hover:-translate-y-0.5 group-hover:shadow-md',
								v.border
							)}
						>
							<div class={cn('h-8 border-b bg-black/5', v.border)}></div>
							<div class="p-4">
								<div class="mb-2 h-3 w-1/3 rounded bg-black/10"></div>
								<div class="mb-1 h-2 w-2/3 rounded bg-black/5"></div>
								<div class="mt-4 grid grid-cols-3 gap-2">
									<div class="h-16 rounded-lg bg-black/5"></div>
									<div class="h-16 rounded-lg bg-black/5"></div>
									<div class="h-16 rounded-lg bg-black/5"></div>
								</div>
							</div>
						</div>
					</div>
					{#if 'hasMaintenanceAddon' in service && service.hasMaintenanceAddon}
						<Badge
							variant="outline"
							class="mt-3 gap-2 rounded-full py-1.5 pr-4 pl-3 text-xs shadow-sm backdrop-blur sm:text-sm"
							style={`background-color: color-mix(in oklab, ${accent}, white 88%); border-color: color-mix(in oklab, ${accent}, black 45%); color: color-mix(in oklab, ${accent}, black 35%);`}
						>
							<IconLifebuoy class="size-3.5" style={`color: ${accent}`} />
							{m['services.sections.addon_maintenance']()}
						</Badge>
					{/if}
				</div>
			</div>
		</div>
	</section>
{/each}
