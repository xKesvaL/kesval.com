import type { PageServerLoad } from './$types.js';
import { superValidate } from 'sveltekit-superforms';
// change to zod4 on release
import { zod } from 'sveltekit-superforms/adapters';
import { contactFormSchema } from '../../lib/schemas/contact.js';

export const load: PageServerLoad = async () => {
	return {
		form: await superValidate(zod(contactFormSchema))
	};
};
