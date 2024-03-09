import React from "react";
import "./DynamicAboutCard.css";

export default function DynamicAboutCard({
  imgSrc,
  heading,
  description,
  textColor,
  isImageOnRight = true,
}) {
  return (
    <div className={`card ${isImageOnRight ? "imageRight" : "textRight"}`}>
      {isImageOnRight ? (
        <div className="container">
          <div className="textContainer">
            <h1 className="cardHeading" style={{ color: textColor }}>
              {heading}
            </h1>
            <p className="cardDescription" style={{ color: textColor }}>
              {description}
            </p>
          </div>
          <div className="imageContainer">
            <img className="cardImg" src={imgSrc} alt="About" />
          </div>
        </div>
      ) : (
        <div className="container">
          <div className="imageContainer">
            <img className="cardImg" src={imgSrc} alt="About" />
          </div>
          <div className="textContainer">
            <h1 className="cardHeading" style={{ color: textColor }}>
              {heading}
            </h1>
            <p className="cardDescription" style={{ color: textColor }}>
              {description}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
