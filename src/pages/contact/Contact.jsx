import React from "react";
import "./contact.scss";
import { HiArrowRight } from "react-icons/hi";
import { BsFacebook } from "react-icons/bs";
import { FaVimeo, FaYoutube } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import dronelogo from "../../assets/images/dronelogo.png";

const Contact = () => {
  return (
    <div className="contact">
      {/* <div className="name">
        <h1>FERNANDO MARÍ REBOLLO</h1>
        <h5>DRONE PILOT: VIDEO & PHOTOGRAPHY</h5>
      </div> */}
      <div className="container">
        <div className="left">
          <span>DO YOU HAVE A PROJECT IN MIND?</span>
          <span>LET'S TALK ABOUT IT. {<HiArrowRight />}</span>
        </div>
        <div className="right">
          <div className="drone">
            <div className="locations">
              <span>IBZ</span>
              <span>BCN</span>
            </div>
            <div className="droneicon">
              <img className="dronelogo" src={dronelogo} alt="" />
              <img
                className="dronegif"
                src="https://quizizz.com/media/resource/gs/quizizz-media/quizzes/ecf6fa9d-2c3a-4445-81fc-0ab4c01d2ed6"
                alt=""
              />
              <h5 className="dronemessage">LET'S DO IT!!</h5>
            </div>
          </div>
          <div className="info">
            <div className="touch">
              <span>GET IN TOUCH:</span>
              <h5>637998024</h5>
              <h5>fernandomarí@gmail.com</h5>
            </div>
            <div className="media">
              <span>SOCIAL MEDIA:</span>
              <div className="medialogos">
                <h5>
                  <RiInstagramFill />
                </h5>
                <h5>
                  <BsFacebook />
                </h5>
              </div>
              <div className="medialogos">
                <h5>
                  <FaYoutube />
                </h5>
                <h5>
                  <FaVimeo />
                </h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
