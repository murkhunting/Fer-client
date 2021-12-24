import React from "react";
import { useState } from "react";
import "./navbar.scss";
import { IoClose } from "react-icons/io5";
import logo from "../../assets/images/logofer.png";

const Navbar = () => {
  const [menu, setMenu] = useState(false);

  const showMenu = () => setMenu(!menu);

  return (
    <div className="navbar">
      <div className="container">
        <div className="right">
          <img src={logo} alt="" />
          {/* <span>HOME</span> */}
        </div>
        <div className="left">
          <div onClick={showMenu}>MENU</div>
        </div>
      </div>
      <div className={menu ? "menu active" : "menu"}>
        <div className="menucontainer">
          <span>VIDEOS</span>
          <span>PHOTOS</span>
          <span>HOW I WORK</span>
          <span>CONTACT</span>
          <div>
            <IoClose className="closeicon" onClick={showMenu} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
