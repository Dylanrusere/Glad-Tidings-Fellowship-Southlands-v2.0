import React, { useState, useEffect } from 'react'
import { FaArrowUp } from 'react-icons/fa';
import homegroups_bg from '../assets/videos/weekly_programs.mp4'
import { ContactComp } from '../components/ContactComp';
import { Footer } from '../components/Footer';

export const Contact = () => {
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
          <p className="page_headings events_head">contact us</p>
        </div>
      </div>

      <div className="google_map_location">
        {/* <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15202.484442414137!2d30.5385461411731!3d-17.71535008053946!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x19311fea451727b7%3A0x89e5c28bdaf6fc3f!2sDarwendale!5e0!3m2!1sen!2szw!4v1727853937994!5m2!1sen!2szw"
          width="100%" height="100%" style="border:0;" allowfullscreen="" loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"></iframe> */}
      </div>

      <ContactComp/>
      <Footer/>

    </div>
  )
}
