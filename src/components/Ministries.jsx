import React from "react";
import { MinistriesCard } from "../components/Props/MinistriesCard"; // Import the reusable card component
import sermonOne from "../assets/images/home-1.jpg";

export const Ministries = () => {
  const ministries = [
    {
      id: 1,
      imageSrc: sermonOne,
      ministry: "Children`s Church Ministry",
      catchPhrase: "Raising Children in the Ways of the Lord",
      theme: "Theme Scripture",
      link: "/children",
    },
    {
        id: 2,
        imageSrc: sermonOne,
        ministry: "Choir",
        catchPhrase: "When His praises goes up, His Glory comes down.",
        theme: "Theme Scripture",
        link: "/choir",
    },
    {
        id: 3,
        imageSrc: sermonOne,
        ministry: "Ladies` Fellowship",
        catchPhrase: "Catch Phrase",
        theme: "Theme Scripture",
        link: "/ladies",
    },
    {
        id: 4,
        imageSrc: sermonOne,
        ministry: "Men`s Fellowship",
        catchPhrase: "Raising Mighty men of Valour.",
        theme: "Theme Scripture",
        link: "/men",
    },
    {
        id: 5,
        imageSrc: sermonOne,
        ministry: "Youth Ministry",
        catchPhrase: "Raising young men and women well equipped with God`s word.",
        theme: "Theme Scripture",
        link: "/youth",
    },

  ];

  return (
    <div className="latest_sermons_big_container">
        <div className="overall_container">
          <p className="overall_headings latest_sermons_head">Our Ministries</p>

          <div className="latest_sermons_grid_container">
            {ministries.map((ministry) => (
              <MinistriesCard
                key={ministry.id}
                imageSrc={ministry.imageSrc}
                ministry={ministry.ministry}
                catchPhrase={ministry.catchPhrase}
                theme={ministry.theme}
                link={ministry.link}
              />
            ))}
          </div>
        </div>
    </div>
  );
};
