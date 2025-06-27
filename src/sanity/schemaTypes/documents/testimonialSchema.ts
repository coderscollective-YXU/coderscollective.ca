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
      name: "whatYouLiked",
      title: "What did you like about the workshop?",
      type: "text",
      validation: (R) => R.required(),
    }),
    defineField({
      name: "improvements",
      title: "What could be improved?",
      type: "text",
      validation: (R) => R.required(),
    }),
    defineField({
      name: "marketingSoundByte",
      title: "Sound byte we can feature on our website",
      type: "text",
      validation: (R) => R.required(),
    }),
    // defineField({
    //   name: "quote",
    //   title: "Quote",
    //   type: "text",
    //   validation: (R) => R.required(),
    // }),
    defineField({
      name: "workshopType",
      title: "Workshop Type",
      type: "reference",
      to: [{ type: "workshopType" }],
    }),
  ],
});
