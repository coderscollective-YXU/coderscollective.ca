import { CircleUserRound } from "lucide-react";
import { defineArrayMember, defineField, defineType } from "sanity";
import { PreviewIcon } from "../pages/homepage/PreviewIcon";

export const teamMemberSchema = defineType({
  name: "teamMember",
  title: "Team Member",
  type: "document",
  icon: CircleUserRound,
  fields: [
    defineField({
      name: "name",
      title: "Name",
      type: "string",
      validation: (R) => R.required(),
    }),
    defineField({
      name: "role",
      title: "Role",
      type: "string",
      validation: (R) => R.required(),
    }),
    defineField({
      name: "image",
      title: "Image",
      type: "image",
      options: {
        hotspot: true,
      },
      validation: (R) => R.required(),
    }),
    defineField({
      name: "bio",
      title: "Bio",
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
    defineField({
      name: "links",
      title: "Links",
      type: "array",
      of: [
        defineArrayMember({
          name: "link",
          title: "Link",
          type: "object",
          fields: [
            defineField({
              name: "icon",
              title: "Icon",
              description:
                "Go to https://tabler-icons.io/ and copy the svg of the icon you would like to use and paste it here.",
              type: "text",
              validation: (R) => R.required(),
            }),
            defineField({
              name: "link",
              title: "Link",
              type: "linkObject",
              validation: (R) => R.required(),
            }),
          ],
          preview: {
            select: {
              title: "link.text",
              subtitle: "link.url",
              icon: "icon",
            },
            prepare({ title, subtitle, icon }) {
              return {
                title,
                subtitle,
                media: PreviewIcon({ icon }),
              };
            },
          },
        }),
      ],
    }),
  ],
});
