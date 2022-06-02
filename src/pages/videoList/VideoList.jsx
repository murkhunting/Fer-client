import React from "react";
import "./videoList.scss";
import VideoItem from "../../components/videoItem/VideoItem";
import { useState, useEffect, useRef } from "react";
import axios from "axios";
import useScrollSnap from 'react-use-scroll-snap';


const VideoList = () => {
  const [videos, setVideos] = useState([]);

  // const scrollRef = useRef(null);

  // useScrollSnap({ ref: scrollRef, duration: 0, delay: 0 });


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

  return (
    <div className="videolist">
      <h1>VIDEO PROJECTS LIST</h1>
      <h3>Drone </h3>
        
      <div className="container" >
          {videos.map((video) => (
            <VideoItem  key={video._id} video={video} />
            ))}
      </div>
        
    </div>
  );
};

export default VideoList;
