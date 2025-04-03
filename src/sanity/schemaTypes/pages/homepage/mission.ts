import { defineArrayMember, defineField } from "sanity";
import { PreviewIcon } from "./PreviewIcon";

export const missionSchema = defineField({
  name: "mission",
  title: "Mission",
  type: "object",
  group: ["content"],
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: R => R.required()
    }),
    defineField({
      name: "subtitle",
      title: "Subtitle",
      type: "string",
      validation: R => R.required()
    }),
    defineField({
      name: "cards",
      title: "Mission Cards",
      type: "array",
      validation: (Rule) => Rule.length(4).required(),
      of: [
        defineArrayMember({
          name: "card",
          title: "Card",
          type: "object",
          fields: [
            defineField({
              name: "title",
              title: "Title",
              type: "string",
              validation: R => R.required()
            }),
            defineField({
              name: "subtitle",
              title: "Subtitle",
              type: "string",
              validation: R => R.required()
            }),
            defineField({
              name: "icon",
              title: "Icon",
              description: "go to https://tabler-icons.io/, choose an icon and paste the svg code here",
              type: "text",
              validation: R => R.required()
            }),
          ],
          preview: {
            select: {
              title: "title",
              icon: "icon"
            },
            prepare({title, icon}) {
              return {
                title,
                media: PreviewIcon({icon})
              }
            }
          }
        })
      ],
      
    })
  ]
})

