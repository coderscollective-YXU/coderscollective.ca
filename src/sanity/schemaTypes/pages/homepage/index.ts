import HomeIcon from "@/app/icons/HomeIcon";
import { defineField, defineType } from "sanity";
import { missionSchema } from "./mission";
import { aboutSchema } from "./about";
import { programsSchema } from "./programs";

export const homepageSchema = defineType({
  name: "homepage",
  title: "Homepage",
  type: "document",
  icon: HomeIcon,
  groups: [
    {
      name: "seo",
    },
    {
      name: "hero",
    },
    {
      name: "content",
    },
    {
      name: "events",
    },
  ],
  fields: [
    defineField({
      name: "seo",
      title: "SEO",
      type: "object",
      group: ["seo"],
      fields: [
        defineField({
          name: "title",
          title: "SEO Title",
          type: "string",
          validation: (R) => R.required(),
        }),
        defineField({
          name: "description",
          title: "SEO Description",
          type: "string",
          validation: (R) => R.required(),
        }),
      ],
    }),
    defineField({
      name: "hero",
      title: "Hero",
      type: "object",
      group: ["hero"],
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
    missionSchema,
    aboutSchema,
    programsSchema,
    defineField({
      name: "events",
      title: "Events",
      type: "object",
      group: ["events"],
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
          name: "featuredEvents",
          title: "Featured Events",
          type: "array",
          of: [
            {
              type: "reference",
              to: [{type: "event"}]
            }
          ]
        })
      ],
    }),
  ],
  preview: {
    select: {
      title: "hero.title",
    },
    prepare({ title }) {
      return {
        title,
      };
    },
  },
});
