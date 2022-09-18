import React from "react";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./navbar.scss";
import { IoCloseSharp } from "react-icons/io5";
import {
  AiFillLinkedin,
  AiFillFacebook,
  AiFillInstagram,
  AiFillYoutube,
} from "react-icons/ai";
import { FaVimeo } from "react-icons/fa";
import logo from "../../assets/images/logoprueba6.png";

const Navbar = () => {
  const [menu, setMenu] = useState(false);
  const location = useLocation();

  const refresh = () => {
    if (location.pathname === "/") {
      window.location.reload(false);
    }
  };

  const showMenu = () => setMenu(!menu);

  return (
    <div>
      <div className="navbar">
        <div className="container">
          <div className="center">
            <Link to="/" className="link">
              <img onClick={refresh} src={logo} alt="" />
            </Link>
          </div>
          <div className="right">
            {/* <img onClick={showMenu} src={burger} alt="" /> */}
            <h5 onClick={showMenu}>MENU</h5>
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
              <h1 onClick={showMenu}>PHOTO</h1>
            </Link>
            <Link to="/architect" className="link">
              <h1 onClick={showMenu}>AIRCHITECTURE</h1>
            </Link>
            <Link to="/how" className="link">
              <h1 onClick={showMenu}>HOW I WORK</h1>
            </Link>
            <Link to="/info" className="link">
              <h1 onClick={showMenu}>INFO</h1>
            </Link>
            <Link to="/contact" className="link">
              <h1 onClick={showMenu}>CONTACT</h1>
            </Link>
            <div className="social">
              <h5 className="">
                <AiFillLinkedin />
              </h5>
              <h5>
                <AiFillFacebook />
              </h5>
              <h5>
                <AiFillInstagram />
              </h5>
              <h5>
                <AiFillYoutube />
              </h5>
              <h5>
                <FaVimeo />
              </h5>
            </div>

            <div>
              <IoCloseSharp className="closeicon" onClick={showMenu} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
