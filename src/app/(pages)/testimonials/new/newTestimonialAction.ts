"use server";
import { sanityWriteClient } from "@/sanity/lib/writeClient";
import { z } from "zod";
import { Testimonial } from "../../../../../sanity.types";

const formSchema = z.object({
  firstName: z.string().min(1, "First name is required."),
  lastName: z.string().min(1, "Last name is required."),
  email: z
    .string()
    .min(1, "Email is required.")
    .email("Invalid email address."),
  workshopType: z.string().min(1, "Workshop type is required."),
  whatYouLiked: z.string().min(1, "Tell us what you liked about the workshop!"),
  improvements: z
    .string()
    .min(1, "What can we improve? This field is required."),
  marketingSoundByte: z.string().min(1, "A marketing sound byte is required."),
});

export type TestimonialFormSchema = z.infer<typeof formSchema>;

type FormState = {
  success: boolean;
  errors:
    | {
        firstName?: string[] | undefined;
        lastName?: string[] | undefined;
        email?: string[] | undefined;
        workshopType?: string[] | undefined;
        whatYouLiked?: string[] | undefined;
        improvements?: string[] | undefined;
        marketingSoundByte?: string[] | undefined;
      }
    | {
        message: string | undefined;
      }
    | undefined;
};

export async function saveNewTestimonial(
  formState: FormState,
  formData: FormData
): Promise<FormState> {
  try {
    const rawData = {
      firstName: formData.get("firstName"),
      lastName: formData.get("lastName"),
      email: formData.get("email"),
      workshopType: formData.get("workshopType"),
      whatYouLiked: formData.get("whatYouLiked"),
      improvements: formData.get("improvements"),
      marketingSoundByte: formData.get("marketingSoundByte"),
    };

    const { data, success, error } = formSchema.safeParse(rawData);
    if (!success) {
      console.error(error.formErrors.fieldErrors);
      return { success: false, errors: error.formErrors.fieldErrors };
    }

    const testimonial: TestimonialToSave = {
      _type: "testimonial",
      ...data,
      workshopType: {
        _ref: data.workshopType,
        _type: "reference",
      },
    };

    await sanityWriteClient.create(testimonial);
    return {
      success: true,
      errors: undefined,
    };
  } catch (error) {
    console.error("Error sending testimonial:", error);
    return {
      success: false,
      errors: { message: "Failed to send testimonial" },
    };
  }
}

type TestimonialToSave = Omit<
  Testimonial,
  "_id" | "_createdAt" | "_updatedAt" | "_rev"
>;
