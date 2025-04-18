"use client"

import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Calendar, ChevronRight, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useState } from "react";
import { Event } from "../../../../sanity.types";
import { EventCard } from "./EventCard";

interface EventListProps {
  events: Event[];
  showViewAll?: boolean;
  viewAllHref?: string;
  buttonText?: string;
}

export const EventList = ({ 
  events, 
  showViewAll = false, 
  viewAllHref = "/events", 
  buttonText 
}: EventListProps) => {
  const [activeTab, setActiveTab] = useState("workshop");
  
  const workshopEvents = events.filter(event => event.eventType === "workshop");
  const networkingEvents = events.filter(event => event.eventType === "networking");

  return (
    <Tabs defaultValue="workshop" className="max-w-4xl mx-auto">
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
          Networking
        </TabsTrigger>
      </TabsList>

      <TabsContent value="workshop" className="space-y-6">
        {workshopEvents.length > 0 ? (
          <>
            {workshopEvents.map((event, index) => (
              <EventCard key={index} event={event} buttonText={buttonText} />
            ))}

            {showViewAll && workshopEvents.length > 0 && (
              <div className="text-center pt-6">
                <Button variant="outline" className="inline-flex items-center gap-1" asChild>
                  <Link href={viewAllHref}>View All Events <ChevronRight className="h-4 w-4" /></Link>
                </Button>
              </div>
            )}
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
        {networkingEvents.length > 0 ? (
          <>
            {networkingEvents.map((event, index) => (
              <EventCard key={index} event={event} buttonText={buttonText} />
            ))}
            
            {showViewAll && networkingEvents.length > 0 && (
              <div className="text-center pt-6">
                <Button variant="outline" className="inline-flex items-center gap-1" asChild>
                  <Link href={viewAllHref}>View All Events <ChevronRight className="h-4 w-4" /></Link>
                </Button>
              </div>
            )}
          </>
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
  );
}; 