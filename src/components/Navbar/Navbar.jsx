import React from "react";
import "./navbar.scss";
import { useState } from "react";

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
          <span>MENU</span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
