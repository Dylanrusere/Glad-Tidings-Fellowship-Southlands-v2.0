import React, { useState, useEffect } from 'react'
import { FaArrowUp } from 'react-icons/fa';
import give_bg from '../assets/videos/socials.mp4' // You can replace with a giving-related video or image
import { ContactComp } from '../components/ContactComp';
import { Footer } from '../components/Footer';

export const Give = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showIcon, setShowIcon] = useState(false);

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
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div>
      {/* Scroll to top button */}
      <div
        className="scroll-to-top"
        onClick={scrollToTop}
        style={{
          background: `conic-gradient(#000066 ${scrollProgress}%, #00006693 ${scrollProgress}%)`
        }}
      >
        <FaArrowUp className="arrow-icon" />
      </div>

      {/* Hero section */}
      <div className="video_container">
        <video className='video_background' autoPlay loop muted>
          <source src={give_bg} type="video/mp4" />
        </video>

        <div className="events_head_container">
          <p className="page_headings events_head">give</p>
        </div>
      </div>

      {/* Give section */}
      <div className="socials_section overall_container">
        <h2 className="section_heading">Support the Mission</h2>
        <p className="section_intro" style={{ textAlign: 'center', color: '#333', maxWidth: '700px', margin: '0 auto 2rem' }}>
          Your giving helps us reach more people, build God’s house, and impact our community. 
          Choose an area you’d like to contribute towards below.
        </p>

        <div className="socials_grid">
          {[
            {
              name: "Church Building Project",
              icon: "fa-church",
              description: "Help us expand and beautify our place of worship.",
              link: "#",
            },
            {
              name: "Musical Instruments",
              icon: "fa-music",
              description: "Support the worship team by contributing towards instruments and equipment.",
              link: "#",
            },
            {
              name: "Borehole Drilling",
              icon: "fa-water",
              description: "Help us provide clean water for the church and surrounding community.",
              link: "#",
            },
            {
              name: "Youth & Children Ministry",
              icon: "fa-users",
              description: "Invest in the next generation through camps, training, and outreach.",
              link: "#",
            },
            {
              name: "Media & Livestream Equipment",
              icon: "fa-video",
              description: "Enhance our online presence through better cameras, lighting, and streaming tools.",
              link: "#",
            },
          ].map((item, i) => (
            <a
              href={item.link}
              className="social_card"
              key={i}
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className={`fas ${item.icon} social_icon`}></i>
              <h3>{item.name}</h3>
              <p>{item.description}</p>
              <button className="give_btn">Give Now</button>
            </a>
          ))}
        </div>
      </div>

      <ContactComp />
      <Footer />
    </div>
  )
}
