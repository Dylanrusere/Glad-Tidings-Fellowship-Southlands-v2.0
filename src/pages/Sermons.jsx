import React, { useState, useEffect } from 'react';
import { FaArrowUp } from 'react-icons/fa';
import { LatestSermonsCard } from '../components/Props/LatestSermonsCard';
import tenNov from '../assets/images/sermonsCovers/11.11.24.png';
import sermonsVideo from '../assets/videos/sermons.mp4';
import { Footer } from '../components/Footer';

export const Sermons = () => {
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


  const [searchTerm, setSearchTerm] = useState('');

  const sermonsData = [
    {
      id: 1,
      imageSrc: tenNov,
      heading: "On this rock l will build my church",
      preacher: "Pastor L. Mucheka",
      date: "Sun, 16 June 2025",
      link: 'https://youtube.com/GladTidingsFellowshipSouthland',
      notesLink: '/downloads/notes-part2.pdf'
    },
    {
      id: 2,
      imageSrc: tenNov,
      heading: "Do no be afraid/discouraged",
      preacher: "Mr Kamwetsa",
      date: "Sun, 08 June 2025",
      link: 'https://youtube.com/GladTidingsFellowshipSouthland',
      notesLink: '/downloads/notes-part2.pdf'
    },
    {
      id: 3,
      imageSrc: tenNov,
      heading: "Children",
      preacher: "Children`s Church",
      date: "Sun, 01 June 2025",
      link: 'https://youtube.com/GladTidingsFellowshipSouthland',
      notesLink: '/downloads/notes-part2.pdf'
    },
    // Add more sermons as needed
  ];

  // Sort sermons in reverse chronological order
  const sortedSermons = [...sermonsData].sort((a, b) => new Date(b.date) - new Date(a.date));

  // Filter sermons based on search term
  const filteredSermons = sortedSermons.filter((sermon) =>
    sermon.heading.toLowerCase().includes(searchTerm.toLowerCase()) ||
    sermon.preacher.toLowerCase().includes(searchTerm.toLowerCase()) ||
    sermon.date.toLowerCase().includes(searchTerm.toLowerCase())
  );

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

      {/* Video Background */}
      <div className="video_container">
        <video className="video_background" autoPlay loop muted>
          <source src={sermonsVideo} type="video/mp4" />
        </video>
        <div className="events_head_container">
          <p className="page_headings events_head">our sermons</p>
        </div>
      </div>

      {/* Heading and Search Bar */}
      <div className="ministry_heading overall_container">
        <p className="ministry_theme">This our Sermons Archive</p>
        <p className="ministry_tagline">This where you can find all our Sermons and the notes for every Sermon.</p>
        <div className="searchBarContainer">
          <input
            type="text"
            className="searchbar"
            placeholder="Search by Sermon Name, Date or Month"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button className="searchBarbtn">Search</button>
        </div>
      </div>

      {/* Sermon Cards */}
      <div className="latest_sermons_big_container">
        <div className="overall_container">
          <div className="latest_sermons_grid_container">
            {filteredSermons.length > 0 ? (
              filteredSermons.map((sermon) => (
                <LatestSermonsCard
                  key={sermon.id}
                  imageSrc={sermon.imageSrc}
                  heading={sermon.heading}
                  preacher={sermon.preacher}
                  date={sermon.date}
                  link={sermon.link}
                  notesLink={sermon.notesLink}
                />
              ))
            ) : (
              <p>No sermons found.</p>
            )}
          </div>
        </div>
      </div>

      <div className="top_sermons"></div>

      <Footer/>
    </div>
  );
};
