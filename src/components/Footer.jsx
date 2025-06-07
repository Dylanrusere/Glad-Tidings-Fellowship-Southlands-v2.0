import React from 'react';
import './Components.css';
import logo from '../assets/images/footer_logo.png';
import {  FaMapMarkerAlt, FaClock, FaTiktok } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { FaEnvelope, FaWhatsapp, FaInstagram, FaFacebook, FaYoutube } from 'react-icons/fa';

export const Footer = () => {
  return (
    <div className="footer_container">
        <div className="footer_grid_container">
            <div className="social_media_link none">
                <img src={logo} alt="footer_logo" className='footer_logo' />
                <div className="footer_social_media_links">
                            <Link to="https://whatsapp.com/channel/0029Van79H99cDDb2PNgCc1V">
                            <FaWhatsapp />
                            </Link>
                            <Link>
                            <FaFacebook />
                            </Link>
                            <Link>
                            <FaInstagram />
                            </Link>
                            <Link to="https://youtube.com/@GladTidingsFellowshipSouthland">
                            <FaYoutube />
                            </Link>
                            <Link>
                            <FaTiktok />
                            </Link>
                </div>
            </div>
            <div className="footer_contact">
                <p className="footer_heads">Contact</p>
                <div className="footer_contact_links">
                    <a href='a' className="footer_link"><span><FaMapMarkerAlt/></span> 7417 Southlands Park, Waterfalls, Hre</a>
                    <a href='a' className="footer_link"><span><FaClock/></span> Service Time: 0800hrs</a>
                    <a href='a' className="footer_link"><span><FaEnvelope/></span> Send Us a Message</a>
                    <a href='a' className="footer_link"><span><i className="fa-solid fa-phone"></i></span> +263 77 000 0000</a>
                </div>
            </div>
            <div className="social_media_link to_be_none">
                <img src={logo} alt="footer_logo" className='footer_logo' />
                <div className="footer_social_media_links">
                            <Link to="https://whatsapp.com/channel/0029Van79H99cDDb2PNgCc1V">
                            <FaWhatsapp />
                            </Link>
                            <Link>
                            <FaFacebook />
                            </Link>
                            <Link>
                            <FaInstagram />
                            </Link>
                            <Link to="https://youtube.com/@GladTidingsFellowshipSouthland">
                            <FaYoutube />
                            </Link>
                            <Link to="">
                            <FaTiktok />
                            </Link>
                </div>
            </div>
            <div className="footer_quick_links">
                <p className="footer_heads">Quick Links</p>
                <div className="footer_quick_links_links">
                    <a href='a' className="footer_quick_link">Get In Touch</a>
                    <a href='a' className="footer_quick_link">Visit Us!</a>
                    <a href='./sermons' className="footer_quick_link">Sermons</a>
                    <a href='a' className="footer_quick_link">Submit A Prayer Request</a>
                </div>
            </div>
        </div>
        <div className="bottom_footer_container">
            <p className='copright'>© 2025 Glad Tidings Fellowship Southlands</p>
            <p className='all_rights'>All Rights Reserved</p>
            <a className="it_team" href=''>Designed & Developed by Southlands Glad Tidings Media & IT Team</a>
        </div>
    </div>
  )
};