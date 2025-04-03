"use client";
import { splitAndStyleCodeAndAi } from "@/lib/utils";
import { HOMEPAGE_QUERYResult } from "../../../sanity.types";
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";

const Hero = ({ homepageContent }: {
  homepageContent: HOMEPAGE_QUERYResult
}) => {
  if (!homepageContent || !homepageContent.hero) return;
  const scrollToNextSection = () => {
    const missionSection = document.getElementById('mission');
    if (missionSection) {
      missionSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative pt-24 pb-32 min-h-screen flex items-center">
      <div className="container mx-auto px-4 z-10 relative">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
            {splitAndStyleCodeAndAi(homepageContent.hero.title)?.map((wordObj, index) => (
              <span
                key={index}
                className={wordObj.isStyled ? "gradient-text" : ""}
              >
                {wordObj.text}
                {index < splitAndStyleCodeAndAi(homepageContent.hero?.title ?? "")?.length - 1 && ' '}
              </span>
            ))}
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            {homepageContent.hero.subtitle}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              // onClick={() => {
              //   const eventsSection = document.getElementById("events");
              //   if (eventsSection) {
              //     eventsSection.scrollIntoView({ behavior: "smooth" });
              //   }
              // }}
              className="bg-primary hover:bg-primary/90"
              size="lg"
            >
              Upcoming Events
            </Button>
            <Button
              // onClick={() => {
              //   const aboutSection = document.getElementById("about");
              //   if (aboutSection) {
              //     aboutSection.scrollIntoView({ behavior: "smooth" });
              //   }
              // }}
              variant="outline"
              size="lg"
            >
              Learn More here
            </Button>
          </div>

          <div className="mt-20 animate-bounce">
            <button
              onClick={scrollToNextSection}
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="Scroll down"
            >
              <ArrowDown size={24} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;