import React from 'react';
import { data, images } from "../../constants";
import { SubHeading } from "../../components";

import './Laurels.css';

const AwardCard = ({award: {title, imgUrl, subtitle}}) => (
  <div className="laurels-awards-card">
    <img src={imgUrl} alt="awards" />
    <div className="laurels-awards-card-content">
      <p className="p__cormorant" style={{ color: "#DCCA87" }}>{title}</p>
      <p className="p__opensans" style={{ color: "#AAA" }}>{subtitle}</p>
    </div>
  </div>
);

const Laurels = () => (
  <div className='app__wrapper section__padding app__bg' id='awards'>
    <div className="app__wrapper_info">
      <SubHeading title="Awards & recognition" />
      <h1 className="headtext__cormorant">Our Laurels</h1> 
      <div className="laurels-awards">
        {data.awards.map((award, index) => (
          <AwardCard award={award} key={award.title + index} />
        ))}
      </div>
    </div>

    <div className="app__wrapper_img">
      <img src={images.laurels} alt="laurels" />
    </div>
    
  </div>
);

export default Laurels;
