import React from "react";
import { LatestSermonsCard } from "../components/Props/LatestSermonsCard"; // Import the reusable card component
import sermonOne from "../images/home-1.jpg";
import { Link } from "react-router-dom";
import { FaFolder } from "react-icons/fa";
import tenNov from "../images/sermonsCovers/11.11.24.png";

export const LatestSermons = () => {
  const sermons = [
    {
      id: 1,
      imageSrc: sermonOne,
      heading: "Stand Your Ground",
      preacher: "Pastor L. Mucheka",
      date: "Sun, 24 November 2024",
      link: "/sermon/spirit-of-gratitude",
    },
    {
      id: 2,
      imageSrc: sermonOne,
      heading: "You have Value",
      preacher: "Mr Machiridza",
      date: "Sun, 17 November 2024",
      link: "/sermon/spirit-of-gratitude",
    },
    {
      id: 3,
      imageSrc: tenNov,
      heading: "Spirit of Gratitude",
      preacher: "Pastor L. Mucheka",
      date: "Sun, 10 November 2024",
      link: "/sermon/spirit-of-gratitude",
    },

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
            {sermons.map((sermon) => (
              <LatestSermonsCard
                key={sermon.id}
                imageSrc={sermon.imageSrc}
                heading={sermon.heading}
                date={sermon.date}
                content={sermon.content}
                link={sermon.link}
              />
            ))}
          </div>
          
          <button className="sermons_archives"><Link className="sermon_archive_archive"> <span><FaFolder className="folder"/></span>Our Sermons Archive</Link></button>

        </div>
    </div>
  );
};
