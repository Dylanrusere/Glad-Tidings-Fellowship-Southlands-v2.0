import React from 'react'
import "./Pages.css"

export const About = () => {
  return (
    <div className='about_page'>
      <div className="about_page_hero">
        <div className="about_page_overlay">
          <p className="page_headings about_head">about us</p>
        </div>
      </div>

      <div className="tabs_container">
        <div className="overall_container">
          <p className="tabs">Our Assembly History</p>
          <p className="tabs">Our Leadership</p>
          <p className="tabs">Our Ministries</p>
          <p className="tabs">Our Mission</p>
        </div>
      </div>
    </div>
  )
}
