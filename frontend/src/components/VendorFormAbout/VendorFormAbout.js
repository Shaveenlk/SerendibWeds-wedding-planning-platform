import React from "react";
import DynamicAboutCard from "./DynamicCard/DynamicAboutCard";
import "./VendorAboutCards.css";

export default function VendorFormAbout() {
  return (
    <div>
      <div className="vendorAboutCards">
        <DynamicAboutCard
          imgSrc={
            "https://media-api.xogrp.com/images/96f561ae-344a-41ed-98e8-1c24856977d9~rs_480.h"
          }
          heading={"Boost your business to the next level"}
          description={
            "Skyrocket yourbusiness with diverse services, streamlined operations, and innovative marketing for unparalleled success in the competitive industry."
          }
          textColor={"#333333"}
          isImageOnRight={true}
        />
      </div>
      <div className="vendorAboutCards">
        <DynamicAboutCard
          imgSrc={
            "https://images.pexels.com/photos/20432992/pexels-photo-20432992/free-photo-of-funchal-at-madeira.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          }
          heading={"Reach out to customers more than ever before"}
          description={
            "Connect with your customers on a whole new level, surpassing all previous outreach efforts and creating stronger, lasting relationships."
          }
          textColor={"#333333"}
          isImageOnRight={false}
        />
      </div>
      <div className="vendorAboutCards">
        <DynamicAboutCard
          imgSrc={
            "https://images.pexels.com/photos/313707/pexels-photo-313707.jpeg?auto=compress&cs=tinysrgb&w=600"
          }
          heading={"Manage everything in just a few clicks"}
          description={
            "Streamline your tasks effortlessly with just a few clicks, simplifying your management process for ultimate efficiency."
          }
          textColor={"#333333"}
          isImageOnRight={true}
        />
      </div>
    </div>
  );
}
