import { z } from 'zod';

// Define the Zod schema for form validation
export const contactFormSchema = z.object({
	name: z.string().min(2),
	email: z.string().email(),
	company: z.string().optional(),
	message: z.string().min(100)
});

export type ContactFormSchema = typeof contactFormSchema;
