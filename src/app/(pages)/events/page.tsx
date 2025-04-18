import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { getAllEvents } from "@/sanity/queries/events";
import { Calendar, Clock, MapPin, Users } from "lucide-react";
import { formatDate } from "@/lib/utils";
import Main from "../../components/Main";
import { Event } from "../../../../sanity.types";

export const metadata = {
  title: "Events | Coders Collective",
  description: "Browse all our upcoming workshops and networking events.",
};

export default async function EventsPage() {
  const allEvents = await getAllEvents();
  
  // Group events by type
  const workshopEvents = allEvents.filter((event: Event) => event.eventType === "workshop");
  const networkingEvents = allEvents.filter((event: Event) => event.eventType === "networking");

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

          <Tabs defaultValue="workshop" className="max-w-4xl mx-auto">
            <TabsList className="grid w-full grid-cols-2 mb-8">
              <TabsTrigger value="workshop">
                Workshops
              </TabsTrigger>
              <TabsTrigger value="networking">
                Networking
              </TabsTrigger>
            </TabsList>

            <TabsContent value="workshop" className="space-y-6">
              {workshopEvents && workshopEvents.length > 0 ? (
                <>
                  {workshopEvents.map((event: Event, index: number) => (
                    <Card key={index} className="overflow-hidden bg-card hover:border-primary/50 transition-colors">
                      <CardContent className="p-0">
                        <div className="grid grid-cols-1 md:grid-cols-4">
                          <div className="md:col-span-1 p-6 flex flex-col justify-center items-center text-center bg-blue-500/10">
                            <div className="text-sm font-semibold mb-1 text-blue-400">
                              {event.eventType}
                            </div>
                            <Calendar className="h-8 w-8 mb-2 text-blue-400" />
                            <div className="font-mono font-bold text-lg">{formatDate(event.date)}</div>
                          </div>

                          <div className="md:col-span-3 p-6">
                            <h3 className="text-xl font-bold mb-3">{event.name}</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                              <div className="flex items-center gap-2">
                                <Clock className="h-4 w-4 text-muted-foreground" />
                                <span className="text-sm text-muted-foreground">{event.hours}</span>
                              </div>
                              <div className="flex items-center gap-2">
                                <MapPin className="h-4 w-4 text-muted-foreground" />
                                <span className="text-sm text-muted-foreground">{event.location}</span>
                              </div>
                              <div className="flex items-center gap-2">
                                <Users className="h-4 w-4 text-muted-foreground" />
                                <span className="text-sm text-muted-foreground">{event.spotsAvailable} spots available</span>
                              </div>
                            </div>

                            <Button className="mt-2 bg-primary hover:bg-primary/90 w-full md:w-auto" asChild>
                              <a href={event.link} target="_blank" rel="noopener noreferrer">Register Now</a>
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </>
              ) : (
                <Card className="overflow-hidden bg-card p-8 text-center">
                  <div className="flex flex-col items-center justify-center py-12">
                    <Calendar className="h-16 w-16 text-primary/40 mb-4" />
                    <h3 className="text-xl font-bold mb-2">No Workshops Available</h3>
                    <p className="text-muted-foreground mb-6">There are currently no workshop events scheduled. Please check back later!</p>
                  </div>
                </Card>
              )}
            </TabsContent>

            <TabsContent value="networking" className="space-y-6">
              {networkingEvents && networkingEvents.length > 0 ? (
                networkingEvents.map((event: Event, index: number) => (
                  <Card key={index} className="overflow-hidden bg-card hover:border-primary/50 transition-colors">
                    <CardContent className="p-0">
                      <div className="grid grid-cols-1 md:grid-cols-4">
                        <div className="md:col-span-1 p-6 flex flex-col justify-center items-center text-center bg-primary/10">
                          <div className="text-sm font-semibold mb-1 text-primary">{event.eventType}</div>
                          <Calendar className="h-8 w-8 mb-2 text-primary" />
                          <div className="font-mono font-bold text-lg">{formatDate(event.date)}</div>
                        </div>

                        <div className="md:col-span-3 p-6">
                          <h3 className="text-xl font-bold mb-3">{event.name}</h3>
                          <p className="text-muted-foreground mb-4">{event.location}</p>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                            <div className="flex items-center gap-2">
                              <Clock className="h-4 w-4 text-muted-foreground" />
                              <span className="text-sm text-muted-foreground">{event.hours}</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <MapPin className="h-4 w-4 text-muted-foreground" />
                              <span className="text-sm text-muted-foreground">{event.location}</span>
                            </div>
                          </div>

                          <Button className="mt-2 bg-primary hover:bg-primary/90 w-full md:w-auto" asChild>
                            <a href={event.link} target="_blank" rel="noopener noreferrer">Apply for Series</a>
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))
              ) : (
                <Card className="overflow-hidden bg-card p-8 text-center">
                  <div className="flex flex-col items-center justify-center py-12">
                    <Users className="h-16 w-16 text-primary/40 mb-4" />
                    <h3 className="text-xl font-bold mb-2">No Networking Events Available</h3>
                    <p className="text-muted-foreground mb-6">There are currently no networking events scheduled. Please check back later!</p>
                  </div>
                </Card>
              )}
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </Main>
  );
} 