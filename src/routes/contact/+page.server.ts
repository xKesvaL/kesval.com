import type { PageServerLoad } from './$types.js';
import { superValidate } from 'sveltekit-superforms';
import { zod } from 'sveltekit-superforms/adapters';
import { contactFormSchema } from '../../lib/schemas/contact.js';

export const load: PageServerLoad = async () => {
	return {
		form: await superValidate(zod(contactFormSchema))
	};
};
