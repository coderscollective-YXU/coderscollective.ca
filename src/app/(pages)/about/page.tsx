import React from 'react';
import { Card, CardHeader, CardContent } from '@/components/ui/card';
import Main from '@/app/components/Main';
import { getAboutPageContent } from '@/sanity/queries/aboutPage';
import { TeamMember } from '../../../../sanity.types';
import { urlFor } from '@/sanity/lib/image';
import SanityContentBlock from '@/app/components/SanityContentBlock';
import Link from 'next/link';
import Image from 'next/image';
import ViewMoreCard from './ViewMoreCard';

type FounderCardProps = {
  founder: TeamMember
}

const FounderCard = ({ founder }: FounderCardProps) => {
  return (
    <Card className="glass-card overflow-hidden backdrop-blur-lg border-white/10 hover:shadow-lg transition-all h-fit">
      <div className="relative h-48 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background/90 z-10" />
        <Image
          src={urlFor(founder.image).width(281).height(192).format('webp').quality(100).url()}
          alt={`${founder.name}`}
          className="w-full h-full object-cover"
          width={281}
          height={192}
        />
      </div>
      <CardHeader className="relative z-20 -mt-16 flex items-center pb-0">
        <div className="ml-4">
          <h3 className="text-2xl font-bold">{founder.name}</h3>
          <p className="text-primary/80">{founder.role}</p>
        </div>
      </CardHeader>
      <CardContent className="pt-4 space-y-4 flex flex-col">
        <ViewMoreCard>
          <SanityContentBlock blocks={founder.bio} />
        </ViewMoreCard>

        {founder.links && founder.links.length > 0 && (
          <ul className="flex gap-3 pt-2">
            {founder.links.map((link, index) => (
              <li
                key={link._key}
              >
                <Link
                  href={link.link.url}
                >
                  <div dangerouslySetInnerHTML={{ __html: link.icon }} className="h-6 w-6" />
                </Link>
              </li>
            ))}
          </ul>
        )}
      </CardContent>
    </Card>
  );
};

const AboutPage = async () => {

  const pageContent = await getAboutPageContent();

  if (!pageContent) {
    return <div>Loading...</div>;
  }

  return (
    <Main>
      {pageContent.hero && (
        <section className="py-20 relative overflow-hidden">
          <div className="absolute inset-0 z-0 opacity-20">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 mix-blend-multiply" />
            <div className="h-full w-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gray-900 via-background to-background"></div>
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">{pageContent.hero.title}</h1>
              <p className="text-xl text-muted-foreground">
                {pageContent.hero.subtitle}
              </p>
            </div>
          </div>
        </section>
      )}

      {/* Founders Section */}
      {pageContent.ourTeam && pageContent.ourTeam.members && pageContent.ourTeam.members.length > 0 && (
        <section className="py-12 md:py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center">{pageContent.ourTeam.title}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {pageContent.ourTeam.members.map((founder, index) => (
                <FounderCard
                  key={`${founder._id}-${index}`}
                  founder={founder}
                />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Vision Section */}
      {pageContent.vision && (

        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6">{pageContent.vision.title}</h2>
              <div className="glass-card p-8 rounded-xl flex flex-col gap-5">
                <SanityContentBlock blocks={pageContent.vision.description} />
              </div>
            </div>
          </div>
        </section>
      )}
    </Main >

  );
};

export default AboutPage;
