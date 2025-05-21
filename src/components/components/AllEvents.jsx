import React, { useState } from "react";
import { FaMapMarkerAlt } from 'react-icons/fa';
import nightOfWorship from "../assets/images/eventsCovers/Night of Worship.jpg";
import ladiesConf from "../assets/images/eventsCovers/2025 ladies fellwoship conf.jpg";
import youthConf from "../assets/images/eventsCovers/2025 Annual Youth Conference.jpg";
import mensConf from "../assets/images/eventsCovers/2025 Men`s Conference - 2.png"
import './Components.css';

const AllEvents = ({ showUpcomingOnly = false }) => {
  const [events] = useState([
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
    {
      id: 3,
      name: "Annual Youth Camp",
      startDate: new Date("2025-12-22T13:00:00"),
      endDate: new Date("2025-12-26T15:00:00"),
      venue: "TBA",
      image: youthConf,
      organizers: "Youth Ministry",
      whatsappNumber: "263783002822",
      location: "https://googlemaps.com",
    },
    {
      id: 4,
      name: "Biannual Mens Fellowship Conference",
      startDate: new Date("2025-05-26T08:00:00"),
      endDate: new Date("2025-05-26T15:00:00"),
      venue: "Glad Tidings Fellowship Goshen Centre, Mufakose",
      image: mensConf,
      organizers: "Mens Fellowship",
      whatsappNumber: "263783002822",
      location: "https://googlemaps.com",
    },
  ]);

  const now = new Date();
  const filteredEvents = showUpcomingOnly
    ? events.filter(event => event.startDate > now)
    : events;

    const sortedEvents = [...events].sort((a, b) => b.startDate - a.startDate);

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
    const whatsappMessage = `Hello, I would like to RSVP for ${selectedEvent.name}.\n\nName: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nEvent Date: ${selectedEvent.startDate.toDateString()}\nVenue: ${selectedEvent.venue}`;
    const whatsappURL = `https://wa.me/${selectedEvent.whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(whatsappURL, "_blank");
    closeModals();
  };

  const getEventStatus = (event) => {
    const now = new Date();
    if (now < event.startDate) return "🟡 Upcoming";
    if (now >= event.startDate && now <= event.endDate) return "🟢 Ongoing";
    return "🔴 Past Event";
  };

  return (
    <div className="bg_upcoming_events">
      <div className="events_big_container no_martop">
        <div className="overall_container">
          <p className="overall_headings">
            {showUpcomingOnly ? "Upcoming Events" : "All Events"}
          </p>
          {sortedEvents.length === 0 ? (
            <p className="no_events_text">No Upcoming Events</p>
          ) : (
            <div className="events_grid_container">
              {sortedEvents.map((event) => (
                <div className="event_id" key={event.id}>
                  <img src={event.image} alt={event.name} className="event_flyer" />
                  <h3 className="event_name">{event.name}</h3>
                  <p>Start: {event.startDate.toDateString()} {event.startDate.toLocaleTimeString()}</p>
                  <p>End: {event.endDate.toDateString()} {event.endDate.toLocaleTimeString()}</p>
                  <p className="event_venue"><FaMapMarkerAlt /> {event.venue}</p>
                  <p className="event_status">{getEventStatus(event)}</p>
                  <div className="event_btns">
                    <button className="rsvp_btn" onClick={() => openRSVPModal(event)}>RSVP</button>
                    <button className="event_details_btn" onClick={() => openDetailsModal(event)}>Event Details</button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* RSVP Modal */}
      {isRSVPModalOpen && (
        <div className="modal">
          <div className="modal_content">
            <h2>RSVP for {selectedEvent?.name}</h2>
            <form onSubmit={handleRSVPSubmit}>
              <input type="text" placeholder="Your Name" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} required />
              <input type="email" placeholder="Your Email" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} required />
              <input type="text" placeholder="Your Phone" value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} required />
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
              <a href={selectedEvent.location} target="_blank" rel="noopener noreferrer">
                <button type="button">Directions</button>
              </a>
              <button type="button" onClick={closeModals}>Close</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AllEvents;
