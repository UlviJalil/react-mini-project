import React, { useState } from 'react';
import './header.scss';
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMoonOutline } from "react-icons/io5";
import { FaSearch } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import logo from '../../assets/images/techblog-logo-dark@2x.webp'
import sidecard1 from '../../assets/images/side-card-1.jpg'
import sidecard2 from '../../assets/images/card 2.webp'
import sidecard3 from '../../assets/images/card 3.webp'
import { MdKeyboardArrowDown } from "react-icons/md";








const Header = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div>
      <navbar>
        <div className='nav-container'>
          <a href='#' className='burger' onClick={toggleSidebar}><GiHamburgerMenu /></a>
          <img src="https://smartmag.theme-sphere.com/tech-blog/wp-content/uploads/sites/35/2022/11/1techblog-logo.png" alt="nav-logo" />
          <ul>
            <li>Home</li>
            <li>Features  <MdKeyboardArrowDown className='arrow' /></li>
            <li>Technology  <MdKeyboardArrowDown className='arrow' /></li>
            <li>Gadgets</li>
            <li>Phones  <MdKeyboardArrowDown className='arrow' /></li> 
            <li>Buy Theme</li>
          </ul>

          <div className="right-nav">
            <button>SUBSCRIBE</button>
            <IoMoonOutline />
            <FaSearch />
          </div>
        </div>
      </navbar>

{/* End Of Navbar */}

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

        <div className="side-cards-wrapper">
          <h2 className='h2'>WHAT'S HOT</h2>
          <div className="side-card">
            <img src={sidecard1} alt="side-card-1" />
            <div className="side-card-content">
              <h2>Game Development This <br /> Week: Save On Essential <br /> Tools and More</h2>
              <p>Nov 19, 2022</p>
            </div>
          </div>
          <hr className='w-72	 m-auto ' />
          <div className="side-card">
            <img src={sidecard2} alt="side-card-2" />
            <div className="side-card-content">
              <h2>Is the Hyperloop Doomed? <br /> What Elon Musk’s Latest <br /> Setback Really Means</h2>
              <p>Mar 10, 2022</p>
            </div>
          </div>
          <hr className='w-72	 m-auto my-1.5		  ' />
          <div className="side-card">
            <img src={sidecard3} alt="side-card-1" />
            <div className="side-card-content">
              <h2>The Best Early Black Friday <br /> Deals on Gaming Laptops <br /> and Accessories</h2>
              <p>Mar 10, 2022</p>
            </div>
          </div>


        </div>
        <div className="side-social-icons">
          <button><FaFacebookF /></button>
          <button><FaXTwitter /></button>
          <button><FaInstagram /></button>
        </div>
      </div>


      {isSidebarOpen && (
        <div
          className="overlay"
          onClick={toggleSidebar}
        ></div>
      )}
    </div>

    // End Of Sidebar
  );
}

export default Header
