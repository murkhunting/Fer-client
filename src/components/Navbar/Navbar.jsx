import React from "react";
import { useState } from "react";
import "./navbar.scss";
import { IoClose } from "react-icons/io5";

const Navbar = () => {
  const [menu, setMenu] = useState(false);

  const showMenu = () => setMenu(!menu);

  return (
    <div className="navbar">
      <div className="container">
        <div className="right">
          <span>HOME</span>
        </div>
        <div className="left">
          <div onClick={showMenu}>MENU</div>
        </div>
      </div>
      <div className={menu ? "menu active" : "menu"}>
        <div className="menucontainer">
          <span>VIDEO PROJECTS</span>
          <span>PHOTO PROJECTS</span>
          <span>HOW I WOTK</span>
          <span>ABOUT</span>
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
