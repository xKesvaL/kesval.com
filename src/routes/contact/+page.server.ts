import type { PageServerLoad } from './$types.js';
import { fail, message, superValidate } from 'sveltekit-superforms';
import { zod4 } from 'sveltekit-superforms/adapters';
import { contactFormSchema } from '../../lib/schemas/contact.js';
import { Resend } from 'resend';
import { RESEND_API_KEY } from '$env/static/private';

const resend = new Resend(RESEND_API_KEY);

const AUDIENCE_ID = '59a6b507-36cb-4a56-978d-e672d5cee51e';

export const load: PageServerLoad = async () => {
	return {
		form: await superValidate(zod4(contactFormSchema))
	};
};

export const actions = {
	send: async (request) => {
		const contactForm = await superValidate(request, zod4(contactFormSchema));

		if (!contactForm.valid) {
			return fail(401, contactForm);
		}

		const { error } = await resend.emails.send({
			from: 'Prospets KesvaL Studio <prospects@crm.kesval.com>',
			to: ['contact@kesval.com'],
			subject: 'New contact form submission!',
			text: `We got a new contact form submission:
			
Name: ${contactForm.data.name}
Email: ${contactForm.data.email}
Project: ${contactForm.data.company}
Message: ${contactForm.data.message}`
		});

		if (error) {
			console.error('Error sending email:', error);
			return fail(500, contactForm);
		}

		const { error: contactError } = await resend.contacts.create({
			email: contactForm.data.email as string,
			firstName: contactForm.data.name,
			lastName: `From « ${contactForm.data.company || 'No Company'} »`,
			audienceId: AUDIENCE_ID
		});

		if (contactError) {
			console.error('Error creating contact:', contactError);
			return fail(500, contactForm);
		}

		return message(contactForm, 'Valid');
	}
};

export const prerender = false;
