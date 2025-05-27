import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { FaEnvelope, FaWhatsapp, FaInstagram, FaFacebook, FaYoutube } from 'react-icons/fa';
import './Navbar.css';
import logo from '../assets/images/GTLogo.png';

export const Navbar = () => {
  const [showMinistries, setShowMinistries] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className='fixed-header'>
      {/* Top Menu with Icons and Button */}
      <div className="top_menu">
        <div className="top_menu-icons">
          <Link><FaFacebook /></Link>
          <Link><FaInstagram /></Link>
          <Link to="https://whatsapp.com/channel/0029Van79H99cDDb2PNgCc1V"><FaWhatsapp /></Link>
          <Link to="https://youtube.com/@GladTidingsFellowshipSouthland"><FaYoutube /></Link>
          <Link><FaEnvelope /></Link>
        </div>
        <Link className="top_menu-button">Give</Link>
      </div>

      {/* Main Navbar */}
      <nav className="navbar">
        <div className="navbar-logo">
          <img src={logo} alt="Church Logo" />
        </div>

        <ul className={`navbar-links ${menuOpen ? 'active' : ''}`}>
          <li><NavLink to="/" className={({ isActive }) => isActive ? 'active' : ''}>Home</NavLink></li>
          <li><NavLink to="/about" className={({ isActive }) => isActive ? 'active' : ''}>About Us</NavLink></li>
          <li
            onMouseEnter={() => setShowMinistries(true)}
            onMouseLeave={() => setShowMinistries(false)}
            className="dropdown"
          >
            Ministries <span className="toggle-icon">{showMinistries ? '-' : '+'}</span>
            {showMinistries && (
              <ul className="dropdown-menu">
                <li><NavLink to="/children">Children's Church Ministry</NavLink></li>
                <li><NavLink to="/choir">Choir</NavLink></li>
                <li><NavLink to="/ladies">Ladies' Fellowship</NavLink></li>
                <li><NavLink to="/men">Men's Fellowship</NavLink></li>
                <li><NavLink to="/youth">Youth Ministry</NavLink></li>
              </ul>
            )}
          </li>
          <li><NavLink to="/homegroups" className={({ isActive }) => isActive ? 'active' : ''}>Homegroups</NavLink></li>
          <li><NavLink to="/events" className={({ isActive }) => isActive ? 'active' : ''}>Events</NavLink></li>
          <li><NavLink to="/sermons" className={({ isActive }) => isActive ? 'active' : ''}>Sermons</NavLink></li>
          <li><NavLink to="/resources" className={({ isActive }) => isActive ? 'active' : ''}>Resources</NavLink></li>
          <li><NavLink to="/gallery" className={({ isActive }) => isActive ? 'active' : ''}>Gallery</NavLink></li>
          <li><NavLink to="/news" className={({ isActive }) => isActive ? 'active' : ''}>News & Updates</NavLink></li>
          <li><NavLink to="/contact" className={({ isActive }) => isActive ? 'active' : ''}>Contact</NavLink></li>
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
