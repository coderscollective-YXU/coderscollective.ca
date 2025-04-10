import { LinkIcon } from 'lucide-react';
import { defineType, defineField } from 'sanity';

export const linkSchema = defineType({
  name: 'linkObject', 
  title: 'Link', 
  type: 'object',
  icon: LinkIcon,
  fields: [
    defineField({
      name: 'type',
      title: 'Link Type',
      type: 'string',
      options: {
        list: [
          { title: 'Internal', value: 'internal' },
          { title: 'External', value: 'external' },
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'text',
      title: 'Link Text',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'url',
      title: 'URL',
      type: 'string',
      validation: (Rule) =>
        Rule.required().custom((url, context) => {
          if (context.document && typeof context.document.linkObject === 'object' && (context.document.linkObject as { type: string }).type === 'internal' && url && !url.startsWith('/')) {
            return 'Internal links must start with a forward slash (/).';
          }
          if (context.document && typeof context.document.linkObject === 'object' && (context.document.linkObject as { type: string }).type === 'external' && url && !/^(https?:\/\/|mailto:)/i.test(url)) {
            return 'External links must start with https://, http://, or mailto:';
          }
          return true;
        }),
    }),
  ],
  preview: {
    select: {
      title: "text",
      subtitle: "url"
    },
    prepare ({title, subtitle}) {
      return {
        title,
        subtitle
      }
    }
  }
});