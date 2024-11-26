import React from 'react'
import events from '../videos/events.mp4'

export const Events = () => {
  return (
    <div>
      <div className="video_container">
        <video className='video_background' autoPlay loop muted>
          <source src={events} type="video/mp4" />
        </video>
        <div className="events_head_container">
          <p className="page_headings events_head">our events</p>
        </div>
      </div>
    </div>
  )
}
