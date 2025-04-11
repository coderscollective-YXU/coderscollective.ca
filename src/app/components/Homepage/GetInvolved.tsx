import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { HOMEPAGE_QUERYResult } from "../../../../sanity.types";
import Link from "next/link";

const colors = [
  "from-blue-500/20 to-blue-600/10",
  "from-indigo-500/20 to-indigo-600/10",
  "from-violet-500/20 to-violet-600/10",
  "from-purple-500/20 to-purple-600/10"
]


const GetInvolved = ({ homepageContent }: {
  homepageContent: HOMEPAGE_QUERYResult;
}) => {
  if (!homepageContent || !homepageContent.getInvolved) return;

  const { getInvolved } = homepageContent;

  return (
    <section id="get-involved" className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{getInvolved.title}</h2>
          <p className="text-lg text-muted-foreground">
            {getInvolved.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {getInvolved.cards?.map((card, index) => (
            <Card key={index} className="bg-transparent border-none shadow-none">
              <CardContent className="p-0">
                <div className={`rounded-xl p-8 text-center bg-gradient-to-b ${colors[index]} glass-card h-full flex flex-col`}>
                  <div dangerouslySetInnerHTML={{ __html: card.icon }}
                    className="text-primary scale-[200%] mx-auto mb-6"
                  >
                  </div>
                  <h3 className="text-2xl font-bold mb-3">{card.title}</h3>
                  <p className="text-muted-foreground mb-6 flex-grow">{card.subtitle}</p>
                  {card.cta && (
                    <Link href={card.cta.url}>
                      <Button variant="outline" className="border-white/20 hover:bg-white/10 w-full">
                        {card.cta.text}
                      </Button>
                    </Link>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        {getInvolved.startCoding && (

          <div className="mt-16 max-w-3xl mx-auto text-center">
            <div className="glass-card rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-4">{getInvolved.startCoding.title}</h3>
              <p className="text-muted-foreground mb-8">
                {getInvolved.startCoding.subtitle}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                {getInvolved.startCoding.cta1 && (
                  <Link href={getInvolved.startCoding.cta1.url}>

                    <Button className="bg-primary hover:bg-primary/90">
                      {getInvolved.startCoding.cta1.text}
                    </Button>
                  </Link>
                )}
                {getInvolved.startCoding.cta2 && (
                  <Link href={getInvolved.startCoding.cta2.url}>

                    <Button variant="outline" className="text-xl">
                      {getInvolved.startCoding.cta2.text}
                    </Button>
                  </Link>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export default GetInvolved;