"use client";
import { useActionState, useEffect } from "react";
import signup from "./actions/signup";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";
import { useRouter } from "next/navigation";
import Link from "next/link";

const SignupForm = () => {
  const [formState, formAction, isPending] = useActionState(signup, {
    success: false,
    error: undefined,
  });
  const router = useRouter();

  useEffect(() => {
    if (formState.success) {
      const timeout = setTimeout(() => {
        router.push("/");
      }, 4000);

      return () => {
        clearTimeout(timeout);
      };
    }
  }, [formState.success, router]);

  return (
    <form action={formAction} className='space-y-6 mt-4'>
      <div className='space-y-2'>
        <div className='space-y-3'>
          <Label>I&apos;m interested in:</Label>
          <div className='space-y-2'>
            <div>
              <div className='flex items-center space-x-2'>
                <Checkbox id='isMember' name='isMember' disabled={isPending} />
                <Label htmlFor='isMember' className='text-sm'>
                  Member
                </Label>
              </div>
              <p className='sm:text-sm text-muted-foreground mt-1 ml-6 text-xs'>
                Be the first to know when we launch new events and resources.
              </p>
            </div>

            <div>
              <div className='flex items-center space-x-2'>
                <Checkbox
                  id='isVolunteer'
                  name='isVolunteer'
                  disabled={isPending}
                />
                <Label htmlFor='isVolunteer' className='text-sm'>
                  Volunteer
                </Label>
              </div>
              <p className='sm:text-sm text-muted-foreground mt-1 ml-6 text-xs'>
                Teach or mentor a workshop or event.
              </p>
            </div>

            <div>
              <div className='flex items-center space-x-2'>
                <Checkbox id='isSponsor' name='isSponsor' disabled={isPending} />
                <Label htmlFor='isSponsor' className='text-sm'>
                 Venue Sponsor
                </Label>
              </div>
              <p className='sm:text-sm text-muted-foreground mt-1 ml-6 text-xs'>
                Help us cover the costs of our venue for our events.
              </p>
            </div>
          </div>
        </div>
        <div className='space-y-2'>
          <Label htmlFor='email'>Email address</Label>
          <Input
            id='email'
            type='email'
            name='email'
            placeholder='your@email.com'
            required
            disabled={isPending}
          />
        </div>
      </div>
      <div className='space-y-2'>
        <div className='flex items-center space-x-2'>
          <Checkbox
            id='privacyConsent'
            name='privacyConsent'
            required
            disabled={isPending}
          />
          <Label htmlFor='privacyConsent' className='text-sm'>
            I agree to the{" "}
            <Link
              target='_blank'
              href='/privacy-policy'
              className='text-blue-500 hover:underline'
            >
              Privacy Policy
            </Link>{" "}
            and the{" "}
            <Link
              target='_blank'
              href='/code-of-conduct'
              className='text-blue-500 hover:underline'
            >
              Code of Conduct
            </Link>
          </Label>
        </div>
      </div>

      <Button
        type='submit'
        className='w-full bg-slate-500'
        disabled={isPending}
      >
        {isPending ? (
          <>
            <Loader2 className='mr-2 h-4 w-4 animate-spin' />
            Signing up...
          </>
        ) : (
          "Sign Up"
        )}
      </Button>
      {formState.success && (
        <p className='text-green-600'>✔️ Email saved successfully</p>
      )}
      {formState.error && <p className='text-red-600'>{formState.error}</p>}
    </form>
  );
};

export default SignupForm;
