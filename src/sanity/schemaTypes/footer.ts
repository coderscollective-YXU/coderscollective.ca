import { defineArrayMember, defineField } from "sanity";

export const footerSchema = defineField({
  name: "footer",
  title: "Footer",
  type: "object",
  validation: R => R.required(),
  fields: [
    defineField({
      name: "footerMessage",
      title: "Footer Message",
      type: "string",
      validation: R => R.required(),
    }),
    defineField({
      name: "resources",
      title: "Resources Links",
      type: "array",
      of: [
        defineArrayMember({
          name: "resource",
          title: "Resource",
          type: "linkObject"
        })
      ]
    }),
    defineField({
      name: "company",
      title: "Company Links",
      type: "array",
      of: [
        defineArrayMember({
          name: "link",
          title: "Company Link",
          type: "linkObject",
        })
      ]
    }),
    defineField({
      name: "subscribe",
      title: "Subscribe Section",
      type: "object",
      validation: R => R.required(),
      fields: [
        defineField({
          name: "title",
          title: "Title",
          type: "string",
          validation: R => R.required(),
        }),
        defineField({
          name: "subtitle",
          title: "Subtitle",
          type: "string",
          validation: R => R.required(),
        }),
        defineField({
          name: "linkText",
          title: "Link Text",
          type: "string",
          validation: R => R.required(),
        })
        
      ]
    })
  ]
})