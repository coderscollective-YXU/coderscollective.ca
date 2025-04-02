import { defineQuery } from "next-sanity";
import { client } from "../lib/client";


const EXISTING_SUBSCRIBER_QUERY = defineQuery(`
    *[_type == "newletterSignup" && email == $email] {
      _id,
      email
    }
  `);


export const getExistintSubscriber = async (email: string) => {
  try {
    const subscriber = await client.fetch(EXISTING_SUBSCRIBER_QUERY, {email})

    console.log({subscriber})
    return subscriber
  } catch (error) {
    throw new Error(JSON.stringify(error))
  }
};