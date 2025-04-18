"use client"
import { Button } from "@/components/ui/button";
import { HOMEPAGE_QUERYResult } from "../../../../sanity.types";

const Programs = ({ homepageContent }: {
  homepageContent: HOMEPAGE_QUERYResult;
}) => {
  if (!homepageContent || !homepageContent.ourPrograms) return;

  return (
    <section id="workshops" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{homepageContent.ourPrograms.title}</h2>
          <p className="text-lg text-muted-foreground">
            {homepageContent.ourPrograms.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">

          {homepageContent.ourPrograms.programs?.map(program => (
            <div className="glass-card p-8 rounded-xl relative overflow-hidden group" key={program._key}>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-indigo-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative z-10">
                <div className="mb-6 bg-primary/10 inline-flex p-3 rounded-full">
                  <div dangerouslySetInnerHTML={{ __html: program.icon }} className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold mb-4">{program.title}</h3>
                <p className="text-muted-foreground mb-6">
                  {program.subtitle}
                </p>
                <ul className="space-y-3">
                  {program.items?.map(item => (
                    <li key={item} className="flex items-start gap-2">
                      <div className="mt-1 text-primary">•</div>
                      <p>{item}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {homepageContent.ourPrograms.communityEvents && (
          <div className="glass-card rounded-xl p-8 overflow-hidden relative">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-indigo-500 to-violet-500"></div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <div className="flex gap-4 mb-6">
                  {homepageContent.ourPrograms.communityEvents.icons?.map(icon => (
                    <div key={icon._key} dangerouslySetInnerHTML={{ __html: icon.icon }} className="h-8 w-8 text-primary" />
                  ))}
                </div>
                <h3 className="text-2xl font-bold mb-4">{homepageContent.ourPrograms.communityEvents.title}</h3>
                <p className="text-muted-foreground mb-6">
                  {homepageContent.ourPrograms.communityEvents.subtitle}
                </p>
                <div className="space-y-3">
                  {homepageContent.ourPrograms.communityEvents.eventItems?.map(item => (

                    <div key={item} className="flex items-start gap-2">
                      <div className="mt-1 text-primary">•</div>
                      <p>{item}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-muted p-6 rounded-lg border border-border">
                <h4 className="font-bold text-lg mb-4">{homepageContent.ourPrograms.communityEvents.whyCommunityMatters.title}</h4>
                <p className="text-muted-foreground mb-4">
                  {homepageContent.ourPrograms.communityEvents.whyCommunityMatters.subtitle}
                </p>
                <Button
                  onClick={() => {
                    const eventsSection = document.getElementById('events');
                    if (eventsSection) {
                      eventsSection.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                  className="w-full bg-primary hover:bg-primary/90"
                >
                  {homepageContent.ourPrograms.communityEvents.whyCommunityMatters.buttonText}
                </Button>
              </div>
            </div>
          </div>

        )}

      </div>
    </section>
  );
};

export default Programs;