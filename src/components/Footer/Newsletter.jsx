import React from 'react';
import { SubHeading } from "../../components";

import './Newsletter.css';

const Newsletter = () => (
  <div className='newsletter'>
    <div className="newsletter-content">
      <SubHeading title="Newsletter" />
      <h1 className="headtext__cormorant">Subscribe to Our Newsletter</h1>
      <p className="p__opensans">And never miss latest Updates!</p>
    </div>
    <div className="newsletter-input flex__center">
      <input type="email" placeholder='Email Address' />
      <button type="button" className="custom__button">Subscribe</button>
    </div>
  </div>
  
);

export default Newsletter;
