import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
export const MinistriesCard = ({ imageSrc, ministry, catchPhrase, theme, link }) => {
  return (
    <div className="overall_card">
      <div className="card_image_container">
        <img src={imageSrc} alt="Card" className="card_image" />
        <div className="card_overlay"></div>
      </div>
      <div className="card_content_container">
        <h3 className="card_heading">{ministry}</h3>
        <p className="card_phrase">{catchPhrase}</p>
        <p className="card_date">{theme}</p>

        <Link to={link} className="card_button">Learn More</Link>
      </div>
    </div>
  );
};

MinistriesCard.propTypes = {
  imageSrc: PropTypes.string.isRequired,
  heading: PropTypes.string.isRequired,
  preacher: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  notesLink: PropTypes.string, // optional
};
