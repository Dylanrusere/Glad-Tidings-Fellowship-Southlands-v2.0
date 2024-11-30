import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { FaCalendarAlt, FaPaperPlane, FaPlayCircle } from 'react-icons/fa';

export const LatestSermonsCard = ({ imageSrc, heading, preacher, date, link }) => {
  return (
    <div className="latest_sermons_card">
      <div className="card_image_container">
        <img src={imageSrc} alt="Card" className="card_image" />
        <div className="card_overlay"></div>
      </div>
      <div className="card_content_container">
        <h3 className="card_heading">{heading}</h3>
        <h3 className="card_preacher">{preacher}</h3>
        <p className="card_date"><span><FaCalendarAlt /></span>{date}</p>
        <Link to={link} className="card_button">
          <span><FaPlayCircle/></span>View Sermon
        </Link>
      </div>
    </div>
  );
};

// Optional: Prop type validation
LatestSermonsCard.propTypes = {
  imageSrc: PropTypes.string.isRequired,
  heading: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};
