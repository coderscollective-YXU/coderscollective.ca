import { type SchemaTypeDefinition } from 'sanity'


export const newsletterSignupType: SchemaTypeDefinition = {
  name: 'newletterSignup',
  type: 'document',
  fields: [
    {
      name: 'email',
      type: 'string',
    },
    {
      name: 'isMember',
      type: 'boolean',
      description: 'Interested in receiving newsletter updates',
    },
    {
      name: 'isVolunteer',
      type: 'boolean',
      description: 'Interested in volunteering (teaching or mentoring)',
    },
    {
      name: 'isSponsor',
      type: 'boolean',
      description: 'Interested in sponsorship opportunities',
    },
    {
      name: 'privacyConsent',
      type: 'boolean',
      description: 'Agreed to the privacy policy',
    }
  ],
}