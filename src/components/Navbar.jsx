import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // External CSS file for styling
import logo from './images/GTLogo.png'; // Replace with the actual path to your logo image

export const Navbar = () => {
  const [showAboutUs, setShowAboutUs] = useState(false);
  const [showMinistries, setShowMinistries] = useState(false);

  return (
    <div>
        <div className="top_menu">
            asdh
        </div>
        <nav className="navbar">
            <div className="navbar-logo">
            <Link to="/"><img src={logo} alt="Church Logo" /></Link>
            </div>
            <ul className="navbar-links">
            <li><Link to="/">Home</Link></li>
            <li
                onMouseEnter={() => setShowAboutUs(true)}
                onMouseLeave={() => setShowAboutUs(false)}
                className="dropdown"
            >
                About Us
                {showAboutUs && (
                <ul className="dropdown-menu">
                    <li><Link to="/about/history">Our Assembly History</Link></li>
                    <li><Link to="/about/leadership">Our Leadership</Link></li>
                    <li><Link to="/about/mission">Our Mission</Link></li>
                </ul>
                )}
            </li>
            <li
                onMouseEnter={() => setShowMinistries(true)}
                onMouseLeave={() => setShowMinistries(false)}
                className="dropdown"
            >
                Ministries
                {showMinistries && (
                <ul className="dropdown-menu">
                    <li><Link to="/children">Children's Church Ministry</Link></li>
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
        </nav>
    </div>
  );
};