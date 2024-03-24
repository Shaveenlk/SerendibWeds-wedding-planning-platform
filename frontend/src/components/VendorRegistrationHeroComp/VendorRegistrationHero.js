import React from "react";
import "./VendorRegistrationHero.css";

export default function VendorRegistrationHero() {
  return <div className="hero" >
  <div class="heroContainerVendor">
    <div class="heroContent">
      <h1 class="heroTopic">Looking to grow your business?</h1>  
      <br/>
      <p>
          SerendibWeds is your comprehensive platform for seamlessly expanding your vendor businesses.
           Whether you're catering to a small intimate celebration or a large wedding event, we've got you covered. 
           Simplify your client acquisition process, making connecting with couples for your wedding services easier than 
           ever before!</p>

           <a href="#form">
           <button className="vendorformbutton">Join Us</button>
           </a>
    </div>
    <div>
      <img src="https://images.pexels.com/photos/1128783/pexels-photo-1128783.jpeg?auto=compress&cs=tinysrgb&w=600" />
    </div>
  </div>
  <div></div>

  </div>;
}
