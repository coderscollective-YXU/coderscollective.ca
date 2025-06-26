import BubbleTextIcon from "@/app/components/icons/BubbleTextIcon";
import { defineField, defineType } from "sanity";

export const testimonialSchema = defineType({
  name: "testimonial",
  title: "Testimonials",
  icon: BubbleTextIcon,
  type: "document",
  fields: [
    defineField({
      name: "firstName",
      title: "First Name",
      type: "string",
      validation: (R) => R.required(),
    }),
    defineField({
      name: "lastName",
      title: "Last Name",
      type: "string",
    }),
    defineField({
      name: "quote",
      title: "Quote",
      type: "text",
      validation: (R) => R.required(),
    }),
    defineField({
      name: "workshopType",
      title: "Workshop Type",
      type: "reference",
      to: [{ type: "workshopType" }],
    }),
  ],
});
