import React, { useState } from "react";
import "./Gallery.css";

import img1 from "./GalleryImages/galleryImg1.jpg";
import img2 from "./GalleryImages/galleryImg2.jpg";
import img3 from "./GalleryImages/galleryImg3.jpg";
import img4 from "./GalleryImages/galleryImg4.jpg";
import img5 from "./GalleryImages/galleryImg5.jpg";
import img6 from "./GalleryImages/galleryImg6.jpg";
import img7 from "./GalleryImages/galleryImg7.jpg";
import img8 from "./GalleryImages/galleryImg8.jpg";
import img9 from "./GalleryImages/galleryImg9.jpg";
import img10 from "./GalleryImages/galleryImg10.jpg";
import couple from "./GalleryImages/couple-image.jpg"

const imgData = [
  {
    id: 1,
    img: img1,
  },
  {
    id: 2,
    img: img2,
  },
  {
    id: 3,
    img: img3,
  },
  {
    id: 4,
    img: img4,
  },
  {
    id: 5,
    img: img5,
  },
  {
    id: 6,
    img: img6,
  },
  {
    id: 7,
    img: img7,
  },
  {
    id: 8,
    img: img8,
  },
  {
    id: 9,
    img: img9,
  },
  {
    id: 10,
    img: img10,
  },
];

const Gallery = ( {weddingId} ) => {
  const [selectedWedding, setSelectedWedding] = useState(null);

  return (
    <div className="gallery">
      <div className="introSection">
        <div className="mainIntroText">
          {/* <h1 className="weddingCouple">{wedding.metadata.bride_name} & {wedding.metadata.groom_name}</h1> */}
          <h1 className="weddingCouple">Amuka & Dumuka</h1>

          <p className="weddingDetails">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum
            illum repellat ea reprehenderit unde! Placeat provident sequi
            aliquam earum, commodi magni sed quo voluptatem in totam, excepturi
            dolorum perferendis sit.
            {/* {wedding.metadata.description} */}
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Perspiciatis numquam rerum nobis consectetur mollitia maxime fuga
            ipsam? Itaque minima explicabo nemo et, vero quae quia voluptatibus
            ut numquam, tempore laboriosam!
            {/* {wedding.metadata.date} */}
          </p>
        </div>

        <div className="imgBox">
          <img src={
            couple
            /* {wedding.metadata.main_image} */
          } alt="/" />
        </div>
      </div>

      <div className="vendorsSection">
        < h2 className="vendorTitle">Vendors</h2>
        <p>Photography: 
          {/* {wedding.metadata.photographer_videographer} */}
        </p>
        <p>Venue: 
          {/* {wedding.metadata.photographer_videographer} */}
        </p>
        <p>Decorations: 
          {/* {wedding.metadata.location} */}
        </p>
      </div>

      <div className="photoGallery">
        {imgData.map((picture,key) => {
          return (
            <div className="galleryImages" key={key}>
              <img src={
                picture.img
                /* {wedding.metadata.main_image} */
              } alt="" />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Gallery;