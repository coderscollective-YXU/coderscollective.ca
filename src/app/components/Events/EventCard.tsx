import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, MapPin, Users } from "lucide-react";
import { Event } from "../../../../sanity.types";
import { formatDate } from "@/lib/utils";

interface EventCardProps {
  event: Event;
  showButton?: boolean;
}

export const EventCard = ({ event, showButton = true }: EventCardProps) => {
  const isWorkshop = event.eventType === "workshop";
  
  let buttonDefaultText = isWorkshop ? "Register Now" : "Apply for Series";
  
  if (!event.isLaunched) {
    buttonDefaultText = "Waitlist";
  }

  return (
    <Card className="overflow-hidden bg-card hover:border-primary/50 transition-colors">
      <CardContent className="p-0">
        <div className="grid grid-cols-1 md:grid-cols-4">
          <div className={`md:col-span-1 p-6 flex flex-col justify-center items-center text-center 
            ${isWorkshop ? "bg-blue-500/10" : "bg-primary/10"}`}>
            <div className="flex items-center gap-2">
              <div className={`text-sm font-semibold mb-1 
                ${isWorkshop ? "text-blue-400" : "text-primary"}`}>
                {event.eventType === "workshop" ? "Workshop" : "Networking"}
              </div>
            </div>
            <Calendar className={`h-8 w-8 mb-2 
              ${isWorkshop ? "text-blue-400" : "text-primary"}`} />
            <div className="font-mono font-bold text-lg">{formatDate(event.date)}</div>
          </div>

          <div className="md:col-span-3 p-6">
            <div className="flex items-center gap-2 mb-3">
              <h3 className="text-xl font-bold">{event.name}</h3>
              {isWorkshop && event.isLaunched && (
                <span className="px-2 py-0.5 text-xs rounded-full bg-amber-200 text-amber-700 font-medium">
                  Live
                </span>
              )}
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm text-muted-foreground">{event.hours}</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm text-muted-foreground">{event.location}</span>
              </div>
              {isWorkshop && event.isLaunched&& (
                <div className="flex items-center gap-2">
                  <Users className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm text-muted-foreground">{event.spotsAvailable} spots available</span>
                </div>
              )}
            </div>

            {showButton && (
              <Button className="mt-2 bg-primary hover:bg-primary/90 w-full md:w-auto" asChild={!!event.link && event.isLaunched}>
                {event.isLaunched && event.link ? (
                  <a href={event.link} target="_blank" rel="noopener noreferrer">
                    {buttonDefaultText}
                  </a>
                ) : !event.isLaunched ? (
                  <a href="/signup">
                    {buttonDefaultText}
                  </a>
                ) : (
                  buttonDefaultText
                )}
              </Button>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}; 