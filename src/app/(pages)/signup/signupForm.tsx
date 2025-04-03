"use client";
import { useActionState, useEffect } from "react";
import signup from "./actions/signup";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";
import { useRouter } from "next/navigation";

const SignupForm = () => {

  const [formState, formAction, isPending] = useActionState(signup, {
    success: false,
    error: undefined
  });
  const router = useRouter();

  useEffect(() => {
    if (formState.success) {
      const timeout = setTimeout(() => {
        router.push("/success");
      }, 4000);

      return () => {
        clearTimeout(timeout);
      };
    }
  }, [formState.success, router]);


  return (
    <form action={formAction} className="space-y-6">
      <div className="space-y-2">
        <Label htmlFor="email">Email address</Label>
        <Input
          id="email"
          type="email"
          name="email"
          placeholder="your@email.com"

          required
          disabled={isPending}
        />
      </div>

      <div className="space-y-2">
        <div className="flex items-center space-x-2">
          <Checkbox
            id="consent"
            required
            disabled={isPending}
          />
          <Label htmlFor="consent" className="text-sm">
            I agree to receive email updates about Coders
            Collective&apos;s launch, upcoming workshops, and
            community events. I understand I can unsubscribe at any
            time.
          </Label>
        </div>
      </div>

      <Button
        type="submit"
        className="w-full bg-slate-500"
        disabled={isPending}
      >
        {isPending ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Signing up...
          </>
        ) : (
          "Sign Up for Updates"
        )}
      </Button>
      {formState.success && (
        <p className="text-green-600">✔️ Email saved successfully</p>
      )}
      {formState.error && (
        <p className="text-red-600">{formState.error}</p>
      )}
    </form>
  );
}

export default SignupForm;