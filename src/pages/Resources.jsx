import React, { useState, useEffect } from 'react';
import './Pages.css';
import { FaArrowUp } from 'react-icons/fa';
import ResourceCard from '../components/ResourceCard';
import tenNov from '../assets/images/sermonsCovers/11.11.24.png';
import { Footer } from '../components/Footer';


const ResourcesDirectory = [
  {
    resourcesImg: tenNov,
    title: "Understanding Faith",
    brief: "A short guide on building strong faith.",
    fullDescription: "This resource dives deep into how to grow your faith through the Word of God...",
    updatedAt: "May 18, 2025",
    downloadLink: "/downloads/understanding-faith.pdf"
  },
  {
    resourcesImg: tenNov,
    title: "Walking in Salvation",
    brief: "Explains what salvation truly means.",
    fullDescription: "Discover what it means to walk in your salvation and God's grace...",
    updatedAt: "May 15, 2025",
    downloadLink: "/downloads/walking-in-salvation.pdf"
  },
  {
    resourcesImg: tenNov,
    title: "Walking in Salvation",
    brief: "Explains what salvation truly means.",
    fullDescription: "Discover what it means to walk in your salvation and God's grace...",
    updatedAt: "May 15, 2025",
    downloadLink: "/downloads/walking-in-salvation.pdf"
  },
  {
    resourcesImg: tenNov,
    title: "Walking in Salvation",
    brief: "Explains what salvation truly means.",
    fullDescription: "Discover what it means to walk in your salvation and God's grace...",
    updatedAt: "May 15, 2025",
    downloadLink: "/downloads/walking-in-salvation.pdf"
  },
];

export const Resources = () => {
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

  const filteredResources = ResourcesDirectory.filter((resource) =>
    resource.title.toLowerCase().includes(searchTerm.toLowerCase())
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

      <div className="about_page_hero">
        <div className="about_page_overlay">
          <p className="page_headings about_head">resources</p>
        </div>
      </div>

      <div className="ministry_heading">
        <p className="ministry_theme">Raising Children in the Ways of the Lord</p>
        <p className="ministry_tagline">Where Faith, Fun, and Foundations Begin.</p>
        <div className="searchBarContainer">
          <input
            type="text"
            className='searchbar'
            placeholder='Search Resources'
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button className='searchBarbtn'>Search</button>
        </div>
      </div>

      <div className="overall_container">
        <div className="resources_grid">
          {filteredResources.map((resource, index) => (
            <ResourceCard key={index} resource={resource} />
          ))}
        </div>
      </div>

      <div className="top_sermons"></div>

      <Footer/>

    </div>
  );
};
