import React, { useState, useEffect } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import choirVideo from '../assets/videos/weekly_programs.mp4';
import { FaArrowUp } from 'react-icons/fa';
import choirThumb from '../assets/images/home-3.jpg';

import VisionGoalsSection from '../components/VisionGoalsSection';
import ProgramsSection from '../components/ProgramsSection';
import { NewsComp } from '../components/NewsComp';
import { ContactComp } from '../components/ContactComp';
import { Footer } from '../components/Footer';

// Team Images
import mrsKamwetsa from '../assets/images/choirTeam/mrs_kamwetsa.jpg';

export const Choir = () => {
  const [showVideo, setShowVideo] = useState(false);
  const handlePlay = () => setShowVideo(true);

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

  // Vocal Team & Band Members
  const vocalTeamMembers = [
    { name: "Mrs Mucheka", role: "Alto", image: mrsKamwetsa },
    { name: "Mrs Matambo", role: "Tenor", image: mrsKamwetsa },
    { name: "Mrs Musara", role: "Alto", image: mrsKamwetsa },
    { name: "Brother Blessing", role: "Tenor", image: mrsKamwetsa },
    { name: "Sister Tinotenda", role: "Alto", image: mrsKamwetsa },
    { name: "Sister Tawana", role: "Alto", image: mrsKamwetsa },
    { name: "Sister Makanaka", role: "Suprano", image: mrsKamwetsa },
  ];

  const bandMembers = [
    { name: "Brother Dylan", role: "Keyboardist", image: mrsKamwetsa },
    { name: "Brother Blessed", role: "Keyboardist", image: mrsKamwetsa },
    { name: "Brother Learnmore", role: "Bassist", image: mrsKamwetsa },
    { name: "Brother Tinashe", role: "Drummer", image: mrsKamwetsa },
  ];

  return (
    <div>
      {/* Scroll to Top Button */}
      {showIcon && (
        <div
          className="scroll-to-top"
          onClick={scrollToTop}
          style={{
            background: `conic-gradient(#000066 ${scrollProgress}%, #00006693 ${scrollProgress}%)`
          }}
        >
          <FaArrowUp className="arrow-icon" />
        </div>
      )}

      {/* Hero Section */}
      <div className="video_container">
        <video className="video_background" autoPlay loop muted>
          <source src={choirVideo} type="video/mp4" />
        </video>
        <div className="events_head_container">
          <p className="page_headings events_head">choir ministry</p>
        </div>
      </div>

      {/* Theme/Tagline */}
      <div className="ministry_heading overall_container">
        <p className="ministry_theme">Making a Joyful Noise Unto the Lord</p>
        <p className="ministry_tagline">Where voices unite to glorify God.</p>
      </div>

      {/* About Section */}
      <div className="overall_container">
        <div className="about_ministry_container">
          <div className="about_ministry_text">
            <p>
              The Choir Ministry leads the congregation in heartfelt worship through song.
              It’s a vibrant group of dedicated individuals who rehearse weekly,
              minister through praise and worship on Sundays, and bring life to special events and conferences.
              Through unity, harmony, and spiritual commitment, the choir aims to usher in the presence of God
              and prepare hearts to receive His Word.
            </p>
          </div>

          <div className="youtube_video_wrapper">
            {!showVideo ? (
              <div className="youtube_thumbnail" onClick={handlePlay}>
                <img src={choirThumb} alt="Choir Video" className="thumbnail_img" />
                <div className="play_button_pulse">
                  <div className="play_button">&#9658;</div>
                </div>
              </div>
            ) : (
              <iframe
                className="youtube_video"
                src="https://www.youtube.com/embed/your-choir-video"
                title="Choir Performance"
                frameBorder="0"
                allow="autoplay; encrypted-media"
                allowFullScreen
              />
            )}
          </div>
        </div>
      </div>

      {/* Vision & Goals */}
      <VisionGoalsSection
        title="To lead people into a deeper encounter with God through spirit-filled worship music."
        goals={[
          { icon: "/icons/bible.png", title: "Excellence", description: "To cultivate a culture of excellence in music ministry." },
          { icon: "/icons/heart.png", title: "Training", description: "To train and mentor upcoming worship leaders and instrumentalists." },
          { icon: "/icons/shield.png", title: "Worship Moments", description: "To enhance corporate worship during church services and events." },
          { icon: "/icons/family.png", title: "Growth", description: "To foster unity, discipline, and spiritual growth among choir members." },
          { icon: "/icons/star.png", title: "Ministering", description: "To use music as a tool for evangelism and edification." },
        ]}
      />

      {/* Programs & Activities */}
      <ProgramsSection
        title="Programs & Activities"
        intro="Our choir ministry is active and engaged in a range of musical and spiritual activities:"
        programs={[
          { icon: '/icons/rehearsal.png', name: 'Weekly Rehearsals', description: 'Regular choir practices focused on vocal training and spiritual preparation.' },
          { icon: '/icons/worship.png', name: 'Sunday Worship', description: 'Leading worship every Sunday and on special services.' },
          { icon: '/icons/event.png', name: 'Special Events', description: 'Performances during church conferences, weddings, and community outreach.' },
          { icon: '/icons/workshop.png', name: 'Workshops', description: 'Training sessions on vocal technique, worship leading, and music theory.' },
          { icon: '/icons/outreach.png', name: 'Choir Retreats & Outreach', description: 'Spiritual retreats and musical outreach to other churches or communities.' },
        ]}
      />

      {/* Vocal Team */}
      <div className="our_team_container">
        <div className="overall_container">
          <p className="our_team_head">Our Vocal Team</p>
          <p className="our_team_par">The GTF Southlands Choir is more than just a group of singers — we are a united team of worshippers dedicated to leading the church into the presence of God through music. With hearts full of praise and voices lifted in harmony, we serve to glorify God and inspire others to worship. Each member plays a vital role, and together, we are one voice declaring His goodness.</p>
        </div>
      </div>

      <div className="overall_container choir_carousel">
        <Slider
          dots={true}
          infinite={true}
          speed={500}
          slidesToShow={3}
          slidesToScroll={1}
          autoplay={true}
          autoplaySpeed={3000}
          responsive={[
            { breakpoint: 1024, settings: { slidesToShow: 2 } },
            { breakpoint: 600, settings: { slidesToShow: 1 } },
          ]}
        >
          {vocalTeamMembers.map((member, index) => (
            <div key={index} className="team_card">
              <img src={member.image} alt={member.name} className="team_img" />
              <h4 className="team_name">{member.name}</h4>
              <p className="team_role">{member.role}</p>
            </div>
          ))}
        </Slider>
      </div>

      {/* Band Section */}
      <div className="our_team_container">
        <div className="overall_container">
          <p className="our_team_head">Our Band</p>
          <p className="our_team_par">Supporting the choir with instruments, our band consists of talented musicians committed to creating a powerful atmosphere of worship.</p>
        </div>
      </div>

      <div className="overall_container choir_carousel">
        <Slider
          dots={true}
          infinite={true}
          speed={500}
          slidesToShow={3}
          slidesToScroll={1}
          autoplay={true}
          autoplaySpeed={3000}
          responsive={[
            { breakpoint: 1024, settings: { slidesToShow: 2 } },
            { breakpoint: 600, settings: { slidesToShow: 1 } },
          ]}
        >
          {bandMembers.map((member, index) => (
            <div key={index} className="team_card">
              <img src={member.image} alt={member.name} className="team_img" />
              <h4 className="team_name">{member.name}</h4>
              <p className="team_role">{member.role}</p>
            </div>
          ))}
        </Slider>
      </div>

      {/* Call to Action */}
      <div className="cta_section">
        <div className="cta_section_overlay">
          <h3 className='cta_section_head'>Do you have a heart for worship and music?</h3>
          <p>Join our choir family and be part of something impactful!</p>
          <button className="join_button">Join the Choir</button>
        </div>
      </div>

      {/* News, Contact, Footer */}
      <NewsComp />
      <ContactComp />
      <Footer />
    </div>
  );
};
