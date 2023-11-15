import React from 'react';
import { images } from "../../constants";

import './Chef.css';
import { SubHeading } from '../../components';

const Chef = () => (
  <div className='app__bg app__wrapper section__padding'>

    <div className="app__wrapper_img app__wrapper_img-reverse">
      <img src={images.chef} alt="chef"/>
    </div>

    <div className="app__wrapper_info">

      <SubHeading title="Chef’s Word" />
      <h1 className="headtext__cormorant">What we believe in</h1>

      <div className="chef-content">

        <div className="chef-content-quote">

          <img src={images.quote} alt="quote_image" />
          <p className="p__opensans" style={{ color: "#AAA" }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit auctor sit.</p>

        </div>

        <p className="p__opensans" style={{ color: "#AAA" }}>auctor sit iaculis in arcu. Vulputate nulla lobortis mauris eget sit. Nulla scelerisque scelerisque congue ac consequat, aliquam molestie lectus eu. Congue iaculis integer curabitur semper sit nunc.</p>

      </div>

      <div className="chef-sign">

        <p>Kevin Luo</p>
        <p className="p__opensans" style={{ color: "#AAA" }}>Chef & Founder</p>
        <img src={images.sign} alt="sign_image" />

      </div>

    </div>

    
  </div>
);

export default Chef;
