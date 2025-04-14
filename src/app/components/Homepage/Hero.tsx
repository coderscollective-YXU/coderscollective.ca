"use client";
import { splitAndStyleCodeAndAi } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";
import { HOMEPAGE_QUERYResult } from "../../../../sanity.types";
import Link from "next/link";

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
    <section className="relative pt-24 pb-32 min-h-screen flex items-center bg-transparent">
      <div className="container mx-auto px-4 z-10 relative">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
            {splitAndStyleCodeAndAi(homepageContent.hero.title)?.map((wordObj, index) => {
              const insertBreak = wordObj.text === "Code" && index < splitAndStyleCodeAndAi(homepageContent.hero?.title ?? "")?.length - 1;
              return (
                <span
                  key={index}
                  className={wordObj.isStyled ? "gradient-text" : ""}
                >
                  {wordObj.text}
                  {insertBreak ? <br /> : index < splitAndStyleCodeAndAi(homepageContent.hero?.title ?? "")?.length - 1 && ' '}
                </span>
              );
            })}
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            {homepageContent.hero.subtitle}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {homepageContent.hero.cta1 && (
              <Link href={homepageContent.hero.cta1.url}>
                <Button
                  className="bg-primary hover:bg-primary/90"
                  size="lg"
                >
                  {homepageContent.hero.cta1.text}
                </Button>
              </Link>
            )}
            {homepageContent.hero.cta2 && (
              <Link href={homepageContent.hero.cta2.url}>
                <Button
                  variant="outline"
                  size="lg"
                >
                  {homepageContent.hero.cta2.text}
                </Button>
              </Link>
            )}
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