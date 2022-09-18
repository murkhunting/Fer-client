import React from "react";
import "./how.scss";
import fer from "../../assets/images/fer.png";

const How = () => {
  return (
    <div className="how">
      <div className="head">
        <div className="name">
          <h1>HOW I WORK</h1>
        </div>
        <img src={fer} alt="" />
      </div>
    </div>
  );
};

export default How;
