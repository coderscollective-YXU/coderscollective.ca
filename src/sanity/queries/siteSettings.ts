import { defineQuery } from "next-sanity";
import { client } from "../lib/client";

const FOOTER_QUERY = defineQuery(`
  *[_type == "siteSettings"] [0] {
    socialLinks,
    footer
  }
  `)


export const getFooterContent = async () => {
  try {
    const footerContent = await client.fetch(
      FOOTER_QUERY
    );
    return footerContent
  } catch (error) {
    throw new Error(error instanceof Error ? error.message : String(error))
  }
};