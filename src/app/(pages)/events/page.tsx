import { getAllEvents } from "@/sanity/queries/events";
import Main from "../../components/Main";
import { EventList } from "@/app/components/Events/EventList";
import { connection } from "next/server";

export const metadata = {
  title: "Events | Coders Collective",
  description: "Browse all our upcoming workshops and networking events.",
};

export default async function EventsPage() {
  await connection();
  const allEvents = await getAllEvents();

  return (
    <Main>
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">All Events</h1>
            <p className="text-lg text-muted-foreground mt-2">
              Join us for upcoming workshops and networking events
            </p>
          </div>
          <EventList events={allEvents || []} showViewAll={false} />
        </div>
      </section>
    </Main>
  );
}
