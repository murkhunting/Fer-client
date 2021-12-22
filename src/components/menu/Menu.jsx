import React from "react";
import "./menu.scss";
import { IoClose } from "react-icons/io5";

const Menu = ({ show }) => {
  const menuClass = ["menu"];
  if (show) {
    menuClass.push("show");
  }
  return (
    <div className={menuClass.join(" ")}>
      <div className="menucontainer">
        <span>VIDEO PROJECTS</span>
        <span>PHOTO PROJECTS</span>
        <span>HOW I WOTK</span>
        <span>ABOUT</span>
        <span>CONTACT</span>
        <div onClick={!show}>
          <IoClose />
        </div>
      </div>
    </div>
  );
};

export default Menu;
