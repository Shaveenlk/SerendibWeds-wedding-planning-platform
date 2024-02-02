import React from "react";
import "./Gallery.css";

import img1 from "../../public/Gallery/galleryImg1.jpg/";
import img2 from "../../public/Gallery/galleryImg2.jpg/";
import img3 from "../../public/Gallery/galleryImg3.jpg/";
import img4 from "../../public/Gallery/galleryImg4.jpg/";
import img5 from "../../public/Gallery/galleryImg5.jpg/";
import img6 from "../../public/Gallery/galleryImg6.jpg/";
import img7 from "../../public/Gallery/galleryImg7.jpg/";
import img8 from "../../public/Gallery/galleryImg8.jpg/";
import img9 from "../../public/Gallery/galleryImg9.jpg/";
import img10 from "../../public/Gallery/galleryImg10.jpg/";

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

const Gallery = () => {
  return (
    <div className="gallery">
      <div className="introSection">
        <div className="mainIntroText">
          <h1 className="weddingCouple">GEORGE & TINA</h1>
          <p className="weddingDetails">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum
            illum repellat ea reprehenderit unde! Placeat provident sequi
            aliquam earum, commodi magni sed quo voluptatem in totam, excepturi
            dolorum perferendis sit.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Perspiciatis numquam rerum nobis consectetur mollitia maxime fuga
            ipsam? Itaque minima explicabo nemo et, vero quae quia voluptatibus
            ut numquam, tempore laboriosam!
          </p>
        </div>

        <div className="imgBox">
          <img src="/couple-image.jpg" alt="/" />
        </div>
      </div>

      <div className="vendorsSection">
        < h2 className="vendorTitle">Vendors</h2>
        <p>Photography: </p>
        <p>Venue: </p>
        <p>Decorations: </p>
      </div>

      <div className="photoGallery">
        {imgData.map((picture,key) => {
          return (
            <div className="galleryImages" key={key}>
              <img src={picture.img} alt="" />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Gallery;