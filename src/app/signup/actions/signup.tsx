"use server";

import { client } from "@/sanity/lib/client"; 

export async function signup(formData: FormData) {
  try {
    const email = formData.get("email") as string;

    if (!email) {
      return { success: false, error: "Email is required" };
    }

    await client.create({
      _type: "newletterSignup",
      email: email,
    });

    return { success: true };
  } catch (error) {
    console.error("Error creating newsletter signup:", error);
    return {
      success: false,
      error: "Failed to sign up for newsletter",
    };
  }
}

export default signup;
