import React from "react";
import { LatestSermonsCard } from "../components/Props/LatestSermonsCard"; // Import the reusable card component
import sermonOne from "../assets/images/home-1.jpg";
import { Link } from "react-router-dom";
import { FaFolder } from "react-icons/fa";
import sermonsCover from "../assets/sermonsNotes/sermons-cover.jpg";

export const LatestSermons = () => {
  const sermons = [
    {
      imageSrc: sermonsCover,
      heading: "Tithe - teaching",
      preacher: "Pastor L. Mucheka",
      date: "Sun, 07 September 2025",
      link: 'https://whatsapp.com/channel/0029Van79H99cDDb2PNgCc1V'
    },
    {
      imageSrc: sermonsCover,
      heading: "The Spirit of Forgiveness",
      preacher: "Pastor L. Mucheka",
      date: "Sun, 31 August 2025",
      link: 'https://whatsapp.com/channel/0029Van79H99cDDb2PNgCc1V'
    },
    {
      imageSrc: sermonsCover,
      heading: "What are you giving God for him to work in your life?",
      preacher: "Pastor L. Mucheka",
      date: "Sun, 24 August 2025",
      link: 'https://whatsapp.com/channel/0029Van79H99cDDb2PNgCc1V'
    }
  ];
  

  return (
    <div className="latest_sermons_big_container">
      <div className="overall_container">
        <p className="overall_headings latest_sermons_head">Latest Sermons</p>
        <p className="latest_sermon_sub_par">
          These are the finest Latest Sermons from three(3) weeks ago, if you want
          a message from beyond three weeks, please feel free to visit Our Sermons
          Archive. <br />
          <span>Be Blessed</span>
        </p>
        <div className="latest_sermons_grid_container">
          {sermons.slice(0, 3).map((sermon, index) => (
            <LatestSermonsCard
              key={index} // Use index as key to avoid manual id updates
              imageSrc={sermon.imageSrc}
              heading={sermon.heading}
              preacher={sermon.preacher}
              date={sermon.date}
              content={sermon.content}
              link={sermon.link}
            />
          ))}
        </div>


        <Link to="sermons" className="sermon_archive_archive sermons_archives"> <span><FaFolder className="folder" /></span>Our Sermons Archive</Link>

      </div>
    </div>
  );
};
