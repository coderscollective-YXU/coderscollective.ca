import { defineQuery } from "next-sanity";
import { client } from "../lib/client";

const ALL_WORKSHOP_TYPES_QUERY = defineQuery(`
  *[_type == "workshopType"] {
    _id,
    title
  }
  `);

export const getAllWorkshopTypes = async () => {
  try {
    const content = await client.fetch(ALL_WORKSHOP_TYPES_QUERY);
    return content;
  } catch (error) {
    throw new Error(error instanceof Error ? error.message : String(error));
  }
};
