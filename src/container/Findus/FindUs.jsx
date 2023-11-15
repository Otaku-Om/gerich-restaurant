import React from 'react';
import { images } from "../../constants";
import { SubHeading } from "../../components";

const FindUs = () => (
  <div className='app__wrapper section__padding app__bg' id='contact'>
    <div className="app__wrapper_info">
      <SubHeading title="Contact" />
      <h1 className="headtext__cormorant">Find Us</h1>
      <p className="p__opensans" style={{ margin: "3rem 0 2rem", color: "#AAA" }}>Lane Ends Bungalow, Whatcroft Hall Lane, Rudheath, CW9 7SG</p>
      <p className="p__cormorant" style={{ color: "#DCCA87", marginBottom: "2rem"}}>Opening Hours</p>

      <p className="p__opensans" style={{ marginBottom: "0.8rem"}}>Mon - Fri: 10:00 am - 02:00 am</p>
      <p className="p__opensans">Sat - Sun: 10:00 am - 03:00 am</p>

      <button type="button" className='custom__button' style={{ marginTop: "2rem" }}>Visit Us</button>

    </div>

    <div className="app__wrapper_img">
      <img src={images.findus} alt="findus" />
    </div>
    
  </div>
);

export default FindUs;
