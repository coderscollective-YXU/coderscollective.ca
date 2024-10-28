import { type SchemaTypeDefinition } from 'sanity'


export const newsletterSignupType: SchemaTypeDefinition = {
  name: 'newletterSignup',
  type: 'document',
  fields: [
    {
      name: 'email',
      type: 'string',
    }
  ],
}


export const schema: { types: SchemaTypeDefinition[] } = {
  types: [newsletterSignupType],
}
