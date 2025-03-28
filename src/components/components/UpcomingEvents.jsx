// import React, { useState, useEffect } from "react";
// import {  FaMapMarkerAlt, FaCalendarAlt, FaClock } from 'react-icons/fa';
// import './Components.css';
// import { Link } from "react-router-dom";

// const UpcomingEvents = () => {
//   // Example event data
//   const [events, setEvents] = useState([
//     // {
//     //   id: 1,
//     //   name: "Children`s Church Annual Camp",
//     //   startDate: new Date("2024-12-06T09:00:00"),
//     //   endDate: new Date("2024-12-08T16:00:00"),
//     //   venue: "Mother Touch Jnr, Tynwald",
//     // },
//     // {
//     //   id: 2,
//     //   name: "Youth Annual Camp",
//     //   startDate: new Date("2024-12-22T09:00:00"),
//     //   endDate: new Date("2024-12-26T17:00:00"),
//     //   venue: "Lady Enereta High School, Bindura",
//     // },
//     // {
//     //   id: 3,
//     //   name: "Youth Inaugural Tournament",
//     //   startDate: new Date("2024-12-07T09:30:00"),
//     //   endDate: new Date("2024-12-07T17:00:00"),
//     //   venue: "Mufakose High 1",
//     // },
//     {
//       id: 4,
//       name: "Worship Night",
//       startDate: new Date("2025-03-28T21:00:00"),
//       endDate: new Date("2025-03-29T05:00:00"),
//       venue: "Glad Tidings Fellowship Southlands",
//     },
//     {
//       id: 5,
//       name: "Annual Ladies Fellowship Conference",
//       startDate: new Date("2025-04-17T13:00:00"),
//       endDate: new Date("2025-04-20T13:00:00"),
//       venue: "Glad Tidings Fellowship Southlands",
//     },
//     {
//       id: 5,
//       name: "August Annual Conference",
//       startDate: new Date("2025-08-10T08:00:00"),
//       endDate: new Date("2025-08-12T13:00:00"),
//       venue: "Glad Tidings Fellowship Southlands",
//     },
//   ]);

//   // Sort events by the nearest start date
  // const sortedEvents = events.sort((a, b) => a.startDate - b.startDate);

  // // Countdown function
  // const calculateTimeLeft = (eventDate) => {
  //   const now = new Date();
  //   const difference = eventDate - now;
  //   let timeLeft = {};

  //   if (difference > 0) {
  //     timeLeft = {
  //       days: Math.floor(difference / (1000 * 60 * 60 * 24)),
  //       hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
  //       minutes: Math.floor((difference / 1000 / 60) % 60),
  //       seconds: Math.floor((difference / 1000) % 60),
  //     };
  //   }
  //   return timeLeft;
  // };

  // const [timeLefts, setTimeLefts] = useState(
  //   sortedEvents.map((event) => calculateTimeLeft(event.startDate))
  // );

  // useEffect(() => {
  //   const timer = setInterval(() => {
  //     // Update countdown
  //     setTimeLefts(
  //       sortedEvents.map((event) => calculateTimeLeft(event.startDate))
  //     );

  //     // Remove events that ended 2 days ago
  //     const now = new Date();
  //     setEvents((prevEvents) =>
  //       prevEvents.filter((event) => {
  //         const twoDaysAfterEnd = new Date(event.endDate);
  //         twoDaysAfterEnd.setDate(twoDaysAfterEnd.getDate() + 2);
  //         return twoDaysAfterEnd >= now;
  //       })
  //     );
  //   }, 1000);

  //   return () => clearInterval(timer);
  // }, [sortedEvents]);

//   return (
//     <div>
//         <div className="bg_upcoming_events">
//           <div className="events_big_container">
//               <div className="overall_container">
//                   <p className="overall_headings">Upcoming Events</p>
//                   <div className="events_grid_container">
//                       {sortedEvents.map((event, index) => {
//                       const now = new Date();
//                       const isOngoing = now >= event.startDate && now <= event.endDate;
//                       const hasEnded = now > event.endDate;
//                       return (
//                           <div className="event_id" key={event.id}>
//                               <h3 className="event_name" >{event.name}</h3>
//                               <p>Start: {event.startDate.toDateString()} {event.startDate.toLocaleTimeString()}</p>
//                               <p>End: {event.endDate.toDateString()} {event.endDate.toLocaleTimeString()}</p>
//                               {isOngoing ? (
//                                   <p style={{ color: "green", fontWeight: "bold" }}>Status: Ongoing</p>
//                               ) : hasEnded ? (
//                                   <p style={{ color: "red", fontWeight: "bold" }}>Status: Ended</p>
//                               ) : (
//                                   <p>
//                                   Countdown:{" "}
//                                   {timeLefts[index]
//                                       ? `${timeLefts[index].days || 0}d ${timeLefts[index].hours || 0}h ${
//                                           timeLefts[index].minutes || 0
//                                       }m ${timeLefts[index].seconds || 0}s`
//                                       : "Event started"}
//                                   </p>
//                               )}
//                               <p className="event_venue"><FaMapMarkerAlt/> <span>{event.venue}</span></p>
//                               <div className="event_btns">
//                                 <a href="as" className="rsvp_btn">RSVP</a>
//                                 <a href="as" className="event_details_btn">Event Details</a>
//                               </div>
//                           </div>
//                       );
//                       })}
//                   </div>
//               </div>
//           </div>
//         </div>
//     </div>
//   );
// };

// export default UpcomingEvents;

import React, { useState } from "react";
import { FaMapMarkerAlt } from 'react-icons/fa';
import emailjs from 'emailjs-com';
import nightOfWorship from "../images/eventsCovers/Night of Worship.jpg";
import ladiesConf from "../images/eventsCovers/2025 ladies fellwoship conf.jpg";
import './Components.css';

const UpcomingEvents = () => {
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
  ]);

  const sortedEvents = events.sort((a, b) => a.startDate - b.startDate);

  const [selectedEvent, setSelectedEvent] = useState(null);
  const [isRSVPModalOpen, setRSVPModalOpen] = useState(false);
  const [isDetailsModalOpen, setDetailsModalOpen] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", phone: "" });
  const [notification, setNotification] = useState({ message: "", type: "" });

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

  const showNotification = (message, type) => {
    setNotification({ message, type });

    setTimeout(() => {
      setNotification({ message: "", type: "" });
    }, 3000);
  };

  const handleRSVPSubmit = (e) => {
    e.preventDefault();
    if (!selectedEvent) return;

    const templateParams = {
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      eventName: selectedEvent.name,
      eventDate: selectedEvent.startDate.toDateString(),
      venue: selectedEvent.venue,
    };

    // emailjs
    //   .send("service_4i482nn", "template_mvosjkq", templateParams, "8SPYhoIB0J2JMNjE2")
    //   .then(() => {
    //     showNotification("RSVP sent successfully!", "success");
    //   })
    //   .catch(() => {
    //     showNotification("Failed to send RSVP. Try again!", "error");
    //   });

    const whatsappNumber = selectedEvent.whatsappNumber;
    const whatsappMessage = `Hello, I would like to RSVP for ${selectedEvent.name}.\n\nName: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nEvent Date: ${selectedEvent.startDate.toDateString()}\nVenue: ${selectedEvent.venue}`;
    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

    window.open(whatsappURL, "_blank");
    closeModals();
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
