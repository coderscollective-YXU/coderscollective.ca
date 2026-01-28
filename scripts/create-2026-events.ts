/**
 * Script to create 2026 event schedule (Feb - Dec)
 * Run with: npx tsx scripts/create-2026-events.ts
 */

import { createClient } from "@sanity/client";
import { readFileSync } from "fs";
import { resolve } from "path";

// Load .env file manually
const envPath = resolve(process.cwd(), ".env");
const envContent = readFileSync(envPath, "utf-8");
envContent.split("\n").forEach((line) => {
  const [key, ...valueParts] = line.split("=");
  if (key && valueParts.length > 0) {
    const value = valueParts.join("=").trim().replace(/^["']|["']$/g, "");
    if (!process.env[key.trim()]) {
      process.env[key.trim()] = value;
    }
  }
});

const client = createClient({
  projectId: "fx7lizhu",
  dataset: "production",
  apiVersion: "2025-03-04",
  useCdn: false,
  token: process.env.SANITY_API_WRITE_TOKEN,
});

// Workshop types with their Sanity IDs
const workshopTypes = [
  { id: "a79f9c33-ffd5-467a-ad53-78da7f20e126", title: "Generative AI For Beginners", name: "Generative AI For Beginners - 2 Hour Online Workshop" },
  { id: "f4364635-cbb8-4e9f-919a-532c997833b6", title: "Introduction to HTML & CSS", name: "Introduction to HTML & CSS - 2 Hour Online Workshop" },
  { id: "60e304ad-3166-4739-bda7-a10e215867cb", title: "Prompt Engineering for Beginners", name: "Prompt Engineering for Beginners - 2 Hour Online Workshop" },
  { id: "bff4fcc5-b7a9-4e6b-826e-d207843442c8", title: "Introduction to Javascript", name: "Introduction to Javascript - 2 Hour Online Workshop" },
  { id: "ec730de8-6c06-4730-9aad-15b4f0c454a5", title: "ChatGPT for Beginners", name: "ChatGPT for Beginners - 2 Hour Online Workshop" },
  { id: "9d756223-ca40-4a07-9d5e-f4b4fbe711be", title: "Machine Learning 101", name: "Machine Learning 101 - 2 Hour Online Workshop" },
];

interface EventData {
  _type: "event";
  name: string;
  date: string;
  hours: string;
  location: string;
  spotsAvailable: number;
  isLaunched: boolean;
  eventType: "workshop" | "networking";
  workshopType?: { _type: "reference"; _ref: string };
}

const events: EventData[] = [];
let workshopIndex = 0;

// Helper to get next Thursday after a given date
function getThursdayOfWeek(year: number, month: number, week: number): Date {
  const firstDay = new Date(year, month, 1);
  const firstThursday = new Date(year, month, 1 + ((4 - firstDay.getDay() + 7) % 7));
  firstThursday.setDate(firstThursday.getDate() + (week - 1) * 7);
  return firstThursday;
}

// Helper to get Saturday of a specific week
function getSaturdayOfWeek(year: number, month: number, week: number): Date {
  const firstDay = new Date(year, month, 1);
  const firstSaturday = new Date(year, month, 1 + ((6 - firstDay.getDay() + 7) % 7));
  firstSaturday.setDate(firstSaturday.getDate() + (week - 1) * 7);
  return firstSaturday;
}

// Create schedule for Feb - Dec 2026
const schedule = [
  // February 2026
  { month: 1, coffeeAndCode: true, workshops: 1 },
  // March 2026
  { month: 2, coffeeAndCode: false, workshops: 2 },
  // April 2026
  { month: 3, coffeeAndCode: true, workshops: 1 },
  // May 2026
  { month: 4, coffeeAndCode: false, workshops: 2 },
  // June 2026
  { month: 5, coffeeAndCode: true, workshops: 1 },
  // July 2026
  { month: 6, coffeeAndCode: false, workshops: 2 },
  // August 2026
  { month: 7, coffeeAndCode: true, workshops: 1 },
  // September 2026
  { month: 8, coffeeAndCode: false, workshops: 2 },
  // October 2026
  { month: 9, coffeeAndCode: true, workshops: 1 },
  // November 2026
  { month: 10, coffeeAndCode: false, workshops: 2 },
  // December 2026
  { month: 11, coffeeAndCode: true, workshops: 1 },
];

for (const { month, coffeeAndCode, workshops } of schedule) {
  // Add Coffee and Code on the last Saturday of the month
  if (coffeeAndCode) {
    const lastSaturday = getSaturdayOfWeek(2026, month, 4);
    // If 4th Saturday is in next month, use 3rd Saturday
    if (lastSaturday.getMonth() !== month) {
      lastSaturday.setDate(lastSaturday.getDate() - 7);
    }
    lastSaturday.setHours(10, 0, 0, 0); // 10 AM EST

    events.push({
      _type: "event",
      name: "Coffee and Code",
      date: lastSaturday.toISOString(),
      hours: "10 AM to 12 PM EST",
      location: "TBA",
      spotsAvailable: 10,
      isLaunched: false,
      eventType: "networking",
    });
  }

  // Add workshops (on Thursdays, typically 2nd and/or 3rd week)
  for (let i = 0; i < workshops; i++) {
    const week = i === 0 ? 2 : 3; // 2nd Thursday or 3rd Thursday
    const thursday = getThursdayOfWeek(2026, month, week);
    thursday.setHours(19, 0, 0, 0); // 7 PM EST

    const workshop = workshopTypes[workshopIndex % workshopTypes.length];
    workshopIndex++;

    events.push({
      _type: "event",
      name: workshop.name,
      date: thursday.toISOString(),
      hours: "7 PM to 9 PM EST",
      location: "Online Workshop",
      spotsAvailable: 20,
      isLaunched: false,
      eventType: "workshop",
      workshopType: {
        _type: "reference",
        _ref: workshop.id,
      },
    });
  }
}

// Sort events by date
events.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());

async function createEvents() {
  console.log("\n📅 Creating 2026 Event Schedule (Feb - Dec)\n");
  console.log("=".repeat(70));
  console.log(`Total events to create: ${events.length}`);
  console.log("=".repeat(70));

  // Preview events
  console.log("\nPreview of events to be created:\n");
  events.forEach((event, index) => {
    const date = new Date(event.date);
    const formatted = date.toLocaleDateString("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    });
    console.log(`${index + 1}. ${event.name}`);
    console.log(`   Date: ${formatted} | Type: ${event.eventType}`);
  });

  // Ask for confirmation
  console.log("\n" + "=".repeat(70));
  console.log("Creating events in Sanity...\n");

  const transaction = client.transaction();

  for (const event of events) {
    transaction.create(event);
  }

  try {
    const result = await transaction.commit();
    console.log(`\n✅ Successfully created ${result.results.length} events!\n`);
  } catch (error) {
    console.error("❌ Error creating events:", error);
    process.exit(1);
  }
}

createEvents();
