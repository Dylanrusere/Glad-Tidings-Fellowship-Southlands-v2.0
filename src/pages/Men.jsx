import React, { useState, useEffect } from 'react'
import { FaArrowUp } from 'react-icons/fa';
import ladies_bg from '../assets/videos/weekly_programs.mp4'
import youtubeThumbnail from '../assets/images/home-3.jpg'
import VisionGoalsSection from '../components/VisionGoalsSection'
import ProgramsSection from '../components/ProgramsSection';
import pastor_lee from '../assets/images/pastor_mucheka.jpg';
import { NewsComp } from '../components/NewsComp'
import { ContactComp } from '../components/ContactComp'
import { Footer } from '../components/Footer'

// ICONS
import bible from '../assets/icons/bible.png'
import bible_2 from '../assets/icons/bible_1.png'
import fellowship from '../assets/icons/counseling.png'
import community from '../assets/icons/community.png'
import brotherhood from '../assets/icons/brotherhood.png'
import service from '../assets/icons/pray_1.png'
import leadership from '../assets/icons/leadership.png'
import outreach from '../assets/icons/outreach.png'

export const Men = () => {
  const [showYoutube, setShowYoutube] = useState(false)
  const handlePlay = () => {
    setShowYoutube(true)
  }

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
          <source src={ladies_bg} type="video/mp4" />
        </video>

        <div className="events_head_container">
          <p className="page_headings events_head">men`s fellowship</p>
        </div>
      </div>

      {/* Head */}
      <div className="ministry_heading overall_container">
        <p className="ministry_theme">Raising Mighty Men of Valour</p>
        <p className="ministry_tagline">Empowering men to lead with courage, faith, and honor.</p>
      </div>

      {/* About Ministry */}
      <div className="overall_container">
        <div className="about_ministry_container">
          <div className="about_ministry_text">
            <p>
              Men’s Fellowship exists to build strong, godly men who lead with integrity, serve with humility, and walk boldly in faith. We are committed to raising men of valour—men who stand firm in God’s Word, take responsibility in their families and communities, and sharpen one another through prayer, fellowship, and the Word. Through gatherings, mentorship, and discipleship, we are shaping men to live with purpose, courage, and Christ-like character in every area of life.
            </p>
          </div>

          <div className="youtube_video_wrapper">
            {!showYoutube ? (
              <div className="youtube_thumbnail" onClick={handlePlay}>
                <img src={youtubeThumbnail} alt="YouTube Thumbnail" className="thumbnail_img" />
                <div className="thumbnail_overlay"></div>
                <div className="play_button_pulse">
                  <div className="play_button">&#9658;</div>
                </div>
              </div>
            ) : (
              <iframe
                className="youtube_video"
                src="https://www.youtube.com/embed/DyFtU9uGxtw"
                title="YouTube Video"
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
        title="Our Vision & Goals"
        goals={[
          {
            icon: bible_2,
            title: "Spiritual Growth",
            description: "To build strong, godly men rooted firmly in God’s Word.",
          },
          {
            icon: leadership,
            title: "Leadership & Integrity",
            description: "Raise men who lead with courage, humility, and integrity.",
          },
          {
            icon: brotherhood,
            title: "Brotherhood & Support",
            description: "Foster a supportive community where men sharpen and encourage one another.",
          },
          {
            icon: service,
            title: "Service",
            description: "Mobilize men to serve their families, church, and communities with humility.",
          },
          {
            icon: fellowship,
            title: "Mentorship & Discipleship",
            description: "Equip men to mentor others and grow in Christlike character.",
          },
        ]}
      />

      {/* Programs */}
      <ProgramsSection
        title="Programs & Activities"
        intro="We run dynamic programs designed to strengthen faith, leadership, and brotherhood among men."
        programs={[
          {
            icon: bible,
            name: 'Men’s Bible Study & Prayer Meetings',
            description: 'Weekly gatherings for focused Bible study, prayer, and spiritual growth.',
          },
          {
            icon: fellowship,
            name: 'Monthly Fellowship & Mentorship',
            description: 'Building strong relationships and mentoring younger men in faith and life.',
          },
          {
            icon: community,
            name: 'Community Service Projects',
            description: 'Hands-on projects serving our church and local community.',
          },
          {
            icon: leadership,
            name: 'Leadership Workshops',
            description: 'Training sessions to develop godly leadership skills and character.',
          },
          {
            icon: outreach,
            name: 'Annual Men’s Retreat',
            description: 'A time for spiritual renewal, teaching, and fellowship away from daily life.',
          },
        ]}
      />


      {/* Children`s Church Ministry */}
      <div className="overall_container">
        <div className="overall_container childrens_leaders">
          <p className="leaders_heading up_headings">Meet Our Leaders</p>

          <div className="leaders_grid_container childrens_grid">
            <div className="leader_img_container">
              <img className='leader_img' src={pastor_lee} alt="Pastor L. Mucheka" />
              <p className="leader_name">Pastor L. Mucheka</p>
            </div>

            <div className="leader_img_container">
              <img className='leader_img' src={pastor_lee} alt="Mr M. Mudarikwa" />
              <p className="leader_name">Mr M. Mudarikwa</p>
            </div>

            <div className="leader_img_container">
              <img className='leader_img' src={pastor_lee} alt="Mr Mugwara" />
              <p className="leader_name">Mr Mugwara</p>
            </div>
          </div>
        </div>
      </div>

      <NewsComp />
      <ContactComp />
      <Footer />


    </div>
  )
}
