import React from "react";
import { useState } from "react";
import "./photoItem.scss";
import { Link } from "react-router-dom";

const PhotoItem = (photo) => {
  const [isHovered, setIsHovered] = useState(false);
  const { titulo, byn, gif, _id } = photo.photo;

  return (
    <div className="photoitem">
      <Link to={`/photos/${_id}`} className="photoname">
        <div
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
      </Link>
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
