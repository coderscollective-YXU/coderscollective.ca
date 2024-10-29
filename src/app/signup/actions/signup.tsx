/* eslint-disable @typescript-eslint/no-unused-vars */
"use server";

import WelcomeEmail from '@/components/email/welcome-email';
import { client } from "@/sanity/lib/client"; 
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

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

    try {
      const { error } = await resend.emails.send({
        from: 'Coders Collective <info@updates.coderscollective.ca>',
        to: [email],
        replyTo: 'info@coderscollective.ca',
        subject: 'Your Spot is Reserved at Coders Collective 💫',
        react: WelcomeEmail(),
      });
  
      if (error) {
        console.log("Error sending email:", error);
        return { success: false };
      }
  
      return { success: true };
    } catch (err) {
      return { success: false };
    }

  } catch (error) {
    console.error("Error creating newsletter signup:", error);
    return {
      success: false,
      error: "Failed to sign up for newsletter",
    };
  }
}

export default signup;
