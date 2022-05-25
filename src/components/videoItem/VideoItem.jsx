import React from "react";
import { useState } from "react";
import "./videoItem.scss";
import { Link } from "react-router-dom";

const VideoItem = (video) => {
  const [isHovered, setIsHovered] = useState(false);
  const { titulo, byn, gif, _id } = video.video;

  return (
    <div className="videoitem">
      <Link to={`/videos/${_id}`} className="videoname">
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
            <img className="gif" src={gif} alt="" />
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
