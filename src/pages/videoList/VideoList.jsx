import React from "react";
import "./videoList.scss";
import VideoItem from "../../components/videoItem/VideoItem";
import { useState, useEffect } from "react";
import axios from "axios";

const VideoList = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const getAllVideos = async () => {
      try {
        const res = await axios.get("http://localhost:8800/api/project/videos");
        setVideos(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getAllVideos();
  }, []);
  console.log(videos)
  return (
    <div className="videolist">
      <div className="videos">
        <h1>VIDEO PROJECTS</h1>
      </div>
      <div className="container">
      {videos.map((video) => (
          <VideoItem key={video._id} video={video} />
        ))}
      </div>
    </div>
  );
};

export default VideoList;
