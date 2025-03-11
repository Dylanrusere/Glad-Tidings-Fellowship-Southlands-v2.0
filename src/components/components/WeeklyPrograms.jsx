import React from 'react';
import weeklyPrograms from '../videos/weekly_programs.mp4';
import './Components.css';
import {  FaMapMarkerAlt, FaCalendarAlt, FaClock } from 'react-icons/fa'

export const WeeklyPrograms = () => {
  return (
    <div>
        <div className="weekly_programs_container_bg">
          <video className='home_video_background' autoPlay loop muted>
            <source src={weeklyPrograms} type="video/mp4" />
          </video>
          <div className="weekly_programs_container">
            <div className="overall_container">
                <p className="overall_headings weekly_programs_heading">Our Weekly Programs</p>
                <div className="weekly_programs_grid_container">
                    <div className="program_container">
                        <p className="program_day">Sunday</p>
                        <p className="program_head"><span><FaCalendarAlt/></span>Children`s Church Meeting</p>
                        <p className="program_time"><span><FaClock/></span>0700hrs - 0830hrs</p>
                        <p className="program_location"><span><FaMapMarkerAlt/></span>Local Church</p>
                        <a href='/events' className="program_get_directions">Need Directions?</a>
                    </div>
                    <div className="program_container">
                        <p className="program_day">Sunday</p>
                        <p className="program_head"><span><FaCalendarAlt/></span>Main Church Service</p>
                        <p className="program_time"><span><FaClock/></span>0730hrs - 1100hrs</p>
                        <p className="program_location"><span><FaMapMarkerAlt/></span>Local Church</p>
                        <a href='as' className="program_get_directions">Need Directions?</a>
                    </div>
                    <div className="program_container">
                        <p className="program_day">Sunday</p>
                        <p className="program_head"><span><FaCalendarAlt/></span>Choir Practise</p>
                        <p className="program_time"><span><FaClock/></span>1130hrs - 1300hrs</p>
                        <p className="program_location"><span><FaMapMarkerAlt/></span>Local Church</p>
                        <a href='as' className="program_get_directions">Need Directions?</a>
                    </div>
                    <div className="program_container">
                        <p className="program_day">Sunday</p>
                        <p className="program_head"><span><FaCalendarAlt/></span>Youth Meeting</p>
                        <p className="program_time"><span><FaClock/></span>1400hrs - 1500hrs</p>
                        <p className="program_location"><span><FaMapMarkerAlt/></span>Local Church</p>
                        <a href='as' className="program_get_directions">Need Directions?</a>
                    </div>
                    <div className="program_container">
                        <p className="program_day">Wednesday</p>
                        <p className="program_head"><span><FaCalendarAlt/></span>Ladies Fellwship Meetings</p>
                        <p className="program_time"><span><FaClock/></span>1300hrs - 1500hrs</p>
                        <p className="program_location"><span><FaMapMarkerAlt/></span>Local Church</p>
                        <a href='as' className="program_get_directions">Need Directions?</a>
                    </div>
                    <div className="program_container">
                        <p className="program_day">Thursday</p>
                        <p className="program_head"><span><FaCalendarAlt/></span>Kingdoms</p>
                        <p className="program_time"><span><FaClock/></span>1830hrs - 1930hrs</p>
                        <p className="program_location"><span><FaMapMarkerAlt/></span>Local Church</p>
                        <a href='as' className="program_get_directions">Need Directions?</a>
                    </div>
                </div>
            </div>
          </div>
        </div>
    </div>
  )
}
