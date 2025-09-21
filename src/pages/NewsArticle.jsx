// src/pages/NewsArticle.jsx

import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { FaTimes } from 'react-icons/fa';
import { newsItems } from './News';
import { ContactComp } from '../components/ContactComp';
import { Footer } from '../components/Footer';

// Reusable Modal Component
const Modal = ({ onClose, children }) => {
  useEffect(() => {
    // Disable scrolling on the body when the modal is open
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <button className="modal-close-button" onClick={onClose}>
          <FaTimes />
        </button>
        {children}
      </div>
    </div>
  );
};

export const NewsArticle = () => {
  const { newsId } = useParams();
  const article = newsItems.find(item => item.id === newsId);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState(null);

  const openModal = (content) => {
    setModalContent(content);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setModalContent(null);
  };

  if (!article) {
    return (
      <div className="overall_container" style={{ padding: '4rem 2rem' }}>
        <h2 className="text-center">Article not found.</h2>
      </div>
    );
  }

  return (
    <div>
      <div className="news-article-page overall_container">
        <h1 className="news-article-title overall_headings">{article.title}</h1>
        <p className="news-article-date">{article.date}</p>
        
        <div className="news-article-big-container">
          {/* Main image */}
          <div className="news-article-image-container">
            <img src={article.image} alt={article.title} className="news-article-main-image" />
          </div>
          
          {/* Full content */}
          <div className="news-article-full-content" dangerouslySetInnerHTML={{ __html: article.fullContent }}></div>
        </div>
        
        {/* Images and Videos Gallery Section */}
        {article.media && article.media.length > 0 && (
          <div className="news-media-gallery">
            <h2 className="gallery-heading overall_headings">gallery</h2>
            <div className="gallery-grid">
              {article.media.map((item, index) => (
                <div key={index} className="media-item" onClick={() => openModal(item)}>
                  {item.type === 'image' && (
                    <img src={item.src} alt={item.alt} className="media-thumbnail" />
                  )}
                  {item.type === 'video' && (
                    <div className="video-thumbnail-container">
                      <video className="video-thumbnail" muted>
                        <source src={item.src} type="video/mp4" />
                      </video>
                      <span className="play-icon">▶</span>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
      
      {/* The Modal for full-size images/videos */}
      {isModalOpen && (
        <Modal onClose={closeModal}>
          {modalContent.type === 'image' && (
            <img src={modalContent.src} alt={modalContent.alt} />
          )}
          {modalContent.type === 'video' && (
            <video controls autoPlay>
              <source src={modalContent.src} type="video/mp4" />
            </video>
          )}
        </Modal>
      )}

      <ContactComp />
      <Footer />
    </div>
  );
};