import { defineArrayMember, defineField } from "sanity";
import { PreviewIcon } from "./PreviewIcon";

export const programsSchema = defineField({
  name: "ourPrograms",
  title: "Our Programs",
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
      name: "programs",
      title: "Programs",
      type: "array",
      of: [
        defineArrayMember({
          name: "program",
          title: "Program",
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
              name: "items",
              title: "Items",
              type: "array",
              of: [
                defineArrayMember({
                  name: "item",
                  title: "Item",
                  type: "string",
                  validation: (R) => R.required(),
                }),
              ],
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
      name: "communityEvents",
      title: "Community Events",
      type: "object",
      fields: [
        defineField({
          name: "icons",
          title: "Icons",
          type: "array",
          description:
            "go to https://tabler-icons.io/, choose an icon and paste the svg code here",
          of: [
            defineArrayMember({
              name: "icon",
              title: "Icon",
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
              ],
              preview: {
                select: {
                  icon: "icon",
                },
                prepare({ icon }) {
                  return {
                    title: "Icon",
                    media: PreviewIcon({ icon }),
                  };
                },
              },
            }),
          ],
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
          name: "eventItems",
          title: "Event Items",
          type: "array",
          of: [
            defineArrayMember({
              name: "item",
              title: "Item",
              type: "string"
            })
          ]
        }),
        defineField({
          name: "whyCommunityMatters",
          title: "Why Community Matters",
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
              name: "subtitle",
              title: "Subtitle",
              type: "string",
              validation: (R) => R.required(),
            }),
            defineField({
              name: "buttonText",
              title: "Button Text",
              type: "string",
              validation: (R) => R.required(),
            }),
            
          ]
        })
      ],
    }),
  ],
});
