import React, { useState, useEffect } from 'react';
import { FaArrowUp } from 'react-icons/fa';
import homegroups_bg from '../assets/videos/weekly_programs.mp4';
import { ContactComp } from '../components/ContactComp';
import { Footer } from '../components/Footer';
import prayer_fasting from '../assets/images/newsCover/JulyWeekOfPrayer.png';
import july06 from '../assets/images/sermonsCovers/sundaySermon 06.07.25.png';
import laah from '../assets/images/newsCover/manu.jpg';
// The NewsModal component is no longer needed, so we remove it.
// If it was in a separate file, you can delete that file too.

export const News = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showIcon, setShowIcon] = useState(false);
  // Removed: showModal, selectedNews states

  const handleScroll = () => {
    const scrollTop = window.pageYOffset;
    const docHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrollPercent = (scrollTop / docHeight) * 100;

    setScrollProgress(scrollPercent);
    setShowIcon(scrollTop > 100);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Removed: openModal and closeModal functions

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Dummy news data with 'date' and optional 'endDate' for ongoing events
  // I've kept the dates relative to today (July 8, 2025) for accurate 'status' display.
  // The 'fullContent' field is now redundant if you only display 'excerpt'.
  // You might want to combine 'excerpt' and 'fullContent' into a single 'description' field
  // or simply make 'excerpt' longer. For now, I'll keep them separate but only display excerpt.
  const newsItems = [
    {
      id: 1,
      title: 'Emmanuel & Lovejoy\'s Wedding',
      date: 'June 20, 2025', // Future event
      status: 'future', // Manually set status
      image: laah,
      excerpt: 'We are overjoyed to announce the upcoming wedding of Brother Emmanuel and Sister Lovejoy on Saturday, July 19, 2025, at the Living Rock in Waterfalls! This marks a historic moment as it will be our first white wedding held at our church.',
    },
    {
      id: 2,
      title: 'Week of Prayer & Fasting',
      date: 'July 6, 2025',
      status: 'past', // Manually set status for clarity as of today
      image: prayer_fasting,
      excerpt: ' As a response to God`s word on Sunday July 6, 2025, we dedicated ourselves to a powerful week of prayer and fasting, from July 6th to July 12th, 2025',
    },
    {
      id: 3,
      title: 'New Sermon Series: "Wait & See What I Will Do to Pharaoh"',
      date: 'July 6, 2025', // Past event
      status: 'past', // Manually set status
      image: july06,
      excerpt: 'On Sunday, July 6, 2025, Pastor Mucheka began a compelling new sermon series titled "Wait & See What I Will Do to Pharaoh," drawn from the book of Exodus.',
    }
  ];

  // Helper function to determine news status. (This remains the same)
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

  return (
    <div>
      <div
        className="scroll-to-top"
        onClick={scrollToTop}
        style={{
          background: `conic-gradient(#000066 ${scrollProgress}%, #00006693 ${scrollProgress}%)`,
          opacity: showIcon ? 1 : 0,
          pointerEvents: showIcon ? 'auto' : 'none'
        }}
      >
        <FaArrowUp className="arrow-icon" />
      </div>

      <div className="video_container">
        <video className='video_background' autoPlay loop muted>
          <source src={homegroups_bg} type="video/mp4" />
        </video>

        <div className="events_head_container">
          <p className="page_headings events_head">news & updates</p>
        </div>
      </div>

      <div className="ministry_heading overall_container">
        <p className="ministry_theme">Latest News and Updates from our Local Church</p>
      </div>

      {/* News Section */}
      <div className="news-section overall_container">
        <div className="news-grid">
          {newsItems.map(news => {
            const statusClass = news.status || getNewsStatus(news);
            return (
              <div key={news.id} className={`news-card ${statusClass}`}>
                <img src={news.image} alt={news.title} className="news-image" />
                <div className="news-content">
                  <h3 className="news-title">{news.title}</h3>
                  <p className="news-date">
                    {news.date}
                    {news.endDate && ` - ${news.endDate}`}
                  </p>
                  <p className={`news-status ${statusClass}`}>{statusClass.charAt(0).toUpperCase() + statusClass.slice(1)}</p>
                  <p className="news-excerpt">{news.excerpt}</p>
                  {/* Removed the "Read More" button */}
                </div>
              </div>
            );
          })}
        </div>
      </div>
      {/* End News Section */}

      {/* Removed the NewsModal component */}

      <ContactComp />
      <Footer />
    </div>
  );
};