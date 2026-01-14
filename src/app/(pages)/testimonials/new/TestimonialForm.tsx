"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Select from "@/components/ui/select";
import TextArea from "@/components/ui/textarea";
import { ALL_WORKSHOP_TYPES_QUERYResult } from "../../../../../sanity.types";
import { useActionState, useEffect, useState } from "react";
import {
  saveNewTestimonial,
  TestimonialFormSchema,
} from "./newTestimonialAction";

const TestimonialForm = ({
  workshopTypes,
}: {
  workshopTypes: ALL_WORKSHOP_TYPES_QUERYResult;
}) => {
  const [errorMessage, setErrorMessage] = useState<undefined | string>(
    undefined
  );
  const [formData, setFormData] = useState<TestimonialFormSchema>({
    firstName: "",
    lastName: "",
    email: "",
    workshopType: "",
    whatYouLiked: "",
    improvements: "",
    marketingSoundByte: "",
  });

  const [formState, formAction, isPending] = useActionState(
    saveNewTestimonial,
    {
      success: false,
      errors: undefined,
    }
  );

  useEffect(() => {
    if (formState.success) {
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        workshopType: "",
        whatYouLiked: "",
        improvements: "",
        marketingSoundByte: "",
      });
    }
  }, [formState.success]);
  useEffect(() => {
    if (formState.errors) {
      if (formState.errors && "message" in formState.errors) {
        setErrorMessage(formState.errors.message);
      }
    } else {
      setErrorMessage(undefined);
    }
  }, [formState]);
  return (
    <form action={formAction} className="space-y-6">
      <div className="">
        <Label htmlFor="lastName">First Name</Label>
        <Input
          disabled={isPending}
          id="firstName"
          name="firstName"
          placeholder="John"
          required
          autoComplete="given-name"
          value={formData.firstName}
          onChange={(e) =>
            setFormData((prev) => ({ ...prev, firstName: e.target.value }))
          }
        />
        {formState.errors &&
          "firstName" in formState.errors &&
          Array.isArray(formState.errors.firstName) &&
          formState.errors.firstName.length > 0 && (
            <p className="text-red-500 text-sm mt-1">
              {formState.errors.firstName.join(" ")}
            </p>
          )}
      </div>
      <div className="">
        <Label htmlFor="lastName">Last Name</Label>
        <Input
          value={formData.lastName}
          id="lastName"
          disabled={isPending}
          name="lastName"
          placeholder="Smith"
          required
          autoComplete="family-name"
          onChange={(e) =>
            setFormData((prev) => ({ ...prev, lastName: e.target.value }))
          }
        />
        {formState.errors &&
          "lastName" in formState.errors &&
          Array.isArray(formState.errors.lastName) &&
          formState.errors.lastName.length > 0 && (
            <p className="text-red-500 text-sm mt-1">
              {formState.errors.lastName.join(" ")}
            </p>
          )}
      </div>
      <div className="">
        <Label htmlFor="email">Email</Label>
        <Input
          value={formData.email}
          autoComplete="email"
          type="email"
          id="email"
          disabled={isPending}
          name="email"
          placeholder="johnsmith@gmail.com"
          required
          onChange={(e) =>
            setFormData((prev) => ({ ...prev, email: e.target.value }))
          }
        />
        {formState.errors &&
          "email" in formState.errors &&
          Array.isArray(formState.errors.email) &&
          formState.errors.email.length > 0 && (
            <p className="text-red-500 text-sm mt-1">
              {formState.errors.email.join(" ")}
            </p>
          )}
      </div>
      <div className="">
        <Label htmlFor="workshopType">Workshop Type</Label>
        <Select
          value={formData.workshopType}
          disabled={isPending}
          options={workshopTypes.map((type) => ({
            title: type.title,
            value: type._id,
          }))}
          id="workshopType"
          name="workshopType"
          onChange={(e) =>
            setFormData((prev) => ({ ...prev, workshopType: e.target.value }))
          }
          className="flex h-10 w-full items-center justify-between rounded-md border border-input bg-input px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1"
        />
        {formState.errors &&
          "workshopType" in formState.errors &&
          Array.isArray(formState.errors.workshopType) &&
          formState.errors.workshopType.length > 0 && (
            <p className="text-red-500 text-sm mt-1">
              {formState.errors.workshopType.join(" ")}
            </p>
          )}
      </div>
      <div className="">
        <Label htmlFor="whatYouLiked">
          What did you like about the workshop?
        </Label>
        <TextArea
          value={formData.whatYouLiked}
          disabled={isPending}
          name="whatYouLiked"
          id="whatYouLiked"
          required
          onChange={(e) =>
            setFormData((prev) => ({ ...prev, whatYouLiked: e.target.value }))
          }
        />
        {formState.errors &&
          "whatYouLiked" in formState.errors &&
          Array.isArray(formState.errors.whatYouLiked) &&
          formState.errors.whatYouLiked.length > 0 && (
            <p className="text-red-500 text-sm mt-1">
              {formState.errors.whatYouLiked.join(" ")}
            </p>
          )}
      </div>
      <div className="">
        <Label htmlFor="improvements">What could be improved?</Label>
        <TextArea
          name="improvements"
          id="improvements"
          required
          value={formData.improvements}
          disabled={isPending}
          onChange={(e) =>
            setFormData((prev) => ({ ...prev, improvements: e.target.value }))
          }
        />
        {formState.errors &&
          "improvements" in formState.errors &&
          Array.isArray(formState.errors.improvements) &&
          formState.errors.improvements.length > 0 && (
            <p className="text-red-500 text-sm mt-1">
              {formState.errors.improvements.join(" ")}
            </p>
          )}
      </div>
      <div className="">
        <Label htmlFor="marketingSoundByte">
          Sound byte we can feature on our website?
        </Label>
        <TextArea
          id="marketingSoundByte"
          name="marketingSoundByte"
          value={formData.marketingSoundByte}
          disabled={isPending}
          required
          onChange={(e) =>
            setFormData((prev) => ({
              ...prev,
              marketingSoundByte: e.target.value,
            }))
          }
        />
        {formState.errors &&
          "marketingSoundByte" in formState.errors &&
          Array.isArray(formState.errors.marketingSoundByte) &&
          formState.errors.marketingSoundByte.length > 0 && (
            <p className="text-red-500 text-sm mt-1">
              {formState.errors.marketingSoundByte.join(" ")}
            </p>
          )}
      </div>
      {errorMessage && (
        <p className="text-red-500 text-sm mt-1">{errorMessage}</p>
      )}
      <Button type="submit" disabled={isPending} className="w-full" size="lg">
        Submit Testimonial
      </Button>
      {formState.success && (
        <p className="text-sm mt-1 text-center">
          ✔️ Testimonial sent successfully
        </p>
      )}
    </form>
  );
};

export default TestimonialForm;
