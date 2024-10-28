"use client";

import { Alert, AlertDescription } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";

export default function SignupPage() {
  const [email, setEmail] = useState("");
  const [isChecked, setIsChecked] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", { email, isChecked });
  };

  return (
    <>
      <div className='min-h-screen bg-gray-900 py-12 px-4 sm:px-6 lg:px-8'>
        <div className='max-w-md mx-auto'>
          <Card>
            <CardHeader>
              <div className='flex justify-center m-3'>
                <svg
                  className='w-12 h-12 text-gray-800 dark:text-white'
                  aria-hidden='true'
                  xmlns='http://www.w3.org/2000/svg'
                  width='48'
                  height='48'
                  fill='none'
                  viewBox='0 0 24 24'
                >
                  <path
                    stroke='currentColor'
                    stroke-linecap='round'
                    stroke-linejoin='round'
                    stroke-width='2'
                    d='M16.872 9.687 20 6.56 17.44 4 4 17.44 6.56 20 16.873 9.687Zm0 0-2.56-2.56M6 7v2m0 0v2m0-2H4m2 0h2m7 7v2m0 0v2m0-2h-2m2 0h2M8 4h.01v.01H8V4Zm2 2h.01v.01H10V6Zm2-2h.01v.01H12V4Zm8 8h.01v.01H20V12Zm-2 2h.01v.01H18V14Zm2 2h.01v.01H20V16Z'
                  />
                </svg>
              </div>

              <CardTitle className='text-2xl font-bold text-center'>
                Join Coders Collective
              </CardTitle>
              <CardDescription className='text-center'>
                Be the first to know when we launch our free community-led tech
                workshops in London, Ontario.
              </CardDescription>
            </CardHeader>

            <CardContent>
              <form onSubmit={handleSubmit} className='space-y-6'>
                <div className='space-y-2'>
                  <Label htmlFor='email'>Email address</Label>
                  <Input
                    id='email'
                    type='email'
                    placeholder='your@email.com'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>

                <div className='space-y-2'>
                  <div className='flex items-center space-x-2'>
                    <Checkbox
                      id='consent'
                      checked={isChecked}
                      onCheckedChange={(checked) =>
                        setIsChecked(checked as boolean)
                      }
                      required
                    />
                    <Label htmlFor='consent' className='text-sm'>
                      I agree to receive email updates about Coders
                      Collective&apos;s launch, upcoming workshops, and
                      community events. I understand I can unsubscribe at any
                      time.
                    </Label>
                  </div>
                </div>

                <Button type='submit' className='w-full'>
                  Sign Up for Updates
                </Button>
              </form>
            </CardContent>

            <CardFooter className='flex flex-col space-y-4'>
              <Alert>
                <AlertDescription>
                  <strong>Privacy Notice:</strong> We collect your email address
                  to send you updates about Coders Collective&apos;s launch and
                  upcoming events. Your information will never be shared with
                  third parties. You can unsubscribe at any time using the link
                  in our emails.
                </AlertDescription>
              </Alert>

              <div className='text-sm text-gray-500 text-center'>
                <p>
                  Coders Collective - A community initiative in London, Ontario
                </p>
                <p>Contact: info@coderscollective.ca</p>
              </div>
            </CardFooter>
          </Card>
        </div>
      </div>
    </>
  );
}
