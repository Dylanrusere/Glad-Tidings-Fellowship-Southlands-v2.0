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

      {/* Locations */}
      <div className="overall_container homegroups_map_section">
        <h2 className="ministry_theme text-center mb-4">Our Homegroup Locations in Southlands</h2>
        <div className="map_grid">
          {[
            { name: "Homegroup 1", place: "Mai Chikowore", url: "https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d462.6629040230863!2d31.019969610221946!3d-17.960230072536135!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2szw!4v1750163176358!5m2!1sen!2szw" },
            { name: "Southlands 2", place: "273 Southlands Dr, Harare", url: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.8991581618015!2d30.95504861477626!3d-17.828743587808077!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1931bc!2sSouthlands%20Homegroup%202!5e0!3m2!1sen!2szw!4v1684482749621!5m2!1sen!2szw" },
            { name: "Southlands 3", place: "Southlands Primary School", url: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.8991581618015!2d30.95704861477626!3d-17.827143587808077!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1931bc!2sSouthlands%20Primary!5e0!3m2!1sen!2szw!4v1684482749622!5m2!1sen!2szw" },
            { name: "Southlands 4", place: "9 Riverside Lane, Southlands", url: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.8991581618015!2d30.95804861477626!3d-17.826743587808077!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1931bc!2sRiverside%20Homegroup!5e0!3m2!1sen!2szw!4v1684482749623!5m2!1sen!2szw" },
            { name: "Southlands 5", place: "Cornerstone Crescent", url: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.8991581618015!2d30.95904861477626!3d-17.827543587808077!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1931bc!2sCornerstone%20Homegroup!5e0!3m2!1sen!2szw!4v1684482749624!5m2!1sen!2szw" },
            { name: "Southlands 6", place: "Faith Road, Southlands", url: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.8991581618015!2d30.96004861477626!3d-17.827343587808077!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1931bc!2sFaith%20Road%20Group!5e0!3m2!1sen!2szw!4v1684482749625!5m2!1sen!2szw" },
          ].map((location, index) => (
            <div className="map_card" key={index}>
              <h4>{location.name}</h4>
              <p>{location.place}</p>
              <iframe
                src={location.url}
                width="100%"
                height="250"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          ))}
        </div>
      </div>


    </div>
  )
}