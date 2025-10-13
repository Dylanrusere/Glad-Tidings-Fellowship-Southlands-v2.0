import React, { useState, useEffect } from 'react';
import './Pages.css';
import { FaArrowUp } from 'react-icons/fa';
import ResourceCard from '../components/ResourceCard';
import resourcesCoverImg from '../assets/resourcesNotes/resources-cover.jpg';
import { Footer } from '../components/Footer';


const ResourcesDirectory = [
  {
    resourcesImg: resourcesCoverImg,
    title: "The Doctrine of The Holy Spirit",
    brief: "A teaching of The Doctrine of The Holy Spirit",
    source: "Homegroups",
    ledBy: "Homegroup Leaders",
    fullDescription: "This resource dives deep into The Doctrine of The Holy Spirit.",
    updatedAt: "August - September",
    downloadLink: "#"
  },
  {
    resourcesImg: resourcesCoverImg,
    title: "The Culture of Success",
    brief: "A continuation of the teaching on the Culture of Success.",
    source: "Sunday Devotion",
    ledBy: "Pastor Mucheka",
    fullDescription: "This resource dives deep into the Culture of Success, through the Word of God...",
    updatedAt: "August - September",
    downloadLink: "#"
  }
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

      <div className="ministry_heading overall_container">
        <p className="ministry_theme">Our Resources Archive</p>
        <p className="ministry_tagline">This is the page where you can find all the resources that can help you grow as a Disciple of Christ.</p>
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

      <div className="top_sermons">
      <div className="overall_container">
          <p><strong>NB: Resources notes will be available starting from 20th of October 2025</strong></p>
        </div>
      </div>

      <Footer />

    </div>
  );
};
