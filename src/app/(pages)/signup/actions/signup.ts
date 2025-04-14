"use server";

import { FormState } from "@/app/types";
import WelcomeEmail from "@/components/email/welcome-email";
import { sanityWriteClient } from "@/sanity/lib/writeClient";
import { getExistintSubscriber } from "@/sanity/queries/existingSubscriber";
import { Resend } from "resend";
import {z} from "zod"
const resend = new Resend(process.env.RESEND_API_KEY);

const formSchema = z.object({
  email: z.string().email().min(4),
  privacyConsent: z.boolean()
})

export async function signup(formState: FormState, formData: FormData): Promise<FormState> {
  try {
    const email = formData.get("email") as string;
    const isMember = formData.get("isMember") === "on";
    const isVolunteer = formData.get("isVolunteer") === "on";
    const isSponsor = formData.get("isSponsor") === "on";
    const privacyConsent = formData.get("privacyConsent") === "on";

    const {data, success, error: emailError} = formSchema.safeParse({
      email,
      privacyConsent
    })

    if (!success) {
      const error = emailError.formErrors.fieldErrors.email?.join(" ") || 
                    emailError.formErrors.fieldErrors.privacyConsent?.join(" ") ||
                    "Invalid form submission";
      return { success: false, error };
    }

    // Check if at least one option is selected
    if (!isMember && !isVolunteer && !isSponsor) {
      return {
        success: false,
        error: "Please select at least one interest option"
      }
    }

    const existingSubscriber = await getExistintSubscriber(data.email)
    
    if (existingSubscriber.length !== 0) {
      return {
        success: false,
        error: "You are already subscribed!"
      }
    }

    await sanityWriteClient.create({
      _type: "newletterSignup",
      email: data.email,
      isMember,
      isVolunteer,
      isSponsor,
      privacyConsent
    });

    try {
      const { error } = await resend.emails.send({
        from: 'Coders Collective <info@updates.coderscollective.ca>',
        to: [data.email],
        replyTo: 'info@coderscollective.ca',
        subject: 'Your Spot is Reserved at Coders Collective 💫',
        react: WelcomeEmail(),
      });

      if (error) {
        console.log("Error sending email:", error);
        return { success: false, error: "something went wrong sending the email" };
      }

      return { success: true, error: undefined };
    } catch (err) {
      console.error(err)
      return { success: false, error: "Something went wrong." };
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
