import { defineQuery } from "next-sanity";
import { client } from "../lib/client";

const HOMEPAGE_QUERY = defineQuery(`
  *[_type == "homepage"] [0] {
    ...,
    "events": events {
      title,
      subtitle
    },
    "testimonials": testimonials {
      title,
      subtitle,
      "featuredTestimonials": featuredTestimonials [] -> {
        firstName,
        lastName,
        quote
      }
    }
  }
`);

export const getHomepageContent = async () => {
  try {
    const homepageContent = await client.fetch(HOMEPAGE_QUERY);
    return homepageContent;
  } catch (error) {
    throw new Error(error instanceof Error ? error.message : String(error));
  }
};
