import React, { useState, useEffect } from 'react'
import { FaArrowUp } from 'react-icons/fa';
import homegroups_bg from '../assets/videos/weekly_programs.mp4'

export const Homegroups = () => {
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
          <source src={homegroups_bg} type="video/mp4" />
        </video>

        <div className="events_head_container">
          <p className="page_headings events_head">homegroups</p>
        </div>
      </div>

      <div className="ministry_heading overall_container homegroup_top_div">
      <p className="ministry_tagline">The topic that we currently discussing at our designated Homegroups:</p>
        <p className="ministry_theme">Faith</p>
        <a href="" className='homegroup_btn'>Learn More</a>
      </div>

      <div className="ministry_heading overall_container">
        <p className="ministry_theme">The Growth of the Church is in Homegroups</p>
        <p className="ministry_tagline homegroups_tag">Bible Study | Prayer | Fellowship</p>
      </div>

      <div className="overall_container">
        <div className="homegroup_text">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione at odit qui excepturi tenetur
            nihil itaque soluta id quis quidem iste placeat ducimus dolore accusantium earum, harum ipsum
            officiis rem. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa soluta non nulla
            nisi fugiat repudiandae debitis. Accusamus ad modi, voluptas aliquam labore expedita veniam
            officiis aperiam pariatur error reprehenderit nihil.
          </p>
        </div>
      </div>

      {/* Why Homegroups */}

      {/* Locations */}

    </div>
  )
}