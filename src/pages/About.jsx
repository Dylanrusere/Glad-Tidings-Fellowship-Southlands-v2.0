import { React, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import "./Pages.css";
import { FaArrowUp } from 'react-icons/fa';
import welcome from '../assets/images/GT-Logo-blue.png';
import youtubeThumbnail from '../assets/images/our-journey-thumb.jpg'
import pastor_lee from '../assets/images/pastor_mucheka.jpg';
import join_us from '../assets/images/eventsCovers/Night of Worship.jpg';
import { NewsComp } from '../components/NewsComp';
import { ContactComp } from '../components/ContactComp';
import { Footer } from '../components/Footer';

export const About = () => {
  const [showYoutube, setShowYoutube] = useState(false)
  const handlePlay = () => setShowYoutube(true)

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
    <div className='about_page'>
      <div
        className="scroll-to-top"
        onClick={scrollToTop} // Calls the scrollToTop function
        style={{
          background: `conic-gradient(#000066 ${scrollProgress}%, #00006693 ${scrollProgress}%)`
        }}
      >
        <FaArrowUp className="arrow-icon" />
      </div>

      <div className="about_page_hero">
        <div className="about_page_overlay">
          <p className="page_headings about_head">about us</p>
        </div>
      </div>

      {/* Our Assembly History */}
      <section id="assembly_history">
        <img className='welcome_bg about_bg_img' src={welcome} alt="" />
        <div className="overall_container">
          <div className="welcome_head_container welcome_about_container">
            <p className="overall_headings welcome_head about_welcome">Welcome to Southlands Glad Tidings <br /> Fellowship Assembly</p>

            <p>We’re so glad you’re here!

              At Glad Tidings Fellowship Southlands, we are a Christ-centered, Spirit-led, and people-loving church family. Whether you’re exploring faith, looking for a home church, or just browsing through — you are welcome here.

              Our desire is to see lives transformed by the power of God’s Word, empowered by the Holy Spirit, and connected in a vibrant, growing community. We believe in worship that touches heaven, teaching that builds strong believers, and fellowship that makes you feel like family.

              Take a moment to explore our site, learn about our ministries, join us for worship, or connect with us online. Whether you're near or far, there's a place for you at GTF Southlands.
            </p>
          </div>

          {/* Our Mission */}
          <div className="our_mission">
            <div className="our_mission_container">
              <p className="overall_headings our_mission_head">Our Mission</p>
              <p>Our Overall Mandate or Mission as Glad Tidings Fellowship is to preach the Good News.</p>
            </div>

            <div className="our_mission_grid">
              <div className="mission_container">
                <p className="great_commission">go ye therefore...we are going</p>
                <Link to="#" className="card_button ministries_btn">
                  Great Commission
                </Link>
              </div>
              <div className="mission_text_container">
                <div>
                  <h2 className="scripture">matthew 28:19</h2>
                  <p className="verse">"Go Ye Therefore and make disciples of all the nation, baptizing them in the name of the Father, the Son and the Holy Spirit, teaching them to observe everything that l have commanded you"</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Journey */}
      <section id="our_journey">
        <div className="overall_container">
          <div className="journey_container">
            <p className="overall_headings journey_heading our_mission_head">Our Journey</p>
            <p className="journey_par">
              Our journey began in 2013, right here in Southlands, with a small group of passionate believers and a big vision — to share the love of Christ and build a strong, Spirit-filled community. From humble beginnings, Glad Tidings Fellowship Southlands has grown into a vibrant family of faith, rooted in the Word, empowered by the Spirit, and committed to transforming lives for God's glory. And this is just the beginning.
            </p>
          </div>
          <div className="journey_grid_container">
            <div className="youtube_video_wrapper">
              {!showYoutube ? (
                <div className="youtube_thumbnail" onClick={handlePlay}>
                  <img src={youtubeThumbnail} alt="YouTube Thumbnail" className="thumbnail_img" />
                  <div className="play_button_pulse">
                    <div className="play_button">&#9658;</div>
                  </div>
                </div>
              ) : (
                <iframe
                  className="youtube_video"
                  src="https://www.youtube.com/embed/cMYyrcal83g"
                  title="YouTube Video"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              )}
            </div>

            <div className="pic_history">
              {/* Add content here */}
            </div>
          </div>
        </div>
      </section>

      {/* Join Us Every Sunday */}
      <section id='join_us_everysunday'>
        <div className="overall_container">
          <div className="join_us_flex">
            <div className="join_us_right_container">
              <p className="join_us_head">Join Us Every Sunday</p>
              <p className="join_us_par">We invite you to join us every Sunday for a powerful time of worship, Word, and fellowship. Whether you're a first-time visitor or part of the family, there's a seat for you. Come and experience God's presence, connect with others, and grow in your faith at Glad Tidings Fellowship Southlands. We can't wait to welcome you!</p>

              <Link to="https://maps.app.goo.gl/BD9CNsuk57hFAyz5A" className="card_button ministries_btn">
                Need Directions
              </Link>
            </div>
            <div className="join_us_left_container">
              {/* <img src={join_us} alt="Join Us" /> */}
            </div>
          </div>
        </div>
      </section>

      <NewsComp />
      <ContactComp />
      <Footer />

    </div>
  )
}
