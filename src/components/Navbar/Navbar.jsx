import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import "./navbar.scss";
import { IoClose } from "react-icons/io5";
import logo from "../../assets/images/logofer.png";

const Navbar = () => {
  const [menu, setMenu] = useState(false);

  const showMenu = () => setMenu(!menu);

  return (
    <div className="navbar">
      <div className="container">
        <div className="center">
          <Link to="/" className="link">
            <img src={logo} alt="" />
          </Link>
        </div>
        <div className="right">
          <div onClick={showMenu}>MENU</div>
        </div>
      </div>
      <div className={menu ? "menu active" : "menu"}>
        <div className="menucontainer">
          <Link to="/" className="link">
            <span onClick={showMenu}>HOME</span>
          </Link>
          <Link to="/videos" className="link">
            <span onClick={showMenu}>VIDEOS</span>
          </Link>
          <Link to="/photos" className="link">
            <span onClick={showMenu}>PHOTOS</span>
          </Link>
          <Link to="/how" className="link">
            <span onClick={showMenu}>HOW I WORK</span>
          </Link>
          <Link to="/contact" className="link">
            <span onClick={showMenu}>CONTACT</span>
          </Link>
          <div>
            <IoClose className="closeicon" onClick={showMenu} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
