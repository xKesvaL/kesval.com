import { z } from 'zod';

// Define the Zod schema for form validation
export const contactFormSchema = z.object({
	name: z.string("errors.invalid").min(2, "errors.min_length"),
	email: z.email("errors.invalid"),
	company: z.string().optional(),
	message: z.string("errors.invalid").min(20, "errors.min_length")
});

export type ContactFormSchema = typeof contactFormSchema;

export const contactFormSchemaAudit = z.object({
	name: z.string("errors.invalid").min(2, "errors.min_length"),
	email: z.email("errors.invalid"),
	company: z.string().optional(),
	website: z.string("errors.invalid"),
});

export type ContactFormSchemaAudit = typeof contactFormSchemaAudit;