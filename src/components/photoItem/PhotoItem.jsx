import React from "react";
import { useState } from "react";
import "./photoItem.scss";

const PhotoItem = (photo) => {
  const [isHovered, setIsHovered] = useState(false);
  const { titulo, byn, gif } = photo.photo;

  return (
    <div className="photoitem">
      <div
        className="photoname"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <span>{titulo}</span>
        {isHovered && (
          <>
            <h3>- View Project -</h3>
          </>
        )}
      </div>
      <div>
        {isHovered ? (
          <>
            <img className="blackwhite" src={gif} alt="" />
          </>
        ) : (
          <>
            <img className="blackwhite" src={byn} alt="" />
          </>
        )}
      </div>
    </div>
  );
};

export default PhotoItem;
