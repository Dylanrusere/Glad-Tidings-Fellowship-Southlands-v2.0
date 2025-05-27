import React, { useState } from 'react';
import { FaCalendarAlt, FaDownload, FaInfoCircle } from 'react-icons/fa';

const ResourceCard = ({ resource }) => {
  const { resourcesImg, title, brief, updatedAt, fullDescription, downloadLink } = resource;
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <div className="overall_card">
        <div className="card_image_container">
          <img
            src={resourcesImg} // Replace with dynamic image if needed
            alt={title}
            className="card_image"
          />
          <div className="card_overlay"></div>
        </div>

        <div className="card_content_container">
          <h3 className="card_heading">{title}</h3>
          <p className="card_brief">{brief}</p>
          <p className="card_date">
            <FaCalendarAlt /> {updatedAt}
          </p>

          
            <button className="card_button" onClick={() => setShowModal(true)}>
              <FaInfoCircle /> View More
            </button>
            <a href={downloadLink} download className="card_button download_btn">
              <FaDownload /> Download
            </a>
            
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="modal_overlay" onClick={() => setShowModal(false)}>
          <div className="resources_modal_content" onClick={(e) => e.stopPropagation()}>
            <h2>{title}</h2>
            <p>{fullDescription}</p>
            <button className="close_btn" onClick={() => setShowModal(false)}>Close</button>
          </div>
        </div>
      )}
    </>
  );
};

export default ResourceCard;
