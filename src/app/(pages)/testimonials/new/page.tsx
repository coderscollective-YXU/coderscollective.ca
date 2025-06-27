import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import TextArea from "@/components/ui/textarea";
import { getAllWorkshopTypes } from "@/sanity/queries/workshopType";

const Page = async () => {
  const workshopTypes = await getAllWorkshopTypes();
  return (
    <div className="min-h-screen bg-background text-foreground">
      <section className="py-20 ">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
                Share Your Story
              </h1>
              <p className="text-lg text-muted-foreground">
                Help inspire others by sharing your experience with Coders
                Collective
              </p>
            </div>

            <div className="glass-card p-8 rounded-xl">
              <form className="space-y-6">
                <div className="">
                  <Label htmlFor="lastName">First Name</Label>
                  <Input
                    id="firstName"
                    // type=""
                    name="firstName"
                    placeholder="John"
                    required
                    // disabled={isPending}
                  />
                </div>
                <div className="">
                  <Label htmlFor="lastName">Last Name</Label>
                  <Input
                    id="lastName"
                    // type=""
                    name="lastName"
                    placeholder="Smith"
                    required
                    // disabled={isPending}
                  />
                </div>
                <div className="">
                  <Label htmlFor="workshopType">Workshop Type</Label>
                  <select
                    name="workshopType"
                    className="flex h-10 w-full items-center justify-between rounded-md border border-input bg-input px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1"
                  >
                    {workshopTypes.map((type) => (
                      <option
                        key={type._id}
                        value={type._id}
                        className="hover:text-red-400"
                      >
                        {type.title}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="">
                  <Label>What did you like about the workshop?</Label>
                  <TextArea name="whatYouLiked" />
                </div>
                <div className="">
                  <Label>What could be improved?</Label>
                  <TextArea name="improvements" />
                </div>
                <div className="">
                  <Label>Sound byte we can feature on our website?</Label>
                  <TextArea name="marketingSoundByte" />
                </div>
                <Button type="submit" className="w-full" size="lg">
                  Submit Testimonial
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Page;
