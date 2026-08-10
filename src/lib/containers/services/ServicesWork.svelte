<script lang="ts">
import {
	IconMessageCircle,
	IconRocket,
	IconSearch,
} from "@tabler/icons-svelte";
import * as Accordion from "$lib/components/ui/accordion";
import * as m from "$paraglide/messages";

const steps = [
	{
		icon: IconMessageCircle,
		number: "01",
		title: m["services.page.process.step_1_title"],
		description: m["services.page.process.step_1_description"],
	},
	{
		icon: IconSearch,
		number: "02",
		title: m["services.page.process.step_2_title"],
		description: m["services.page.process.step_2_description"],
	},
	{
		icon: IconRocket,
		number: "03",
		title: m["services.page.process.step_3_title"],
		description: m["services.page.process.step_3_description"],
	},
] as const;

const faqs = [
	{
		value: "question-1",
		question: m["services.page.faq.question_1"],
		answer: m["services.page.faq.answer_1"],
	},
	{
		value: "question-2",
		question: m["services.page.faq.question_2"],
		answer: m["services.page.faq.answer_2"],
	},
	{
		value: "question-3",
		question: m["services.page.faq.question_3"],
		answer: m["services.page.faq.answer_3"],
	},
] as const;
</script>

<section class="section relative isolate overflow-hidden border-y bg-muted/45" id="method">
	<div class="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(90deg,transparent_0%,var(--color-primary)_50%,transparent_100%)] opacity-[0.025]"></div>
	<div class="kcontainer px-4">
		<div class="grid gap-8 lg:grid-cols-12 lg:items-end lg:gap-12">
			<div class="lg:col-span-7">
				<p class="text-primary text-sm font-semibold tracking-[0.12em] uppercase">{m['services.page.process.eyebrow']()}</p>
				<h2 class="mt-3 max-w-[22ch]">{m['services.page.process.title']()}</h2>
			</div>
			<p class="text-muted-foreground max-w-[58ch] border-l-2 border-primary/25 pl-5 text-lg lg:col-span-5 lg:mb-1">
				{m['services.page.process.description']()}
			</p>
		</div>

		<ol class="relative mt-12 grid gap-8 md:grid-cols-3 md:gap-10" aria-label={m['services.page.process.title']()}>
			<div class="bg-primary/20 absolute top-5 bottom-5 left-5 w-px md:top-5 md:right-5 md:bottom-auto md:left-5 md:h-px md:w-auto"></div>
			{#each steps as step}
				<li class="relative grid grid-cols-[2.5rem_1fr] gap-0 md:block">
					<div class="relative z-10 flex size-10 items-center justify-center rounded-full bg-primary text-sm font-semibold text-primary-foreground shadow-sm">
						{step.number}
					</div>
					<div class="min-w-0 pb-2 pl-4 md:pt-6 md:pl-0">
						<div class="bg-background text-primary flex size-10 items-center justify-center rounded-md border shadow-sm">
							<step.icon class="size-5" />
						</div>
						<h3 class="mt-5 text-xl font-semibold">{step.title()}</h3>
						<p class="text-muted-foreground mt-2 max-w-[34ch]">{step.description()}</p>
					</div>
				</li>
			{/each}
		</ol>
	</div>
</section>

<section class="section kcontainer grid gap-12 px-4 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
	<div>
		<p class="text-primary text-sm font-semibold tracking-[0.12em] uppercase">{m['services.page.faq.eyebrow']()}</p>
		<h2 class="mt-3">{m['services.page.faq.title']()}</h2>
	</div>
	<Accordion.Root type="single" class="w-full pt-8 min-h-108 md:min-h-82" value="question-1" >
		{#each faqs as faq (faq.question)}
			<Accordion.Item value={faq.value}>
				<Accordion.Trigger class="py-5 text-left text-base font-semibold">
					{faq.question()}
				</Accordion.Trigger>
				<Accordion.Content class="text-muted-foreground pb-5">
					{faq.answer()}
				</Accordion.Content>
			</Accordion.Item>
		{/each}
	</Accordion.Root>
</section>

