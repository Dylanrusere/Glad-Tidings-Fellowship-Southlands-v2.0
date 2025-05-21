import React, { useState, useEffect } from 'react';
import "./Pages.css";
import TypingEffect from 'react-typing-effect';
import { FaCalendarAlt, FaPlayCircle, FaArrowUp } from 'react-icons/fa';
import events from '../assets/videos/events.mp4';
import welcome from '../assets/images/GT-Logo-blue.png';
import pastor_lee from '../assets/images/pastor_mucheka.jpg';
import AllEvents from '../components/AllEvents';
import lines from '../assets/icons/ancient-scroll.png';
import yearsImg from '../assets/icons/years.png';
import disciples from '../assets/images/gt-founding-fathers.jpeg';
import { LatestSermons } from '../components/LatestSermons';
import { WeeklyPrograms } from '../components/WeeklyPrograms';
import { Ministries } from '../components/Ministries';
import { NewsComp } from '../components/NewsComp';
import { ContactComp } from '../components/ContactComp';
import { Footer } from '../components/Footer';

export const Home = () => {
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

      <div className='home'>
          <div className="home_video_container">
            <video className='home_video_background' autoPlay loop muted>
              <source src={events} type="video/mp4" />
            </video>
            <div className="home_head_container">
              <div className="overall_container">
                <TypingEffect
                  text={['Southlands Glad Tidings', 'The center of Praise,', 'The center of Worship,',
                    'The center of Prayer,', 'The center of Devotion']}
                  speed={100}
                  eraseSpeed={50}
                  eraseDelay={2000}
                  typingDelay={500}
                  className="home_head"
                />
                <p className="overall_headings home_head"></p>
                <p className="sub_head">Go Ye Therefore...We are going <br/><span>Matthew 28:19</span></p>
              </div>
      
            </div>
            <div className="overall_container ">
                <div className="hero_btns_container">
                  <a href="https://youtube.com/@GladTidingsFellowshipSouthland" className="video-play-button">
                    <span className="icon pulse"><FaPlayCircle /></span>
                    Watch Live
                  </a>
                  <a href="#upcoming_events_home" className="upcoming-events-button">
                    <span className="icon"><FaCalendarAlt /></span>
                    Upcoming Events
                  </a>
                </div>
              </div>
          </div>
          
          {/* Welcome Message */}
          <div className="welcome_section">
              <img className='welcome_bg' src={welcome} alt="" />
              <div className="overall_container">
                <div className="welcome_head_container">
                  <p className="head_display">Welcome</p>
                  <p className="overall_headings welcome_head">Welcome to Southlands Glad Tidings <br /> Fellowship Assembly</p>
                </div>
                <div className="welcome_content_container">
                  <div className="welcome_message_container">
                    <p className="welcome_message">
                      I extend my warmest greetings to you in the Name of our Lord Jesus Christ.
                      Thank you for setting aside time to know more about us. <br /><br />
                      Southlands Glad Tidings Fellowship Assembly is a Christ focused Church
                      <strong>(1 Peter 2 vs 6; Ephesians 2 vs 20)</strong>. We believe with the core of our beings that
                      without God's Love and sending Jesus Christ to Die for our SIN and the Help of
                      the Holy Spirit, humanity was doomed to eternal destruction <strong>
                        (1 Corinthians 1 vs 30;John 3 vs 16-18)</strong>. Therefore everything we
                        do is centered around HIM and to please HIM
                      <strong>(Hebrews 12 vs 1-2)</strong>.<br /><br />
                      Please feel free to browse through our website and familiarise yourself with our
                      activities as we seek to please our LORD <strong>(Ecclesiastes 12 vs 13)</strong>. We are looking
                      forward to hear from you soon. For more information and prayer request, feel free
                      to send us a message through our contact page and we will be in touch.<br /><br />
                      Shalom,<br /><br />
                      Pastor L Mucheka
                    </p>
                  </div>
                  <div className="pastor_image_big_container">
                    <div className="pastor_img_container">
                        <img className='pastor_mucheka_img' src={pastor_lee} alt="Pastor L. Mucheka" />
                    </div>
                  </div>
                </div>
              </div>
          </div>
          <div id="upcoming_events_home">
            <AllEvents showUpcomingOnly={true} />
          </div>
      
          {/* Brief History */}
          <div className="brief_history">
            <img className='lines' src={lines} alt="" />
            <div className="overall_container">
              <p className="overall_headings brief_history_head">A Brief History of Glad Tidings Fellowship</p>
              <p className="brief_history_par">
              The vision of Glad Tidings Fellowship was imparted to Pastor Richmond Chiundiza, who, at the
              time, was serving as a Pastor at Christian Life Center in Harare. While at Christian Life Center,
               he worked closely with Pastor Steve Bacon, contributing significantly to the ministry.
               In addition to his pastoral duties, Pastor Chiundiza held the role of National Director for
               Campus Crusade for Christ in Zimbabwe, showcasing his dedication to spreading the Gospel and
               nurturing spiritual growth on a national scale.
              </p>
              <div className="years_container">
                <div className="years_grid_container">
                  <div className="years_content_container">
                    <p className="years_content_par">
                    In 1982, driven by his deep conviction and calling, Pastor Chiundiza translated this
                    God-given vision into reality. He founded Glad Tidings Fellowship, a ministry that
                    began its journey with humble beginnings, gathering for services at Highfield Secondary
                    School in Harare. This marked the beginning of a mission-focused community dedicated to
                    spreading the message of hope, faith, and salvation, which has since grown into a
                    cornerstone of spiritual transformation and community building in Zimbabwe and beyond.
                    </p>
                  </div>
                  <div className="years_image_container">
                    <div>
                      <p className="overall_headings when_it_started">The year the ministry started</p>
                      <img className='years_img' src={yearsImg} alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
      
          {/* DIA */}
          <div className="disciples">
            <div className="overall_container">
              <p className="overall_headings disciples_head">Disciples In Action</p>
              <div className="disciples_grid_container">
                <div className="disciples_image_container">
                    <div className='disciples_img_container'>
                      <img className='disciples_img' src={disciples} alt="" />
                    </div>
                </div>
                <div className="disciples_content">
                  <p className="disciples_par">
                    Disciples in Action is a devoted team of Apostles who were chosen and used by the Lord Jesus
                    Christ to establish the Glad Tidings Fellowship (GTF) denomination. This dynamic Apostolic
                    board has played a pivotal role in the growth and development of Glad Tidings Fellowship by
                    planting and strengthening the majority of its assemblies. Through their unwavering faith
                    and dedication, they have laid a strong spiritual foundation for countless believers and
                    congregations within the fellowship.
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* Latest Sermons */}
          <LatestSermons/>
          {/* Weekly Programs */}
          <WeeklyPrograms/>
          {/* Our Ministries */}
          <Ministries/>
          {/* News */}
          <NewsComp/>
          {/* Contact */}
          <ContactComp/>
          {/* Footer */}
          <Footer/>
        </div>
    </div>
  );
};
