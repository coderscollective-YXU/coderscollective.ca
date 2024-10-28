// app/page.tsx
"use client";

import { useState } from "react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { BackgroundBeams } from '@/components/ui/background-beams';

export default function SignupPage() {
  const [email, setEmail] = useState("");
  const [isChecked, setIsChecked] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Form submitted:", { email, isChecked });
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md mx-auto">
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-center">
              Join Coders Collective
            </CardTitle>
            <CardDescription className="text-center">
              Be the first to know when we launch our free community-led tech workshops in London, Ontario.
            </CardDescription>
          </CardHeader>

          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="email">Email address</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="your@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>

              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="consent"
                    checked={isChecked}
                    onCheckedChange={(checked) => setIsChecked(checked as boolean)}
                    required
                  />
                  <Label htmlFor="consent" className="text-sm">
                    I agree to receive email updates about Coders Collective's launch, upcoming workshops, and community events. I understand I can unsubscribe at any time.
                  </Label>
                </div>
              </div>

              <Button type="submit" className="w-full">
                Sign Up for Updates
              </Button>
            </form>
          </CardContent>

          <CardFooter className="flex flex-col space-y-4">
            <Alert>
              <AlertDescription>
                <strong>Privacy Notice:</strong> We collect your email address to send you updates about Coders Collective's launch and upcoming events. Your information will never be shared with third parties. You can unsubscribe at any time using the link in our emails.
              </AlertDescription>
            </Alert>

            <div className="text-sm text-gray-500 text-center">
              <p>Coders Collective - A community initiative in London, Ontario</p>
              <p>Contact: info@coderscollective.ca</p>
            </div>
          </CardFooter>
        </Card>
      </div>
      <BackgroundBeams/>
    </div>
  );
}