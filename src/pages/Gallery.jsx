import React, { useState, useEffect } from 'react';
import { FaArrowUp } from 'react-icons/fa';
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

  // Shuffle and pick 5 random images from galleryImages
  const getRandomImages = (imagesArray, count) => {
    const shuffled = [...imagesArray].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
  };

  const [carouselImages] = useState(getRandomImages(galleryImages, 5)); // Random 5 images
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        (prevIndex + 1) % carouselImages.length
      );
    }, 5000); // every 5 seconds

    return () => clearInterval(interval);
  }, [carouselImages]);


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

      {/* Hero Image Carousel */}
      <div className="carousel_hero_container">
        <div
          className="carousel_background"
          style={{
            backgroundImage: `url(${carouselImages[currentImageIndex]})`,
          }}
        >
          <div className="blue_overlay" />
          <div className="events_head_container">
            <p className="page_headings events_head">gallery</p>
          </div>
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
