/**
 * Simple script to fetch all event titles and dates from Sanity
 *
 * Run with: npx tsx scripts/fetch-events.ts
 */

import { createClient } from "@sanity/client";

const client = createClient({
  projectId: "fx7lizhu",
  dataset: "production",
  apiVersion: "2025-03-04",
  useCdn: true,
});

async function fetchEvents() {
  const query = `*[_type == "event"] | order(date asc) {
    _id,
    name,
    date
  }`;

  try {
    const events = await client.fetch(query);

    console.log("\n📅 All Events in Sanity:\n");
    console.log("-".repeat(60));

    if (events.length === 0) {
      console.log("No events found.");
      return;
    }

    events.forEach((event: { _id: string; name: string; date: string }, index: number) => {
      const dateObj = new Date(event.date);
      const formattedDate = dateObj.toLocaleDateString("en-US", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
      });

      console.log(`${index + 1}. ${event.name}`);
      console.log(`   Date: ${formattedDate}`);
      console.log(`   ID: ${event._id}`);
      console.log("-".repeat(60));
    });

    console.log(`\nTotal: ${events.length} event(s)\n`);
  } catch (error) {
    console.error("Error fetching events:", error);
  }
}

fetchEvents();
