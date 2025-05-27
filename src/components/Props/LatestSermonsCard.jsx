import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { FaCalendarAlt, FaPlayCircle, FaDownload } from 'react-icons/fa';

export const LatestSermonsCard = ({ imageSrc, heading, preacher, date, link, notesLink }) => {
  return (
    <div className="overall_card">
      <div className="card_image_container">
        <img src={imageSrc} alt="Card" className="card_image" />
        <div className="card_overlay"></div>
      </div>
      <div className="card_content_container">
        <h3 className="card_heading">{heading}</h3>
        <h3 className="card_preacher">{preacher}</h3>
        <p className="card_date"><span><FaCalendarAlt /></span>{date}</p>

        <Link to={link} className="card_button" target="_blank" rel="noopener noreferrer">
          <span><FaPlayCircle /></span> View Sermon
        </Link>

        {notesLink && (
          <a href={notesLink} className="card_button download_btn" download target="_blank" rel="noopener noreferrer">
            <span><FaDownload /></span> Download Notes
          </a>
        )}
      </div>
    </div>
  );
};

LatestSermonsCard.propTypes = {
  imageSrc: PropTypes.string.isRequired,
  heading: PropTypes.string.isRequired,
  preacher: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  notesLink: PropTypes.string, // optional
};
