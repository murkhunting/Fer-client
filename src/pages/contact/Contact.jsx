import React from "react";
import "./contact.scss";
import { HiArrowRight } from "react-icons/hi";
import drone from "../../assets/images/drone.png";
import { MdOutlineMailOutline } from "react-icons/md";
import { FiSmartphone } from "react-icons/fi";
import { FiInstagram } from "react-icons/fi";
import { HiOutlineChatAlt } from "react-icons/hi";

const Contact = () => {
  return (
    <div className="contact">
      <div className="container">
        <div className="name">
          <h1>A PROJECT IN MIND?</h1>
          <h1>GET IN TOUCH {<HiArrowRight className="arrow" />}</h1>
          <img src={drone} alt="" />
        </div>
      </div>

      <div className="info">
        <div className="separador">
          <MdOutlineMailOutline className="iconos" />
          <h5>Fernando@gmail.com</h5>
        </div>
        <div className="separador">
          <FiSmartphone className="iconos" />
          <h5>690152846</h5>
        </div>
        <div className="separador">
          <FiInstagram className="iconos" />
          <h5>@fdo_mari</h5>
        </div>
        <div className="separador">
          <HiOutlineChatAlt className="iconos" />
          <h5>whatsapp chat</h5>
        </div>
      </div>
    </div>
  );
};

export default Contact;
