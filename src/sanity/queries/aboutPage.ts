import { defineQuery } from "next-sanity";
import { client } from "../lib/client";

const ABOUT_PAGE_QUERY = defineQuery(`
  *[_type == "aboutPage"] [0] {
    ...,
    ourTeam {
      title,
      members[] -> {
        ...,
      }
    },
    vision  {
      title,
      description
    }
  }
`)

  export const getAboutPageContent = async () => {
    try {
      const aboutPageContent = await client.fetch(ABOUT_PAGE_QUERY)
      return aboutPageContent
    } catch (error) {
      throw new Error(error instanceof Error ? error.message : String(error))
    }
  } 