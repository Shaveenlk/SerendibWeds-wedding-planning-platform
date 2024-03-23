import React, { useEffect, useState } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeart as solidHeart,
  faHeartBroken as regularHeart,
} from "@fortawesome/free-solid-svg-icons";
import "./Search.css";
import img from "./SearchImages/searchImg1.jpg";
import imgSearch from "./SearchImages/search.svg";
import { useNavigate } from "react-router-dom";
import auth from "../../config/firebase-config";

const Search = () => {
  const navigate = useNavigate();

  const [searchResults, setSearchResults] = useState([]);
  const [searchQuery, setSearchQuery] = useState("wedding");
  const [favorites, setFavorites] = useState([]);
  const firebaseUserId = auth.currentUser?.uid; 

  useEffect(() => {
      handleSearch();
    fetchfavoriteWeddings();
  }, [firebaseUserId]);

  const handleSearch = () => {
    if (searchQuery.trim() !== "") {
      axios
        .post("http://127.0.0.1:5000/get_top_matches", {
          searchQuery: searchQuery,
        })
        .then((response) => {
          setSearchResults(response.data);
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
        });
    }
  };

  const fetchfavoriteWeddings = async () => {
    // const firebaseUserId = auth.currentUser.uid; // Replace with the actual Firebase user ID
    // Fetch favorites from the backend API
    axios
      .get(
        `http://localhost:8000/api/dreamserach/${firebaseUserId}/pastweddings`
      ) // Update the URL with your backend API endpoint
      .then((response) => {
        setFavorites(response.data);
        console.log(favorites)
      })
      .catch((error) => {
        console.error("Error fetching favorites:", error);
      });
  };

  const handleResultClick = (wedding) => {
    // const weddingId = wedding.metadata.wedding_id;
    // console.log("Clicked on wedding ID:", weddingId);

    // alert("Clicked on: " + wedding.metadata.bride_name + " & " + wedding.metadata.groom_name);
    navigate(`/pastWedding/${wedding.metadata.wedding_id}`);
  };

  const handleFavoriteClick = (event, wedding) => {
    event.stopPropagation();

    // Prevents the handleResultClick from firing when clicking on the favorite button
    // Toggle favorite status

    if (!auth.currentUser) {
      alert("Please login to add to favorites");
      return;
    }

    const isFavorite = Array.isArray(favorites) && favorites.some(
      (favorite) => favorite.wedding_id === wedding.metadata.wedding_id
    );

    if (isFavorite) {
      removeFavorite(wedding);
    } else {
      addFavorite(wedding);
    }
  };

  const addFavorite = (wedding) => {
    // const firebaseUserId = auth.currentUser.uid;
    axios
      .post(
        `http://localhost:8000/api/dreamserach/${firebaseUserId}/pastweddings`,
        {
          // Replace with the actual user ID
          weddingData: {
            wedding_id: wedding.metadata.wedding_id,
          },
        }
      )
      .then((response) => {
        fetchfavoriteWeddings();
      })
      .catch((error) => {
        console.error("Error updating favorite status:", error);
      });
  };

  const removeFavorite = (wedding) => {
    // const firebaseUserId = auth.currentUser.uid; // Replace with the actual Firebase user ID
    // Delete favorites from the backend API
    axios
      .delete(
        `http://localhost:8000/api/dreamserach/${firebaseUserId}/pastweddings`
      ) // Update the URL with your backend API endpoint
      .then((response) => {
        fetchfavoriteWeddings();
      })
      .catch((error) => {
        console.error("Error deleting favorites:", error);
      });
  };

  const handleEnterKeyPress = (event) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div className="search">
      <div className="searchBar">
        <input
          type="text"
          placeholder="Search Anything..."
          className="search"
          // value={searchQuery} // Bind input value to searchQuery state
          onChange={(e) => setSearchQuery(e.target.value)}
          onKeyDown={handleEnterKeyPress}
        />
        {/* <img src={imgSearch} alt="" onClick={handleSearch} type="submit" /> */}
        <button type="submit" className="searchBtn" onClick={handleSearch}>
          <img src={imgSearch} alt="" />
        </button>
      </div>

      <div className="searchResults">
        {searchResults.map((wedding, index) => (
          <div
            className="searchDetails"
            key={index}
            wedding={wedding}
            onClick={() => handleResultClick(wedding)}
          >
            <div className="searchThumbnail">
              <img src={wedding.metadata.main_image} alt="" />
            </div>
            <div className="searchContent">
              <div className="searchContentTitle">
                {wedding.metadata.bride_name} & {wedding.metadata.groom_name}
              </div>
              {/* <br /> */}
              <div>
                <span className="searchContentDetails">Description: </span>
                <span>{wedding.metadata.description}</span>
              </div>
              {/* <br/> */}
              <div>
                <span className="searchContentDetails">Date: </span>
                <span>{wedding.metadata.date}</span>
              </div>
              {/* <br/> */}
              <div>
                <span className="searchContentDetails">Location: </span>
                <span>{wedding.metadata.location}</span>
              </div>
              {/* <br/> */}
              <div>
                <span className="searchContentDetails">Theme: </span>
                <span>{wedding.metadata.theme}</span>
              </div>
              <div
                className={`favoriteBtn ${
                  wedding.favorite ? "favoriteActive" : ""
                }`}
                id={`favoriteBtn_${wedding.metadata.wedding_id}`}
                onClick={(e) => handleFavoriteClick(e, wedding)}
              >
                <FontAwesomeIcon
                  icon={wedding.favorite ? solidHeart : regularHeart}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Search;
