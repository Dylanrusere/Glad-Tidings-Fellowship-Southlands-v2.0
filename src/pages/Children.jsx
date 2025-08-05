import React, { useState, useEffect } from 'react'
import { FaArrowUp } from 'react-icons/fa';
import childrens_bg from '../assets/childrens_church_ministry/childrens_bg.mp4'
import youtubeThumbnail from '../assets/images/IMG-20250708-WA0146.jpg'
import VisionGoalsSection from '../components/VisionGoalsSection'
import ProgramsSection from '../components/ProgramsSection'
import mrs_kamwetsa from '../assets/images/mrs_kamwetsa.jpg';
import mrs_matambo from '../assets/images/mrs_matambo.jpg';
import { NewsComp } from '../components/NewsComp'
import { ContactComp } from '../components/ContactComp'
import { Footer } from '../components/Footer'

// ICONS
import safe_zone from '../assets/icons/safe-zone.png'
import bible from '../assets/icons/bible.png'
import bible_2 from '../assets/icons/bible_1.png'
import parental from '../assets/icons/parental.png'
import faith from '../assets/icons/faith.png'
import kids from '../assets/icons/kids.png'
import growth from '../assets/icons/growth_2.png'
import art from '../assets/icons/art.png'
import camp from '../assets/icons/camp.png'
import fun from '../assets/icons/fun.png'
import outreach from '../assets/icons/outreach.png'

export const Children = () => {
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
          <source src={childrens_bg} type="video/mp4" />
        </video>

        <div className="events_head_container">
          <p className="page_headings events_head">children`s church ministry</p>
        </div>
      </div>

      {/* Head */}
      <div className="ministry_heading overall_container">
        <p className="ministry_theme">Raising Children in the Ways of the Lord</p>
        <p className="ministry_tagline">Where Faith, Fun, and Foundations Begin.</p>
      </div>

      {/* About Ministry */}
      <div className="overall_container">
        <div className="about_ministry_container">
          <div className="about_ministry_text">
            <p>
              The Children’s Church Ministry exists to introduce young hearts to the love of Jesus Christ
              in a safe, fun, and engaging environment. Our mission is to plant seeds of faith early on,
              equipping children to grow into spiritually strong individuals who know God personally. We
              cater for children aged 3 to 12 years, with age-appropriate classes, Bible lessons, songs,
              crafts, and interactive activities every Sunday and during special events.
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
            icon: bible,
            title: "Biblical Teaching",
            description: "Teach Biblical truths in fun and memorable ways.",
          },
          {
            icon: growth,
            title: "Spiritual Growth",
            description: "Help children develop a personal relationship with Jesus.",
          },
          {
            icon: safe_zone,
            title: "Safe Space",
            description: "Ensure every child feels safe, valued, and loved.",
          },
          {
            icon: parental,
            title: "Parental Involvement",
            description: "Equip parents to lead their child’s faith journey.",
          },
          {
            icon: faith,
            title: "Bold Faith",
            description: "Raise children who live out their faith confidently.",
          },
        ]}
      />

      {/* Program */}
      <ProgramsSection
        title="Programs & Activities"
        intro="We run engaging, spirit-led programs designed to help children grow in faith, character, and community."
        programs={[
          {
            icon: bible_2,
            name: 'Bible Classes',
            description: 'Interactive Bible storytelling and age-based teachings every Sunday.',
          },
          {
            icon: kids,
            name: 'Kids Worship',
            description: 'Joyful worship sessions with singing, dancing, and instruments.',
          },
          {
            icon: art,
            name: 'Creative Arts & Crafts',
            description: 'Crafts and art projects that tie into the weekly Bible lesson.',
          },
          {
            icon: camp,
            name: 'Holiday Bible School',
            description: 'Annual themed event with games, teaching, snacks, and fun.',
          },
          {
            icon: outreach,
            name: 'Mini Outreach Projects',
            description: 'Simple missions like visiting children’s homes or collecting items for the needy.',
          },
          {
            icon: fun,
            name: 'Fun Day & Talent Shows',
            description: 'A time to play, share talents, and grow in confidence and fellowship.',
          },
        ]}
      />

      {/* Children`s Church Ministry */}
      <div className="overall_container">
        <div className="overall_container childrens_leaders">
          <p className="leaders_heading up_headings">Meet Our Teachers</p>

          <div className="leaders_grid_container childrens_grid">
            <div className="leader_img_container">
              <img className='leader_img' src={mrs_kamwetsa} alt="Mrs Mucheka" />
              <p className="leader_name">Mrs Mucheka</p>
            </div>

            <div className="leader_img_container">
              <img className='leader_img' src={mrs_kamwetsa} alt="Mrs Matipa" />
              <p className="leader_name">Mrs Kamwetsa</p>
            </div>

            <div className="leader_img_container">
              <img className='leader_img' src={mrs_matambo} alt="Mrs Matambo" />
              <p className="leader_name">Mrs Mataula</p>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials */}
      {/* <div className="childrens_testimonials_container">
        <p className="leaders_heading">Parents Testimonials</p>
      </div> */}

      <NewsComp />
      <ContactComp />
      <Footer />


    </div>
  )
}
