"use server";

export default async function signup(formData: FormData) {
  const email = formData.get("email") as string;

  console.log("Email:", email);

  return { success: true };
}
