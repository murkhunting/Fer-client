import React from "react";
import { useState } from "react";
import "./item.scss";
import { Link } from "react-router-dom";

const Item = (project) => {
  const [isHovered, setIsHovered] = useState(false);
  const { titulo, type, byn, gif, _id } = project.project;
  return (
    <Link to={`${type}s/${_id}`} className="item">
      <div
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <img className="blackwhite" src={byn} alt="" />
        {isHovered && (
          <>
            <div className="iteminfo">
              <h3>{titulo}</h3>
              <h5> - {type} project -</h5>
            </div>
            <img className="gif" src={gif} alt="" />
          </>
        )}
      </div>
    </Link>
  );
};

export default Item;
