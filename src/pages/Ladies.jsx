import React, { useState, useEffect } from 'react'
import { FaArrowUp } from 'react-icons/fa';
import ladies_bg from '../assets/videos/weekly_programs.mp4'
import ladies from '../assets/images/ladies-2.jpg'
import VisionGoalsSection from '../components/VisionGoalsSection'
import ProgramsSection from '../components/ProgramsSection'
import mrs_kamwetsa from '../assets/images/mrs_kamwetsa.jpg';
import mrs_matambo from '../assets/images/mrs_matambo.jpg';
import mrs_ngorima from '../assets/images/mrs_ngorima.jpg';
import mrs_chingodza from '../assets/images/mrs_chingodza.jpg';
import profilePic from '../assets/images/profilepic.png';
import { NewsComp } from '../components/NewsComp'
import { ContactComp } from '../components/ContactComp'
import { Footer } from '../components/Footer'


// ICONS
import bible_2 from '../assets/icons/bible_1.png'
import fellowship from '../assets/icons/counseling.png'
import training from '../assets/icons/training.png'
import growth from '../assets/icons/growth_2.png'
import empowerment from '../assets/icons/empowerment.png'
import camp from '../assets/icons/camp.png'
import unity from '../assets/icons/unity.png'
import service from '../assets/icons/pray_1.png'
import leadership from '../assets/icons/leadership.png'
import outreach from '../assets/icons/outreach.png'

export const Ladies = () => {
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
          <p className="page_headings events_head">ladies` fellowship</p>
        </div>
      </div>

      {/* Head */}
      <div className="ministry_heading overall_container">
        <p className="ministry_theme">Women of Purpose, Power & Grace</p>
        <p className="ministry_tagline">Nurturing faith, fostering sisterhood, and empowering every woman to shine</p>
      </div>

      {/* About Ministry */}
      <div className="overall_container">
        <div className="about_ministry_container">
          <div className="about_ministry_text">
            <p>
              The Ladies’ Fellowship is a vibrant community where women from all walks of life come together to grow spiritually, support one another, and serve with love. Through inspiring Bible studies, uplifting fellowship, and impactful outreach, we nurture hearts and minds to reflect the beauty and strength found in Christ. Join us as we encourage each other to walk boldly in God’s purpose and embrace the power and grace He has given us.
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
            <img src={ladies} alt="" />
          </div>
        </div>
      </div>

      {/* Vision & Goals */}
      <VisionGoalsSection
        title="Our Vision & Goals"
        goals={[
          {
            icon: growth,
            title: "Spiritual Growth",
            description: "To nurture deep and lasting relationships with Christ through regular Bible study, prayer, and worship.",
          },
          {
            icon: empowerment,
            title: "Empowerment",
            description: "To equip women with the knowledge, confidence, and skills needed to impact their homes, workplaces, and communities.",
          },
          {
            icon: unity,
            title: "Unity & Sisterhoo",
            description: "To build a loving, supportive community where every woman feels valued, heard, and encouraged.",
          },
          {
            icon: service,
            title: "Service",
            description: "To inspire and mobilize women to serve others both within the church and in the wider community",
          },
          {
            icon: leadership,
            title: "Leadership Development",
            description: "To identify and train women to take on leadership roles in the church and beyond.",
          },
        ]}
      />

      {/* Program */}
      <ProgramsSection
        title="Programs & Activities"
        intro="We run engaging, spirit-led programs designed to empower women in faith, fellowship, and service."
        programs={[
          {
            icon: bible_2,
            name: 'Weekly Bible Study & Prayer Meetings',
            description: 'Deepen your faith through focused study and powerful prayer gatherings.',
          },
          {
            icon: fellowship,
            name: 'Monthly Fellowship Breakfasts',
            description: 'Connect, encourage, and build friendships over a shared meal and inspiring talks.',
          },
          {
            icon: outreach,
            name: 'Community Outreach Projects',
            description: 'Participate in initiatives like feeding programs, charity drives, and mentorship for young girls.',
          },
          {
            icon: training,
            name: 'Workshops & Seminars',
            description: 'Attend sessions on personal development, financial stewardship, health, and wellness.',
          },
          {
            icon: camp,
            name: 'Annual Women’s Retreat',
            description: 'A time of spiritual renewal, teaching, worship, and bonding away from the hustle of daily life.',
          },
        ]}
      />


      {/* Children`s Church Ministry */}
      <div className="overall_container">
        <div className="overall_container childrens_leaders">
          <p className="leaders_heading up_headings">Meet Our Leaders</p>

          <div className="leaders_grid_container childrens_grid">
            <div className="leader_img_container">
              <img className='leader_img' src={profilePic} alt="Mrs Mucheka" />
              <p className="leader_name">Mrs Mucheka</p>
            </div>

            <div className="leader_img_container">
              <img className='leader_img' src={mrs_kamwetsa} alt="Mrs Kamwetsa" />
              <p className="leader_name">Mrs Kamwetsa</p>
            </div>

            <div className="leader_img_container">
              <img className='leader_img' src={mrs_matambo} alt="Mrs Matambo" />
              <p className="leader_name">Mrs Matambo</p>
            </div>

            <div className="leader_img_container">
              <img className='leader_img' src={mrs_ngorima} alt="Mrs Ngorima" />
              <p className="leader_name">Mrs Ngorima</p>
            </div>

            <div className="leader_img_container">
              <img className='leader_img' src={mrs_chingodza} alt="Mrs Chingodza" />
              <p className="leader_name">Mrs Chingodza</p>
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
