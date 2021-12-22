import React from "react";
import { useState } from "react";
import "./videoItem.scss";

const VideoItem = () => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div className="videoitem">
      <div
        className="videoname"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <span>FORMENTERA</span>
        {isHovered && (
          <>
            <h3>- View Details -</h3>
          </>
        )}
      </div>
      <div>
        {isHovered ? (
          <>
            <img
              className="blackwhite"
              src="https://quizizz.com/media/resource/gs/quizizz-media/quizzes/ecf6fa9d-2c3a-4445-81fc-0ab4c01d2ed6"
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

export default VideoItem;
