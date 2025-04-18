"use client"

import { HOMEPAGE_QUERYResult } from "../../../../sanity.types";
import { EventList } from "../Events/EventList";

const FeaturedEvents = ({ homepageContent }: {
  homepageContent: HOMEPAGE_QUERYResult
}) => {
  if (!homepageContent || !homepageContent.events) return null;
  const { events } = homepageContent;

  return (
    <section id="upcoming-events" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{events.title}</h2>
          <p className="text-lg text-muted-foreground mt-2">
            {events.subtitle}
          </p>
        </div>

        <EventList 
          events={events.featuredEvents || []} 
          showViewAll={true} 
          viewAllHref="/events" 
        />
      </div>
    </section>
  );
}

export default FeaturedEvents;