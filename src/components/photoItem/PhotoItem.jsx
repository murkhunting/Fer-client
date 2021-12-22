import React from "react";
import { useState } from "react";
import "./photoItem.scss";

const PhotoItem = () => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div className="photoitem">
      <div
        className="photoname"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <span>FORMENTERA</span>
        {isHovered && (
          <>
            <h3>- View Project -</h3>
          </>
        )}
      </div>
      <div>
        {isHovered ? (
          <>
            <img
              className="blackwhite"
              src="https://cdn.britannica.com/10/152310-050-5A09D74A/Sand-dunes-Sahara-Morocco-Merzouga.jpg"
              alt=""
            />
          </>
        ) : (
          <>
            <img
              className="blackwhite"
              src="https://images.unsplash.com/photo-1621966265300-b11729de08d8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDExfHx8ZW58MHx8fHw%3D&w=1000&q=80"
              alt=""
            />
          </>
        )}
      </div>
    </div>
  );
};

export default PhotoItem;
