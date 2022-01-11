import React from "react";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./navbar.scss";
import { IoClose } from "react-icons/io5";
import logo from "../../assets/images/logofer.png";

const Navbar = () => {
  const [menu, setMenu] = useState(false);
  const location = useLocation();
  console.log(location);

  const refresh = () => {
    if (location.pathname === "/") {
      window.location.reload(false);
    }
  };

  const showMenu = () => setMenu(!menu);

  return (
    <div>
      <div className="design">DESIGN & CODE BY: MURKHUNTING</div>
      <div className="navbar">
        <div className="container">
          <Link to="/contact" className="link">
            <div className="right">
              <div>CONTACT</div>
            </div>
          </Link>
          <div className="right">
            <div onClick={showMenu}>MENU</div>
          </div>
          <div className="center">
            <Link to="/" className="link">
              <img onClick={refresh} src={logo} alt="" />
            </Link>
          </div>
        </div>
        <div className={menu ? "menu active" : "menu"}>
          <div className="menucontainer">
            <Link to="/" className="link">
              <h1 onClick={showMenu}>HOME</h1>
            </Link>
            <Link to="/videos" className="link">
              <h1 onClick={showMenu}>VIDEOS</h1>
            </Link>
            <Link to="/photos" className="link">
              <h1 onClick={showMenu}>PHOTOS</h1>
            </Link>
            <Link to="/how" className="link">
              <h1 onClick={showMenu}>HOW I WORK</h1>
            </Link>
            <Link to="/contact" className="link">
              <h1 onClick={showMenu}>CONTACT</h1>
            </Link>
            <div>
              <IoClose className="closeicon" onClick={showMenu} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
