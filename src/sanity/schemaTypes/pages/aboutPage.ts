import { Info } from "lucide-react";
import { defineArrayMember, defineField, defineType } from "sanity";

export const aboutPageSchema = defineType({
  name: "aboutPage",
  title: "About Page",
  type: "document",
  icon: Info,
  fields: [
    defineField({
      name: "hero",
      title: "Hero",
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
      ]
    }),
    defineField({
      name: "ourTeam",
      title: "Our Team",
      type: "object",
      fields: [
        defineField({
          name: "title",
          title: "Title",
          type: "string",
          validation: (R) => R.required(),
        }),
        defineField({
          name: "members",
          title: "Members",
          type: "array",
          of: [
            defineArrayMember({
              name: "member",
              title: "Member",
              type: "reference",
              to: [{ type: "teamMember" }],
            })
          ]
        })
      ]
    }),
    defineField({
      name: "vision",
      title: "Vision",
      type: "object",
      fields: [
        defineField({
          name: "title",
          title: "Title",
          type: "string",
          validation: (R) => R.required(),
        }),
        defineField({
          name: "description",
          title: "Description",
          type: "array",
          of: [
            defineArrayMember({
              name: "block",
              title: "Block",
              type: "block",
              options: {
                // Sets the block editor to be a single column
                // layout: "normal",
              },
            }),
          ],
          validation: (R) => R.required(),
        }),
      ],
    })
  ],
  preview: {
    select: {
      title: "hero.title",
    },
    prepare({ title }) {
      return {
        title,
      };
    }
  }
})