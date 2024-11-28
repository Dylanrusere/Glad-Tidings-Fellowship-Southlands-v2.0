import React, { useState, useEffect } from "react";
import './Components.css';

const UpcomingEvents = () => {
  // Example event data
  const [events, setEvents] = useState([
    {
      id: 1,
      name: "men`s braai",
      startDate: new Date("2024-12-01T11:00:00"),
      endDate: new Date("2024-12-01T16:00:00"),
      venue: "southlands glad tidings fellowship, southlands park",
    },
    {
      id: 2,
      name: "children`s church annual camp",
      startDate: new Date("2024-12-06T09:00:00"),
      endDate: new Date("2024-12-08T16:00:00"),
      venue: "lady enereta high school, bindura",
    },
    {
      id: 3,
      name: "youth annual camp",
      startDate: new Date("2024-12-22T09:00:00"),
      endDate: new Date("2024-12-26T17:00:00"),
      venue: "lady enereta high school, bindura",
    },
    {
      id: 3,
      name: "youth inaugural tournament",
      startDate: new Date("2024-12-07T09:00:00"),
      endDate: new Date("2024-12-07T17:00:00"),
      venue: "tba(harare)",
    },
  ]);

  // Sort events by the nearest start date
  const sortedEvents = events.sort((a, b) => a.startDate - b.startDate);

  // Countdown function
  const calculateTimeLeft = (eventDate) => {
    const now = new Date();
    const difference = eventDate - now;
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }
    return timeLeft;
  };

  const [timeLefts, setTimeLefts] = useState(
    sortedEvents.map((event) => calculateTimeLeft(event.startDate))
  );

  useEffect(() => {
    const timer = setInterval(() => {
      // Update countdown
      setTimeLefts(
        sortedEvents.map((event) => calculateTimeLeft(event.startDate))
      );

      // Remove events that ended 2 days ago
      const now = new Date();
      setEvents((prevEvents) =>
        prevEvents.filter((event) => {
          const twoDaysAfterEnd = new Date(event.endDate);
          twoDaysAfterEnd.setDate(twoDaysAfterEnd.getDate() + 2);
          return twoDaysAfterEnd >= now;
        })
      );
    }, 1000);

    return () => clearInterval(timer);
  }, [sortedEvents]);

  return (
    <div>
        <div className="events_big_container">
            <div className="overall_container">
                <p className="overall_headings">upcoming events</p>
                <div className="events_grid_contrainer">
                    {sortedEvents.map((event, index) => {
                    const now = new Date();
                    const isOngoing = now >= event.startDate && now <= event.endDate;
                    const hasEnded = now > event.endDate;
                    return (
                        <div className="event_id" key={event.id}>
                            <h3 className="event_name" >{event.name}</h3>
                            <p>Start: {event.startDate.toDateString()} {event.startDate.toLocaleTimeString()}</p>
                            <p>End: {event.endDate.toDateString()} {event.endDate.toLocaleTimeString()}</p>
                            {isOngoing ? (
                                <p style={{ color: "green", fontWeight: "bold" }}>Status: Ongoing</p>
                            ) : hasEnded ? (
                                <p style={{ color: "red", fontWeight: "bold" }}>Status: Ended</p>
                            ) : (
                                <p>
                                Countdown:{" "}
                                {timeLefts[index]
                                    ? `${timeLefts[index].days || 0}d ${timeLefts[index].hours || 0}h ${
                                        timeLefts[index].minutes || 0
                                    }m ${timeLefts[index].seconds || 0}s`
                                    : "Event started"}
                                </p>
                            )}
                            <p className="event_venue">Venue: <span>{event.venue}</span></p>
                        </div>
                    );
                    })}
                </div>
            </div>
        </div>
    </div>
  );
};

export default UpcomingEvents;