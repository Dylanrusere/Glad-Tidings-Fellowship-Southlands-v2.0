import React, { useState, useEffect } from 'react'
import { FaArrowUp } from 'react-icons/fa';
import youth_bg from '../assets/videos/youth_bg.mp4'
import youtubeThumbnail from '../assets/images/IMG-20250708-WA0115.jpg'
import VisionGoalsSection from '../components/VisionGoalsSection'
import ProgramsSection from '../components/ProgramsSection'
import profilePic from '../assets/images/profilepic.png';
import youth from '../assets/images/IMG-20250708-WA0115.jpg'
import { NewsComp } from '../components/NewsComp'
import { ContactComp } from '../components/ContactComp'
import { Footer } from '../components/Footer'

// ICONS
import bible from '../assets/icons/bible.png'
import fellowship from '../assets/icons/counseling.png'
import faith from '../assets/icons/faith.png'
import community from '../assets/icons/community.png'
import growth from '../assets/icons/growth_2.png'
import training from '../assets/icons/training.png'
import camp from '../assets/icons/camp.png'
import service from '../assets/icons/pray_1.png'
import leadership from '../assets/icons/leadership.png'
import outreach from '../assets/icons/outreach.png'


export const Youth = () => {
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
          <source src={youth_bg} type="video/mp4" />
        </video>

        <div className="events_head_container">
          <p className="page_headings events_head">youth ministry</p>
        </div>
      </div>

      {/* Head */}
      <div className="ministry_heading overall_container">
        <p className="ministry_theme">Raising young men and ladies well equipped with God`s word</p>
        <p className="ministry_tagline">Where Faith, Fun, and Foundations Begin.</p>
      </div>

      {/* About Ministry */}
      <div className="overall_container">
        <div className="about_ministry_container">
          <div className="about_ministry_text">
            <p>
            Youth Ministry is a vibrant community where young people discover their identity in Christ and grow into confident leaders. We provide a safe space for youth to explore faith, build lasting friendships, and develop their God-given gifts. Through dynamic teaching, engaging activities, and purposeful outreach, we aim to empower every young person to live boldly, serve passionately, and impact the world for God’s glory.
            </p>
          </div>

          {/* <div className="youtube_video_wrapper">
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
          </div> */}
          <div className='join_us_left_container'>
            <img src={youth} alt="" />
          </div>
        </div>
      </div>

      {/* Vision & Goals */}
      <VisionGoalsSection
        title="Our Vision & Goals"
        goals={[
          {
            icon: faith,
            title: "Faith Development",
            description: "Equip youth to build a strong, personal relationship with Christ.",
          },
          {
            icon: community,
            title: "Community Building",
            description: "Create a supportive and welcoming environment for all youth.",
          },
          {
            icon: leadership,
            title: "Leadership Training",
            description: "Empower young people to lead in church and community.",
          },
          {
            icon: service,
            title: "Active Service",
            description: "Encourage youth to serve and make a positive impact around them.",
          },
          {
            icon: growth,
            title: "Personal Growth",
            description: "Promote holistic growth spiritually, mentally, and socially.",
          },
        ]}
      />

      <ProgramsSection
        title="Programs & Activities"
        intro="Our youth ministry offers dynamic and engaging programs designed to inspire growth, leadership, and fellowship."
        programs={[
          {
            icon: bible,
            name: 'Youth Bible Study',
            description: 'Weekly interactive sessions focused on relevant, real-life biblical teaching.',
          },
          {
            icon: fellowship,
            name: 'Fellowship Nights',
            description: 'Fun and faith-filled evenings to build friendships and encourage one another.',
          },
          {
            icon: outreach,
            name: 'Outreach & Missions',
            description: 'Youth-led community service projects and mission trips to serve others.',
          },
          {
            icon: training,
            name: 'Life Skills Workshops',
            description: 'Workshops on leadership, career guidance, and personal development.',
          },
          {
            icon: camp,
            name: 'Annual Youth Retreat',
            description: 'A time for spiritual renewal, worship, and bonding away from everyday distractions.',
          },
        ]}
      />


      {/* Children`s Church Ministry */}
      <div className="overall_container">
        <div className="overall_container childrens_leaders">
          <p className="leaders_heading up_headings">Meet Our Leaders</p>

          <div className="leaders_grid_container childrens_grid">
            <div className="leader_img_container">
              <img className='leader_img' src={profilePic} alt="Bro Dylan" />
              <p className="leader_name">Brother Dylan</p>
            </div>

            <div className="leader_img_container">
              <img className='leader_img' src={profilePic} alt="Bro Blessed" />
              <p className="leader_name">Brother Blessed</p>
            </div>

            <div className="leader_img_container">
              <img className='leader_img' src={profilePic} alt="Bro Trust" />
              <p className="leader_name">Brother Trust</p>
            </div>

            <div className="leader_img_container">
              <img className='leader_img' src={profilePic} alt="Sis Audrey" />
              <p className="leader_name">Sister Audrey</p>
            </div>

            <div className="leader_img_container">
              <img className='leader_img' src={profilePic} alt="Sis Maka" />
              <p className="leader_name">Sister Makanaka</p>
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
