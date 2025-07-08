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
      theme: "Proverbs 22:6",
      link: "/children",
    },
    {
        id: 2,
        imageSrc: sermonOne,
        ministry: "Choir",
        catchPhrase: "Making a Joyful Noise Unto the Lord",
        theme: "Psalms 100:1",
        link: "/choir",
    },
    {
        id: 3,
        imageSrc: sermonOne,
        ministry: "Ladies` Fellowship",
        catchPhrase: "Women of Purpose, Power & Grace",
        theme: "Proverbs 31:10",
        link: "/ladies",
    },
    {
        id: 4,
        imageSrc: sermonOne,
        ministry: "Men`s Fellowship",
        catchPhrase: "Raising Mighty men of Valor.",
        theme: "Judges 6:12",
        link: "/men",
    },
    {
        id: 5,
        imageSrc: sermonOne,
        ministry: "Youth Ministry",
        catchPhrase: "Raising young men and ladies well equipped with God`s word.",
        theme: "1 John 2:14",
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
