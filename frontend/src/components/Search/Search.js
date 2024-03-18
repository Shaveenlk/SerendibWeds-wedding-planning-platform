import React, { useState, useEffect } from "react";
import axios from 'axios';
import "./Search.css";
import img from "./SearchImages/searchImg1.jpg"
import imgSearch from "./SearchImages/search.svg";
import { useNavigate } from "react-router-dom";



const Search = () => {
  const navigate = useNavigate();

  const [searchResults, setSearchResults] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = () => {
    // Send search query to Flask server only when image is clicked
    if (searchQuery.trim() !== "") {
      axios.post("http://127.0.0.1:5000/get_top_matches", {
        searchQuery: searchQuery,
      })
      .then(response => {
        setSearchResults(response.data);
      })
      .catch(error => {
        console.error("Error fetching data:", error);
      });
    }
  };

  const handleResultClick = (wedding) => {
    const weddingId = wedding.metadata.wedding_id; // Ensure _id is defined
    console.log("Clicked on wedding ID:", wedding.metadata.wedding_id); // Check weddingId in console

    alert("Clicked on: " + wedding.metadata.bride_name + " & " + wedding.metadata.groom_name);
    navigate(`/pastWedding`); 

    

    // axios.post(`http://localhost:8500/api/eventdetails/${weddingId}`, {
    //   weddingId: weddingId,
    // })
    // .then(response => {
    //   console.log("wedding details : ", response.data)
    //   navigate(`/pastWedding`); 
    //   // navigate(`/pastWedding/${weddingId}`); 
    // })
    // .catch(error => {
    //   console.error("Error getting wedding details : ", error);
    // });
};


  return (
    <div className="search">
    <div className="searchBar">
      <input 
        type="text" 
        placeholder="Search Anything..." 
        className="search" 
        value={searchQuery} // Bind input value to searchQuery state
        onChange={(e) => setSearchQuery(e.target.value)}
        />
        <img src={imgSearch} alt="" onClick={handleSearch} />
    </div>

    <div className="searchResults">
        {searchResults.map((wedding, index) => (
          <div className="searchDetails" key={index} wedding={wedding} onClick={() => handleResultClick(wedding)}>
            <div className="searchThumbnail">
              <img src={img} alt="" />
            </div>
            <div className="searchContent">
              <div className="searchContentTitle">{wedding.metadata.bride_name} & {wedding.metadata.groom_name}</div>
              <br />
              <div>
                <span className="searchContentDetails">Description: </span>
                <span>{wedding.metadata.description}</span>
              </div>
              <div>
                <span className="searchContentDetails">Date: </span>
                <span>{wedding.metadata.date}</span>
              </div>
              <div>
                <span className="searchContentDetails">Location: </span>
                <span>{wedding.metadata.location}</span>
              </div>
              <div>
                <span className="searchContentDetails">Theme: </span>
                <span>{wedding.metadata.theme}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
  </div>
  );
};

export default Search;