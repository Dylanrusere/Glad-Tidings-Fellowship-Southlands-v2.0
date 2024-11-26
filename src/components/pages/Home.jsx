import React from 'react';
import "./Pages.css";
import TypingEffect from 'react-typing-effect';
import events from '../videos/events.mp4';
import  play_btn from '../icons/play.png';
import welcome from '../images/GT-Logo-blue.png';
import pastor_lee from '../images/pastor_mucheka.jpg';
import UpcomingEvents from '../components/UpcomingEvents';

export const Home = () => {
  return (
    <div className='home'>
        {/* <div className="home_hero">
                <div className="overall_container">
                    aghjdshjv
                </div>
        </div> */}
        <div className="home_video_container">
          <video className='home_video_background' autoPlay loop muted>
            <source src={events} type="video/mp4" />
          </video>
          <div className="home_head_container">
            <div className="overall_container">
              <TypingEffect
                text={['southlands glad tidings', 'the center of praise,', 'the center of worship,',
                  'the center of prayer,', 'the center of devotion']}
                speed={100}
                eraseSpeed={50}
                eraseDelay={2000}
                typingDelay={500}
                className="page_headings home_head"
              />
              <p className="overall_headings home_head"></p>
              <p className="sub_head">Go Ye Therefore...We are going <br/><span>Matthew 28:19</span></p>
              <div className="hero_btns_container">
                <a href='https:youtube.com' class="video-play-button"></a>
              </div>
            </div>
          </div>
        </div>

        <div className="welcome_section">
        <img className='welcome_bg' src={welcome} alt="" />
           <div className="overall_container">
             <div className="welcome_head_container">
               <p className="head_display">Welcome</p>
               <p className="overall_headings welcome_head">welcome to southlands glad tidings <br /> fellowship assembly</p>
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

           <UpcomingEvents/>
        </div>
    </div>
  );
};
