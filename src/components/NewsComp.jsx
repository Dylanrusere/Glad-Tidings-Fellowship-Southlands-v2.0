import React from 'react';
import './Components.css';
import { Link } from 'react-router-dom';

// Import images and videos
import youthCampTheme from '../assets/images/eventsCovers/2025 Annual Youth Conference.jpg';
import augConf from '../assets/images/eventsCovers/2025 August Conference.jpg'

// Let's add more images to make the gallery richer
import wedding_img_2 from '../assets/images/newsCover/wedding.jpg';
import wedding_img_3 from '../assets/images/newsCover/wedding.jpg';
import prayer_video from '../assets/videos/news.mp4';

const newsItems = [
  {
    id: '2025-youth-camp-theme-out-venue-confirmed',
    title: '2025 Youth Camp Theme is OUT & venue is CONFIRMED!!!',
    date: 'October 04, 2025',
    status: 'current',
    image: youthCampTheme,
    excerpt: 'The 2025 Youth Camp is officially set! Theme: “Now is the Time — Created for a Purpose, Called for a Mission.” Join us at Tripple Tee Group of Schools in Bindura for a life-transforming experience of faith, purpose, and fellowship!',
    fullContent: `
      The wait is over — the 2025 Youth Camp theme and venue have been revealed!
  
      📖 Theme: “Now is the Time — Created for a Purpose, Called for a Mission”  
      🕊️ Key Scriptures: Ephesians 2:10, 2 Timothy 1:8–9, Matthew 28:19–20, Esther 4:14  
      📍 Venue: Tripple Tee Group of Schools, Bindura
  
      This year’s Youth Camp promises to be a powerful encounter with God. It’s a call to every young believer to rise, embrace their divine purpose, and walk boldly in the mission God has set before them. Expect dynamic sessions filled with worship, impactful teachings, leadership training, and life-changing fellowship moments.
  
      Prepare your heart, gather your friends, and get ready for an unforgettable journey of spiritual awakening and transformation. *Now is the Time!*
    `,
    media: [
      { type: 'image', src: youthCampTheme, alt: '2025 Youth Camp Flyer' },
    ]
  },
  {
    id: 'august-annual-conference-2025-is-ON',
    title: '2025 August Annual Conference is ON!!!',
    date: 'August 09, 2025',
    status: 'past',
    image: augConf,
    excerpt: 'The 2025 August Annual Conference at Yamuranai Primary School, Mufakose is happening now—a powerful time of worship, teaching, and spiritual renewal!',
    fullContent: `
        The 2025 August Annual Conference is in full swing! From August 6th to 10th, 2025, believers have gathered at The Living Rock in Waterfalls for this highly anticipated event.
    
        This year’s theme focuses on spiritual awakening, revival, and deeper fellowship with God. The atmosphere is charged with powerful sermons, impactful worship sessions, and workshops tailored for youth, women, and men. Lives are being renewed, visions are being ignited, and unity among believers is stronger than ever.
    
        If you haven’t joined yet, there’s still time—come and be part of this divine appointment!
      `,
    media: [
      { type: 'image', src: augConf, alt: 'Believers gathered in worship during the conference' },
    ]
  },
  {
    id: 'august-annual-conference-2025',
    title: '2025 August Annual Conference is here!!!',
    date: 'August 06, 2025',
    status: 'past',
    image: augConf,
    excerpt: 'Get ready for the 2025 August Annual Conference at Yamuranai Primary School, Mufakose—a powerful time of worship, teaching, and spiritual renewal!',
    fullContent: `
        Mark your calendars! From August 6th to 10th, 2025, The Living Rock in Waterfalls will host our highly anticipated August Annual Conference.
    
        This year’s theme centers on spiritual awakening, revival, and deeper fellowship with God. Expect powerful sermons, impactful worship sessions, and workshops tailored for youth, women, and men. It will be a time of renewal, vision, and unity among believers.
    
        Come expectant and ready to receive. Invite friends and family—this is more than a conference, it’s a divine appointment!
      `,
    media: [
    ]
  }
];

const getNewsStatus = (newsItem) => {
  if (newsItem.status) {
    return newsItem.status;
  }
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const parseDateString = (dateString) => {
    const [monthStr, dayStr, yearStr] = dateString.split(/[\s,]+/);
    const monthIndex = new Date(Date.parse(monthStr + " 1, 2000")).getMonth();
    return new Date(parseInt(yearStr), monthIndex, parseInt(dayStr));
  };

  const itemStartDate = parseDateString(newsItem.date);
  itemStartDate.setHours(0, 0, 0, 0);

  if (newsItem.endDate) {
    const itemEndDate = parseDateString(newsItem.endDate);
    itemEndDate.setHours(0, 0, 0, 0);

    if (today >= itemStartDate && today <= itemEndDate) {
      return 'ongoing';
    }
  }
  if (itemStartDate < today) {
    return 'past';
  } else if (itemStartDate.getTime() === today.getTime()) {
    return 'current';
  } else {
    return 'future';
  }
};

export const NewsComp = () => {
  return (
    <div className='news_comp_section'>
      <div className="overall_container">
        <p className="overall_headings news_comp">News & Updates</p>
        <p className="news_comp_par">
          Stay connected with everything happening at Glad Tidings Fellowship Southlands. From upcoming events and special services to ministry highlights and church announcements — this is your go-to space for the latest updates. We believe in keeping our church family informed, inspired, and involved. Be sure to check back regularly so you don’t miss out on what God is doing in our midst!
        </p>
        <div className="news-section overall_container">
          <div className="news-grid">
            {newsItems.map(news => {
              const statusClass = news.status || getNewsStatus(news);
              return (
                <Link to={`/news/${news.id}`} key={news.id} className="news-card-link">
                  <div className={`news-card ${statusClass}`}>
                    <img src={news.image} alt={news.title} className="news-image" />
                    <div className="news-content">
                      <h3 className="news-title">{news.title}</h3>
                      <p className="news-date">
                        {news.date}
                        {news.endDate && ` - ${news.endDate}`}
                      </p>
                      <p className={`news-status ${statusClass}`}>{statusClass.charAt(0).toUpperCase() + statusClass.slice(1)}</p>
                      <p className="news-excerpt">{news.excerpt}</p>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  )
};
