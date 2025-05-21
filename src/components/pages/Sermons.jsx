import React from 'react';
import sermons from '../assets/videos/sermons.mp4';
import sermonOne from "../assets/images/home-1.jpg";

export const Sermons = () => {
  return (
    <div>
      <div className="video_container">
        <video className='video_background' autoPlay loop muted>
          <source src={sermons} type="video/mp4" />
        </video>
        <div className="events_head_container">
          <p className="page_headings events_head">our sermons</p>
        </div>
      </div>

      {/* Head */}
      <div className="ministry_heading">
        <p className="ministry_theme">Raising Children in the Ways of the Lord</p>
        <p className="ministry_tagline">Where Faith, Fun, and Foundations Begin.</p>
        <div className="searchBarContainer">
          <input type="text" className='searchbar' placeholder='Search by Sermon Name, Date or Month' />
          <button className='searchBarbtn'>Search</button>
        </div>
      </div>

    </div>
  )
}
