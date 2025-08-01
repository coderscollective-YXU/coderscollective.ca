import CalendarIcon from "@/app/components/icons/CalendarIcon";
import { formatDate } from "@/lib/utils";
import { defineField, defineType } from "sanity";
import { Event } from "../../../../sanity.types";

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
      name: "isLaunched",
      title: "Launched",
      description: "If the event is launched on eventbrite, this will be true",
      type: "boolean",
      validation: (R) => R.required(),
      initialValue: false,
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
    defineField({
      name: "workshopType",
      title: "Workshop Type",
      type: "reference",
      to: [{ type: "workshopType" }],
      hidden: ({ parent }) => parent?.eventType !== "workshop",
      validation: (R) =>
        R.custom((value, context) => {
          const parent = context.parent as Event;

          if (parent?.eventType === "workshop" && !value) {
            return "Workshop Type is required for Workshop events.";
          }
          return true;
        }),
    }),
  ],
  preview: {
    select: {
      name: "name",
      date: "date",
      hours: "hours",
      location: "location",
    },
    prepare({ date, hours, location, name }) {
      return {
        title: `${name} - ${formatDate(date)}`, // Format the date here
        subtitle: `${location} - ${hours}`,
      };
    },
  },
});
