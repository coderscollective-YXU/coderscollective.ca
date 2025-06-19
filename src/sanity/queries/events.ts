import { defineQuery } from "next-sanity";
import { client } from "../lib/client";

const ALL_EVENTS_QUERY = defineQuery(`
  *[_type == "event" && date >= now()] | order(date asc) {
    ...
  }
`)

const UPCOMING_EVENTS_QUERY = defineQuery(`
  *[_type == "event" && date >= now()] | order(date asc) [0...3] {
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

export const getUpcomingEvents = async () => {
  try {
    const upcomingEvents = await client.fetch(UPCOMING_EVENTS_QUERY)
    return upcomingEvents
  } catch (error) {
    throw new Error(error instanceof Error ? error.message : String(error))
  }
}; 