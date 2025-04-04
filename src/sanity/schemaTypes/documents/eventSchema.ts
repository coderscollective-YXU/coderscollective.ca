import CalendarIcon from "@/app/components/icons/CalendarIcon";
import { formatDate } from "@/lib/utils";
import { defineField, defineType } from "sanity";

export const eventSchema = defineType({
  name: "event",
  title: "Event",
  type: "document",
  icon: CalendarIcon,
  fields: [
    defineField({
      name: "name",
      title: "Event Name",
      type: "string",
      validation: (R) => R.required(),
    }),
    defineField({
      name: "date",
      title: "Event Date",
      type: "datetime",
      validation: (R) => R.required(),
    }),
    defineField({
      name: "hours",
      title: "Hours",
      type: "string",
      validation: (R) => R.required(),
    }),
    defineField({
      name: "link",
      title: "Event Link",
      type: "url",
      validation: (R) => R.required(),
    }),
    defineField({
      name: "spotsAvailable",
      title: "Spots Available",
      type: "number",
      validation: (R) => R.required(),
    }),
    defineField({
      name: "location",
      title: "Location",
      type: "string",
      validation: (R) => R.required(),
    }),
    defineField({
      name: "eventType",
      title: "Event Type",
      type: "string",
      validation: (R) => R.required(),
      options: {
        list: [
          {
            title: "Networking",
            value: "networking",
          },
          {
            value: "workshop",
            title: "Workshop",
          },
        ],
      },
    }),
  ],
  preview: {
    select: {
      name: "name",
      date: "date",
      hours: "hours",
      location: "location"
    },
    prepare({ date, hours, location, name }) {
  
      return {
        title: `${name} - ${formatDate(date)}`, // Format the date here
        subtitle: `${location} - ${hours}`
      };
    }
    }
});
