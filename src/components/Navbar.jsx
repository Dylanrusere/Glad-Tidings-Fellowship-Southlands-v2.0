import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaEnvelope, FaWhatsapp, FaInstagram, FaFacebook, FaYoutube } from 'react-icons/fa';
import './Navbar.css';
import logo from './images/GTLogo.png';

export const Navbar = () => {
  const [showAboutUs, setShowAboutUs] = useState(false);
  const [showMinistries, setShowMinistries] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false); // State to toggle the hamburger menu

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div>
      <div className="top_menu">
        <Link>
          <FaFacebook />
        </Link>
        <Link>
          <FaInstagram />
        </Link>
        <Link to="https://whatsapp.com/channel/0029Van79H99cDDb2PNgCc1V">
          <FaWhatsapp />
        </Link>
        <Link to="https://youtube.com/@GladTidingsFellowshipSouthland">
          <FaYoutube />
        </Link>
        <Link>
          <FaEnvelope />
        </Link>
      </div>
      <nav className="navbar">
        <div className="navbar-logo">
          <Link to="/"><img src={logo} alt="Church Logo" /></Link>
        </div>

        {/* Navbar Links */}
        <ul className={`navbar-links ${menuOpen ? 'active' : ''}`}>
          <li><Link to="/">Home</Link></li>
          <li
            onMouseEnter={() => setShowAboutUs(true)}
            onMouseLeave={() => setShowAboutUs(false)}
            className="dropdown"
          >
            About Us <span className="toggle-icon">{showAboutUs ? '-' : '+'}</span>
            {showAboutUs && (
              <ul className="dropdown-menu">
                <li><Link to="/about">Our Assembly History</Link></li>
                <li><Link to="/about">Our Leadership</Link></li>
                <li><Link to="/about">Our Ministries</Link></li>
                <li><Link to="/about">Our Mission</Link></li>
              </ul>
            )}
          </li>
          <li
            onMouseEnter={() => setShowMinistries(true)}
            onMouseLeave={() => setShowMinistries(false)}
            className="dropdown"
          >
            Ministries <span className="toggle-icon">{showMinistries ? '-' : '+'}</span>
            {showMinistries && (
              <ul className="dropdown-menu">
                <li><Link to="/children">Children's Church Ministry</Link></li>
                <li><Link to="/choir">Choir</Link></li>
                <li><Link to="/homegroups">Homegroups</Link></li>
                <li><Link to="/ladies">Ladies' Fellowship</Link></li>
                <li><Link to="/men">Men's Fellowship</Link></li>
                <li><Link to="/youth">Youth Ministry</Link></li>
              </ul>
            )}
          </li>
          <li><Link to="/events">Events</Link></li>
          <li><Link to="/sermons">Sermons</Link></li>
          <li><Link to="/resources">Resources</Link></li>
          <li><Link to="/gallery">Gallery</Link></li>
          <li><Link to="/news">News & Updates</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>

        {/* Hamburger Icon */}
        <div className="hamburger-icon" onClick={toggleMenu}>
          <span className={menuOpen ? 'bar bar1 open' : 'bar bar1'}></span>
          <span className={menuOpen ? 'bar bar2 open' : 'bar bar2'}></span>
          <span className={menuOpen ? 'bar bar3 open' : 'bar bar3'}></span>
        </div>
      </nav>
    </div>
  );
};
