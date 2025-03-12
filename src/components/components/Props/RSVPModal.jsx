import React from "react";
import "./Modal.css";

const RSVPModal = ({ event, onClose }) => {
  return (
    <div className="modal_overlay">
      <div className="modal_content">
        <h2>RSVP for {event.name}</h2>
        <form>
          <label>Name:</label>
          <input type="text" required />
          <label>Email:</label>
          <input type="email" required />
          <label>Phone:</label>
          <input type="tel" required />
          <button type="submit">Submit</button>
        </form>
        <button className="close_btn" onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default RSVPModal;
