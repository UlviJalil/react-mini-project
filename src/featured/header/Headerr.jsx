import React, { useState } from 'react';
import './header.scss';
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { IoMoonOutline } from "react-icons/io5";
import { FaSearch } from "react-icons/fa";
import logo from '../../assets/images/techblog-logo-dark@2x.webp'
import sidecard1 from '../../assets/images/side-card-1.jpg'







const Header = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      <navbar>
        <div className='nav-container'>
          <a href='#' className='burger' onClick={toggleSidebar}><GiHamburgerMenu /></a>
          <img src="https://smartmag.theme-sphere.com/tech-blog/wp-content/uploads/sites/35/2022/11/1techblog-logo.png" alt="nav-logo" />
          <ul>
            <a href="#">Home</a>
            <a href="#">Features <MdOutlineKeyboardArrowDown /></a>
            <a href="#">Technology <MdOutlineKeyboardArrowDown /></a>
            <a href="#">Gadgets</a>
            <a href="#">Phones <MdOutlineKeyboardArrowDown /></a>
            <a href="#">Buy Theme</a>
          </ul>

          <div className="right-nav">
            <button>Subscribe</button>
            <IoMoonOutline />
            <FaSearch />
          </div>
        </div>
      </navbar>


      <div className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>
        <div className="sidebar-content">
          <button onClick={toggleSidebar} className="close-btn">X</button>
          <img src={logo} alt="" />

        </div>

        <div className="subscribe">
          <div className="subscribe-content">
            <h2>Subscribe to <br /> Updates</h2>
            <p>Get the latest creative news from <br /> FooBar about art, design and <br /> business.</p>
            <input className='itext' type="email" placeholder='Your email address..' required />
            <button>SUBSCRIBE</button> <br />
            <p> <input className='check' type="checkbox" />By signing up, you agree to the our terms and our Privacy Policy <br /> agreement.</p>
          </div>
        </div>

        <h2>What's Hot</h2>
        <div className="side-cards-wrapper">
          <div className="side-card">
            <img src={sidecard1} alt="side-card-1" width={100} />
            <div className="side-card-content">
            <h2>Game Development This <br /> Week: Save On Essential <br /> Tools and More</h2>
            <p>Nov 19,2022</p>
            </div>
            
          </div>
          
        </div>
      </div>


      {isSidebarOpen && (
        <div
          className="overlay"
          onClick={toggleSidebar}
        ></div>
      )}
    </>
  );
}

export default Header;
