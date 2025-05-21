import React, { useState, useEffect } from 'react';
import { FaArrowUp } from 'react-icons/fa';
import AllEvents from '../components/AllEvents'; // import the component

export const Events = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showIcon, setShowIcon] = useState(false); // State to control visibility

  const handleScroll = () => {
    const scrollTop = window.pageYOffset;
    const docHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrollPercent = (scrollTop / docHeight) * 100;

    setScrollProgress(scrollPercent);
    setShowIcon(scrollTop > 100); // Show icon only if scrolled > 100px
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <div>   
          <div
              className="scroll-to-top"
              onClick={scrollToTop} // Calls the scrollToTop function
              style={{
                background: `conic-gradient(#000066 ${scrollProgress}%, #00006693 ${scrollProgress}%)`
              }}
              >
              <FaArrowUp className="arrow-icon" />
          </div>
      <div className="top_events"></div>   
      <AllEvents />
    </div>
  );
};
