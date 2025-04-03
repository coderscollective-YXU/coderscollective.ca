import { defineArrayMember, defineField } from "sanity";
import { PreviewIcon } from "./PreviewIcon";

export const aboutSchema = defineField({
  name: "about",
  title: "About Us",
  type: "object",
  group: ["content"],
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
      name: "whatSetsUsApart",
      title: "What Sets Us Apart",
      type: "object",
      validation: (R) => R.required(),
      fields: [
        defineField({
          name: "title",
          title: "Title",
          type: "string",
          validation: (R) => R.required(),
        }),
        defineField({
          name: "items",
          title: "Items",
          type: "array",
          validation: (Rule) => Rule.length(4).required(),
          of: [
            defineArrayMember({
              name: "item",
              title: "Item",
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
                  name: "icon",
                  title: "Icon",
                  description:
                    "go to https://tabler-icons.io/, choose an icon and paste the svg code here",
                  type: "text",
                  validation: (R) => R.required(),
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
      ],
    }),
    defineField({
      name: "ourCommitment",
      title: "Our Commitment",
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
          name: "quote",
          title: "Qoute",
          type: "object",
          fields: [
            defineField({
              name: "text",
              title: "Text",
              type: "string",
              validation: (R) => R.required(),
            }),
            defineField({
              name: "author",
              title: "Author",
              type: "string",
              validation: (R) => R.required(),
            }),
          ]
        }),
      ]
    })
  ],
});
