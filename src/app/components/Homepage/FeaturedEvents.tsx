"use client"

import { Event } from "../../../../sanity.types";
import { EventList } from "../Events/EventList";

interface FeaturedEventsProps {
  events: Event[];
  title: string;
  subtitle: string;
}

const FeaturedEvents = ({ events, title, subtitle }: FeaturedEventsProps) => {
  return (
    <section id="upcoming-events" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{title}</h2>
          <p className="text-lg text-muted-foreground mt-2">
            {subtitle}
          </p>
        </div>

        <EventList 
          events={events} 
          showViewAll={true} 
          viewAllHref="/events" 
        />
      </div>
    </section>
  );
}

export default FeaturedEvents;