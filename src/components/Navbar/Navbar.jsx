import React from "react";
import "./navbar.scss";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="container">
        <div className="right">
          <span>HOME</span>
        </div>
        <div className="left">
          <span>MENU</span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
