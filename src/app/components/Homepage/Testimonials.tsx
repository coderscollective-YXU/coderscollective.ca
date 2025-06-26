import { Quote } from "lucide-react";
import { HOMEPAGE_QUERYResult } from "../../../../sanity.types";

const Testimonials = ({
  testimonials,
}: {
  testimonials: NonNullable<HOMEPAGE_QUERYResult>["testimonials"];
}) => {
  if (!testimonials?.featuredTestimonials?.length) return;
  return (
    <section className="py-20 bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-accent/5"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {testimonials.title}
          </h2>
          <p className="text-lg text-muted-foreground">
            {testimonials.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.featuredTestimonials?.map((testimonial, index) => (
            <div
              key={index}
              className="glass-card p-8 rounded-xl relative group hover:border-primary/30 transition-all duration-300"
            >
              <div className="absolute -top-3 -left-3 bg-primary/10 p-3 rounded-full group-hover:bg-primary/20 transition-colors">
                <Quote className="h-6 w-6 text-primary" />
              </div>

              <blockquote className="text-lg text-foreground mb-6 pt-4 leading-relaxed">
                {`"${testimonial.quote}"`}
              </blockquote>

              <div className="flex items-center">
                <cite className="text-primary font-semibold not-italic">
                  {`${testimonial.firstName} ${testimonial.lastName}`}
                </cite>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
