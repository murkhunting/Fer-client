import React from "react";
import "./videoList.scss";
import VideoItem from "../../components/videoItem/VideoItem";

const VideoList = () => {
  return (
    <div className="videolist">
      <div className="videos">
        <h1>FERNANDO MARÍ REBOLLO</h1>
        <h5>- VIDEO PROJECTS -</h5>
      </div>
      <div className="container">
        <VideoItem />
        <VideoItem />
        <VideoItem />
        <VideoItem />
        <VideoItem />
        <VideoItem />
        <VideoItem />
        <VideoItem />
        <VideoItem />
      </div>
    </div>
  );
};

export default VideoList;
