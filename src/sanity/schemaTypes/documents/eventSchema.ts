import CalendarIcon from "@/app/icons/CalendarIcon";
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
      function formatDate(datetimeString: string) {
        if (!datetimeString) return "No Date";
        const dateObj = new Date(datetimeString);
  
        if (isNaN(dateObj.getTime())) {
          return "Invalid Date"; // Handle invalid date strings
        }
  
        const options: Intl.DateTimeFormatOptions = {
          year: "numeric",
          month: "long",
          day: "numeric",
        };
  
        return dateObj.toLocaleDateString(undefined, options);
      }
  
      return {
        title: `${name} - ${formatDate(date)}`, // Format the date here
        subtitle: `${location} - ${hours}`
      };
    }
    }
});
