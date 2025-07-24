import React, { useState, useEffect } from 'react';
import { FaArrowUp } from 'react-icons/fa';
import homegroups_bg from '../assets/videos/weekly_programs.mp4';
import galleryImages from '../assets/galleryImages'; // Array of image URLs you'll create

export const Gallery = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showIcon, setShowIcon] = useState(false);
  const [visibleImages, setVisibleImages] = useState(6);
  const [selectedImage, setSelectedImage] = useState(null);

  const handleScroll = () => {
    const scrollTop = window.pageYOffset;
    const docHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrollPercent = (scrollTop / docHeight) * 100;

    setScrollProgress(scrollPercent);
    setShowIcon(scrollTop > 100);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const loadMore = () => setVisibleImages(prev => prev + 6);

  return (
    <div>
      {/* Scroll to top button */}
      <div
        className="scroll-to-top"
        onClick={scrollToTop}
        style={{
          background: `conic-gradient(#000066 ${scrollProgress}%, #00006693 ${scrollProgress}%)`,
        }}
      >
        <FaArrowUp className="arrow-icon" />
      </div>

      {/* Hero Video */}
      <div className="video_container gallery_page">
        <video className="video_background" autoPlay loop muted>
          <source src={homegroups_bg} type="video/mp4" />
        </video>
        <div className="events_head_container">
          <p className="page_headings events_head">gallery</p>
        </div>
      </div>

      

      <div className="ministry_heading overall_container">
        <p className="ministry_tagline">Explore our Gallery Section</p>
      </div>

      {/* Gallery Grid */}
      <div className="gallery_container overall_container">
        {galleryImages.slice(0, visibleImages).map((img, index) => (
          <div
            key={index}
            className="gallery_item"
            onClick={() => setSelectedImage(img)}
            style={{ backgroundImage: `url(${img})` }}
          ></div>
        ))}
      </div>

      {/* Load More Button */}
      {visibleImages < galleryImages.length && (
        <div className="load_more_btn_container">
          <button className="load_more_btn" onClick={loadMore}>Load More</button>
        </div>
      )}

      {/* Modal for Enlarged Image */}
      {selectedImage && (
        <div className="image_modal" onClick={() => setSelectedImage(null)}>
          <img src={selectedImage} alt="Enlarged" />
        </div>
      )}
    </div>
  );
};
