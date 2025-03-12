import React from "react";
import "./Modal.css";

const EventDetailsModal = ({ event, onClose }) => {
  return (
    <div className="modal_overlay">
      <div className="modal_content">
        <h2>{event.name}</h2>
        <p><strong>Date:</strong> {event.startDate.toDateString()} - {event.endDate.toDateString()}</p>
        <p><strong>Time:</strong> {event.startDate.toLocaleTimeString()} - {event.endDate.toLocaleTimeString()}</p>
        <p><strong>Location:</strong> {event.venue}</p>
        <p><strong>Organizer:</strong> {event.organizer}</p>
        <button className="close_btn" onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default EventDetailsModal;
