import React from 'react'
import events from '../assets/videos/events.mp4'

export const GreatCommission = () => {
  return (
    <div>
      <div className="video_container">
        <video className='video_background' autoPlay loop muted>
          <source src={events} type="video/mp4" />
        </video>
        <div className="events_head_container">
          <p className="page_headings events_head">great commission</p>
        </div>
      </div>
    </div>
  )
}
