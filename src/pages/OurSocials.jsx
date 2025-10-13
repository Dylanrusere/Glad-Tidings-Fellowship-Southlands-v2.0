import React, { useState, useEffect } from 'react'
import { FaArrowUp } from 'react-icons/fa';
import homegroups_bg from '../assets/videos/socials.mp4'
import { ContactComp } from '../components/ContactComp';
import { Footer } from '../components/Footer';

export const OurSocials = () => {
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
          <p className="page_headings events_head">our socials</p>
        </div>
      </div>

      <div className="socials_section overall_container">
        <h2 className="section_heading">Connect With Us</h2>
        <div className="socials_grid">
          {[
            {
              name: "Facebook",
              icon: "facebook",
              url: "https://www.facebook.com/share/1CEabtwQB9",
              description: "Follow us for livestreams, photos, and updates.",
            },
            {
              name: "YouTube",
              icon: "youtube",
              url: "https://www.youtube.com/@GladTidingsFellowshipSouthland",
              description: "Watch sermons, teachings, and worship moments.",
            },
            {
              name: "Instagram",
              icon: "instagram",
              url: "https://instagram.com/southlandsgladtidings",
              description: "Get a glimpse of church life through images & reels.",
            },
            // {
            //   name: "TikTok",
            //   icon: "tiktok",
            //   url: "https://tiktok.com/@yourhandle",
            //   description: "Watch fun and spiritual short videos.",
            // },
            {
              name: "WhatsApp",
              icon: "whatsapp",
              url: "https://whatsapp.com/channel/0029Van79H99cDDb2PNgCc1V",
              description: "Join our WhatsApp community or reach out to us.",
            },
          ].map((social, i) => (
            <a
              href={social.url}
              className="social_card"
              key={i}
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className={`fab fa-${social.icon} social_icon`}></i>
              <h3>{social.name}</h3>
              <p>{social.description}</p>
            </a>
          ))}
        </div>
      </div>


      <ContactComp />
      <Footer />

    </div>
  )
}
