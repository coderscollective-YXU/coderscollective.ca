import { defineArrayMember, defineField } from "sanity";
import { PreviewIcon } from "./PreviewIcon";

export const getInvolvedSchema = defineField({
  name: "getInvolved",
  title: "Get Involved",
  type: "object",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (R) => R.required(),
    }),
    defineField({
      name: "subtitle",
      title: "Subtitle",
      type: "string",
      validation: (R) => R.required(),
    }),
    defineField({
      name: "cards",
      title: "Cards",
      type: "array",
      of: [
        defineArrayMember({
          name: "card",
          title: "Card",
          type: "object",
          fields: [
            defineField({
              name: "icon",
              title: "Icon",
              description:
                "go to https://tabler-icons.io/, choose an icon and paste the svg code here",
              type: "text",
              validation: (R) => R.required(),
            }),
            defineField({
              name: "title",
              title: "Title",
              type: "string",
              validation: (R) => R.required(),
            }),
            defineField({
              name: "subtitle",
              title: "Subtitle",
              type: "string",
              validation: (R) => R.required(),
            }),
            defineField({
              name: "cta",
              title: "cta",
              type: "linkObject",
            }),
          ],
          preview: {
            select: {
              title: "title",
              icon: "icon",
            },
            prepare({ title, icon }) {
              return {
                title,
                media: PreviewIcon({ icon }),
              };
            },
          },
        }),
      ],
    }),
    defineField({
      name: "startCoding",
      title: "Start Coding",
      type: "object",
      fields: [
        defineField({
          name: "title",
          title: "Title",
          type: "string",
          validation: (R) => R.required(),
        }),
        defineField({
          name: "subtitle",
          title: "Subtitle",
          type: "string",
          validation: (R) => R.required(),
        }),
        defineField({
          name: "cta1",
          title: "cta 1",
          type: "linkObject",
        }),
        defineField({
          name: "cta2",
          title: "cta 2",
          type: "linkObject",
        }),
      ],
    }),
  ],
});
