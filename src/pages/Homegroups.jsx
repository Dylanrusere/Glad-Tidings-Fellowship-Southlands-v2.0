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
        <p className="ministry_theme">The Doctrine of Men</p>
        {/* <a href="" className='homegroup_btn'>Learn More</a> */}
      </div>

      <div className="ministry_heading overall_container">
        <p className="ministry_theme">The Growth of the Church is in Homegroups</p>
        <p className="ministry_tagline homegroups_tag">Bible Study | Prayer | Fellowship</p>
      </div>

      <div className="overall_container">
        <div className="homegroup_text">
          <p>
            Homegroups are the heartbeat of our church community—small gatherings of believers meeting regularly in homes across Southlands to grow in faith, build meaningful relationships, and support one another in love. They create a space for deeper Bible study, authentic fellowship, and personal discipleship beyond the Sunday service. Through Homegroups, the church becomes more connected, spiritually nourished, and empowered to live out God’s Word in everyday life.
          </p>
        </div>
      </div>

      {/* Locations */}
      <div className="overall_container homegroups_map_section">
        <p className="ministry_theme">Our Homegroup Locations in Southlands</p>
        <div className="map_grid">
          {[
            { name: "Homegroup 1", place: "", url: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3795.3994420189!2d31.01827207467219!3d-17.960143780002078!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1931989b433c7043%3A0x59c7c7c6f9304f33!2sGlad%20Tidings%20Fellowship%20Southlands!5e0!3m2!1sen!2szw!4v1750236490395!5m2!1sen!2szw" },
            { name: "Homegroup 2", place: "", url: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3795.3994420189!2d31.01827207467219!3d-17.960143780002078!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1931989b433c7043%3A0x59c7c7c6f9304f33!2sGlad%20Tidings%20Fellowship%20Southlands!5e0!3m2!1sen!2szw!4v1750236490395!5m2!1sen!2szw" },
            { name: "Homegroup 3", place: "", url: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3795.3994420189!2d31.01827207467219!3d-17.960143780002078!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1931989b433c7043%3A0x59c7c7c6f9304f33!2sGlad%20Tidings%20Fellowship%20Southlands!5e0!3m2!1sen!2szw!4v1750236490395!5m2!1sen!2szw" },
            { name: "Homegroup 4", place: "", url: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3795.3994420189!2d31.01827207467219!3d-17.960143780002078!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1931989b433c7043%3A0x59c7c7c6f9304f33!2sGlad%20Tidings%20Fellowship%20Southlands!5e0!3m2!1sen!2szw!4v1750236490395!5m2!1sen!2szw" },
            { name: "Homegroup 5", place: "", url: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3795.3994420189!2d31.01827207467219!3d-17.960143780002078!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1931989b433c7043%3A0x59c7c7c6f9304f33!2sGlad%20Tidings%20Fellowship%20Southlands!5e0!3m2!1sen!2szw!4v1750236490395!5m2!1sen!2szw" },
            { name: "Homegroup 6", place: "", url: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3795.3994420189!2d31.01827207467219!3d-17.960143780002078!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1931989b433c7043%3A0x59c7c7c6f9304f33!2sGlad%20Tidings%20Fellowship%20Southlands!5e0!3m2!1sen!2szw!4v1750236490395!5m2!1sen!2szw" },
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

      {/* Topics we`ve Covered */}


    </div>
  )
}