import React from "react";
import { LatestSermonsCard } from "../components/Props/LatestSermonsCard"; // Import the reusable card component
import sermonOne from "../assets/images/home-1.jpg";
import { Link } from "react-router-dom";
import { FaFolder } from "react-icons/fa";
import tenNov from "../assets/images/sermonsCovers/11.11.24.png";

export const LatestSermons = () => {
  const sermons = [
    {
      id: 1,
      imageSrc: tenNov,
      heading: "The Lord has not forgetten you - Part 2",
      preacher: "Pastor L. Mucheka",
      date: "Sun, 15 December 2024",
      link: "https://youtube.com/GladTidingsFellowshipSouthland",
    },
    {
      id: 2,
      imageSrc: tenNov,
      heading: "The Lord has not forgetten you",
      preacher: "Pastor L. Mucheka",
      date: "Sun, 08 December 2024",
      link: "https://youtube.com/GladTidingsFellowshipSouthland",
    },
    {
      id: 3,
      imageSrc: tenNov,
      heading: "Children",
      preacher: "Children`s Church",
      date: "Sun, 01 December 2024",
      link: "https://youtube.com/GladTidingsFellowshipSouthland",
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
                preacher={sermon.preacher}
                date={sermon.date}
                content={sermon.content}
                link={sermon.link}
              />
            ))}
          </div>
          
          <Link to="sermons" className="sermon_archive_archive sermons_archives"> <span><FaFolder className="folder"/></span>Our Sermons Archive</Link>

        </div>
    </div>
  );
};
