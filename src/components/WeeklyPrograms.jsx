import React, { useState } from 'react';
import { FaCalendarAlt, FaClock, FaMapMarkerAlt } from 'react-icons/fa';

export const WeeklyPrograms = () => {
  const [activeDay, setActiveDay] = useState(null);

  const toggleDay = (day) => {
    setActiveDay(prevDay => (prevDay === day ? null : day));
  };

  const data = [
    {
      day: 'Sunday',
      programs: [
        {
          name: 'Main Service',
          time: '0800hrs - 1100hrs',
          location: 'Local Church',
          link: 'https://maps.app.goo.gl/BD9CNsuk57hFAyz5A',
        },
        {
          name: 'Children`s Church Service',
          time: '0730hrs - 0830hrs',
          location: 'Local Church',
          link: 'https://maps.app.goo.gl/BD9CNsuk57hFAyz5A',
        },
        {
          name: 'Choir Practise',
          time: '1130hrs - 1330hrs',
          location: 'Local Church',
          link: 'https://maps.app.goo.gl/BD9CNsuk57hFAyz5A',
        },
        {
          name: 'Youth Session',
          time: '1400hrs - 1500hrs',
          location: 'Local Church',
          link: 'https://maps.app.goo.gl/BD9CNsuk57hFAyz5A',
        },
      ],
    },
    {
      day: 'Tuesday',
      programs: [
        {
          name: 'Home Groups',
          time: '1830hrs - 1930hrs',
          location: 'Nearby Home Group',
          link: '#',
        },
      ],
    },
    {
      day: 'Wednesday',
      programs: [
        {
          name: 'Ladies Meeting',
          time: '1300hrs - 1500hrs',
          location: 'Local Church',
          link: 'https://maps.app.goo.gl/BD9CNsuk57hFAyz5A',
        },
      ],
    },
    {
      day: 'Thursday',
      programs: [
        {
          name: 'Kingdoms',
          time: '1830hrs - 1930hrs',
          location: 'Local Church',
          link: 'https://maps.app.goo.gl/BD9CNsuk57hFAyz5A',
        },
      ],
    },
    {
      day: 'Friday',
      programs: [
        {
          name: 'Men`s Fellowship Meeting',
          time: '1830hrs - 1930hrs',
          location: 'Local Church',
          link: 'https://maps.app.goo.gl/BD9CNsuk57hFAyz5A',
        },
      ],
    },
  ];

  return (
    <div>
        <div className="overall_container">
            <p className="weekly_programs_heading overall_headings">Our Weekly Programs</p>
            <div className="timeline_container">
              {data.map((entry, index) => (
                <div key={index} className="timeline_item">
                  <div className="timeline_left">
                    <div
                      className={`timeline_dot ${activeDay === entry.day ? 'active' : ''}`}
                      onClick={() => toggleDay(entry.day)}
                    ></div>
                    {index < data.length - 1 && <div className="timeline_line"></div>}
                  </div>
                  <div className="timeline_content" onClick={() => toggleDay(entry.day)}>
                    <div className="timeline_day">{entry.day}</div>
                    {activeDay === entry.day && (
                      <div className="weekly_programs_grid_container">
                        {entry.programs.map((program, i) => (
                          <div key={i} className="program_container">
                            <p className="program_head">
                              <span><FaCalendarAlt /></span> {program.name}
                            </p>
                            <p className="program_time">
                              <span><FaClock /></span> {program.time}
                            </p>
                            <p className="program_location">
                              <span><FaMapMarkerAlt /></span> {program.location}
                            </p>
                            <a href={program.link} className="program_get_directions">
                              Need Directions?
                            </a>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
        </div>
    </div>
  );
};
