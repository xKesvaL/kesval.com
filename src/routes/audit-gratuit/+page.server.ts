import type { PageServerLoad } from './$types.js';
import { fail, message, superValidate } from 'sveltekit-superforms';
import { zod4 } from 'sveltekit-superforms/adapters';
import { contactFormSchemaAudit } from '../../lib/schemas/contact.js';
import { Resend } from 'resend';
import { RESEND_API_KEY } from '$env/static/private';

const resend = new Resend(RESEND_API_KEY);

const AUDIENCE_ID = '942f532c-1955-4938-94c7-0ee160d7a031';

export const load: PageServerLoad = async () => {
	return {
		form: await superValidate(zod4(contactFormSchemaAudit))
	};
};

export const actions = {
	send: async (request) => {
		const contactForm = await superValidate(request, zod4(contactFormSchemaAudit));

		if (!contactForm.valid) {
			return fail(422, contactForm);
		}

		const { error } = await resend.emails.send({
			from: 'Prospets KesvaL Studio <prospects@crm.kesval.com>',
			to: ['contact@kesval.com'],
			subject: 'Audit gratuit demandé',
			text: `Audit gratuit demandé:
			
Name: ${contactForm.data.name}
Email: ${contactForm.data.email}
Project: ${contactForm.data.company}
Message: ${contactForm.data.website}`
		});

		if (error) {
			console.error('Error sending email:', error);
			return fail(500, { form: contactForm });
		}

		const { error: contactError } = await resend.contacts.create({
			email: contactForm.data.email as string,
			firstName: contactForm.data.name as string,
			lastName: `From « ${contactForm.data.company || 'No Company'} »`,
			audienceId: AUDIENCE_ID
		});

		if (contactError) {
			console.error('Error creating contact:', contactError);
			return fail(500, { form: contactForm });
		}

		return message(contactForm, 'Valid');
	}
};

export const prerender = false;
