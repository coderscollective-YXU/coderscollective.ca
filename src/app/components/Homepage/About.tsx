import { HOMEPAGE_QUERYResult } from "../../../../sanity.types";

const About = ({ homepageContent }: {
  homepageContent: HOMEPAGE_QUERYResult;
}) => {
  if (!homepageContent || !homepageContent.about) return;

  const { about } = homepageContent;
  return (
    <section id="about" className="py-[100px]">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{about.title}</h2>
          <p className="text-lg text-muted-foreground">
            {about.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-bold mb-4">{about.whatSetsUsApart.title}</h3>

            <div className="space-y-6">

              {about.whatSetsUsApart.items.map(item => (
                <div className="flex gap-4" key={item.title}>
                  <div className="mt-1 flex-shrink-0">
                    <div dangerouslySetInnerHTML={{ __html: item.icon }} className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">{item.title}</h4>
                    <p className="text-muted-foreground">
                      {item.subtitle}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="glass-card rounded-xl p-6 md:p-8">
            <h3 className="text-2xl font-bold mb-4">{about.ourCommitment?.title}</h3>
            <p className="text-muted-foreground mb-6">
              {about.ourCommitment?.subtitle}
            </p>

            {about.ourCommitment?.quote && (
              <div className="bg-muted p-6 rounded-lg border border-border">
                <p className="italic">
                  {about.ourCommitment?.quote.text}
                </p>
                <p className="text-right mt-4 text-sm text-muted-foreground">
                  {about.ourCommitment?.quote.author}
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;