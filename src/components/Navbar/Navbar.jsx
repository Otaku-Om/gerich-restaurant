import React, { useState } from 'react';
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineRestaurantMenu } from "react-icons/md";
import { images } from '../../constants';
import './Navbar.css';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
  <nav className='navbar'>
    <div className="navbar-logo">
      <img src={images.gericht} alt="logo" />
    </div>
    <ul className="navbar-links">
      <li className='p__opensans'><a href="#home">Home</a></li>
      <li className='p__opensans'><a href="#about">About</a></li>
      <li className='p__opensans'><a href="#menu">Menu</a></li>
      <li className='p__opensans'><a href="#awards">Awards</a></li>
      <li className='p__opensans'><a href="#contact">Contact</a></li>
    </ul>
    <div className="navbar-buttons">
      <a href='#login' className='p__opensans'>Log In / Registration</a>
      <div />
      <a href='/' className='p__opensans'>book table</a>
    </div>
    <div className="navbar-menu">
      <GiHamburgerMenu color='#fff' size={27} onClick={() => setToggleMenu(true)} />
      
      {toggleMenu && (
        <div className="navbar-menu-container slide-bottom flex__center menu-overlay">
          <MdOutlineRestaurantMenu className='overlay-close' size={27} onClick={() => setToggleMenu(false)} />

          <ul className="navbar-menu-container-links">
            <li className='p__opensans'><a href="#home">Home</a></li>
            <li className='p__opensans'><a href="#about">About</a></li>
            <li className='p__opensans'><a href="#menu">Menu</a></li>
            <li className='p__opensans'><a href="#awards">Awards</a></li>
            <li className='p__opensans'><a href="#contact">Contact</a></li>
          </ul>
        </div>
      )}
    </div>
  </nav>
)}

export default Navbar;
