import React, { useState, useEffect } from 'react'
import { FaArrowUp } from 'react-icons/fa';
import homegroups_bg from '../assets/videos/weekly_programs.mp4'
import media_team_logo from '../assets/images/media-team.png'
import media_team from '../assets/images/gallery/youth-4.jpg'
import { ContactComp } from '../components/ContactComp';
import { Footer } from '../components/Footer';

export const MediaTeam = () => {
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
          <p className="page_headings events_head">our media team</p>
        </div>
      </div>
          
          {/* Welcome Message */}
          <div className="welcome_section">
              <img className='welcome_bg' src={media_team_logo} alt="" />
              <div className="overall_container">
                <div className="welcome_head_container">
                  <p className="head_display">Meet</p>
                  <p className="overall_headings welcome_head">Southlands Glad Tidings <br /> Media Crew</p>
                </div>
                <div className="media_team_container">
                  <div className="media_team_description">
                    <p className="welcome_message">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum nihil possimus repellat quisquam ipsum earum numquam officiis aspernatur tempore, excepturi dignissimos perspiciatis facere! Optio odit, corporis ipsum dicta cupiditate quaerat.
                    </p>
                  </div>
                  <div className="media_image_big_container">
                    <div className="media_team_img_container">
                        <img className='media_team_img' src={media_team} alt="Media Crew" />
                    </div>
                  </div>
                </div>
              </div>
          </div>

      {/* <ContactComp />
      <Footer /> */}

    </div>
  )
}
