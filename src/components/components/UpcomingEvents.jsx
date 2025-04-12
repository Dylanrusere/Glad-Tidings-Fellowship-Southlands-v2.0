import React, { useState, useEffect } from "react";
import { FaMapMarkerAlt } from 'react-icons/fa';
import nightOfWorship from "../images/eventsCovers/Night of Worship.jpg";
import ladiesConf from "../images/eventsCovers/2025 ladies fellwoship conf.jpg";
import './Components.css';

const UpcomingEvents = () => {
  const [events, setEvents] = useState([
    {
      id: 1,
      name: "A Night Of Worship",
      startDate: new Date("2025-03-28T21:00:00"),
      endDate: new Date("2025-03-29T05:00:00"),
      venue: "Glad Tidings Fellowship Southlands",
      image: nightOfWorship,
      organizers: "Glad Tidings Fellowship",
      whatsappNumber: "263783002822",
      location: "https://googlemaps.comasd",
    },
    {
      id: 2,
      name: "Annual Ladies Fellowship Conference",
      startDate: new Date("2025-04-17T13:00:00"),
      endDate: new Date("2025-04-20T13:00:00"),
      venue: "Washington Hills Secondary",
      image: ladiesConf,
      organizers: "Ladies Ministry",
      whatsappNumber: "263783002822",
      location: "https://googlemaps.com",
    },
  ]);

  // Filter out events that ended more than 5 days ago
  useEffect(() => {
    const now = new Date();
    const filteredEvents = events.filter(event => {
      const diffInDays = (now - new Date(event.endDate)) / (1000 * 60 * 60 * 24);
      return diffInDays <= 5;
    });
    setEvents(filteredEvents);
  }, []);

  const sortedEvents = events.sort((a, b) => a.startDate - b.startDate);

  const [selectedEvent, setSelectedEvent] = useState(null);
  const [isRSVPModalOpen, setRSVPModalOpen] = useState(false);
  const [isDetailsModalOpen, setDetailsModalOpen] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", phone: "" });

  const openRSVPModal = (event) => {
    setSelectedEvent(event);
    setRSVPModalOpen(true);
  };

  const openDetailsModal = (event) => {
    setSelectedEvent(event);
    setDetailsModalOpen(true);
  };

  const closeModals = () => {
    setRSVPModalOpen(false);
    setDetailsModalOpen(false);
    setFormData({ name: "", email: "", phone: "" });
  };

  const handleRSVPSubmit = (e) => {
    e.preventDefault();
    if (!selectedEvent) return;

    const whatsappNumber = selectedEvent.whatsappNumber;
    const whatsappMessage = `Hello, I would like to RSVP for ${selectedEvent.name}.\n\nName: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nEvent Date: ${selectedEvent.startDate.toDateString()}\nVenue: ${selectedEvent.venue}`;
    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

    window.open(whatsappURL, "_blank");
    closeModals();
  };

  const getEventStatus = (event) => {
    const now = new Date();
    if (now < event.startDate) {
      const diff = event.startDate - now;
      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((diff / (1000 * 60)) % 60);
      const seconds = Math.floor((diff / 1000) % 60);
      return `Starts in ${days}d ${hours}h ${minutes}m ${seconds}s`;
    } else if (now >= event.startDate && now <= event.endDate) {
      return "🟢 Ongoing";
    } else {
      return "🔴 Past Event";
    }
  };

  return (
    <div className="bg_upcoming_events">
      <div className="events_big_container">
        <div className="overall_container">
          <p className="overall_headings">Upcoming Events</p>
          <div className="events_grid_container">
            {sortedEvents.map((event) => (
              <div className="event_id" key={event.id}>
                <img src={event.image} alt={event.name} className="event_flyer" />
                <h3 className="event_name">{event.name}</h3>
                <p>Start: {event.startDate.toDateString()} {event.startDate.toLocaleTimeString()}</p>
                <p>End: {event.endDate.toDateString()} {event.endDate.toLocaleTimeString()}</p>
                <p className="event_venue"><FaMapMarkerAlt /> {event.venue}</p>
                <p className="event_status">
                  {getEventStatus(event) !== "🟢 Ongoing" && <i className="fa-solid fa-clock"></i>} {getEventStatus(event)}
                </p>
                <div className="event_btns">
                  <button className="rsvp_btn" onClick={() => openRSVPModal(event)}>RSVP</button>
                  <button className="event_details_btn" onClick={() => openDetailsModal(event)}>Event Details</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* RSVP Modal */}
      {isRSVPModalOpen && (
        <div className="modal">
          <div className="modal_content">
            <h2>RSVP for {selectedEvent?.name}</h2>
            <form onSubmit={handleRSVPSubmit}>
              <input
                type="text"
                placeholder="Your Name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
              />
              <input
                type="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
              />
              <input
                type="text"
                placeholder="Your Phone"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                required
              />
              <div className="modal_btns">
                <button type="submit">Submit RSVP</button>
                <button type="button" onClick={closeModals}>Cancel</button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Event Details Modal */}
      {isDetailsModalOpen && (
        <div className="modal">
          <div className="modal_content">
            <h2>{selectedEvent?.name} - Event Details</h2>
            <p><strong>Date:</strong> {selectedEvent?.startDate.toDateString()} - {selectedEvent?.endDate.toDateString()}</p>
            <p><strong>Time:</strong> {selectedEvent?.startDate.toLocaleTimeString()} - {selectedEvent?.endDate.toLocaleTimeString()}</p>
            <p><strong>Venue:</strong> {selectedEvent?.venue}</p>
            <p><strong>Organizers:</strong> {selectedEvent?.organizers}</p>
            <div className="modal_btns_events">
              <a href={selectedEvent.location}><button type="submit">Directions</button></a>
              <button type="button" onClick={closeModals}>Close</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default UpcomingEvents;
