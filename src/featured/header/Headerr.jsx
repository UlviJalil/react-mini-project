import React, { useState } from 'react';
import './header.scss';
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { IoMoonOutline } from "react-icons/io5";
import { FaSearch } from "react-icons/fa";

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
          <img src="https://smartmag.theme-sphere.com/tech-blog/wp-content/uploads/sites/35/2022/11/1techblog-logo.png" alt="" />
          <ul>
            <a href="">Home</a>
            <a href="">Features <MdOutlineKeyboardArrowDown /></a>
            <a href="">Technology <MdOutlineKeyboardArrowDown /></a>
            <a href="">Gadgets</a>
            <a href="">Phones <MdOutlineKeyboardArrowDown /></a>
            <a href="">Buy Theme</a>
          </ul>

          <div className="right-nav">
            <button>Subscribe</button>
            <IoMoonOutline />
            <FaSearch />
          </div>
        </div>
      </navbar>

      {/* Sidebar */}
      <div className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>
        <div className="sidebar-content">
          <button onClick={toggleSidebar} className="close-btn">X</button>
          <ul>
            <a href="#">Dashboard</a>
            <a href="#">E-commerce <MdOutlineKeyboardArrowDown /></a>
            <a href="#">Kanban <MdOutlineKeyboardArrowDown /></a>
            <a href="#">Inbox</a>
            <a href="#">Products <MdOutlineKeyboardArrowDown /></a>
            <a href="#">Buy Theme</a>
            <a href="#">Buy 2</a>

          </ul>
        </div>
      </div>

      {/* Overlay */}
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
