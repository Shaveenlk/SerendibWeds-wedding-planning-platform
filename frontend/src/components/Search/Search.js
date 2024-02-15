import React from "react";
import "./Search.css";

import img1 from "./SearchImages/searchImg1.jpg";
import img2 from "./SearchImages/searchImg2.jpg";
import img3 from "./SearchImages/searchImg3.jpg";
import img4 from "./SearchImages/searchImg4.jpg";
import img5 from "./SearchImages/searchImg5.jpg";
import img6 from "./SearchImages/searchImg6.jpg";
import imgSearch from "./SearchImages/search.svg";


const serachData = [
  {
    id: 1,
    img: img1,
    title: "GEORGE & TINA",
    date: "20/12/2019",
    venue: "Hilton",
    Theme: "Nature",
  },
  {
    id: 2,
    img: img2,
    title: "LIAM & SARAH",
    date: "20/12/2019",
    venue: "Hilton",
    Theme: "Nature",
  },
  {
    id: 3,
    img: img3,
    title: "SANDARU & JANET",
    date: "20/12/2019",
    venue: "Hilton",
    Theme: "Nature",
  },
  {
    id: 4,
    img: img4,
    title: "RUWAN & SAMADHI",
    date: "20/12/2019",
    venue: "Hilton",
    Theme: "Nature",
  },
  {
    id: 5,
    img: img5,
    title: "PETER & RUWANI",
    date: "20/12/2019",
    venue: "Hilton",
    Theme: "Nature",
  },
  {
    id: 6,
    img: img6,
    title: "DINAL & DAISY",
    date: "20/12/2019",
    venue: "Hilton",
    Theme: "Nature",
  },
];

const Search = () => {
  return (
    <div className="search">
      <div className="searchBar">
        <input
          type="text"
          placeholder="Search Anything..."
          className="search"
        />
        <img src={imgSearch} alt="" />
      </div>

      <div className="searchResults">
        {serachData.map((details, id) => {
          return (
            <div className="searchDetails" key={id}>
              <div className="searchThumbnail">
                <img src={details.img} alt="" />
              </div>

              <div className="searchContent">
                <div className="searchContentTitle">{details.title}</div>

                <br />

                <div>
                  <span className="searchContentDetails">Date: </span>
                  <span>{details.date}</span>
                </div>

                <div>
                  <span className="searchContentDetails">Venue: </span>
                  <span>{details.venue}</span>
                </div>

                <div>
                  <span className="searchContentDetails">Theme: </span>
                  <span>{details.Theme}</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Search;