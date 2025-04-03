import { defineQuery } from "next-sanity";
import { client } from "../lib/client";

const HOMEPAGE_QUERY = defineQuery(`
  *[_type == "homepage"] [0] {
    ...,
    "events": events {
      title,
      subtitle,
      "featuredEvents": featuredEvents  [] -> {
        ...
      }
    } 
  }
  `)

export const getHomepageContent = async () => {
  try {
    const homepageContent = await client.fetch(HOMEPAGE_QUERY)

    console.log({homepageContent})

    return homepageContent
  } catch (error) {
    throw new Error(error instanceof Error ? error.message : String(error))
  }
};