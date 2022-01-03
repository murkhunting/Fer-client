import React from "react";
import { useState } from "react";
import "./item.scss";

const Item = (project) => {
  const [isHovered, setIsHovered] = useState(false);
  const { titulo, type, byn, gif } = project.project;
  return (
    <div
      className="item"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img className="blackwhite" src={byn} alt="" />
      {isHovered && (
        <>
          <div className="iteminfo">
            <h3>{titulo}</h3>
            <h5>- {type} project -</h5>
          </div>
          <img className="gif" src={gif} alt="" />
        </>
      )}
    </div>
  );
};

export default Item;
