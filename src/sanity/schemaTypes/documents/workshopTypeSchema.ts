import HammerIcon from "@/app/components/icons/HammerIcon";
import { defineField, defineType } from "sanity";

export const workshopTypeSchema = defineType({
  name: "workshopType",
  title: "Workshop Types",
  icon: HammerIcon,
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (R) => R.required(),
    }),
  ],
});
