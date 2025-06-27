"use server";
import { z } from "zod";

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

const delay = (ms: number) => new Promise((res) => setTimeout(res, ms));

export async function saveNewTestimonial(
  formState: FormState,
  formData: FormData
): Promise<FormState> {
  try {
    console.log({ formData });
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

    await delay(2000);

    console.log({ data });
    return {
      success: false,
      errors: {
        message: "not implemented",
      },
    };
  } catch (error) {
    console.error("Error creating newsletter signup:", error);
    return {
      success: false,
      errors: { message: "Failed to sign up for newsletter" },
    };
  }
}
