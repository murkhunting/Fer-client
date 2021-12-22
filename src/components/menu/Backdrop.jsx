import React from "react";
import "./backdrop.scss";

const Backdrop = ({ show }) => {
  return show && <div className="backdrop"></div>;
};

export default Backdrop;
