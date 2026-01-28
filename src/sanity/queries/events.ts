import { defineQuery } from "next-sanity";
import { client } from "../lib/client";

// Events within the next 2 months for the Events page
const EVENTS_NEXT_TWO_MONTHS_QUERY = defineQuery(`
  *[_type == "event" && date >= now() && date <= $twoMonthsFromNow] | order(date asc) {
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
    // Calculate date 2 months from now
    const now = new Date();
    const twoMonthsFromNow = new Date(now.getFullYear(), now.getMonth() + 2, now.getDate());

    const allEvents = await client.fetch(EVENTS_NEXT_TWO_MONTHS_QUERY, {
      twoMonthsFromNow: twoMonthsFromNow.toISOString()
    })
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