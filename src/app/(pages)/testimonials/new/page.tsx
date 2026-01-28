import { getAllWorkshopTypes } from "@/sanity/queries/workshopType";
import TestimonialForm from "./TestimonialForm";

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
              <TestimonialForm workshopTypes={workshopTypes} />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Page;
