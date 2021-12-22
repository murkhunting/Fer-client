import React from "react";
import { useState } from "react";
import "./item.scss";

const Item = () => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div
      className="item"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img
        className="blackwhite"
        src="https://images.unsplash.com/photo-1621966265300-b11729de08d8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDExfHx8ZW58MHx8fHw%3D&w=1000&q=80"
        alt=""
      />
      {isHovered && (
        <>
          <div className="iteminfo">
            <h3>FORMENTERA</h3>
            <h5>- Video Project -</h5>
          </div>
          <img
            className="gif"
            src="https://quizizz.com/media/resource/gs/quizizz-media/quizzes/ecf6fa9d-2c3a-4445-81fc-0ab4c01d2ed6"
            alt=""
          />
        </>
      )}
    </div>
  );
};

export default Item;
