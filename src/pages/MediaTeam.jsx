import React, { useState, useEffect } from 'react'
import { FaArrowUp } from 'react-icons/fa';
import homegroups_bg from '../assets/videos/weekly_programs.mp4'
import media_team_logo from '../assets/images/media-team.png'
import media_team from '../assets/images/gallery/youth-4.jpg'
import { ContactComp } from '../components/ContactComp';
import { Footer } from '../components/Footer';
import { NewsComp } from '../components/NewsComp';

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
            <p className="overall_headings welcome_head">Southlands Glad Tidings <br /> Media Crew</p>
          </div>
          <div className="media_team_container">
            <div className="media_team_description">
              <p className="welcome_message">
                At <strong>Glad Tidings Fellowship Southlands</strong>, the <strong>Media Crew</strong> plays a vital role in ensuring that the message of the Gospel reaches both those in the sanctuary and those beyond our physical walls. From capturing powerful moments during services to managing live streams and visual presentations, the Media Team operates behind the scenes but impacts every heart in attendance.

                We are a team of passionate creatives, technicians, and storytellers dedicated to excellence in every frame, every sound, and every click. Whether it's through sound engineering, camera work, graphic design, or managing our church's social media presence, we serve to make the Good News seen and heard clearly.
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

      
      <div className="cta_media_crew">
        <div className="cta_media_crew_overlay">
          <h3 className='cta_media_crew_head'>Are you passionate about media, technology, or design?</h3>
          <p>There's a place for you on our team. Come help us tell His story to the world.</p>
          <button className="join_button">Join Media Crew</button>
        </div>
      </div>

      <NewsComp />
      <ContactComp />
      <Footer />

    </div>
  )
}
