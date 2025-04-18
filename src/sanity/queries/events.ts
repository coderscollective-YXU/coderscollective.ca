import { defineQuery } from "next-sanity";
import { client } from "../lib/client";

const ALL_EVENTS_QUERY = defineQuery(`
  *[_type == "event"] | order(date desc) {
    ...
  }
`)

export const getAllEvents = async () => {
  try {
    const allEvents = await client.fetch(ALL_EVENTS_QUERY)
    return allEvents
  } catch (error) {
    throw new Error(error instanceof Error ? error.message : String(error))
  }
}; 