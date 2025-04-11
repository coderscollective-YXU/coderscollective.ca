import { Alert, AlertDescription } from "@/components/ui/alert";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import MagicIcon from "./magic-icon";
import SignupForm from "./signupForm";

export default function SignupPage() {
  return (
    <>
      <div className="min-h-screen bg-gray-900 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md mx-auto">
          <Card>
            <CardHeader>
              <div className="flex justify-center m-3">
                <MagicIcon />
              </div>
              <CardTitle className="text-2xl font-bold text-center">
                Join Coders Collective
                <div className="flex justify-center mb-4">
                  <Badge className="bg-blue-600 dark:bg-gray-100 text-gray-100 dark:text-gray-800">
                    London, ON
                  </Badge>
                </div>
              </CardTitle>
              <CardDescription className="text-center">
                Be the first to know when we launch our free community-led tech
                events and meetups in London, Ontario.
              </CardDescription>
            </CardHeader>

            <CardContent>
              <SignupForm /> 
            </CardContent>

            <CardFooter className="flex flex-col space-y-4">
              <Alert>
                <AlertDescription>
                  <strong>Privacy Notice:</strong> We collect your email address
                  to send you updates about Coders Collective&apos;s launch and
                  upcoming events. Your information will never be shared with
                  third parties. You can unsubscribe at any time using the link
                  in our emails.
                </AlertDescription>
              </Alert>

              <div className="text-sm text-gray-500 text-center">
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