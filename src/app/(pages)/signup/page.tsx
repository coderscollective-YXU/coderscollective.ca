import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle
} from "@/components/ui/card";
import MagicIcon from "./magic-icon";
import SignupForm from "./signupForm";

export default function SignupPage() {
  return (
    <>
      <div className='min-h-screen py-12 px-4 sm:px-6 lg:px-8 mt-24'>
        <div className='max-w-2xl mx-auto'>
          <Card>
            <CardHeader>
              <div className='flex justify-center m-3'>
                <MagicIcon variant='gradient' />
              </div>
              <CardTitle className='text-2xl font-bold text-center'>
                Join Coders Collective
                <div className='flex justify-center mb-4'>
                  <Badge className='bg-blue-600 dark:bg-gray-100 text-gray-100 dark:text-gray-800'>
                    London, ON
                  </Badge>
                </div>
                <p className="text-sm text-muted-foreground">
                  Join our community of coders and get access to our events, resources, and support.
                </p>
              </CardTitle>
            </CardHeader>
            <hr></hr>
            <CardContent>
              <SignupForm />
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  );
}
