import React from "react";
import { useState } from "react";
import "./videoItem.scss";

const VideoItem = (video) => {
  const [isHovered, setIsHovered] = useState(false);
  const { titulo, byn, gif } = video.video;
  return (
    <div className="videoitem">
      <div
        className="videoname"
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

export default VideoItem;
