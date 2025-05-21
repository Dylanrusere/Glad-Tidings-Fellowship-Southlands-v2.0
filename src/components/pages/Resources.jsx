import React from 'react'
import './Pages.css';

export const Resources = () => {
  return (
    <div>

      <div className="about_page_hero">
        <div className="about_page_overlay">
          <p className="page_headings about_head">resources</p>
        </div>
      </div>

      {/* Head */}
      <div className="ministry_heading">
        <p className="ministry_theme">Raising Children in the Ways of the Lord</p>
        <p className="ministry_tagline">Where Faith, Fun, and Foundations Begin.</p>
        <div className="searchBarContainer">
          <input type="text" className='searchbar' placeholder='Search Resources' />
          <button className='searchBarbtn'>Search</button>
        </div>
      </div>
      
    </div>
  )
}
