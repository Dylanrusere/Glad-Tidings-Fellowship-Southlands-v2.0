import React, { useEffect, useState } from 'react'
import { FaArrowUp } from 'react-icons/fa';
import bg from '../assets/videos/weekly_programs.mp4'

export const Choir = () => {
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
      
            <div className="video_container">
              <video className='video_background' autoPlay loop muted>
                <source src={bg} type="video/mp4" />
              </video>
      
              <div className="events_head_container">
                <p className="page_headings events_head">choir</p>
              </div>
            </div>

    </div>
  )
}
