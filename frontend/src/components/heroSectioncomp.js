import * as React from 'react';
import { Box, Stack, Grid , Typography} from '@mui/material';
import HeroSectionImg from '../assets/heroSectionImg.png' ;
import HeroTextcomp from './heroTextcomp';
import "./heroSectioncomp.css";

export default function HeroSectioncomp() {
  return <div className="hero" >
  <div className="heroContainer">
    <div className="heroContent">
      <h1 className="heroTopic">From Vision to Vows: Celebrate Love in Style with Us.</h1>
      <h3 className="heroTopic2">From Vision to Vows: Celebrate Love in Style with Us.</h3>    
      <h3 className="heroTopic2">Say 'Yes!' to Stress-Free Wedding Planning</h3>    
      <br/>
      <HeroTextcomp />
    </div>
      
    <div>
      <img src={HeroSectionImg} />
    </div>
  </div>
  <div></div>

  </div>;

}
