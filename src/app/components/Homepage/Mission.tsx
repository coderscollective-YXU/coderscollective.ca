import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { HOMEPAGE_QUERYResult } from "../../../../sanity.types";

const Mission = ({homepageContent}: {
  homepageContent: HOMEPAGE_QUERYResult;
}) => {
  if (!homepageContent || !homepageContent.mission) return;
  const {mission} = homepageContent
  return (
    <section id="mission" className="py-[100px] bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{mission.title}</h2>
          <p className="text-lg text-muted-foreground">
            {mission.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {mission.cards.map((principle, index) => (
            <Card key={index} className="bg-card border border-border hover:border-primary/50 transition-colors">
              <CardHeader className="flex items-center justify-center pt-8 text-primary">
                <div dangerouslySetInnerHTML={{__html: principle.icon}}/>
                {/* {principle.icon} */}
              </CardHeader>
              <CardContent className="text-center pt-4">
                <h3 className="font-bold text-xl mb-3">{principle.title}</h3>
                <p className="text-muted-foreground">{principle.subtitle}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Mission;