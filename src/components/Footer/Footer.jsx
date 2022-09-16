import React from "react";
import "./footer.scss";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer">
      <div className="menu">
        <Link to="/videos" className="link">
          <h5>VIDEOS</h5>
        </Link>
        <Link to="/photos" className="link">
          <h5>PHOTOS</h5>
        </Link>
        <Link to="/architect" className="link">
          <h5>AIRCHITECTURE</h5>
        </Link>
        <Link to="/how" className="link">
          <h5>HOW I WORK</h5>
        </Link>
        <Link to="/info" className="link">
          <h5>INFO</h5>
        </Link>
        <Link to="/contact" className="link">
          <h5>CONTACT</h5>
        </Link>
      </div>
      <div className="social">
        <h5>Linkdin</h5>
        <h5>Facebook</h5>
        <h5>Instagram</h5>
        <h5>Youtube</h5>
        <h5>Vimeo</h5>
      </div>
      <div className="diseño">
        <h5>DESIGN & CODE BY MURKHUNTING</h5>
      </div>
    </div>
  );
};

export default Footer;
