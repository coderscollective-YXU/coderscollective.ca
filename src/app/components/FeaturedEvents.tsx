"use client"

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { HOMEPAGE_QUERYResult, Event } from "../../../sanity.types";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Calendar, ChevronRight, Clock, MapPin, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { formatDate } from "@/lib/utils";

const FeaturedEvents = ({homepageContent}: {
  homepageContent: HOMEPAGE_QUERYResult
}) => {
  const [activeTab, setActiveTab] = useState("upcoming");


  if (!homepageContent || !homepageContent.events) return;
  const {events} = homepageContent

  // console.log({events})
  return (
    <section id="events" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{events.title}</h2>
          <p className="text-lg text-muted-foreground">
            {events.subtitle}
          </p>
        </div>

        <Tabs defaultValue="upcoming" className="max-w-4xl mx-auto">
          <TabsList className="grid w-full grid-cols-2 mb-8">
            <TabsTrigger
              value="workshop"
              onClick={() => setActiveTab("workshop")}
              className={activeTab === "workshop" ? "data-[state=active]:bg-primary" : ""}
            >
              Workshops
            </TabsTrigger>
            <TabsTrigger
              value="networking"
              onClick={() => setActiveTab("networking")}
              className={activeTab === "networking" ? "data-[state=active]:bg-primary" : ""}
            >
              networking
            </TabsTrigger>
          </TabsList>

          <TabsContent value="workshop" className="space-y-6">
            {events.featuredEvents?.filter((event: Event) => event.eventType === "workshop").map((event: Event, index: number) => (
              <Card key={index} className="overflow-hidden bg-card hover:border-primary/50 transition-colors">
                <CardContent className="p-0">
                  <div className="grid grid-cols-1 md:grid-cols-4">
                    <div className={`md:col-span-1 p-6 flex flex-col justify-center items-center text-center 
                      ${event.eventType === "workshop" ? "bg-blue-500/10" : "bg-violet-500/10"}`}>
                      <div className={`text-sm font-semibold mb-1 
                        ${event.eventType === "workshop" ? "text-blue-400" : "text-violet-400"}`}>
                        {event.eventType}
                      </div>
                      <Calendar className={`h-8 w-8 mb-2 
                        ${event.eventType === "workshop" ? "text-blue-400" : "text-violet-400"}`} />
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

                      <Button className="mt-2 bg-primary hover:bg-primary/90 w-full md:w-auto">
                        Register Now
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}

            <div className="text-center pt-6">
              <Button variant="outline" className="inline-flex items-center gap-1">
                View All Events <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </TabsContent>

          <TabsContent value="networking" className="space-y-6">
          {events.featuredEvents?.filter((event: Event) => event.eventType === "workshop").map((event: Event, index: number) => (
              <Card key={index} className="overflow-hidden bg-card hover:border-primary/50 transition-colors">
                <CardContent className="p-0">
                  <div className="grid grid-cols-1 md:grid-cols-4">
                    <div className="md:col-span-1 p-6 flex flex-col justify-center items-center text-center bg-primary/10">
                      <div className="text-sm font-semibold mb-1 text-primary">{event.eventType}</div>
                      <Calendar className="h-8 w-8 mb-2 text-primary" />
                      <div className="font-mono font-bold text-lg">Starts</div>
                      <div className="text-sm text-muted-foreground">{formatDate(event.date)}</div>
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

                      <Button className="mt-2 bg-primary hover:bg-primary/90 w-full md:w-auto">
                        Apply for Series
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}

export default FeaturedEvents;